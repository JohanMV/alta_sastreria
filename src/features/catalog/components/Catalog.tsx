import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import { ProductModal } from "@/features/product";
import { ProductCard } from "./ProductCard";
import { Reveal, SectionHeading } from "@/components/ui";
import type { Audience, Product, ServiceType } from "@/types";

type ServiceFilter = "todos" | ServiceType;
type AudienceFilter = "todos" | Audience;
type CategoryFilter = string;

interface CatalogProps {
  limit?: number | null;
  showFullCollectionLink?: boolean;
  showHeading?: boolean;
}

export function Catalog({ limit = 6, showFullCollectionLink = true, showHeading = true }: CatalogProps) {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("servicio");
  const requestedAudience = searchParams.get("publico");
  const requestedCategory = searchParams.get("categoria");
  const [service, setService] = useState<ServiceFilter>(
    limit === null && (requestedService === "venta" || requestedService === "alquiler") ? requestedService : "todos",
  );
  const [audience, setAudience] = useState<AudienceFilter>(
    limit === null && (requestedAudience === "hombre" || requestedAudience === "mujer") ? requestedAudience : "todos",
  );
  const [category, setCategory] = useState<CategoryFilter>(limit === null && requestedCategory ? requestedCategory : "todas");
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    if (limit !== null) return;
    if (requestedService === "venta" || requestedService === "alquiler") setService(requestedService);
    if (requestedAudience === "hombre" || requestedAudience === "mujer") setAudience(requestedAudience);
    if (requestedCategory) setCategory(requestedCategory);
  }, [limit, requestedService, requestedAudience, requestedCategory]);

  const productsForCategory = useMemo(
    () => products.filter((product) =>
      (service === "todos" || product.services.includes(service)) &&
      (audience === "todos" || product.audience === audience)),
    [service, audience],
  );

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const product of productsForCategory) counts.set(product.category, (counts.get(product.category) ?? 0) + 1);
    return counts;
  }, [productsForCategory]);

  const categories = useMemo(() => [...categoryCounts.keys()].sort((a, b) => a.localeCompare(b, "es")), [categoryCounts]);

  useEffect(() => {
    if (category === "todas") return;
    if (category === "novias-ceremonia") {
      const hasOccasion = productsForCategory.some((product) => product.category === "Novia" || product.category === "Ceremonia");
      if (!hasOccasion) setCategory("todas");
      return;
    }
    if (!categoryCounts.has(category)) setCategory("todas");
  }, [category, categoryCounts, productsForCategory]);

  const filtered = useMemo(
    () => productsForCategory.filter((product) => {
      if (category === "todas") return true;
      if (category === "novias-ceremonia") return product.category === "Novia" || product.category === "Ceremonia";
      return product.category === category;
    }),
    [productsForCategory, category],
  );

  const visibleProducts = limit === null ? filtered : filtered.slice(0, limit);
  const closeProduct = useCallback(() => setSelected(null), []);
  const filterClass = "min-h-11 border border-ink/20 bg-transparent px-4 text-[0.68rem] font-semibold uppercase tracking-widest text-ink";

  const clearFilters = () => {
    setService("todos");
    setAudience("todos");
    setCategory("todas");
  };

  return (
    <section id="colecciones" className="bg-ivory-light py-20 sm:py-28 lg:py-36">
      <div className="section-shell">
        <div className={`flex flex-col gap-8 lg:flex-row lg:items-end ${showHeading ? "lg:justify-between" : "lg:justify-end"}`}>
          {showHeading && <Reveal><SectionHeading eyebrow="La colección" title="Prendas que dejan huella" description="Piezas seleccionadas para vestir decisiones, promesas y celebraciones. Cada una puede adaptarse a tus medidas." /></Reveal>}
          <div className="grid grid-cols-2 gap-2 sm:flex" aria-label="Filtros del catálogo">
            <select aria-label="Filtrar por servicio" value={service} onChange={(event) => setService(event.target.value as ServiceFilter)} className={filterClass}>
              <option value="todos">Venta / Alquiler</option><option value="venta">Venta</option><option value="alquiler">Alquiler</option>
            </select>
            <select aria-label="Filtrar por público" value={audience} onChange={(event) => setAudience(event.target.value as AudienceFilter)} className={filterClass}>
              <option value="todos">Hombre / Mujer</option><option value="hombre">Hombre</option><option value="mujer">Mujer</option>
            </select>
            <select aria-label="Filtrar por categoría" value={category} onChange={(event) => setCategory(event.target.value)} className={`${filterClass} col-span-2`}>
              <option value="todas">Toda categoría ({productsForCategory.length})</option>
              {category === "novias-ceremonia" && <option value="novias-ceremonia">Novias y ceremonia ({(categoryCounts.get("Novia") ?? 0) + (categoryCounts.get("Ceremonia") ?? 0)})</option>}
              {categories.map((value) => <option key={value} value={value}>{value} ({categoryCounts.get(value)})</option>)}
            </select>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-soft/75" aria-live="polite">{filtered.length} {filtered.length === 1 ? "prenda" : "prendas"}</p>
          {(service !== "todos" || audience !== "todos" || category !== "todas") && <button type="button" onClick={clearFilters} className="min-h-11 px-2 text-[0.68rem] font-semibold uppercase tracking-widest text-gold underline-offset-4 hover:underline">Limpiar filtros</button>}
        </div>

        <div id="catalog-grid" className="scroll-mt-28">
          <div className="mt-8 grid w-[calc(100vw-2.5rem)] grid-cols-2 gap-x-3 gap-y-10 sm:w-auto sm:gap-x-5 sm:gap-y-12 lg:mt-12 lg:grid-cols-3">
            {visibleProducts.map((product, index) => <Reveal key={product.id} delay={(index % 3) * 0.08} className="min-w-0"><ProductCard product={product} onSelect={setSelected} /></Reveal>)}
          </div>
          {!filtered.length && <div className="py-20 text-center"><p className="text-ink-soft/75">No hay prendas disponibles con esta combinación.</p><button type="button" onClick={clearFilters} className="mt-4 min-h-11 text-sm font-semibold text-gold underline">Ver toda la colección</button></div>}
        </div>

        {showFullCollectionLink && <div className="mt-14 flex justify-center"><Link to="/tienda" className="inline-flex min-h-12 items-center justify-center border border-ink px-7 font-display text-xs uppercase tracking-[0.2em] text-ink transition duration-300 hover:border-gold hover:bg-gold hover:text-white">Ver colección completa</Link></div>}
      </div>
      <ProductModal product={selected} onClose={closeProduct} />
    </section>
  );
}
