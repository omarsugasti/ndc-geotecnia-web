import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casos de éxito de estudios geotécnicos, anclajes y estabilización de taludes ejecutados por NDC Geotecnia en Panamá.",
};

// Cada proyecto usa datos reales confirmados por NDC. No se inventa contenido aquí.
const proyectos: {
  nombre: string;
  ubicacion: string;
  cliente?: string;
  problema: string;
  solucion: string[];
  resultado: string;
  imagenes?: { src: string; alt: string }[];
}[] = [
  {
    nombre: "Estabilización de talud rocoso — Cierre de mina",
    ubicacion: "Cantera El Cerro I, cerca de la Carretera Transístmica, Panamá",
    cliente: "CEMEX",
    problema:
      "Talud rocoso de una cantera en proceso de cierre de mina, con un macizo fracturado que requería una evaluación formal de estabilidad antes de la clausura definitiva del sitio.",
    solucion: [
      "Reconocimiento geológico y caracterización del macizo rocoso: mapeo litológico y clasificación geomecánica RMR de Bieniawski (1989), para zonificar el macizo según su grado de fracturamiento y vulnerabilidad.",
      "Estudio cinemático de campo, ejecutado por personal certificado en técnicas de rappel, utilizando el software Midland Valley FieldMove Clino para medir discontinuidades (planos, fracturas, fallas y diaclasas) en modo dip / dip direction.",
      "Análisis cinemático y estereográfico para determinar los mecanismos de falla más probables: desprendimiento, deslizamiento planar, falla en cuña, vuelco/volteo y vuelco por flexión o pandeo.",
      "Cálculo de estabilidad del talud considerando anisotropía generalizada del macizo, mediante el método RUVOLUM de GEOBRUGG.",
      "Ejecución de obra: perforaciones e instalación de malla de alta resistencia GEOBRUGG MINAX® G80/3, con platinas y sistema de cable.",
    ],
    resultado:
      "Talud estabilizado con sistema de malla de alta resistencia GEOBRUGG antes del cierre de la mina. El caso fue presentado como estudio técnico en el Congreso GEOBRUGG Panamá 2022, con autorización de CEMEX para su publicación.",
    imagenes: [
      {
        src: "/images/proyectos/cierre-mina-cemex-1.jpg",
        alt: "Talud de cantera con malla GEOBRUGG MINAX instalada, vista aérea",
      },
      {
        src: "/images/proyectos/cierre-mina-cemex-2.jpg",
        alt: "Instalación de malla en talud rocoso desde plataforma suspendida",
      },
    ],
  },
];

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
        <div className="space-y-10">
          {proyectos.map((p) => (
            <article
              key={p.nombre}
              className="rounded-xl border border-neutral-200 overflow-hidden"
            >
              {p.imagenes && p.imagenes.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-neutral-100">
                  {p.imagenes.map((img) => (
                    <div key={img.src} className="relative h-64">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
              <div className="p-6">
                <h2 className="font-semibold text-xl text-neutral-900 mb-1">{p.nombre}</h2>
                <p className="text-sm text-neutral-500 mb-4">
                  {p.ubicacion}
                  {p.cliente && (
                    <>
                      {" "}
                      · Cliente: <span className="font-medium text-neutral-700">{p.cliente}</span>
                    </>
                  )}
                </p>

                <p className="text-sm text-neutral-700 mb-4">
                  <span className="font-semibold text-neutral-900">Problema: </span>
                  {p.problema}
                </p>

                <p className="text-sm font-semibold text-neutral-900 mb-2">Solución:</p>
                <ul className="list-disc list-inside space-y-1.5 mb-4">
                  {p.solucion.map((paso, i) => (
                    <li key={i} className="text-sm text-neutral-700">
                      {paso}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-neutral-700">
                  <span className="font-semibold text-neutral-900">Resultado: </span>
                  {p.resultado}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
