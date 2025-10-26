import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white px-6 py-6">
      <div className="mx-auto max-w-5xl text-center text-sm text-gray-600">
        © {new Date().getFullYear()} GymStore · Venta de artículos de gimnasio
      </div>
    </footer>
  );
}
