"use client";
import React from "react";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="rounded-md border p-4 flex flex-col bg-white text-black shadow-sm">
      <div className="h-44 w-full flex-shrink-0 overflow-hidden rounded bg-gray-100">
        {/* Placeholder for image - if you add images to `public/` you can replace this with <Image/> */}
      </div>
      <div className="mt-3 flex-1">
        <h3 className="text-lg font-medium text-black">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.category}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
  <div className="text-lg font-semibold text-black">${product.priceCOP.toLocaleString("es-CO")} COP</div>
        <button
          onClick={() => addItem(product)}
          className="rounded bg-green-600 px-3 py-1 text-white"
        >
          Añadir
        </button>
      </div>
    </div>
  );
}
