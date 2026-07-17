import { create } from "zustand";
import type { CartItem } from "@/types";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  changeQuantity: (id: string, delta: number) => void;
  setOpen: (value: boolean) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isOpen: false,
  addItem: (item) => set((state) => ({
    items: [...state.items, { ...item, id: `${item.productId}-${item.service}-${item.size}-${item.date ?? "now"}-${Date.now()}` }],
    isOpen: true,
  })),
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  changeQuantity: (id, delta) => set((state) => ({
    items: state.items.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item),
  })),
  setOpen: (isOpen) => set({ isOpen }),
}));
