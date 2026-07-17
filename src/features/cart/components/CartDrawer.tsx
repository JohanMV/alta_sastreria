import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui";
import { useCartStore } from "../hooks/useCartStore";
import { openWhatsAppOrder } from "../services/whatsapp";

export function CartDrawer() {
  const { items, isOpen, setOpen, removeItem, changeQuantity } = useCartStore();
  const reduced = useReducedMotion();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div data-modal="open" className="fixed inset-0 z-[90] bg-ink/55 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setOpen(false)}>
          <motion.aside role="dialog" aria-modal="true" aria-labelledby="cart-title" onMouseDown={(event) => event.stopPropagation()} className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory-light shadow-editorial" initial={reduced ? false : { x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-5 sm:px-7"><div className="flex items-center gap-3"><ShoppingBag size={18} /><h2 id="cart-title" className="font-display text-2xl">Tu selección</h2><span className="text-xs text-ink-soft/50">({items.length})</span></div><button onClick={() => setOpen(false)} className="grid size-10 place-items-center hover:text-gold" aria-label="Cerrar carrito"><X size={19} /></button></div>
            <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
              {!items.length ? <div className="grid h-full place-items-center text-center"><div><ShoppingBag size={32} className="mx-auto text-gold" strokeWidth={1} /><p className="mt-5 font-display text-3xl">Tu selección espera</p><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-ink-soft/60">Explora la colección y elige una pieza para personalizarla.</p><Button variant="outline" className="mt-6" onClick={() => { setOpen(false); document.querySelector("#colecciones")?.scrollIntoView(); }}>Ver colección</Button></div></div> : <div className="space-y-6">{items.map((item) => <article key={item.id} className="grid grid-cols-[78px_1fr] gap-4 border-b border-ink/10 pb-6"><img src={item.image} alt="" className="h-24 w-full object-cover" /><div><div className="flex justify-between gap-3"><div><h3 className="font-display text-xl">{item.name}</h3><p className="mt-1 text-[0.65rem] uppercase tracking-wider text-ink-soft/55">{item.service} · Talla {item.size}{item.date ? ` · ${item.date}` : ""}</p></div><button onClick={() => removeItem(item.id)} aria-label={`Eliminar ${item.name}`} className="self-start text-ink-soft/40 transition hover:text-red-700"><Trash2 size={15} /></button></div><div className="mt-4 flex items-center justify-between"><div className="flex items-center border border-ink/15"><button className="grid size-8 place-items-center" onClick={() => changeQuantity(item.id, -1)} aria-label="Reducir cantidad"><Minus size={13} /></button><span className="w-7 text-center text-xs">{item.quantity}</span><button className="grid size-8 place-items-center" onClick={() => changeQuantity(item.id, 1)} aria-label="Aumentar cantidad"><Plus size={13} /></button></div><p className="text-sm">S/ {(item.price * item.quantity).toLocaleString("es-PE")}</p></div></div></article>)}</div>}
            </div>
            {items.length > 0 && <div className="border-t border-ink/10 bg-ivory px-5 py-6 sm:px-7"><div className="mb-5 flex items-end justify-between"><div><p className="text-[0.65rem] uppercase tracking-widest text-ink-soft/50">Total estimado</p><p className="mt-1 text-xs text-ink-soft/55">La disponibilidad se confirma por WhatsApp</p></div><p className="font-display text-3xl">S/ {total.toLocaleString("es-PE")}</p></div><Button variant="gold" full onClick={() => openWhatsAppOrder(items)}>Finalizar pedido por WhatsApp</Button></div>}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
