import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps { product: Product; onSelect: (product: Product) => void; }

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="group">
      <button onClick={() => onSelect(product)} className="relative block aspect-[4/5] w-full overflow-hidden bg-ink/10 text-left" aria-label={`Ver ${product.name}`}>
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
        <span className="absolute left-4 top-4 bg-ivory-light px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-widest">{product.badge}</span>
        <span className="absolute bottom-4 right-4 grid size-11 translate-y-3 place-items-center bg-ivory-light opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight size={18} /></span>
      </button>
      <div className="flex items-start justify-between gap-4 pt-4">
        <div><p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold">{product.category}</p><h3 className="mt-1 font-display text-2xl">{product.name}</h3></div>
        <div className="shrink-0 pt-4 text-right">
          <p className="text-[0.67rem] uppercase tracking-wider text-ink-soft/75">Venta desde</p>
          <p className="mt-0.5 text-sm font-medium">S/ {product.price.toLocaleString("es-PE")}</p>
          {product.rentalPrice && <p className="mt-1 text-[0.7rem] text-ink-soft/80">Alquiler desde S/ {product.rentalPrice.toLocaleString("es-PE")}</p>}
        </div>
      </div>
    </article>
  );
}
