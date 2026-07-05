export interface Etapa {
  titulo: string;
  parrafos: string[];
  imagenes: { src: string; alt: string }[];
}

export interface CasoDetallado {
  slug: string;
  nombre: string;
  ubicacion: string;
  cliente: string;
  resumen: string;
  problema: string;
  imagenPortada: { src: string; alt: string };
  etapas: Etapa[];
  resultado: string;
}

// Contenido basado en la presentación técnica de NDC Geotecnia en el
// Congreso GEOBRUGG Panamá 2022, con autorización de CEMEX para su publicación.
export const casos: CasoDetallado[] = [
  {
    slug: "cierre-mina-cemex",
    nombre: "Estabilización de talud rocoso — Cierre de mina",
    ubicacion: "Cantera El Cerro I, cerca de la Carretera Transístmica, Panamá",
    cliente: "CEMEX",
    resumen:
      "Caracterización geológica, estudio cinemático y estabilización con malla GEOBRUGG MINAX® de un talud rocoso como parte del cierre de una cantera.",
    problema:
      "Talud rocoso de una cantera en proceso de cierre de mina, con un macizo fracturado que requería una evaluación formal de estabilidad antes de la clausura definitiva del sitio.",
    imagenPortada: {
      src: "/images/proyectos/cierre-mina-cemex-1.jpg",
      alt: "Talud de cantera con malla GEOBRUGG MINAX instalada, vista aérea",
    },
    etapas: [
      {
        titulo: "1. Introducción y alcance de la obra",
        parrafos: [
          "El proyecto partió de un antecedente concreto: una cantera (Cantera El Cerro I) en proceso de cierre, con un talud rocoso remanente de la explotación que necesitaba una evaluación técnica formal antes de dejar el sitio en su condición final.",
          "El alcance definido cubrió el ciclo completo del análisis geotécnico: reconocimiento geológico, estudio cinemático de campo, procesamiento de datos, cálculo de estabilidad y, finalmente, la ejecución de la obra de estabilización.",
        ],
        imagenes: [
          {
            src: "/images/proyectos/antecedente.jpg",
            alt: "Vista aérea y planta topográfica del sitio de la cantera, cerca de la Carretera Transístmica",
          },
        ],
      },
      {
        titulo: "2. Reconocimiento geológico y caracterización del macizo rocoso",
        parrafos: [
          "El trabajo de campo comenzó con mapeo y descripción litológica del macizo, seguido de una caracterización geomecánica bajo el sistema RMR de Bieniawski (1989). Este índice combina resistencia de la roca intacta, espaciado y condición de las discontinuidades, presencia de agua y orientación de las discontinuidades respecto al talud, para producir una valoración numérica del macizo.",
          "La captura de datos en campo se apoyó en aplicaciones para tablets y celulares, lo que permitió una caracterización más rápida y consistente. Con esa información se zonificó el talud según su índice RMR, identificando los sectores más vulnerables o más fracturados/diaclasados — la base para dirigir el resto del análisis hacia las zonas de mayor riesgo real, no hacia el talud completo por igual.",
        ],
        imagenes: [
          {
            src: "/images/proyectos/reconocimiento-1.jpg",
            alt: "Delimitación de zona de mapeo geológico sobre el talud rocoso, campo",
          },
          {
            src: "/images/proyectos/reconocimiento-2.jpg",
            alt: "Segunda zona de mapeo geológico delimitada sobre el talud",
          },
          {
            src: "/images/proyectos/rmr-metodologia.png",
            alt: "Tabla de parámetros de clasificación geomecánica RMR de Bieniawski (metodología)",
          },
        ],
      },
      {
        titulo: "3. Estudio cinemático de campo",
        parrafos: [
          "Con el macizo zonificado, el siguiente paso fue medir directamente las discontinuidades — planos, fracturas, fallas y diaclasas — en los sectores de interés. Este trabajo lo ejecutó personal certificado en técnicas de rappel, accediendo a zonas del talud que no son alcanzables a pie.",
          "La toma de datos se hizo con Fieldmove Clino, software especializado de Petroleum Experts para medición estructural en campo, registrando cada discontinuidad en modo dip / dip direction. Esto permite ubicar y medir cada plano con precisión y exportar los datos directamente para su procesamiento estadístico posterior.",
        ],
        imagenes: [
          {
            src: "/images/proyectos/cinematico-1.jpg",
            alt: "Equipo preparando el descenso en rappel para el estudio cinemático de campo",
          },
          {
            src: "/images/proyectos/cinematico-2.jpg",
            alt: "Técnico de NDC Geotecnia en rappel, midiendo discontinuidades sobre el talud rocoso",
          },
        ],
      },
      {
        titulo: "4. Procesamiento de datos del estudio cinemático",
        parrafos: [
          "El macizo rocoso está formado por bloques delimitados por un sistema tridimensional de planos de discontinuidad — lo que se conoce como la fábrica estructural del macizo. Con los datos de campo ya digitalizados, se realizó el análisis estereográfico para determinar si la orientación de esas discontinuidades favorece o no la inestabilidad del talud.",
          "Este análisis permitió definir, sector por sector, los mecanismos de falla con mayor probabilidad de ocurrencia. En este caso se identificaron zonas críticas tanto por deslizamiento en cuña (hasta 32% de intersecciones críticas en el sector analizado) como por volteo o volcamiento (hasta 97% de intersecciones críticas en otro sector) — evidencia de que un mismo talud puede requerir tratamientos distintos según el sector.",
        ],
        imagenes: [
          {
            src: "/images/proyectos/analisis-cunas.png",
            alt: "Proyección estereográfica de análisis cinemático de cuñas (32% de intersecciones críticas)",
          },
          {
            src: "/images/proyectos/analisis-volteo.png",
            alt: "Proyección estereográfica de análisis cinemático de volteo (97% de intersecciones críticas)",
          },
        ],
      },
      {
        titulo: "5. Cálculo de estabilidad del talud",
        parrafos: [
          "Con los mecanismos de falla identificados, se pasó al cálculo formal de estabilidad, considerando la anisotropía generalizada del macizo — es decir, que su resistencia no es igual en todas las direcciones, sino que depende de la orientación de las discontinuidades dominantes respecto a la geometría del talud.",
          "El análisis de equilibrio límite (método de Bishop simplificado) se ejecutó en software especializado (Slide, de Rocscience) para obtener el factor de seguridad del talud en su condición actual. En paralelo, se aplicó el método RUVOLUM de GEOBRUGG — la metodología específica para dimensionar sistemas de malla y anclajes de refuerzo superficial — para definir el sistema de estabilización requerido.",
        ],
        imagenes: [
          {
            src: "/images/proyectos/calculo-estabilidad.png",
            alt: "Cálculo de estabilidad de talud con método de Bishop simplificado, software Slide (El Cerro I)",
          },
        ],
      },
      {
        titulo: "6. Ejecución de la obra",
        parrafos: [
          "Con el diseño definido, la ejecución en campo comenzó con las perforaciones para los anclajes de fijación, trabajando desde plataformas suspendidas para alcanzar los sectores identificados como críticos en las etapas anteriores.",
          "Sobre esa base se instaló el sistema de malla de alta resistencia GEOBRUGG MINAX® G80/3, fijado con platinas y cable según las especificaciones técnicas del fabricante — el mismo proceso descrito en detalle en la página de Mallas GEOBRUGG.",
        ],
        imagenes: [
          {
            src: "/images/proyectos/perforacion.jpg",
            alt: "Perforación para anclajes desde plataforma suspendida sobre el talud",
          },
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
    ],
    resultado:
      "Talud estabilizado con sistema de malla de alta resistencia GEOBRUGG antes del cierre de la mina. El caso fue presentado como estudio técnico en el Congreso GEOBRUGG Panamá 2022, con autorización de CEMEX para su publicación.",
  },
];

export function getCaso(slug: string) {
  return casos.find((c) => c.slug === slug);
}
