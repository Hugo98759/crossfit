import express from "express";
import cors from "cors";
import { Product } from "../types";

const app = express();
app.use(cors());
app.use(express.json());

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

app.get("/api/products", (_req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const p = products.find((x) => x.id === req.params.id);
  if (!p) return res.status(404).json({ error: "not found" });
  res.json(p);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API server running at http://localhost:${port}`);
});
