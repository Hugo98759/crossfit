"use client";
import React, { createContext, useContext, useState } from "react";
import type { CartItem, Product } from "../types";

interface CartContextValue {
  items: CartItem[];
  addItem: (p: Product) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
  totalCOP: () => number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(p: Product) {
    setItems((prev) => {
      const found = prev.find((i) => i.product.id === p.id);
      if (found) {
        return prev.map((i) =>
          i.product.id === p.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product: p, quantity: 1 }];
    });
  }

  function removeItem(productId: string) {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }

  function clear() {
    setItems([]);
  }

  function totalCOP() {
    return items.reduce((s, i) => s + i.product.priceCOP * i.quantity, 0);
  }

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clear, totalCOP }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
