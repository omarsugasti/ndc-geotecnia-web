"use client";

import { useState } from "react";
import Image from "next/image";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="NDC Geotecnia"
            width={115}
            height={60}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-700">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-steel-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/50766719558?text=Hola%2C%20quiero%20solicitar%20una%20*COTIZACI%C3%93N*%20%E2%80%94%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20NDC%20Geotecnia."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block rounded-full bg-steel-700 text-white text-sm font-semibold px-4 py-2 hover:bg-steel-600"
          >
            Solicitar cotización
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-200 text-neutral-700"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-neutral-200 bg-white">
          <ul className="flex flex-col divide-y divide-neutral-100">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3.5 text-base font-medium text-neutral-800 active:bg-neutral-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 py-4 sm:hidden">
            <a
              href="https://wa.me/50766719558?text=Hola%2C%20quiero%20solicitar%20una%20*COTIZACI%C3%93N*%20%E2%80%94%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20NDC%20Geotecnia."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full bg-steel-700 text-white text-sm font-semibold px-4 py-3 hover:bg-steel-600"
            >
              Solicitar cotización
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
