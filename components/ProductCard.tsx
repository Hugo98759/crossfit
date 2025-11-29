"use client";
import React, { useState } from "react";
import Image from "next/image";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    addItem(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  // Emoji por categoría
  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case "Máquinas": return "🏋️";
      case "Mancuernas": return "💪";
      case "Accesorios": return "🎽";
      case "Suplementos": return "🥤";
      default: return "🏪";
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 p-4 flex flex-col bg-white text-black shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-300">
      <div className="h-44 w-full flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <span className="text-6xl">{getCategoryEmoji(product.category)}</span>
        )}
      </div>
      <div className="mt-3 flex-1">
        <h3 className="text-lg font-semibold text-black line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        {product.description && (
          <p className="text-xs text-gray-400 mt-2 line-clamp-2">{product.description}</p>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-lg font-bold text-blue-600">
          ${product.priceCOP.toLocaleString("es-CO")}
          <span className="text-xs text-gray-500 ml-1">COP</span>
        </div>
        <button
          onClick={handleAdd}
          disabled={isAdding}
          className={`rounded-lg px-4 py-2 text-white font-medium transition-all duration-300 transform ${
            isAdding 
              ? "bg-green-400 scale-110" 
              : "bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95"
          } shadow-md`}
        >
          {isAdding ? "✓" : "+ Añadir"}
        </button>
      </div>
    </div>
  );
}
