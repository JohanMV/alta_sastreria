export const WHATSAPP_NUMBER = "51987654321";
export const BRAND_NAME = "NOBILE — Alta Sastrería";

export const whatsappUrl = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
