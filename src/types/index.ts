export type ServiceType = "venta" | "alquiler";
export type Audience = "hombre" | "mujer";

export interface ProductImage {
  src: string;
  alt: string;
  focalX?: string;
  focalY?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  audience: Audience;
  services: ServiceType[];
  price: number;
  rentalPrice?: number;
  image: string;
  gallery: ProductImage[];
  badge: string;
  sizes: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  service: ServiceType;
  size: string;
  date?: string;
  quantity: number;
  price: number;
  image: string;
}
