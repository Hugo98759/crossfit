import { NextRequest, NextResponse } from "next/server";
import { orders } from "../route";

// GET /api/orders/[id] - Obtener una orden específica por ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const orderId = params.id;
  const order = orders.find((o) => o.id === orderId);

  if (!order) {
    return NextResponse.json(
      { success: false, error: "Orden no encontrada" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    order,
  });
}
