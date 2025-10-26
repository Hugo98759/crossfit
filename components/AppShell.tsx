"use client";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartModal from "./CartModal";
import { CartProvider } from "../context/CartContext";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
      <CartProvider>
        <Header onOpenCart={() => setOpen(true)} />
  {/* Increase max-width so content uses more horizontal space on large screens */}
  {/* Add text-black to ensure main content is readable on light backgrounds */}
  <main className="mx-auto w-full max-w-7xl px-6 py-8 text-black">{children}</main>
        <Footer />
        <CartModal open={open} onClose={() => setOpen(false)} />
      </CartProvider>
  );
}
