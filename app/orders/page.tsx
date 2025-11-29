"use client";
import React, { useEffect, useState } from "react";

interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  pricePerUnit: number;
}

interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  customerName: string;
  customerEmail: string;
  status: "pending" | "confirmed" | "completed";
  createdAt: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/orders")
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.orders);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-800",
      confirmed: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
    };
    const labels = {
      pending: "Pendiente",
      confirmed: "Confirmada",
      completed: "Completada",
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Cargando órdenes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-black">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📦 Historial de Órdenes</h1>
        <p className="text-gray-600">Administración de pedidos del sistema</p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-gray-500">No hay órdenes registradas</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{order.id}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleString("es-CO", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
                {getStatusBadge(order.status)}
              </div>

              <div className="border-t pt-4 mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Productos:</h4>
                <div className="space-y-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.productName} x{item.quantity}
                      </span>
                      <span className="font-medium">
                        ${(item.pricePerUnit * item.quantity).toLocaleString("es-CO")} COP
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Cliente: <span className="font-medium">{order.customerName}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Total</div>
                  <div className="text-xl font-bold text-blue-600">
                    ${order.total.toLocaleString("es-CO")} COP
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
