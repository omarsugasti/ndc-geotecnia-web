import Link from "next/link";

const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/academia", label: "Academia" },
  { href: "/blog", label: "Blog" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-steel-700">
          NDC Geotecnia
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-700">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-steel-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://wa.me/50766719558"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-steel-700 text-white text-sm font-semibold px-4 py-2 hover:bg-steel-600"
        >
          Solicitar cotización
        </a>
      </div>
    </header>
  );
}
