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
    id: "m02",
    name: "Rack de sentadillas",
    category: "Máquinas",
    priceCOP: 2800000,
    description: "Rack profesional con barra olímpica incluida",
  },
  {
    id: "m03",
    name: "Caminadora eléctrica",
    category: "Máquinas",
    priceCOP: 3500000,
    description: "Caminadora con 12 programas y monitor LCD",
  },
  {
    id: "m04",
    name: "Bicicleta estática",
    category: "Máquinas",
    priceCOP: 1200000,
    description: "Bicicleta con resistencia magnética ajustable",
  },
  {
    id: "d01",
    name: "Mancuernas 10kg (par)",
    category: "Mancuernas",
    priceCOP: 180000,
    description: "Par de mancuernas recubiertas en neopreno",
  },
  {
    id: "d02",
    name: "Mancuernas ajustables 2-24kg",
    category: "Mancuernas",
    priceCOP: 650000,
    description: "Set ajustable con selector rápido",
  },
  {
    id: "d03",
    name: "Barra olímpica 20kg",
    category: "Mancuernas",
    priceCOP: 450000,
    description: "Barra olímpica de 2.2m con rodamientos",
  },
  {
    id: "d04",
    name: "Set de discos 100kg",
    category: "Mancuernas",
    priceCOP: 800000,
    description: "Set completo de discos de hierro fundido",
  },
  {
    id: "d05",
    name: "Kettlebell 16kg",
    category: "Mancuernas",
    priceCOP: 120000,
    description: "Kettlebell de hierro fundido con acabado premium",
  },
  {
    id: "a01",
    name: "Banda de resistencia (Set 5)",
    category: "Accesorios",
    priceCOP: 85000,
    description: "Set de 5 bandas con diferentes resistencias",
  },
  {
    id: "a02",
    name: "Guantes de entrenamiento",
    category: "Accesorios",
    priceCOP: 45000,
    description: "Guantes con agarre antideslizante",
  },
  {
    id: "a03",
    name: "Cuerda para saltar",
    category: "Accesorios",
    priceCOP: 35000,
    description: "Cuerda ajustable con rodamientos",
  },
  {
    id: "a04",
    name: "Colchoneta yoga premium",
    category: "Accesorios",
    priceCOP: 95000,
    description: "Colchoneta antideslizante de 6mm",
  },
  {
    id: "a05",
    name: "Cinturón de levantamiento",
    category: "Accesorios",
    priceCOP: 150000,
    description: "Cinturón de cuero para levantamiento de peso",
  },
  {
    id: "p01",
    name: "Proteína Whey 2kg",
    category: "Suplementos",
    priceCOP: 120000,
    description: "Proteína de suero con 24g por porción",
  },
  {
    id: "p02",
    name: "BCAA 300g",
    category: "Suplementos",
    priceCOP: 90000,
    description: "Aminoácidos ramificados 2:1:1",
  },
  {
    id: "p03",
    name: "Creatina monohidrato 500g",
    category: "Suplementos",
    priceCOP: 75000,
    description: "Creatina pura micronizada",
  },
  {
    id: "p04",
    name: "Pre-entreno 300g",
    category: "Suplementos",
    priceCOP: 110000,
    description: "Fórmula energética con cafeína y beta-alanina",
  },
  {
    id: "p05",
    name: "Multivitamínico (60 tabs)",
    category: "Suplementos",
    priceCOP: 65000,
    description: "Complejo vitamínico completo",
  },
];

export async function GET() {
  return NextResponse.json(products);
}
