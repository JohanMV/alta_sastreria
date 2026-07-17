import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { whatsappUrl } from "@/lib/config";

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="inicio" className="relative min-h-[780px] overflow-hidden bg-ink text-white sm:min-h-[820px] lg:h-screen lg:min-h-[760px]">
      <motion.img initial={reduced ? false : { scale: 1.06 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=92" alt="Pareja elegantemente vestida en una celebración" className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,13,11,.9)_0%,rgba(12,13,11,.58)_46%,rgba(12,13,11,.08)_78%),linear-gradient(0deg,rgba(12,13,11,.56)_0%,transparent_40%)]" />
      <div className="section-shell relative flex min-h-[780px] items-end pb-24 pt-32 sm:min-h-[820px] sm:items-center sm:pb-12 lg:h-full lg:min-h-[760px]">
        <motion.div initial={reduced ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }} className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3"><span className="h-px w-10 bg-gold" /><p className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-gold-light">Sastrería contemporánea · Lima</p></div>
          <h1 className="font-display text-[3.45rem] leading-[.93] tracking-[-.02em] sm:text-7xl lg:text-[6.5rem]">Vestir bien es<br /><em className="font-normal text-gold-light">dejar huella.</em></h1>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/70 sm:text-base">Ternos y vestidos creados para realzar tu presencia. Confección a medida y alquiler premium para cada ocasión memorable.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#colecciones" className="inline-flex min-h-13 items-center justify-between gap-6 bg-ivory-light px-6 text-xs font-semibold uppercase tracking-[.14em] text-ink transition hover:bg-gold hover:text-white">Ver colección <ArrowUpRight size={17} /></a><a href={whatsappUrl("Hola, deseo agendar una cita en NOBILE Alta Sastrería.")} target="_blank" rel="noreferrer" className="inline-flex min-h-13 items-center justify-center border border-white/50 px-6 text-xs font-semibold uppercase tracking-[.14em] transition hover:border-gold hover:bg-gold">Agendar cita</a></div>
        </motion.div>
        <a href="#nosotros" aria-label="Descubrir más" className="absolute bottom-6 right-5 hidden items-center gap-3 text-[0.6rem] uppercase tracking-[.2em] text-white/60 lg:flex"><span>Descubrir</span><span className="grid size-11 place-items-center rounded-full border border-white/30"><ArrowDown size={15} /></span></a>
      </div>
      <div className="absolute right-0 top-[86px] hidden border-l border-white/15 px-6 py-8 text-[0.55rem] uppercase tracking-[.28em] text-white/45 [writing-mode:vertical-rl] lg:block">Hecho a mano · Desde 1998</div>
    </section>
  );
}
