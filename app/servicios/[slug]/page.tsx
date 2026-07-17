import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicios, getServicio } from "../data";

export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) return {};
  return {
    title: servicio.tituloSeo,
    description: servicio.resumen,
    alternates: { canonical: `/servicios/${servicio.slug}` },
  };
}

export default async function ServicioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) return notFound();

  const mensajeWhatsapp = encodeURIComponent(
    `Hola, quiero solicitar una *COTIZACIÓN* para el servicio de ${servicio.nombre} — vengo de la página web de NDC Geotecnia.`
  );
  const linkWhatsapp = `https://wa.me/50766719558?text=${mensajeWhatsapp}`;

  return (
    <>
      <section className="bg-neutral-50 border-b border-neutral-100">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <nav className="text-sm text-neutral-500 mb-4">
            <Link href="/servicios" className="hover:text-steel-700">
              Servicios
            </Link>{" "}
            / <span className="text-neutral-700">{servicio.nombre}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {servicio.nombre} en Panamá
          </h1>
          <p className="text-lg text-neutral-600">{servicio.intro}</p>
          <a
            href={linkWhatsapp}
            className="mt-6 inline-block rounded-full bg-steel-700 text-white font-semibold px-6 py-3 hover:bg-steel-600"
          >
            Solicitar cotización
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 space-y-12">
        {servicio.secciones.map((sec) => (
          <div key={sec.titulo}>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">{sec.titulo}</h2>
            {sec.parrafos.map((p, i) => (
              <p key={i} className="text-neutral-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        ))}

        {servicio.faqs.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {servicio.faqs.map((f) => (
                <div key={f.pregunta} className="rounded-lg border border-neutral-200 p-4">
                  <p className="font-semibold text-neutral-900 mb-1">{f.pregunta}</p>
                  <p className="text-neutral-600 text-sm">{f.respuesta}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="rounded-2xl bg-steel-700 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-semibold text-lg">
            ¿Tienes un proyecto que necesita {servicio.nombre.toLowerCase()}?
          </p>
          <a
            href={linkWhatsapp}
            className="whitespace-nowrap rounded-full bg-white text-steel-700 font-semibold px-6 py-3 hover:bg-neutral-100"
          >
            Escribir por WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
