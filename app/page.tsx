import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-gray-100">
      {/* Hero: larger, more content and full-bleed centered card */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-xl bg-white p-12 text-center shadow-2xl border border-gray-100">
          <div className="text-6xl mb-4">🏋️</div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">GymStore</h1>
          <p className="text-xl text-blue-600 font-semibold mb-6">
            Tu tienda de equipamiento deportivo
          </p>
          <p className="text-lg text-gray-700">
            Venta de máquinas, mancuernas, accesorios y suplementos — calidad profesional y entrega nacional.
          </p>

          <p className="mt-6 text-sm text-gray-600 max-w-2xl mx-auto">
            En GymStore encontrarás equipos y accesorios para todo tipo de entrenamiento: fuerza,
            funcional y acondicionamiento. Precios en COP, garantía limitada y asesoría básica incluida.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
              <span className="text-2xl">🏋️</span>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Máquinas</div>
                <div className="text-sm text-gray-600">Equipamiento profesional</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
              <span className="text-2xl">💪</span>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Pesas y Barras</div>
                <div className="text-sm text-gray-600">Variedad de pesos</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg">
              <span className="text-2xl">🎽</span>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Accesorios</div>
                <div className="text-sm text-gray-600">Todo lo que necesitas</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-lg">
              <span className="text-2xl">🥤</span>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Suplementos</div>
                <div className="text-sm text-gray-600">Nutrición deportiva</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/catalog" 
              className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-3 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🛍️ Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
