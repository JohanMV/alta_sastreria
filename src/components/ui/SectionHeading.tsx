interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = "left", light = false }: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}>
      <div className={`mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="gold-rule" aria-hidden="true" />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2 className={`font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {description && <p className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${light ? "text-white/65" : "text-ink-soft/70"}`}>{description}</p>}
    </div>
  );
}
