"use client";
import Link from "next/link";
import React from "react";
import { useCart } from "../context/CartContext";

export default function Header({ onOpenCart }: { onOpenCart?: () => void }) {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="w-full border-b bg-white px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-lg text-black">
            GymStore
          </Link>
          <Link href="/catalog" className="text-sm text-black">
            Catálogo
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            className="relative rounded-md bg-blue-600 px-3 py-1 text-white"
          >
            Carrito
            {count > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
