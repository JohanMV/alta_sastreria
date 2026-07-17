import { BRAND_NAME, whatsappUrl } from "@/lib/config";
import type { CartItem } from "@/types";

const soles = (value: number): string => `S/ ${value.toLocaleString("es-PE")}`;

export function buildOrderMessage(items: CartItem[]): string {
  const lines = items.map((item, index) => [
    `${index + 1}. ${item.name}`,
    `   Servicio: ${item.service === "venta" ? "Compra" : "Alquiler"}`,
    `   Talla: ${item.size}${item.date ? ` · Fecha: ${item.date}` : ""}`,
    `   Cantidad: ${item.quantity} · Subtotal: ${soles(item.price * item.quantity)}`,
  ].join("\n"));
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return `Hola, ${BRAND_NAME}. Deseo consultar por este pedido:\n\n${lines.join("\n\n")}\n\nTotal estimado: ${soles(total)}\n\n¿Podrían ayudarme a confirmar disponibilidad y agendar una cita?`;
}

export function openWhatsAppOrder(items: CartItem[]): void {
  window.open(whatsappUrl(buildOrderMessage(items)), "_blank", "noopener,noreferrer");
}
