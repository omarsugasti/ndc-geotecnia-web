import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDC Academia — Glosario y Recursos Geotécnicos",
  description:
    "Glosario geotécnico, preguntas frecuentes y guías descargables sobre estudios de suelos, anclajes y estabilización de taludes.",
};

const glosario = [
  { termino: "SPT (Ensayo de Penetración Estándar)", definicion: "Ensayo de campo que mide la resistencia del suelo contando los golpes necesarios para hincar una toma-muestras normalizada, y que además permite obtener una muestra alterada para clasificación en laboratorio." },
  { termino: "CPT (Ensayo de Penetración de Cono)", definicion: "Ensayo de campo que empuja un cono instrumentado a velocidad constante, registrando de forma continua la resistencia y fricción del suelo." },
  { termino: "Capacidad portante", definicion: "La carga máxima que un suelo puede soportar por unidad de área sin fallar ni generar asentamientos excesivos." },
  { termino: "Talud", definicion: "Superficie inclinada de terreno, natural o construida, cuya estabilidad depende del balance entre fuerzas resistentes y fuerzas que buscan moverlo." },
  { termino: "Micropilote", definicion: "Elemento de cimentación profunda de pequeño diámetro, perforado e inyectado con lechada de cemento, usado cuando el suelo superficial no tiene capacidad suficiente o el acceso es limitado." },
  { termino: "Anclaje geotécnico", definicion: "Elemento estructural de acero instalado en una perforación e inyectado a presión, que transfiere carga de una estructura hacia un estrato de suelo o roca competente." },
  { termino: "Shotcrete", definicion: "Concreto proyectado a alta velocidad sobre una superficie, usado para protección y refuerzo de taludes y excavaciones." },
  { termino: "Nivel freático", definicion: "Profundidad a la que se encuentra el agua subterránea en un punto determinado, dato clave para el diseño de cimentaciones y excavaciones." },
  { termino: "Asentamiento diferencial", definicion: "Hundimiento desigual de distintos puntos de una cimentación, causa frecuente de grietas estructurales." },
  { termino: "Estratigrafía", definicion: "Descripción ordenada de las capas de suelo o roca encontradas a distintas profundidades en un sitio." },
];

export default function AcademiaPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">NDC Academia</h1>
      <p className="text-neutral-600 mb-12 max-w-2xl">
        Recursos técnicos abiertos para ingenieros, estudiantes y cualquier persona que
        quiera entender mejor la geotecnia. Sin promesas de biblioteca infinita — esto
        crece con contenido real, a un ritmo sostenible.
      </p>

      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Glosario geotécnico</h2>
      <div className="space-y-4 mb-16">
        {glosario.map((g) => (
          <div key={g.termino} className="border-b border-neutral-100 pb-4">
            <p className="font-semibold text-neutral-900">{g.termino}</p>
            <p className="text-sm text-neutral-600 mt-1">{g.definicion}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-dashed border-neutral-300 p-8 text-center">
        <p className="font-semibold text-neutral-900 mb-2">Guías descargables</p>
        <p className="text-neutral-500 text-sm">
          Próximamente: guías en PDF sobre cómo interpretar un informe de suelos, qué
          preguntar antes de contratar un estudio geotécnico, y checklist de
          documentos para permisos de construcción. Se publican aquí a medida que se
          producen — no como una lista prometida de antemano.
        </p>
      </div>
    </section>
  );
}
