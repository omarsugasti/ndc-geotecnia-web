import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos por WhatsApp o correo para solicitar una cotización de estudios geotécnicos en Panamá.",
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        Cuéntanos tu proyecto
      </h1>
      <p className="text-neutral-600 mb-10">
        Descríbenos qué necesitas — el tipo de terreno, la ubicación, el alcance
        aproximado. Te respondemos rápido con una propuesta o con preguntas para
        afinar el presupuesto.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="https://wa.me/50766719558?text=Hola%2C%20quiero%20solicitar%20una%20*COTIZACI%C3%93N*%20%E2%80%94%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20NDC%20Geotecnia."
          className="rounded-xl border border-neutral-200 p-6 hover:border-steel-600 hover:shadow-sm transition"
        >
          <p className="font-semibold text-neutral-900">WhatsApp</p>
          <p className="text-neutral-600 text-sm mt-1">+507 6671 9558</p>
          <span className="mt-3 inline-block text-sm font-semibold text-steel-700">
            Escribir ahora →
          </span>
        </a>
        <a
          href="mailto:proyectos@ndc-geotecnia.com"
          className="rounded-xl border border-neutral-200 p-6 hover:border-steel-600 hover:shadow-sm transition"
        >
          <p className="font-semibold text-neutral-900">Correo</p>
          <p className="text-neutral-600 text-sm mt-1">proyectos@ndc-geotecnia.com</p>
          <span className="mt-3 inline-block text-sm font-semibold text-steel-700">
            Enviar correo →
          </span>
        </a>
      </div>
    </section>
  );
}
