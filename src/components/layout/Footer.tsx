import { Camera, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-[#11120f] text-white">
      <div className="section-shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.7fr_1fr] lg:py-20">
        <div><a href="#inicio" className="font-display text-4xl tracking-[0.14em]">NOBILE</a><p className="mt-2 text-[0.58rem] uppercase tracking-[0.3em] text-gold">Alta Sastrería</p><p className="mt-6 max-w-xs text-sm leading-7 text-white/50">El arte de vestir bien, creado con paciencia, precisión y una atención profundamente personal.</p></div>
        <div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Explora</h3><div className="mt-5 space-y-3 text-sm text-white/60"><a className="block hover:text-white" href="#colecciones">Colecciones</a><a className="block hover:text-white" href="#proceso">Cómo funciona</a><a className="block hover:text-white" href="#lookbook">Lookbook</a></div></div>
        <div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">NOBILE</h3><div className="mt-5 space-y-3 text-sm text-white/60"><a className="block hover:text-white" href="#nosotros">Nuestra historia</a><a className="block hover:text-white" href="#faq">Preguntas frecuentes</a><a className="block hover:text-white" href="#contacto">Contacto</a></div></div>
        <div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Conversemos</h3><p className="mt-5 text-sm leading-6 text-white/60">Av. Conquistadores 645<br />San Isidro, Lima</p><div className="mt-6 flex gap-3"><a href={whatsappUrl("Hola, deseo información sobre NOBILE.")} aria-label="WhatsApp" className="grid size-11 place-items-center border border-white/20 transition hover:border-gold hover:text-gold"><MessageCircle size={17} /></a><a href="#" aria-label="Instagram" className="grid size-11 place-items-center border border-white/20 transition hover:border-gold hover:text-gold"><Camera size={17} /></a></div></div>
      </div>
      <div className="section-shell"><div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[0.62rem] uppercase tracking-widest text-white/35 sm:flex-row sm:justify-between"><p>© 2026 NOBILE — Alta Sastrería</p><p>Hecho en Lima, Perú</p></div></div>
    </footer>
  );
}
