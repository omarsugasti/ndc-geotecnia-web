import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articulos, getArticulo } from "../data";

export function generateStaticParams() {
  return articulos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const articulo = getArticulo(slug);
  if (!articulo) return {};
  return {
    title: articulo.titulo,
    description: articulo.resumen,
    alternates: { canonical: `/blog/${articulo.slug}` },
  };
}

export default async function ArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articulo = getArticulo(slug);
  if (!articulo) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <nav className="text-sm text-neutral-500 mb-4">
        <Link href="/blog" className="hover:text-steel-700">
          Blog
        </Link>{" "}
        / <span className="text-neutral-700">{articulo.titulo}</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
        {articulo.titulo}
      </h1>
      <div className="prose-neutral">
        {articulo.parrafos.map((p, i) => (
          <p key={i} className="text-neutral-700 leading-relaxed mb-4">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-neutral-50 border border-neutral-100 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">
          ¿Tienes un proyecto que necesita evaluación geotécnica?
        </p>
        <a
          href="https://wa.me/50766719558?text=Hola%2C%20quiero%20solicitar%20una%20*COTIZACI%C3%93N*%20%E2%80%94%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20NDC%20Geotecnia."
          className="whitespace-nowrap rounded-full bg-steel-700 text-white font-semibold px-5 py-2.5 text-sm hover:bg-steel-600"
        >
          Escribir por WhatsApp →
        </a>
      </div>
    </article>
  );
}
