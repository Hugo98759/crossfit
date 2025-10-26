import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero: larger, more content and full-bleed centered card */}
      <section className="mx-auto w-full max-w-5xl px-6 py-32">
        <div className="mx-auto max-w-3xl rounded-md bg-white p-12 text-center shadow-md">
          <h1 className="text-4xl font-extrabold text-black">GymStore</h1>
          <p className="mt-4 text-lg text-gray-700">
            Venta de máquinas, mancuernas y suplementos — calidad profesional y entrega nacional.
          </p>

          <p className="mt-6 text-sm text-gray-600">
            En GymStore encontrarás equipos y accesorios para todo tipo de entrenamiento: fuerza,
            funcional y acondicionamiento. Precios en COP, garantía limitada y asesoría básica incluida.
          </p>

          <ul className="mt-6 flex flex-col gap-2 text-left text-gray-700 sm:flex-row sm:justify-center sm:gap-6">
            <li className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-green-600" /> Máquinas y racks
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-green-600" /> Mancuernas y barras
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-green-600" /> Proteínas y suplementos
            </li>
          </ul>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/catalog" className="rounded bg-blue-600 px-5 py-2 text-white">
              Ver Catálogo
            </Link>
            <a href="#contact" className="rounded border border-gray-300 px-5 py-2 text-gray-700">
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
