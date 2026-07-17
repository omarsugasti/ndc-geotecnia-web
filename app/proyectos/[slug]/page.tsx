import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { casos, getCaso } from "../data";

export function generateStaticParams() {
  return casos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) return {};
  return {
    title: caso.nombre,
    description: caso.resumen,
    alternates: { canonical: `/proyectos/${caso.slug}` },
  };
}

export default async function CasoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) return notFound();

  const mensajeWhatsapp = encodeURIComponent(
    `Hola, quiero solicitar una *COTIZACIÓN* — vi el caso "${caso.nombre}" en la página web de NDC Geotecnia y me gustaría más información.`
  );
  const linkWhatsapp = `https://wa.me/50766719558?text=${mensajeWhatsapp}`;

  return (
    <article>
      <section className="bg-neutral-50 border-b border-neutral-100">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <nav className="text-sm text-neutral-500 mb-4">
            <Link href="/proyectos" className="hover:text-steel-700">
              Proyectos
            </Link>{" "}
            / <span className="text-neutral-700">{caso.nombre}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            {caso.nombre}
          </h1>
          <p className="text-sm text-neutral-500 mb-4">
            {caso.ubicacion} · Cliente:{" "}
            <span className="font-medium text-neutral-700">{caso.cliente}</span>
          </p>
          <p className="text-lg text-neutral-600">{caso.resumen}</p>
          <p className="mt-4 text-sm text-neutral-700">
            <span className="font-semibold">Problema: </span>
            {caso.problema}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 space-y-16">
        {caso.etapas.map((etapa) => (
          <div key={etapa.titulo}>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">{etapa.titulo}</h2>
            {etapa.parrafos.map((p, i) => (
              <p key={i} className="text-neutral-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {etapa.imagenes.length > 0 && (
              <div
                className={`grid gap-3 mt-6 ${
                  etapa.imagenes.length === 1
                    ? "grid-cols-1"
                    : etapa.imagenes.length === 2
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1 md:grid-cols-3"
                }`}
              >
                {etapa.imagenes.map((img) => (
                  <div
                    key={img.src}
                    className="relative h-64 rounded-xl overflow-hidden border border-neutral-200"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Resultado</h2>
          <p className="text-neutral-700 leading-relaxed">{caso.resultado}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="rounded-2xl bg-steel-700 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-semibold text-lg">
            ¿Tienes un talud que necesita evaluación técnica?
          </p>
          <a
            href={linkWhatsapp}
            className="whitespace-nowrap rounded-full bg-white text-steel-700 font-semibold px-6 py-3 hover:bg-neutral-100"
          >
            Escribir por WhatsApp →
          </a>
        </div>
      </section>
    </article>
  );
}
