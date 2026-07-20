import { BRAND_NAME, whatsappUrl } from "@/lib/config";
import type { CartItem } from "@/types";

const soles = (value: number): string => `S/ ${value.toLocaleString("es-PE")}`;
const formatDate = (value: string): string => value.split("-").reverse().join("/");

export function buildOrderMessage(items: CartItem[]): string {
  const lines = items.map((item, index) => {
    if (item.service === "medida") {
      return [
        `${index + 1}. ${item.name}`,
        "   Servicio: Confección a medida",
        `   Fecha preferida para la cita: ${item.appointmentDate ? formatDate(item.appointmentDate) : "Por coordinar"}`,
        "   Precio: Pendiente de cotización",
      ].join("\n");
    }

    return [
      `${index + 1}. ${item.name}`,
      `   Servicio: ${item.service === "venta" ? "Venta" : "Alquiler"}`,
      `   Talla: ${item.size ?? "Por confirmar"}${item.date ? ` · Fecha del evento: ${formatDate(item.date)}` : ""}`,
      `   Cantidad: ${item.quantity} · Subtotal: ${soles((item.price ?? 0) * item.quantity)}`,
    ].join("\n");
  });

  const total = items.reduce((sum, item) => sum + (item.price ?? 0) * item.quantity, 0);
  const pendingQuotes = items.filter((item) => item.service === "medida").length;
  const summary = pendingQuotes > 0
    ? [
        total > 0 ? `Subtotal de productos con precio definido: ${soles(total)}` : null,
        `Solicitudes pendientes de cotización: ${pendingQuotes}`,
      ].filter(Boolean).join("\n")
    : `Total estimado: ${soles(total)}`;
  const closing = pendingQuotes > 0
    ? "Deseo confirmar la disponibilidad de los productos y coordinar la cita para la confección a medida."
    : "¿Podrían ayudarme a confirmar disponibilidad y agendar una cita?";

  return `Hola, ${BRAND_NAME}. Deseo consultar la siguiente selección:\n\n${lines.join("\n\n")}\n\n${summary}\n\n${closing}`;
}

export function openWhatsAppOrder(items: CartItem[]): void {
  window.open(whatsappUrl(buildOrderMessage(items)), "_blank", "noopener,noreferrer");
}
