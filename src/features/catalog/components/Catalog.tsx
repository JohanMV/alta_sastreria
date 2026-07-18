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
  showOccasionNav?: boolean;
}

const occasions = [
  { id: "ejecutivo", eyebrow: "Trabajo y liderazgo", label: "Ejecutivo", description: "Sastrería precisa para reuniones, presentaciones y decisiones importantes.", image: "/images/products/savile-main.webp", audience: "todos" as AudienceFilter, category: "Ejecutivo" },
  { id: "novios", eyebrow: "Bodas", label: "Novios", description: "Smoking y ternos ceremoniales pensados para un día irrepetible.", image: "/images/products/monaco-main.webp", audience: "hombre" as AudienceFilter, category: "Novio" },
  { id: "novias-ceremonia", eyebrow: "Bodas y gala", label: "Novias y ceremonia", description: "Siluetas de autor para protagonistas e invitadas memorables.", image: "/images/products/amalfi-main.webp", audience: "mujer" as AudienceFilter, category: "novias-ceremonia" },
  { id: "quinceanera", eyebrow: "Celebraciones", label: "Quinceañera", description: "Volumen, color y acabados artesanales para una entrada inolvidable.", image: "/images/products/luna-main.webp", audience: "mujer" as AudienceFilter, category: "Quinceañera" },
];

export function Catalog({ limit = 6, showFullCollectionLink = true, showHeading = true, showOccasionNav = limit === null }: CatalogProps) {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("servicio");
  const [service, setService] = useState<ServiceFilter>(
    limit === null && (requestedService === "venta" || requestedService === "alquiler") ? requestedService : "todos",
  );
  const [audience, setAudience] = useState<AudienceFilter>("todos");
  const [category, setCategory] = useState<CategoryFilter>("todas");
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    if (limit !== null) return;
    if (requestedService === "venta" || requestedService === "alquiler") setService(requestedService);
  }, [limit, requestedService]);

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

  const selectOccasion = (occasion: (typeof occasions)[number]) => {
    setService("todos");
    setAudience(occasion.audience);
    setCategory(occasion.category);
    requestAnimationFrame(() => document.querySelector("#catalog-grid")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const clearFilters = () => {
    setService("todos");
    setAudience("todos");
    setCategory("todas");
  };

  return (
    <section id="colecciones" className="bg-ivory-light py-20 sm:py-28 lg:py-36">
      <div className="section-shell">
        {showOccasionNav && (
          <div className="mb-16 lg:mb-24">
            <Reveal><p className="eyebrow">Elige tu ocasión</p><h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">Vestimos el momento que importa</h2></Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {occasions.map((occasion, index) => {
                const active = category === occasion.category;
                return (
                  <Reveal key={occasion.id} delay={index * 0.06}>
                    <button type="button" onClick={() => selectOccasion(occasion)} aria-pressed={active} className={`group relative min-h-72 w-full overflow-hidden text-left text-white outline-offset-4 ${active ? "ring-2 ring-gold ring-offset-4 ring-offset-ivory-light" : ""}`}>
                      <img src={occasion.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                      <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                      <span className="absolute inset-x-0 bottom-0 p-5">
                        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-light">{occasion.eyebrow}</span>
                        <span className="mt-2 block font-display text-2xl">{occasion.label}</span>
                        <span className="mt-2 block text-xs leading-5 text-white/80">{occasion.description}</span>
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        )}

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
          <div className="mt-8 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {visibleProducts.map((product, index) => <Reveal key={product.id} delay={(index % 3) * 0.08}><ProductCard product={product} onSelect={setSelected} /></Reveal>)}
          </div>
          {!filtered.length && <div className="py-20 text-center"><p className="text-ink-soft/75">No hay prendas disponibles con esta combinación.</p><button type="button" onClick={clearFilters} className="mt-4 min-h-11 text-sm font-semibold text-gold underline">Ver toda la colección</button></div>}
        </div>

        {showFullCollectionLink && <div className="mt-14 flex justify-center"><Link to="/tienda" className="inline-flex min-h-12 items-center justify-center border border-ink px-7 font-display text-xs uppercase tracking-[0.2em] text-ink transition duration-300 hover:border-gold hover:bg-gold hover:text-white">Ver colección completa</Link></div>}
      </div>
      <ProductModal product={selected} onClose={closeProduct} />
    </section>
  );
}
