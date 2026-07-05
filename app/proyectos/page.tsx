import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { casos } from "./data";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casos de éxito de estudios geotécnicos, anclajes y estabilización de taludes ejecutados por NDC Geotecnia en Panamá.",
};

export default function ProyectosPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Proyectos</h1>
      <p className="text-neutral-600 mb-10">
        Trabajos ejecutados en autopistas, edificaciones y proyectos privados donde el
        margen de error es cero.
      </p>

      {casos.length === 0 ? (
        <div className="rounded-xl border border-dashed border-neutral-300 p-8 text-center">
          <p className="text-neutral-500">
            Esta sección está lista para recibir casos de éxito reales: ubicación,
            problema, solución aplicada, resultado y fotografías. Compártelos y los
            agrego aquí.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {casos.map((c) => (
            <Link
              key={c.slug}
              href={`/proyectos/${c.slug}`}
              className="block rounded-xl border border-neutral-200 overflow-hidden hover:border-steel-600 hover:shadow-sm transition"
            >
              {c.etapas[c.etapas.length - 1]?.imagenes[0] && (
                <div className="relative h-56">
                  <Image
                    src={c.etapas[c.etapas.length - 1].imagenes[0].src}
                    alt={c.etapas[c.etapas.length - 1].imagenes[0].alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="font-semibold text-xl text-neutral-900 mb-1">{c.nombre}</h2>
                <p className="text-sm text-neutral-500 mb-3">
                  {c.ubicacion} · Cliente:{" "}
                  <span className="font-medium text-neutral-700">{c.cliente}</span>
                </p>
                <p className="text-sm text-neutral-700 mb-3">{c.resumen}</p>
                <span className="text-sm font-semibold text-steel-700">
                  Ver caso completo →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
