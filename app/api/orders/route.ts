import { NextRequest, NextResponse } from "next/server";

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  pricePerUnit: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  customerName: string;
  customerEmail: string;
  status: "pending" | "confirmed" | "completed";
  createdAt: string;
}

// Almacenamiento en memoria (se reinicia al reiniciar el servidor)
export let orders: Order[] = [];
let orderCounter = 1;

// GET /api/orders - Obtener todas las órdenes
export async function GET() {
  return NextResponse.json({
    success: true,
    orders: orders.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ),
  });
}

// POST /api/orders - Crear una nueva orden
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, customerName, customerEmail } = body;

    // Validaciones básicas
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Items son requeridos" },
        { status: 400 }
      );
    }

    if (!customerName || !customerEmail) {
      return NextResponse.json(
        { success: false, error: "Nombre y email del cliente son requeridos" },
        { status: 400 }
      );
    }

    // Calcular total
    const total = items.reduce(
      (sum, item) => sum + item.quantity * item.pricePerUnit,
      0
    );

    // Crear nueva orden
    const newOrder: Order = {
      id: `ORD-${String(orderCounter).padStart(5, "0")}`,
      items,
      total,
      customerName,
      customerEmail,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };

    orders.push(newOrder);
    orderCounter++;

    return NextResponse.json(
      {
        success: true,
        message: "Orden creada exitosamente",
        order: newOrder,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { success: false, error: "Error al procesar la orden" },
      { status: 500 }
    );
  }
}
