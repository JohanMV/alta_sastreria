import { useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui";
import { useDialogFocus } from "@/hooks";
import { useCartStore } from "../hooks/useCartStore";
import { openWhatsAppOrder } from "../services/whatsapp";

const formatDate = (value: string): string => value.split("-").reverse().join("/");

export function CartDrawer() {
  const { items, isOpen, setOpen, removeItem, changeQuantity } = useCartStore();
  const reduced = useReducedMotion();
  const total = items.reduce((sum, item) => sum + (item.price ?? 0) * item.quantity, 0);
  const pendingQuotes = items.filter((item) => item.service === "medida").length;
  const closeCart = () => setOpen(false);
  const getCartTrigger = useCallback(() => document.querySelector<HTMLElement>('[aria-label^="Abrir carrito"]'), []);
  const focusCartTrigger = useCallback(() => getCartTrigger()?.focus(), [getCartTrigger]);
  const dialogRef = useDialogFocus<HTMLElement>(isOpen, closeCart, getCartTrigger);

  return (
    <AnimatePresence onExitComplete={focusCartTrigger}>
      {isOpen && (
        <motion.div data-modal="open" className="fixed inset-0 z-[90] bg-ink/55 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={closeCart}>
          <motion.aside
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            onMouseDown={(event) => event.stopPropagation()}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory-light shadow-editorial"
            initial={reduced ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4 sm:px-7 sm:py-5">
              <div className="flex items-center gap-3"><ShoppingBag size={18} /><h2 id="cart-title" className="font-display text-2xl">Tu selección</h2><span className="text-xs text-ink-soft/75">({items.length})</span></div>
              <button onClick={closeCart} className="grid size-11 place-items-center hover:text-gold" aria-label="Cerrar carrito"><X size={19} /></button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
              {!items.length ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <ShoppingBag size={32} className="mx-auto text-gold" strokeWidth={1} />
                    <p className="mt-5 font-display text-3xl">Tu selección espera</p>
                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-ink-soft/75">Explora la colección y elige una pieza para personalizarla.</p>
                    <Button variant="outline" className="mt-6" onClick={() => { closeCart(); document.querySelector("#colecciones")?.scrollIntoView(); }}>Ver colección</Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <article key={item.id} className="grid grid-cols-[78px_1fr] gap-4 border-b border-ink/10 pb-6">
                      <img src={item.image} alt="" className="h-24 w-full object-cover" />
                      <div className="min-w-0">
                        <div className="flex justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="font-display text-xl">{item.name}</h3>
                            <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-ink-soft/75">
                              {item.service === "medida"
                                ? `A medida · Cita preferida: ${item.appointmentDate ? formatDate(item.appointmentDate) : "Por coordinar"}`
                                : `${item.service} · Talla ${item.size}${item.date ? ` · ${formatDate(item.date)}` : ""}`}
                            </p>
                          </div>
                          <button onClick={() => removeItem(item.id)} aria-label={`Eliminar ${item.name}`} className="grid size-11 shrink-0 place-items-center self-start text-ink-soft/70 transition hover:text-red-700"><Trash2 size={17} /></button>
                        </div>
                        <div className={`mt-3 flex items-center gap-3 ${item.service === "medida" ? "justify-end" : "justify-between"}`}>
                          {item.service !== "medida" && (
                            <div className="flex items-center border border-ink/20">
                              <button className="grid size-11 place-items-center" onClick={() => changeQuantity(item.id, -1)} aria-label="Reducir cantidad"><Minus size={14} /></button>
                              <span className="w-8 text-center text-xs" aria-live="polite">{item.quantity}</span>
                              <button className="grid size-11 place-items-center" onClick={() => changeQuantity(item.id, 1)} aria-label="Aumentar cantidad"><Plus size={14} /></button>
                            </div>
                          )}
                          <p className="whitespace-nowrap text-sm">{item.service === "medida" ? "Precio por cotizar" : `S/ ${((item.price ?? 0) * item.quantity).toLocaleString("es-PE")}`}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-ink/10 bg-ivory px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 sm:px-7">
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-ink-soft/75">{pendingQuotes > 0 ? "Subtotal de productos definidos" : "Total estimado"}</p>
                    <p className="mt-1 text-xs text-ink-soft/75">{pendingQuotes > 0 ? `Solicitudes pendientes de cotización: ${pendingQuotes}` : "La disponibilidad se confirma por WhatsApp"}</p>
                  </div>
                  <p className="whitespace-nowrap font-display text-3xl">{total > 0 ? `S/ ${total.toLocaleString("es-PE")}` : "Por cotizar"}</p>
                </div>
                <Button variant="gold" full onClick={() => openWhatsAppOrder(items)}>{pendingQuotes > 0 ? "Enviar selección por WhatsApp" : "Finalizar pedido por WhatsApp"}</Button>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
