import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "dark" | "light" | "outline" | "gold";
  full?: boolean;
}

const variants = {
  dark: "bg-ink text-white hover:bg-ink-soft border-ink",
  light: "bg-ivory-light text-ink hover:bg-white border-ivory-light",
  outline: "bg-transparent text-current hover:bg-gold hover:text-white border-current",
  gold: "bg-gold text-white hover:bg-[#654719] border-gold",
};

export function Button({ children, variant = "dark", full = false, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-12 items-center justify-center border px-6 text-xs font-semibold tracking-[0.14em] uppercase transition duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${full ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
