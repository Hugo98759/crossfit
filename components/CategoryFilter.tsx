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
  return (
    <div className="flex gap-2">
      <button
        className={`rounded px-3 py-1 ${selected === null ? "bg-blue-600 text-white" : "bg-gray-100"}`}
        onClick={() => onSelect(null)}
      >
        Todos
      </button>
      {categories.map((c) => (
        <button
          key={c}
          className={`rounded px-3 py-1 ${selected === c ? "bg-blue-600 text-white" : "bg-gray-100"}`}
          onClick={() => onSelect(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
