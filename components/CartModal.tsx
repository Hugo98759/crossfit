"use client";
import React from "react";
import { useCart } from "../context/CartContext";

export default function CartModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, removeItem, clear, totalCOP } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-xl rounded bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Tu carrito</h2>
          <div className="flex gap-2">
            <button onClick={clear} className="text-sm text-red-600">
              Vaciar
            </button>
            <button onClick={onClose} className="text-sm">
              Cerrar
            </button>
          </div>
        </div>

        <div className="mt-4">
          {items.length === 0 && <p>El carrito está vacío.</p>}
          {items.map((it) => (
            <div
              key={it.product.id}
              className="mt-3 flex items-center justify-between border-t pt-3"
            >
              <div>
                <div className="font-medium">{it.product.name}</div>
                <div className="text-sm text-gray-600">x{it.quantity}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-medium">${(it.product.priceCOP * it.quantity).toLocaleString("es-CO")} COP</div>
                <button onClick={() => removeItem(it.product.id)} className="text-sm text-red-600">Quitar</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="font-semibold">Total:</div>
          <div className="text-lg font-bold">${totalCOP().toLocaleString("es-CO")} COP</div>
        </div>
      </div>
    </div>
  );
}
