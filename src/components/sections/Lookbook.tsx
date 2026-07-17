import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui";

const photos = [
  { src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=90", label: "The Black Edit", className: "sm:row-span-2" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=90", label: "Ceremonia", className: "" },
  { src: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1000&q=90", label: "Sastrería", className: "" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=90", label: "Sí, acepto", className: "sm:col-span-2" },
];

export function Lookbook() {
  return (
    <section id="lookbook" className="bg-ivory-light py-20 sm:py-28 lg:py-36"><div className="section-shell"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><Reveal><SectionHeading eyebrow="Lookbook N° 03" title="El arte de la ocasión" /></Reveal><p className="max-w-xs text-sm leading-6 text-ink-soft/55">Una selección editorial de momentos, texturas y siluetas que definen nuestro universo.</p></div><div className="mt-12 grid auto-rows-[280px] gap-3 sm:grid-cols-2 sm:auto-rows-[320px] lg:mt-16 lg:grid-cols-3">{photos.map((photo, index) => <Reveal key={photo.src} delay={index * .06} className={`group relative overflow-hidden ${photo.className}`}><img src={photo.src} alt={`Lookbook: ${photo.label}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" /><div className="image-overlay absolute inset-0" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white"><div><p className="text-[0.58rem] uppercase tracking-[.24em] text-gold-light">NOBILE Editorial</p><h3 className="mt-2 font-display text-2xl">{photo.label}</h3></div><ArrowUpRight size={19} className="opacity-60" /></div></Reveal>)}</div></div></section>
  );
}
