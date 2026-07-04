# ndc-geotecnia-web

Reconstrucción de ndc-geotecnia.com con arquitectura multipágina (Next.js 16, App Router).
Compilado y verificado — genera 21 páginas estáticas, incluyendo `/robots.txt` y `/sitemap.xml` reales.

## Qué incluye

- Página de inicio con el contenido real ya publicado (servicios, clientes, cifras, testimonios).
- Una página propia por servicio en `/servicios/[slug]` (antes eran anclas en una sola página).
- Blog técnico en `/blog` con 4 artículos educativos.
- `/academia`: glosario geotécnico y espacio para guías descargables.
- `/proyectos`: plantilla vacía a propósito — sin casos inventados. Complétala con proyectos reales.
- `/nosotros` y `/contacto`.
- `robots.txt` y `sitemap.xml` generados automáticamente por Next.js (`app/robots.ts`, `app/sitemap.ts`).

## Pendiente de tu parte (no se inventó nada aquí)

- Imágenes reales (`/public/images/...`): logo, foto del hero, fotos de clientes, shotcrete, etc. El sitio anterior las tenía en Vercel; hay que volver a subirlas.
- Casos de éxito reales en `/proyectos` (usa el formato ya definido en `app/proyectos/page.tsx`).
- Fotos/certificaciones/equipo para ampliar `/nosotros`.

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

## Cómo desplegarlo

**Opción recomendada — conectar a GitHub primero (para no perder el código de nuevo):**

1. Crea un repositorio en GitHub y sube esta carpeta.
2. En Vercel, en el proyecto existente ("site"), ve a Settings → Git → Connect y conecta ese repositorio.
3. Cada push a `main` desplegará automáticamente.

**Opción rápida — desplegar directo sin Git:**

```bash
npm i -g vercel
vercel login
vercel link   # vincula con el proyecto "site" ya existente
vercel --prod
```

## Notas técnicas

- Next.js 16.2.10 (la versión 15.1.6 tenía una vulnerabilidad conocida, CVE-2025-66478 — se usó la versión parcheada).
- Todos los textos de servicios y del blog son contenido técnico genérico o el mismo contenido ya publicado — no se inventaron clientes, cifras ni casos de éxito.
