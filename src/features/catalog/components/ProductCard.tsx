import { ArrowUpRight } from "lucide-react";
import { ProductFrame } from "@/components/ui";
import type { Product } from "@/types";

interface ProductCardProps { product: Product; onSelect: (product: Product) => void; }

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="group min-w-0">
      <button onClick={() => onSelect(product)} className="relative block aspect-[4/5] w-full overflow-hidden bg-ink/10 text-left" aria-label={`Ver ${product.name}`}>
        <ProductFrame
          image={product.gallery[0] ?? { src: product.image, alt: product.name }}
          decorative
          className="absolute inset-0"
          imageClassName="transition duration-700 group-hover:scale-[1.025]"
        />
        <span className="absolute left-4 top-4 bg-ivory-light px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-widest">{product.badge}</span>
        <span className="absolute bottom-4 right-4 grid size-11 translate-y-3 place-items-center bg-ivory-light opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight size={18} /></span>
      </button>
      <div className="flex min-w-0 items-start justify-between gap-2 pt-3 sm:gap-4 sm:pt-4">
        <div className="min-w-0"><p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-gold sm:text-[0.62rem] sm:tracking-[0.18em]">{product.category}</p><h3 className="mt-1 font-display text-xl leading-tight sm:text-2xl sm:leading-normal">{product.name}</h3></div>
        <div className="shrink-0 pt-3 text-right sm:pt-4">
          <p className="text-[0.56rem] uppercase tracking-wider text-ink-soft/75 sm:text-[0.67rem]">Venta desde</p>
          <p className="mt-0.5 text-xs font-medium sm:text-sm">S/ {product.price.toLocaleString("es-PE")}</p>
          {product.rentalPrice && <p className="mt-1 max-w-20 text-[0.6rem] leading-snug text-ink-soft/80 sm:max-w-none sm:text-[0.7rem]">Alquiler: S/ {product.rentalPrice.toLocaleString("es-PE")}</p>}
        </div>
      </div>
    </article>
  );
}
