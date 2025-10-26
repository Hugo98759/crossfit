import { NextResponse } from "next/server";
import type { Product } from "../../../types";

const products: Product[] = [
  {
    id: "m01",
    name: "Máquina multiestación",
    category: "Máquinas",
    priceCOP: 4200000,
    description: "Máquina completa para ejercicios de fuerza",
  },
  {
    id: "d01",
    name: "Mancuernas 10kg (par)",
    category: "Mancuernas",
    priceCOP: 180000,
    description: "Par de mancuernas recubiertas",
  },
  {
    id: "d02",
    name: "Mancuernas ajustables 2-24kg",
    category: "Mancuernas",
    priceCOP: 650000,
  },
  {
    id: "p01",
    name: "Proteína Whey 2kg",
    category: "Proteínas",
    priceCOP: 120000,
  },
  {
    id: "p02",
    name: "BCAA 300g",
    category: "Proteínas",
    priceCOP: 90000,
  },
];

export async function GET() {
  return NextResponse.json(products);
}
