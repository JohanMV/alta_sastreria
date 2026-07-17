import { useState, type FormEvent } from "react";
import { whatsappUrl } from "@/lib/config";

interface ContactFields { name: string; phone: string; occasion: string; message: string; }

export function useContactForm() {
  const [fields, setFields] = useState<ContactFields>({ name: "", phone: "", occasion: "Terno a medida", message: "" });
  const update = (field: keyof ContactFields, value: string) => setFields((current) => ({ ...current, [field]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = `Hola, soy ${fields.name}. Deseo agendar una cita para: ${fields.occasion}. Mi teléfono es ${fields.phone}.${fields.message ? `\n\nDetalle: ${fields.message}` : ""}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };
  return { fields, update, submit };
}
