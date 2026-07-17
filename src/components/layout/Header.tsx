import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, MessageCircle, ShoppingBag, X } from "lucide-react";
import { useCartStore } from "@/features/cart";
import { whatsappUrl } from "@/lib/config";

const nav = [
  ["Inicio", "#inicio"], ["Colecciones", "#colecciones"], ["Alquiler", "#colecciones"],
  ["Venta", "#colecciones"], ["Nosotros", "#nosotros"], ["Contacto", "#contacto"],
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();
  const { items, setOpen } = useCartStore();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${scrolled || menuOpen ? "glass-nav border-b border-ink/10 text-ink" : "text-white"}`}>
      <div className="section-shell flex h-[72px] items-center justify-between lg:h-[86px]">
        <a href="#inicio" className="relative z-10 flex flex-col" aria-label="NOBILE, ir al inicio"><span className="font-display text-[1.65rem] leading-none tracking-[0.16em]">NOBILE</span><span className="mt-1 text-[0.48rem] font-medium uppercase tracking-[0.34em] text-gold">Alta Sastrería</span></a>
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Navegación principal">{nav.map(([label, href]) => <a key={label} href={href} className="text-[0.68rem] font-medium uppercase tracking-[0.13em] transition hover:text-gold">{label}</a>)}</nav>
        <div className="flex items-center gap-1 sm:gap-3">
          <a href={whatsappUrl("Hola, deseo agendar una cita en NOBILE Alta Sastrería.")} target="_blank" rel="noreferrer" className="hidden min-h-11 items-center gap-2 border border-current px-4 text-[0.62rem] font-semibold uppercase tracking-widest transition hover:border-gold hover:bg-gold hover:text-white sm:flex"><MessageCircle size={15} /> Agendar cita</a>
          <button onClick={() => setOpen(true)} className="relative grid size-11 place-items-center transition hover:text-gold" aria-label={`Abrir carrito con ${count} productos`}><ShoppingBag size={19} />{count > 0 && <span className="absolute right-0 top-0 grid size-5 place-items-center rounded-full bg-gold text-[0.58rem] text-white">{count}</span>}</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="relative z-10 grid size-11 place-items-center xl:hidden" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
      <AnimatePresence>{menuOpen && <motion.nav initial={reduced ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="border-t border-ink/10 bg-ivory-light px-5 pb-8 pt-4 text-ink xl:hidden" aria-label="Navegación móvil">{nav.map(([label, href], index) => <motion.a key={label} initial={reduced ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }} href={href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-ink/10 py-4 font-display text-2xl"><span>{label}</span><span className="text-xs text-gold">0{index + 1}</span></motion.a>)}<a href={whatsappUrl("Hola, deseo agendar una cita en NOBILE Alta Sastrería.")} className="mt-6 flex min-h-12 items-center justify-center gap-2 bg-ink text-xs uppercase tracking-widest text-white"><MessageCircle size={16} /> Agendar por WhatsApp</a></motion.nav>}</AnimatePresence>
    </header>
  );
}
