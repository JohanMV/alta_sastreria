import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui";

const questions = [
  ["¿Con cuánta anticipación debo hacer mi pedido?", "Para confección a medida recomendamos entre 4 y 6 semanas. Los alquileres pueden reservarse desde 48 horas antes, sujetos a disponibilidad y ajustes."],
  ["¿Qué incluye el alquiler de un terno?", "Incluye saco, pantalón, camisa, corbata o corbatín y ajustes básicos. También realizamos una revisión y vaporizado antes de cada entrega."],
  ["¿Cómo funcionan las pruebas y ajustes?", "La primera cita define medidas y estilo. Según la prenda, programamos una o dos pruebas adicionales hasta conseguir el calce acordado."],
  ["¿Qué garantía tienen las prendas?", "Toda confección cuenta con garantía de ajuste por 30 días. En alquiler, revisamos juntos la prenda al recogerla y dejamos constancia de su estado."],
  ["¿Cómo elijo mi talla?", "La talla del catálogo es una referencia inicial. En tienda verificamos hombros, pecho, cintura y largo para recomendarte la mejor base y los ajustes necesarios."],
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  const reduced = useReducedMotion();
  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-36"><div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><Reveal><SectionHeading eyebrow="Antes de tu visita" title="Preguntas frecuentes" description="Todo lo que necesitas saber para vivir una experiencia sin imprevistos." /></Reveal><div>{questions.map(([question, answer], index) => { const active = open === index; return <article key={question} className="border-b border-ink/15"><button onClick={() => setOpen(active ? -1 : index)} className="flex w-full items-center justify-between gap-6 py-6 text-left" aria-expanded={active}><span className="font-display text-xl sm:text-2xl">{question}</span><Plus size={18} className={`shrink-0 text-gold transition ${active ? "rotate-45" : ""}`} /></button><AnimatePresence initial={false}>{active && <motion.div initial={reduced ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="max-w-2xl pb-7 text-sm leading-7 text-ink-soft/65">{answer}</p></motion.div>}</AnimatePresence></article>; })}</div></div></section>
  );
}
