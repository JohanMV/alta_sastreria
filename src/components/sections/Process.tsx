import { CalendarCheck, PackageCheck, Ruler, Shirt } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui";

const steps = [
  { icon: Shirt, title: "Elige tu prenda", text: "Explora la colección y cuéntanos qué ocasión tienes en mente." },
  { icon: Ruler, title: "Toma de medidas", text: "Agenda una cita para encontrar el calce y la silueta ideales." },
  { icon: CalendarCheck, title: "Prueba y ajustes", text: "Afinamos cada detalle hasta lograr una caída impecable." },
  { icon: PackageCheck, title: "Recoge o recibe", text: "Tu prenda se entrega revisada, vaporizada y lista para vestir." },
];

export function Process() {
  return (
    <section id="proceso" className="bg-ink py-20 text-white sm:py-28 lg:py-36">
      <div className="section-shell"><Reveal><SectionHeading eyebrow="Una experiencia simple" title="Del primer vistazo al calce perfecto" description="Te acompañamos con criterio y atención personal en cada momento." light /></Reveal><div className="mt-14 grid gap-0 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">{steps.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * .08} className="group relative border-l border-white/15 px-6 py-8 lg:px-8"><span className="absolute right-5 top-5 font-display text-5xl text-white/[.06]">0{index + 1}</span><div className="grid size-12 place-items-center rounded-full border border-gold/60 text-gold transition group-hover:bg-gold group-hover:text-white"><Icon size={20} strokeWidth={1.2} /></div><h3 className="mt-8 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{text}</p></Reveal>)}</div></div>
    </section>
  );
}
