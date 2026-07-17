import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CalendarDays, Check, X } from "lucide-react";
import { Button } from "@/components/ui";
import { useCartStore } from "@/features/cart";
import type { Product, ServiceType } from "@/types";

interface ProductModalProps { product: Product | null; onClose: () => void; }

export function ProductModal({ product, onClose }: ProductModalProps) {
  const reduced = useReducedMotion();
  const addItem = useCartStore((state) => state.addItem);
  const [size, setSize] = useState("");
  const [service, setService] = useState<ServiceType>("venta");
  const [date, setDate] = useState("");
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!product) return;
    setSize(product.sizes[0]);
    setService(product.services[0]);
    setDate(""); setActiveImage(0);
  }, [product]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  if (!product) return null;
  const price = service === "alquiler" ? product.rentalPrice ?? product.price : product.price;
  const canAdd = Boolean(size && (service === "venta" || date));

  return (
    <AnimatePresence>
      <motion.div data-modal="open" className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/65 p-0 backdrop-blur-sm sm:items-center sm:p-6" onMouseDown={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div role="dialog" aria-modal="true" aria-labelledby="product-title" onMouseDown={(event) => event.stopPropagation()} className="relative grid max-h-[94vh] w-full max-w-5xl overflow-y-auto bg-ivory-light shadow-editorial lg:grid-cols-[1.05fr_.95fr]" initial={reduced ? false : { y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.35 }}>
          <button onClick={onClose} className="absolute right-4 top-4 z-10 grid size-11 place-items-center bg-ivory-light text-ink transition hover:bg-gold hover:text-white" aria-label="Cerrar ficha"><X size={19} /></button>
          <div className="relative min-h-[360px] bg-ink sm:min-h-[520px]">
            <img src={product.gallery[activeImage]} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 flex gap-2">
              {product.gallery.map((image, index) => <button key={image} onClick={() => setActiveImage(index)} aria-label={`Ver imagen ${index + 1}`} className={`size-16 overflow-hidden border-2 ${activeImage === index ? "border-gold" : "border-white/60"}`}><img src={image} alt="" className="h-full w-full object-cover" /></button>)}
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <p className="eyebrow">{product.category} · {product.badge}</p>
            <h2 id="product-title" className="mt-4 font-display text-4xl sm:text-5xl">{product.name}</h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft/70">{product.description}</p>
            <p className="mt-6 text-xl font-medium">S/ {price.toLocaleString("es-PE")} <span className="text-xs font-normal text-ink-soft/55">{service === "alquiler" ? "por alquiler" : "desde"}</span></p>
            <fieldset className="mt-8"><legend className="mb-3 text-xs font-semibold uppercase tracking-widest">Servicio</legend><div className="flex gap-2">{product.services.map((value) => <button key={value} onClick={() => setService(value)} className={`min-w-28 border px-4 py-3 text-xs uppercase tracking-wider transition ${service === value ? "border-ink bg-ink text-white" : "border-ink/20 hover:border-gold"}`}>{service === value && <Check size={13} className="mr-2 inline" />}{value}</button>)}</div></fieldset>
            <fieldset className="mt-6"><legend className="mb-3 text-xs font-semibold uppercase tracking-widest">Talla</legend><div className="flex flex-wrap gap-2">{product.sizes.map((value) => <button key={value} onClick={() => setSize(value)} className={`grid size-11 place-items-center border text-xs transition ${size === value ? "border-ink bg-ink text-white" : "border-ink/20 hover:border-gold"}`}>{value}</button>)}</div></fieldset>
            {service === "alquiler" && <label className="mt-6 text-xs font-semibold uppercase tracking-widest">Fecha del evento<div className="relative mt-3"><CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={18} /><input type="date" required min={new Date().toISOString().split("T")[0]} value={date} onChange={(event) => setDate(event.target.value)} className="h-12 w-full border border-ink/20 bg-transparent pl-12 pr-3 text-sm" /></div></label>}
            <Button full className="mt-8" disabled={!canAdd} onClick={() => { addItem({ productId: product.id, name: product.name, service, size, date: service === "alquiler" ? date : undefined, quantity: 1, price, image: product.image }); onClose(); }}>Agregar al carrito</Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
