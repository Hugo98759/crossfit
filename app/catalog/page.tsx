"use client";
import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../../components/ProductCard";
import CategoryFilter from "../../components/CategoryFilter";
import type { Product } from "../../types";

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const categories = useMemo(() => {
    const s = new Set<string>();
    products.forEach((p: Product) => s.add(p.category));
    return Array.from(s);
  }, [products]);

  const visible = products.filter((p: Product) => 
    category ? p.category === category : true
  );

  return (
    <div className="text-black">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🏪 Catálogo de Productos</h1>
        <p className="text-gray-600">Encuentra todo lo que necesitas para tu entrenamiento</p>
      </div>
      
      <div className="mb-6">
        <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />
      </div>

      {visible.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No hay productos en esta categoría</p>
        </div>
      ) : (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Mostrando {visible.length} {visible.length === 1 ? "producto" : "productos"}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}