export interface Product {
  id: string;
  name: string;
  category: string;
  priceCOP: number; // precio en pesos colombianos
  image?: string;
  description?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
