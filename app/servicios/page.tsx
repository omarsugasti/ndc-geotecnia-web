import type { Metadata } from "next";
import Link from "next/link";
import { servicios } from "./data";

export const metadata: Metadata = {
  title: "Servicios de Geotecnia en Panamá",
  description:
    "Estudios de suelos, anclajes, estabilización de taludes, shotcrete, micropilotes y prospección mineral. Ingeniería geotécnica en Panamá.",
};

export default function ServiciosPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        Servicios de Geotecnia en Panamá
      </h1>
      <p className="text-neutral-600 max-w-2xl mb-12">
        Cada servicio parte de un diagnóstico real del terreno. Sin atajos, sin
        soluciones genéricas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((s) => (
          <Link
            key={s.slug}
            href={`/servicios/${s.slug}`}
            className="block rounded-xl border border-neutral-200 p-6 hover:border-steel-600 hover:shadow-sm transition"
          >
            <h2 className="font-semibold text-lg text-neutral-900 mb-2">{s.nombre}</h2>
            <p className="text-sm text-neutral-600">{s.resumen}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-steel-700">
              Ver más →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
