import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CalendarDays, Check, X } from "lucide-react";
import { Button, ProductFrame } from "@/components/ui";
import { useCartStore } from "@/features/cart";
import { useDialogFocus } from "@/hooks";
import type { Product, ServiceType } from "@/types";

interface ProductModalProps { product: Product | null; onClose: () => void; }

export function ProductModal({ product, onClose }: ProductModalProps) {
  const reduced = useReducedMotion();
  const addItem = useCartStore((state) => state.addItem);
  const [size, setSize] = useState("");
  const [service, setService] = useState<ServiceType>("venta");
  const [date, setDate] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const dialogRef = useDialogFocus<HTMLDivElement>(Boolean(product), onClose);

  useEffect(() => {
    if (!product) return;
    setSize(product.sizes[0]);
    setService(product.services[0]);
    setDate("");
    setActiveImage(0);
  }, [product]);

  if (!product) return null;
  const price = service === "alquiler" ? product.rentalPrice ?? product.price : product.price;
  const canAdd = Boolean(size && (service === "venta" || date));

  return (
    <AnimatePresence>
      <motion.div data-modal="open" className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/65 p-0 backdrop-blur-sm sm:items-center sm:p-6" onMouseDown={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-title"
          aria-describedby="product-description"
          onMouseDown={(event) => event.stopPropagation()}
          className="relative grid max-h-[100svh] w-full max-w-5xl overflow-y-auto bg-ivory-light shadow-editorial sm:max-h-[94vh] lg:grid-cols-[1.05fr_.95fr]"
          initial={reduced ? false : { y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <button onClick={onClose} className="absolute right-3 top-3 z-20 grid size-11 place-items-center bg-ivory-light text-ink transition hover:bg-gold hover:text-white sm:right-4 sm:top-4" aria-label="Cerrar ficha"><X size={19} /></button>
          <div className="relative h-[32svh] min-h-60 max-h-[340px] bg-ivory sm:h-auto sm:min-h-[460px] sm:max-h-none lg:min-h-[620px]">
            <ProductFrame image={product.gallery[activeImage]} className="absolute inset-0" />
            <div className="absolute bottom-3 left-3 flex gap-2 sm:bottom-4 sm:left-4">
              {product.gallery.map((image, index) => (
                <button key={image.src} onClick={() => setActiveImage(index)} aria-label={`Ver imagen ${index + 1} de ${product.name}`} aria-pressed={activeImage === index} className={`size-12 overflow-hidden border-2 bg-ivory sm:size-16 ${activeImage === index ? "border-gold" : "border-white/80"}`}>
                  <ProductFrame image={image} decorative className="relative h-full w-full" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
            <p className="eyebrow">{product.category} · {product.badge}</p>
            <h2 id="product-title" className="mt-3 font-display text-4xl sm:mt-4 sm:text-5xl">{product.name}</h2>
            <p id="product-description" className="mt-4 text-sm leading-6 text-ink-soft/80 sm:mt-5 sm:leading-7">{product.description}</p>
            <div className="mt-5 border-y border-ink/10 py-4 sm:mt-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-ink-soft/75">{service === "alquiler" ? "Alquiler desde" : "Venta desde"}</p>
              <p className="mt-1 font-display text-3xl">S/ {price.toLocaleString("es-PE")}</p>
              {product.rentalPrice && <p className="mt-1 text-xs text-ink-soft/75">Venta S/ {product.price.toLocaleString("es-PE")} · Alquiler S/ {product.rentalPrice.toLocaleString("es-PE")}</p>}
            </div>

            <fieldset className="mt-6">
              <legend className="mb-3 text-xs font-semibold uppercase tracking-widest">Servicio</legend>
              <div className="flex gap-2">
                {product.services.map((value) => (
                  <button key={value} onClick={() => setService(value)} className={`min-h-11 min-w-28 border px-4 py-3 text-xs uppercase tracking-wider transition ${service === value ? "border-ink bg-ink text-white" : "border-ink/25 hover:border-gold"}`}>
                    {service === value && <Check size={13} className="mr-2 inline" />}{value}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-5">
              <legend className="mb-3 text-xs font-semibold uppercase tracking-widest">Talla</legend>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((value) => <button key={value} onClick={() => setSize(value)} className={`grid size-11 place-items-center border text-xs transition ${size === value ? "border-ink bg-ink text-white" : "border-ink/25 hover:border-gold"}`}>{value}</button>)}
              </div>
            </fieldset>

            {service === "alquiler" && (
              <label className="mt-5 text-xs font-semibold uppercase tracking-widest">
                Fecha del evento
                <span className="relative mt-3 block">
                  <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={18} />
                  <input type="date" required min={new Date().toISOString().split("T")[0]} value={date} onChange={(event) => setDate(event.target.value)} className="h-12 w-full border border-ink/25 bg-transparent pl-12 pr-3 text-sm" />
                </span>
              </label>
            )}

            <div className="sticky bottom-0 z-10 -mx-5 -mb-5 mt-6 border-t border-ink/10 bg-ivory-light/95 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur sm:-mx-8 sm:-mb-8 sm:px-8 sm:pb-8 lg:static lg:mx-0 lg:mb-0 lg:border-0 lg:bg-transparent lg:px-0 lg:pb-0 lg:pt-0">
              <Button full disabled={!canAdd} onClick={() => {
                addItem({ productId: product.id, name: product.name, service, size, date: service === "alquiler" ? date : undefined, quantity: 1, price, image: product.image });
                onClose();
              }}>Agregar al carrito</Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
