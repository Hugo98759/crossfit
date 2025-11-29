"use client";
import React from "react";

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: {
  categories: string[];
  selected: string | null;
  onSelect: (c: string | null) => void;
}) {
  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case "Máquinas": return "🏋️";
      case "Mancuernas": return "💪";
      case "Accesorios": return "🎽";
      case "Suplementos": return "🥤";
      default: return "📦";
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        className={`rounded-lg px-4 py-2 font-medium transition-all duration-200 transform hover:scale-105 ${
          selected === null 
            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md" 
            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
        }`}
        onClick={() => onSelect(null)}
      >
        📦 Todos
      </button>
      {categories.map((c) => (
        <button
          key={c}
          className={`rounded-lg px-4 py-2 font-medium transition-all duration-200 transform hover:scale-105 ${
            selected === c 
              ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md" 
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
          onClick={() => onSelect(c)}
        >
          {getCategoryEmoji(c)} {c}
        </button>
      ))}
    </div>
  );
}
