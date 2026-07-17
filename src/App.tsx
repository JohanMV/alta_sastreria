import { Route, Routes } from "react-router-dom";
import { Contact, FAQ, Hero, Lookbook, Process, Story, Testimonials } from "@/components/sections";
import { Catalog } from "@/features/catalog";
import { MainLayout } from "@/layouts";
import { ShopPage } from "@/pages/ShopPage";

function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Story />
      <Catalog />
      <Process />
      <Testimonials />
      <Lookbook />
      <FAQ />
      <Contact />
    </MainLayout>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tienda" element={<ShopPage />} />
    </Routes>
  );
}
