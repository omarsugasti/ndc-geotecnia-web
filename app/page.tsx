import Image from "next/image";
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
  {
    slug: "mallas-geobrugg",
    nombre: "Protección de Taludes con Mallas GEOBRUGG",
    resumen:
      "Instalación certificada de sistemas TECCO®, SPIDER® y DELTAX® de GEOBRUGG. Más de 40,000 m² instalados en Panamá.",
  },
];

const clientes = [
  { nombre: "Empresa Nacional de Autopista (ENA)", logo: "/images/client-ena.jpg" },
  { nombre: "Odebrecht Engenharia e Construção", logo: "/images/client-odebrecht.jpg" },
  { nombre: "Celsia", logo: "/images/client-celsia.png" },
  { nombre: "CEMEX", logo: null },
  { nombre: "Naturgy", logo: null },
  { nombre: "Grupo Los Pueblos", logo: null },
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
      <section className="relative overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Trabajo de geotecnia en talud rocoso"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center -z-10"
        />
        <div className="absolute inset-0 bg-neutral-900/60 -z-10" />
        <div className="mx-auto max-w-6xl px-4 py-28 md:py-36">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-3">
            Geotecnia · Suelos · Geología
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">
            El terreno habla. Nosotros lo entendemos.
          </h1>
          <p className="mt-4 text-lg text-neutral-200 max-w-2xl">
            Estudios de suelos, anclajes, estabilización de taludes y más. Llevamos
            más de una década resolviendo los problemas del subsuelo que otros no ven.
          </p>
          <blockquote className="mt-4 border-l-4 border-orange-400 pl-4 text-lg italic text-white/90 max-w-xl">
            &ldquo;Estudios confiables, estructuras seguras.&rdquo;
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/50766719558"
              className="rounded-full bg-orange-500 text-white font-semibold px-6 py-3 hover:bg-orange-400"
            >
              Solicitar cotización por WhatsApp
            </a>
            <a
              href="mailto:proyectos@ndc-geotecnia.com"
              className="rounded-full border border-white/40 text-white font-semibold px-6 py-3 hover:bg-white/10"
            >
              Escribirnos por correo
            </a>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="border-y border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-center text-sm text-neutral-500 mb-6">Han confiado en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {clientes.map((c) =>
              c.logo ? (
                <Image
                  key={c.nombre}
                  src={c.logo}
                  alt={c.nombre}
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain grayscale opacity-80"
                />
              ) : (
                <span key={c.nombre} className="text-neutral-600 font-medium text-sm">
                  {c.nombre}
                </span>
              )
            )}
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
            <p className="text-4xl font-bold">7</p>
            <p className="text-neutral-400 text-sm mt-1">servicios especializados</p>
          </div>
          <div>
            <p className="text-4xl font-bold">100%</p>
            <p className="text-neutral-400 text-sm mt-1">equipo técnico propio</p>
          </div>
        </div>
      </section>

      {/* En campo */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <p className="text-steel-700 font-semibold text-sm uppercase tracking-wide mb-2">
          En campo
        </p>
        <h2 className="text-3xl font-bold text-neutral-900 mb-2">
          Proyectos que quedan en pie
        </h2>
        <p className="text-neutral-600 max-w-2xl mb-8">
          Desde estabilización de taludes en autopistas hasta anclajes en
          edificaciones residenciales. Cada proyecto tiene sus propias condiciones
          — y nosotros llegamos preparados para las dos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative h-72 rounded-xl overflow-hidden">
            <Image
              src="/images/shotcrete.jpg"
              alt="Aplicación de shotcrete en talud"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-72 rounded-xl overflow-hidden">
            <Image
              src="/images/collage.jpg"
              alt="Collage de proyectos NDC Geotecnia"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
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
