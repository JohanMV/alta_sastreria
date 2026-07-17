import { Scissors, ShieldCheck, Sparkles, TimerReset } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui";

const services = [
  { icon: Scissors, title: "Venta a medida", text: "Patronaje personal, telas selectas y un calce construido alrededor de ti." },
  { icon: TimerReset, title: "Alquiler de ternos", text: "Elegancia impecable, ajustes incluidos y entrega lista para tu evento." },
  { icon: Sparkles, title: "Novias y ceremonia", text: "Siluetas memorables para novias, damas y celebraciones especiales." },
  { icon: ShieldCheck, title: "Confección de vestidos", text: "Diseño, pruebas y acabados artesanales con acompañamiento cercano." },
];

export function Story() {
  return (
    <section id="nosotros" className="overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
        <Reveal className="relative"><div className="ml-auto aspect-[4/5] w-[88%] overflow-hidden"><img src="https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=1200&q=90" alt="Detalle del trabajo artesanal de sastrería" loading="lazy" className="h-full w-full object-cover" /></div><div className="absolute bottom-8 left-0 border border-gold/30 bg-ivory-light p-6 shadow-editorial sm:p-8"><p className="font-display text-5xl text-gold">28</p><p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[.2em]">años de oficio</p></div></Reveal>
        <Reveal delay={0.1}><SectionHeading eyebrow="Nuestra historia" title="El oficio de crear presencia" /><div className="mt-7 space-y-5 text-sm leading-7 text-ink-soft/70 sm:text-base"><p>NOBILE nació de una convicción sencilla: una prenda excepcional no solo debe verse bien, debe hacerte sentir exactamente quien eres.</p><p>Combinamos tradición sastrera, mirada contemporánea y una atención sin prisa. Desde la elección de la tela hasta la última prueba, cada detalle se trabaja para ti.</p></div><blockquote className="mt-9 border-l border-gold pl-6 font-display text-2xl italic leading-snug">“La elegancia comienza cuando la prenda deja de sentirse prestada y empieza a sentirse propia.”</blockquote></Reveal>
      </div>
      <div className="section-shell mt-20 lg:mt-28"><div className="grid border-y border-ink/15 sm:grid-cols-2 lg:grid-cols-4">{services.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * .06} className="border-b border-ink/15 p-6 sm:border-r lg:border-b-0 lg:p-8 last:border-r-0"><Icon size={24} strokeWidth={1.25} className="text-gold" /><h3 className="mt-8 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-ink-soft/60">{text}</p></Reveal>)}</div></div>
    </section>
  );
}
