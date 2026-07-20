import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="text-white font-bold text-lg mb-2">NDC Geotecnia</p>
          <p>Estudios confiables, estructuras seguras. Geotecnia profesional en Panamá.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Servicios</p>
          <ul className="space-y-1">
            <li><Link href="/servicios/anclajes">Anclajes</Link></li>
            <li><Link href="/servicios/estabilizacion-de-taludes">Estabilización de Taludes</Link></li>
            <li><Link href="/servicios/shotcrete">Shotcrete</Link></li>
            <li><Link href="/servicios/micropilotes">Micro Pilotes</Link></li>
            <li><Link href="/servicios/estudios-de-suelos">Estudios de Suelos</Link></li>
            <li><Link href="/servicios/prospeccion-mineral">Prospección Mineral</Link></li>
            <li><Link href="/servicios/mallas-geobrugg">Mallas GEOBRUGG</Link></li>
            <li><Link href="/servicios/monitoreo-satelital">Monitoreo Satelital</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Recursos</p>
          <ul className="space-y-1">
            <li><Link href="/academia">NDC Academia</Link></li>
            <li><Link href="/blog">Blog técnico</Link></li>
            <li><Link href="/proyectos">Proyectos</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Contacto</p>
          <ul className="space-y-1">
            <li><a href="https://wa.me/50766719558?text=Hola%2C%20quiero%20solicitar%20una%20*COTIZACI%C3%93N*%20%E2%80%94%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20NDC%20Geotecnia.">+507 6671 9558</a></li>
            <li><a href="mailto:proyectos@ndc-geotecnia.com">proyectos@ndc-geotecnia.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-xs text-neutral-500">
        <span>© {new Date().getFullYear()} NDC Geotecnia. Todos los derechos reservados.</span>
        <span className="hidden sm:inline">·</span>
        <Link href="/politica-de-privacidad" className="hover:text-neutral-300 underline">
          Política de Privacidad
        </Link>
      </div>
    </footer>
  );
}
