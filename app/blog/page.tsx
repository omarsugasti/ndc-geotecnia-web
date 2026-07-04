import type { Metadata } from "next";
import Link from "next/link";
import { articulos } from "./data";

export const metadata: Metadata = {
  title: "Blog Técnico",
  description:
    "Artículos técnicos sobre estudios de suelos, geotecnia y estabilización de taludes en Panamá.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Blog Técnico</h1>
      <p className="text-neutral-600 mb-10">
        Contenido educativo sobre geotecnia, escrito para clientes, ingenieros y
        cualquiera que necesite entender qué hay debajo de su proyecto.
      </p>
      <div className="space-y-6">
        {articulos.map((a) => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            className="block rounded-xl border border-neutral-200 p-6 hover:border-steel-600 hover:shadow-sm transition"
          >
            <h2 className="font-semibold text-lg text-neutral-900 mb-2">{a.titulo}</h2>
            <p className="text-sm text-neutral-600">{a.resumen}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
