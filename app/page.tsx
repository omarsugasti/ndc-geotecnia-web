import Link from "next/link";

const servicios = [
  {
    slug: "anclajes",
    nombre: "Anclajes",
    resumen:
      "Instalación de anclajes activos y pasivos para contención de estructuras y taludes. Trabajamos con sistemas de inyección a presión en roca y suelo.",
  },
  {
    slug: "estabilizacion-de-taludes",
    nombre: "Estabilización de Taludes",
    resumen:
      "Análisis y solución de taludes inestables. Combinamos malla, shotcrete y anclajes para garantizar la estabilidad a largo plazo.",
  },
  {
    slug: "shotcrete",
    nombre: "Shotcrete",
    resumen:
      "Aplicación de concreto proyectado para revestimiento y protección de superficies rocosas y taludes. Seco o húmedo, según el proyecto.",
  },
  {
    slug: "micropilotes",
    nombre: "Micro Pilotes",
    resumen:
      "Cimentaciones profundas para estructuras en terrenos difíciles. Solución eficiente cuando el acceso es limitado o las cargas son altas.",
  },
  {
    slug: "estudios-de-suelos",
    nombre: "Estudios de Suelos",
    resumen:
      "Exploración geotécnica completa: sondeos, ensayos SPT, muestreo e interpretación de resultados para informes de cimentación.",
  },
  {
    slug: "prospeccion-mineral",
    nombre: "Prospección Mineral",
    resumen:
      "Estudios geológicos para identificar y evaluar depósitos minerales. Cartografía geológica, muestreo y análisis estructural del macizo rocoso.",
  },
];

const clientes = [
  "Empresa Nacional de Autopista (ENA)",
  "Odebrecht Engenharia e Construção",
  "Celsia",
  "CEMEX",
  "Naturgy",
  "Grupo Los Pueblos",
];

const testimonios = [
  {
    texto:
      "El informe de suelos que nos entregaron fue determinante para que la supervisión aprobara el diseño de cimentación. Claros, precisos y dentro del plazo.",
    autor: "Ing. Roberto Castillo",
    cargo: "Director de Proyectos, Constructora Istmo",
  },
  {
    texto:
      "Llevaban el talud años causando problemas. NDC llegó, evaluó la situación y en pocas semanas teníamos la estabilización ejecutada. Sin más incidentes.",
    autor: "Ing. María Fernanda López",
    cargo: "Gerente de Infraestructura",
  },
  {
    texto:
      "Para el proyecto de prospección mineral necesitábamos un equipo que entendiera geología de campo, no solo laboratorio. NDC cumplió con creces.",
    autor: "Carlos Herrera",
    cargo: "Gerente General, Minera Veraguas",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-steel-700 font-semibold text-sm uppercase tracking-wide mb-3">
            Geotecnia · Suelos · Geología
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 max-w-3xl">
            Estudios Geotécnicos, Micropilotes y Estabilización de Taludes en Panamá
          </h1>
          <p className="mt-3 text-lg text-neutral-500 max-w-2xl">
            &ldquo;El terreno habla. Nosotros lo entendemos.&rdquo;
          </p>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl">
            Estudios de suelos, anclajes, estabilización de taludes y más. Llevamos
            más de una década resolviendo los problemas del subsuelo que otros no ven.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/50766719558"
              className="rounded-full bg-steel-700 text-white font-semibold px-6 py-3 hover:bg-steel-600"
            >
              Solicitar cotización por WhatsApp
            </a>
            <a
              href="mailto:proyectos@ndc-geotecnia.com"
              className="rounded-full border border-neutral-300 font-semibold px-6 py-3 hover:bg-neutral-50"
            >
              Escribirnos por correo
            </a>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="border-y border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-center text-sm text-neutral-500 mb-4">Han confiado en nosotros</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-neutral-600 font-medium text-sm">
            {clientes.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-steel-700 font-semibold text-sm uppercase tracking-wide mb-2">
          Lo que hacemos
        </p>
        <h2 className="text-3xl font-bold text-neutral-900 mb-2">
          Servicios especializados en geotecnia
        </h2>
        <p className="text-neutral-600 max-w-2xl mb-10">
          Cada proyecto empieza con un diagnóstico real del terreno. Sin atajos, sin
          soluciones genéricas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="block rounded-xl border border-neutral-200 p-6 hover:border-steel-600 hover:shadow-sm transition"
            >
              <h3 className="font-semibold text-lg text-neutral-900 mb-2">{s.nombre}</h3>
              <p className="text-sm text-neutral-600">{s.resumen}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-steel-700">
                Ver más →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Cifras */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold">+10</p>
            <p className="text-neutral-400 text-sm mt-1">años en el mercado</p>
          </div>
          <div>
            <p className="text-4xl font-bold">+80</p>
            <p className="text-neutral-400 text-sm mt-1">proyectos completados</p>
          </div>
          <div>
            <p className="text-4xl font-bold">6</p>
            <p className="text-neutral-400 text-sm mt-1">servicios especializados</p>
          </div>
          <div>
            <p className="text-4xl font-bold">100%</p>
            <p className="text-neutral-400 text-sm mt-1">equipo técnico propio</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-steel-700 font-semibold text-sm uppercase tracking-wide mb-2">
          Lo que dicen
        </p>
        <h2 className="text-3xl font-bold text-neutral-900 mb-10">Clientes que volvieron</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t) => (
            <blockquote
              key={t.autor}
              className="rounded-xl bg-neutral-50 border border-neutral-100 p-6"
            >
              <p className="text-neutral-700 text-sm mb-4">&ldquo;{t.texto}&rdquo;</p>
              <footer className="text-sm font-semibold text-neutral-900">
                {t.autor}
                <span className="block font-normal text-neutral-500">{t.cargo}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-2xl bg-steel-700 text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Cuéntanos tu proyecto</h2>
            <p className="text-steel-100 max-w-xl">
              Descríbenos qué necesitas — el tipo de terreno, la ubicación, el alcance
              aproximado. Te respondemos rápido con una propuesta o con preguntas para
              afinar el presupuesto.
            </p>
          </div>
          <a
            href="https://wa.me/50766719558"
            className="whitespace-nowrap rounded-full bg-white text-steel-700 font-semibold px-6 py-3 hover:bg-neutral-100"
          >
            Escribir por WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
