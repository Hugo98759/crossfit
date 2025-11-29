"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CartModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, removeItem, clear, totalCOP, updateQuantity } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderId, setOrderId] = useState<string>("");

  if (!open) return null;

  const handleCheckout = async () => {
    if (items.length === 0) return;
    
    setIsCheckingOut(true);
    
    try {
      // Preparar datos de la orden
      const orderData = {
        items: items.map((item) => ({
          productId: item.product.id,
          productName: item.product.name,
          quantity: item.quantity,
          pricePerUnit: item.product.priceCOP,
        })),
        customerName: "Cliente Demo",
        customerEmail: "cliente@gymstore.com",
      };

      // Enviar orden al backend
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (result.success) {
        setOrderId(result.order.id);
        setShowSuccess(true);
        clear();
        
        // Cerrar modal después de 3 segundos
        setTimeout(() => {
          setShowSuccess(false);
          setOrderId("");
          onClose();
        }, 3000);
      } else {
        alert("Error al procesar la orden: " + result.error);
      }
    } catch (error) {
      console.error("Error en checkout:", error);
      alert("Error al procesar la orden");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      {/* Backdrop con animación */}
      <div 
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal con animación de entrada */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="w-full max-w-xl rounded-lg bg-white shadow-2xl transform transition-all duration-300 scale-100 opacity-100 pointer-events-auto overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <h2 className="text-xl font-bold">🛒 Tu carrito</h2>
            <div className="flex gap-3">
              {items.length > 0 && (
                <button 
                  onClick={clear} 
                  className="text-sm hover:text-red-200 transition-colors duration-200 font-medium"
                >
                  Vaciar
                </button>
              )}
              <button 
                onClick={onClose} 
                className="text-sm hover:text-gray-200 transition-colors duration-200 font-medium"
              >
                ✕ Cerrar
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-96 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛍️</div>
                <p className="text-gray-500">El carrito está vacío</p>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((it, idx) => (
                  <div
                    key={it.product.id}
                    className="flex items-center justify-between border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-all duration-200 transform hover:scale-[1.02]"
                    style={{
                      animation: `slideIn 0.3s ease-out ${idx * 0.1}s both`
                    }}
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">{it.product.name}</div>
                      <div className="text-sm text-gray-500 mt-1">{it.product.category}</div>
                      <div className="text-sm font-medium text-blue-600 mt-1">
                        ${it.product.priceCOP.toLocaleString("es-CO")} COP
                      </div>
                    </div>
                    
                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mx-4">
                      <button
                        onClick={() => updateQuantity(it.product.id, it.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center font-bold"
                      >
                        −
                      </button>
                      <span className="font-semibold text-lg w-8 text-center">{it.quantity}</span>
                      <button
                        onClick={() => updateQuantity(it.product.id, it.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200 flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-gray-800">
                        ${(it.product.priceCOP * it.quantity).toLocaleString("es-CO")}
                      </div>
                      <button 
                        onClick={() => removeItem(it.product.id)} 
                        className="text-sm text-red-500 hover:text-red-700 transition-colors duration-200 mt-1"
                      >
                        🗑️ Quitar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold text-gray-700">Total:</div>
                <div className="text-2xl font-bold text-gray-900">
                  ${totalCOP().toLocaleString("es-CO")} COP
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isCheckingOut ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span> Procesando...
                  </span>
                ) : (
                  "✨ Finalizar compra"
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl p-8 text-center transform animate-bounce-in">
            <div className="text-6xl mb-4 animate-pulse">✅</div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">¡Compra exitosa!</h3>
            <p className="text-gray-600">Tu pedido ha sido procesado correctamente</p>
            {orderId && (
              <p className="text-sm text-gray-500 mt-2">
                Número de orden: <span className="font-mono font-semibold">{orderId}</span>
              </p>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
}
