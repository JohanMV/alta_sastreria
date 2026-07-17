import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui";

const reviews = [
  { name: "Diego & Mariana", role: "Boda · Miraflores", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=88", quote: "Desde la primera prueba supimos que estábamos en buenas manos. El terno quedó impecable y el acompañamiento fue realmente personal." },
  { name: "Valeria Salazar", role: "Gala · San Isidro", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=88", quote: "Encontré un vestido que se sentía hecho para mí. Ajustaron cada detalle y me entregaron todo listo, sin una sola preocupación." },
  { name: "Rodrigo Paredes", role: "Terno ejecutivo", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=88", quote: "La diferencia está en el calce y en cómo te asesoran. Mi terno se ve sobrio, moderno y proyecta exactamente lo que buscaba." },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const move = (direction: number) => setActive((active + direction + reviews.length) % reviews.length);
  const review = reviews[active];
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="section-shell"><Reveal><SectionHeading eyebrow="Historias reales" title="Vestimos tus mejores recuerdos" align="center" /></Reveal><div className="mx-auto mt-12 max-w-5xl border border-ink/12 bg-ivory-light p-4 sm:p-8 lg:mt-16 lg:p-10"><AnimatePresence mode="wait"><motion.article key={active} initial={reduced ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid items-center gap-8 md:grid-cols-[260px_1fr] lg:gap-14"><img src={review.image} alt={review.name} className="aspect-square h-full w-full object-cover grayscale-[20%]" /><div className="py-3"><div className="flex gap-1 text-gold" aria-label="5 de 5 estrellas">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={14} fill="currentColor" />)}</div><blockquote className="mt-6 font-display text-2xl leading-snug sm:text-3xl lg:text-4xl">“{review.quote}”</blockquote><div className="mt-7"><p className="text-sm font-semibold uppercase tracking-widest">{review.name}</p><p className="mt-1 text-xs text-ink-soft/50">{review.role}</p></div></div></motion.article></AnimatePresence><div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5"><p className="text-xs tracking-widest text-ink-soft/45">0{active + 1} / 0{reviews.length}</p><div className="flex gap-2"><button onClick={() => move(-1)} aria-label="Testimonio anterior" className="grid size-11 place-items-center border border-ink/15 transition hover:border-gold hover:text-gold"><ArrowLeft size={17} /></button><button onClick={() => move(1)} aria-label="Testimonio siguiente" className="grid size-11 place-items-center border border-ink/15 transition hover:border-gold hover:text-gold"><ArrowRight size={17} /></button></div></div></div></div>
    </section>
  );
}
