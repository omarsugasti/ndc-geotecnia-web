import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Empresa panameña de ingeniería geotécnica con más de 20 años de experiencia y más de 80 proyectos completados en Panamá.",
};

export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Nosotros</h1>
      <p className="text-neutral-700 leading-relaxed mb-4">
        NDC Geotecnia es una empresa panameña dedicada a estudios de suelos, geología
        y geotecnia aplicada. Trabajamos con constructoras, ingenieros independientes
        y empresas mineras que necesitan certeza técnica antes de construir — no
        documentos que solo cubren responsabilidades.
      </p>
      <p className="text-neutral-700 leading-relaxed mb-4">
        Con más de 20 años en el mercado (fundada en 2005) y más de 80 proyectos completados, nuestro
        equipo técnico propio cubre todo el ciclo: desde el diagnóstico de campo hasta
        la ejecución de la solución geotécnica, sin subcontratar la parte crítica del
        trabajo.
      </p>
      <p className="text-neutral-700 leading-relaxed mb-4">
        Antes de proponer cualquier intervención, entendemos el problema completo. Esa
        disciplina es la que respalda cada informe que firmamos y cada obra que
        ejecutamos.
      </p>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-steel-700">+20</p>
          <p className="text-neutral-500 text-sm mt-1">años en el mercado</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-steel-700">+80</p>
          <p className="text-neutral-500 text-sm mt-1">proyectos completados</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-steel-700">7</p>
          <p className="text-neutral-500 text-sm mt-1">servicios especializados</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-steel-700">100%</p>
          <p className="text-neutral-500 text-sm mt-1">equipo técnico propio</p>
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-neutral-50 border border-neutral-100 p-6">
        <p className="text-sm text-neutral-500">
          Nota interna: esta sección está lista para ampliarse con fotos del equipo,
          certificaciones, licencias y cobertura geográfica real. Agrégalas cuando las
          tengas a mano — no se inventó ningún dato adicional aquí.
        </p>
      </div>
    </section>
  );
}
