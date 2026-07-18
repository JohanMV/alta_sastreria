import { useEffect } from "react";
import { Catalog } from "@/features/catalog";
import { MainLayout } from "@/layouts";
import { Reveal, SectionHeading } from "@/components/ui";

export function ShopPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <MainLayout>
      <section className="bg-ink pb-20 pt-36 text-white sm:pb-24 sm:pt-44">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Tienda NOBILE"
              title="Colección completa"
              description="Descubre cada pieza disponible para venta y alquiler, creada para vestir tus ocasiones más importantes."
              light
            />
          </Reveal>
        </div>
      </section>
      <Catalog limit={null} showFullCollectionLink={false} showHeading={false} showOccasionNav />
    </MainLayout>
  );
}
