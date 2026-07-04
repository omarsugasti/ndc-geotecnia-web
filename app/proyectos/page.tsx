import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casos de éxito de estudios geotécnicos, anclajes y estabilización de taludes ejecutados por NDC Geotecnia en Panamá.",
};

// PLANTILLA — reemplazar cada objeto con datos reales de proyectos.
// No se inventó ningún proyecto: esta lista está vacía a propósito.
const proyectos: {
  nombre: string;
  ubicacion: string;
  problema: string;
  solucion: string;
  resultado: string;
}[] = [];

export default function ProyectosPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Proyectos</h1>
      <p className="text-neutral-600 mb-10">
        Trabajos ejecutados en autopistas, edificaciones y proyectos privados donde el
        margen de error es cero.
      </p>

      {proyectos.length === 0 ? (
        <div className="rounded-xl border border-dashed border-neutral-300 p-8 text-center">
          <p className="text-neutral-500">
            Esta sección está lista para recibir casos de éxito reales: ubicación,
            problema, solución aplicada, resultado y fotografías. Compártelos y los
            agrego aquí — cada tarjeta de proyecto sigue este mismo formato.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectos.map((p) => (
            <div key={p.nombre} className="rounded-xl border border-neutral-200 p-6">
              <h2 className="font-semibold text-lg text-neutral-900 mb-1">{p.nombre}</h2>
              <p className="text-sm text-neutral-500 mb-4">{p.ubicacion}</p>
              <p className="text-sm text-neutral-700 mb-2">
                <span className="font-semibold">Problema:</span> {p.problema}
              </p>
              <p className="text-sm text-neutral-700 mb-2">
                <span className="font-semibold">Solución:</span> {p.solucion}
              </p>
              <p className="text-sm text-neutral-700">
                <span className="font-semibold">Resultado:</span> {p.resultado}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
