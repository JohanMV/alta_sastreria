import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ProductModal } from "@/features/product";
import { ProductCard } from "./ProductCard";
import { Reveal, SectionHeading } from "@/components/ui";
import type { Audience, Product, ServiceType } from "@/types";

type ServiceFilter = "todos" | ServiceType;
type AudienceFilter = "todos" | Audience;

interface CatalogProps {
  limit?: number | null;
  showFullCollectionLink?: boolean;
  showHeading?: boolean;
}

export function Catalog({ limit = 6, showFullCollectionLink = true, showHeading = true }: CatalogProps) {
  const [service, setService] = useState<ServiceFilter>("todos");
  const [audience, setAudience] = useState<AudienceFilter>("todos");
  const [category, setCategory] = useState("todas");
  const [selected, setSelected] = useState<Product | null>(null);
  const categories = [...new Set(products.map((product) => product.category))];
  const filtered = useMemo(() => products.filter((product) =>
    (service === "todos" || product.services.includes(service)) &&
    (audience === "todos" || product.audience === audience) &&
    (category === "todas" || product.category === category)), [service, audience, category]);

  const visibleProducts = limit === null ? filtered : filtered.slice(0, limit);
  const filterClass = "min-h-11 border border-ink/15 bg-transparent px-4 text-[0.68rem] font-semibold uppercase tracking-widest text-ink";
  return (
    <section id="colecciones" className="bg-ivory-light py-20 sm:py-28 lg:py-36">
      <div className="section-shell">
        <div className={`flex flex-col gap-8 lg:flex-row lg:items-end ${showHeading ? "lg:justify-between" : "lg:justify-end"}`}>
          {showHeading && <Reveal><SectionHeading eyebrow="La colección" title="Prendas que dejan huella" description="Piezas seleccionadas para vestir decisiones, promesas y celebraciones. Cada una puede adaptarse a tus medidas." /></Reveal>}
          <div className="grid grid-cols-2 gap-2 sm:flex" aria-label="Filtros del catálogo">
            <select aria-label="Filtrar por servicio" value={service} onChange={(event) => setService(event.target.value as ServiceFilter)} className={filterClass}><option value="todos">Venta / Alquiler</option><option value="venta">Venta</option><option value="alquiler">Alquiler</option></select>
            <select aria-label="Filtrar por público" value={audience} onChange={(event) => setAudience(event.target.value as AudienceFilter)} className={filterClass}><option value="todos">Hombre / Mujer</option><option value="hombre">Hombre</option><option value="mujer">Mujer</option></select>
            <select aria-label="Filtrar por categoría" value={category} onChange={(event) => setCategory(event.target.value)} className={`${filterClass} col-span-2`}><option value="todas">Toda categoría</option>{categories.map((value) => <option key={value}>{value}</option>)}</select>
          </div>
        </div>
        <div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">{visibleProducts.map((product, index) => <Reveal key={product.id} delay={(index % 3) * 0.08}><ProductCard product={product} onSelect={setSelected} /></Reveal>)}</div>
        {!filtered.length && <p className="py-20 text-center text-ink-soft/60">No hay prendas con esta combinación. Prueba otro filtro.</p>}
        {showFullCollectionLink && <div className="mt-14 flex justify-center"><Link to="/tienda" className="inline-flex min-h-12 items-center justify-center border border-ink px-7 font-display text-xs uppercase tracking-[0.2em] text-ink transition duration-300 hover:border-gold hover:bg-gold hover:text-white">Ver colección completa</Link></div>}
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
