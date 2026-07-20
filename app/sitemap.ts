import type { MetadataRoute } from "next";

const servicios = [
  "anclajes",
  "estabilizacion-de-taludes",
  "shotcrete",
  "micropilotes",
  "estudios-de-suelos",
  "prospeccion-mineral",
  "mallas-geobrugg",
  "monitoreo-satelital",
];

const blog = [
  "que-es-un-estudio-de-suelo",
  "diferencia-entre-spt-y-cpt",
  "cuando-se-necesitan-micropilotes",
  "como-prevenir-deslizamientos-de-tierra",
  "que-es-el-shotcrete",
  "que-es-el-rep-2021",
  "deslizamientos-2025-cifras-globales",
  "inteligencia-artificial-geotecnia-tendencias",
  "cimentaciones-mas-profundas-del-mundo",
];

const proyectos = ["cierre-mina-cemex", "fotovoltaico-san-bartolo", "puntos-criticos-llano-tugri"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ndc-geotecnia.com";
  const now = new Date();

  const staticPages = [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/servicios`, priority: 0.9 },
    { url: `${base}/proyectos`, priority: 0.8 },
    { url: `${base}/academia`, priority: 0.6 },
    { url: `${base}/blog`, priority: 0.7 },
    { url: `${base}/nosotros`, priority: 0.5 },
    { url: `${base}/contacto`, priority: 0.6 },
    { url: `${base}/politica-de-privacidad`, priority: 0.3 },
  ];

  const servicePages = servicios.map((slug) => ({
    url: `${base}/servicios/${slug}`,
    priority: 0.9,
  }));

  const blogPages = blog.map((slug) => ({
    url: `${base}/blog/${slug}`,
    priority: 0.6,
  }));

  const proyectoPages = proyectos.map((slug) => ({
    url: `${base}/proyectos/${slug}`,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages, ...proyectoPages].map((entry) => ({
    ...entry,
    lastModified: now,
    changeFrequency: "monthly" as const,
  }));
}
