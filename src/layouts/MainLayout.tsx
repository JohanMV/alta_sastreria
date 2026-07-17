import type { ReactNode } from "react";
import { Footer, Header } from "@/components/layout";
import { CartDrawer } from "@/features/cart/components/CartDrawer";

interface MainLayoutProps { children: ReactNode; }

export function MainLayout({ children }: MainLayoutProps) {
  return <><Header /><main>{children}</main><Footer /><CartDrawer /></>;
}
