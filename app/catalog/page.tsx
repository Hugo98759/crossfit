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
      <h1 className="text-2xl font-bold">Catálogo</h1>
      <div className="mt-4">
        <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}