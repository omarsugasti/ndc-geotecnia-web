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
  {
    slug: "fotovoltaico-san-bartolo",
    nombre: "Estudio Geotécnico y Geofísico — Parque Fotovoltaico San Bartolo",
    ubicacion: "San Bartolo, provincia de Veraguas, Panamá",
    cliente: "MASPV Panama",
    resumen:
      "Investigación geotécnica y geofísica completa (sondeos SPT, tomografía eléctrica y análisis de capacidad de carga) para el diseño de fundaciones de un parque fotovoltaico de 25 hectáreas.",
    problema:
      "Un parque fotovoltaico de 25 hectáreas en San Bartolo, Veraguas, requería caracterizar el subsuelo antes del diseño de fundaciones: definir la capacidad de carga para las estructuras de soporte de los paneles, evaluar riesgos de expansión y licuefacción, y determinar los mejores puntos para las puestas a tierra del sistema eléctrico.",
    imagenPortada: {
      src: "/images/proyectos/san-bartolo-1.jpg",
      alt: "Camión perforador de NDC Geotecnia en el terreno del parque fotovoltaico San Bartolo, Veraguas",
    },
    etapas: [
      {
        titulo: "1. Introducción y alcance",
        parrafos: [
          "El proyecto consistió en el estudio geotécnico y geofísico para un parque fotovoltaico de 25 hectáreas en San Bartolo, provincia de Veraguas. El objetivo fue definir los parámetros geotécnicos del subsuelo, caracterizar la estratificación y litología del sitio, y recomendar el sistema de fundación adecuado para las estructuras de soporte.",
          "El alcance de campo incluyó doce (12) sondeos de exploración con muestreo y ensayo de penetración estándar (SPT), complementados con calicatas y un estudio geofísico de resistividad eléctrica mediante tomografía en cuatro (4) líneas distribuidas en el predio.",
        ],
        imagenes: [
          {
            src: "/images/proyectos/san-bartolo-1.jpg",
            alt: "Camión perforador de NDC Geotecnia en el terreno del parque fotovoltaico San Bartolo, Veraguas",
          },
        ],
      },
      {
        titulo: "2. Investigación geotécnica de campo",
        parrafos: [
          "Se ejecutaron doce (12) sondeos de exploración, con recuperación de muestras y ensayo SPT para determinar la compacidad del terreno en cada estrato — que varió de Floja a Muy Densa según el punto y la profundidad.",
          "En ninguno de los 12 pozos se detectó nivel freático, ni siquiera 24 horas después de la perforación, lo cual simplifica el diseño de fundaciones al eliminar el riesgo asociado a suelo saturado en la zona de influencia de las estructuras.",
        ],
        imagenes: [
          {
            src: "/images/proyectos/san-bartolo-2.jpg",
            alt: "Técnico de NDC Geotecnia operando equipo de perforación SPT en campo, San Bartolo",
          },
          {
            src: "/images/proyectos/san-bartolo-3.jpg",
            alt: "Técnico de NDC Geotecnia registrando el perfil de suelo de una calicata excavada en campo",
          },
          {
            src: "/images/proyectos/sbp5-log.jpg",
            alt: "Perfil de perforación SBP-5 con resultados del ensayo SPT, informe MASPV San Bartolo",
          },
        ],
      },
      {
        titulo: "3. Geología y clasificación de suelos",
        parrafos: [
          "Los suelos del área corresponden a depósitos residuales arenosos, producto del intemperismo sobre tobas y brechas volcánicas de las Formaciones Virigua y Boró (Terciario Mioceno Superior). Según los ensayos de laboratorio, se clasificaron bajo el Sistema Unificado de Clasificación de Suelos (SUCS) como arena mal graduada con limo (SP-SM), arena mal graduada con limo y grava (SP-SM), y arena arcillosa (SC).",
        ],
        imagenes: [],
      },
      {
        titulo: "4. Estudio geofísico de resistividad eléctrica",
        parrafos: [
          "Se realizó un estudio de Tomografía Eléctrica (ERT) con configuración Schlumberger-Wenner en cuatro líneas (SBT-1 a SBT-4), cada una con una profundidad de investigación de 6 metros. El objetivo fue identificar las zonas de menor resistividad del terreno — es decir, las más favorables para ubicar las puestas a tierra del sistema eléctrico del parque fotovoltaico, optimizando el diseño y reduciendo costos de instalación.",
        ],
        imagenes: [],
      },
      {
        titulo: "5. Capacidad de carga y análisis de riesgos",
        parrafos: [
          "La capacidad de carga se analizó para micropilotes (perfiles metálicos tipo C) con profundidades de empotramiento de 1.50 y 1.80 metros, definidas por el cliente, aplicando los métodos de Décourt-Quaresma y Aoki-Velloso. Los resultados confirmaron una capacidad de carga ALTA.",
          "En paralelo se evaluaron dos riesgos geotécnicos adicionales: el potencial de expansión de suelos (métodos de Seed et al. 1962 y Dakshanamanthy y Raman 1973), que resultó de BAJO a MEDIO; y el potencial de licuefacción (método de Idriss y Boulanger, 2004, para un sismo de magnitud 7), que determinó que los suelos del proyecto son NO-LICUABLES.",
        ],
        imagenes: [],
      },
      {
        titulo: "6. Zonificación sísmica y recomendaciones",
        parrafos: [
          "La zonificación sísmica del sitio, según el Reglamento para el Diseño Estructural en Panamá (REP-2021), definió un perfil de suelo Tipo B con parámetros S1 = 0.22g, Ss = 0.66g y una aceleración pico del terreno (PGA) de 0.28g.",
          "Entre las recomendaciones generales del informe: mantener los rellenos entre 90% y 95% del Proctor Modificado, control topográfico para evitar empozamiento de agua, materiales de resistencia mínima de f'c = 250 kg/cm² para concreto y Fy = 4200 kg/cm² para acero, y una profundidad mínima de empotramiento de 1.50 metros para las estacas, considerando el factor de volteo por viento.",
        ],
        imagenes: [],
      },
    ],
    resultado:
      "El estudio confirmó que el subsuelo del proyecto tiene capacidad de carga alta y sin restricciones significativas por expansión o licuefacción, permitiendo avanzar con el diseño de fundaciones del parque fotovoltaico. Informe NDC-P-24015, entregado en junio de 2024.",
  },
  {
    slug: "puntos-criticos-llano-tugri",
    nombre: "Remediación de Puntos Críticos — Vía Quebrada Guabo a Llano Tugrí",
    ubicacion: "Comarca Ngäbe-Buglé, Panamá (estaciones 24k+000 a 29k+000)",
    cliente: "Obra vial pública",
    resumen:
      "Estabilización de cuatro puntos críticos (fallas de talud) sobre la vía a Llano Tugrí mediante anclajes con inyección de lechada, malla electrosoldada y shotcrete, en terreno montañoso de acceso difícil.",
    problema:
      "Cuatro puntos de falla activa sobre los taludes de la vía Quebrada Guabo a Llano Tugrí, en las estaciones 24k+000, 26k+000, 28k+000 y 29k+000, con pendientes muy pronunciadas y zonas de difícil acceso. El diseño de estabilización fue entregado por el cliente; NDC ejecutó la obra en su totalidad.",
    imagenPortada: {
      src: "/images/proyectos/llano-tugri-1.jpg",
      alt: "Movilización de equipo de perforación y anclajes instalados en talud de la vía Llano Tugrí",
    },
    etapas: [
      {
        titulo: "1. Movilización y preparación del talud",
        parrafos: [
          "En cada punto crítico se movilizó el equipo de perforación, camiones grúa y maquinaria (compresores, excavadora) hasta el sitio, sobre una vía de montaña de acceso restringido. Antes de perforar, se realizó la limpieza y el desbroce del talud para dejar expuesta la superficie de roca o suelo a tratar.",
        ],
        imagenes: [
          {
            src: "/images/proyectos/llano-tugri-1.jpg",
            alt: "Camión grúa, excavadora y equipo de perforación movilizados en el talud, con anclajes ya instalados en el sector inferior",
          },
        ],
      },
      {
        titulo: "2. Perforación e instalación de anclajes con inyección de lechada",
        parrafos: [
          "Se perforó el talud y se instalaron anclajes de distintas longitudes según el punto (8, 10, 12 y 15 metros), inyectando lechada de fijación en cada perforación para integrar el anclaje a la roca o suelo circundante. En conjunto, los cuatro puntos críticos sumaron alrededor de 1,600 metros lineales de anclajes perforados e inyectados.",
        ],
        imagenes: [
          {
            src: "/images/proyectos/llano-tugri-4.jpg",
            alt: "Equipo de perforación instalando anclajes sobre el talud, con filas de anclajes ya colocados y maquinaria en la vía",
          },
        ],
      },
      {
        titulo: "3. Colocación de malla electrosoldada",
        parrafos: [
          "Sobre los anclajes ya instalados se tendió malla electrosoldada cubriendo toda la superficie del talud, fijada a las cabezas de los anclajes. Esta malla es la que después retiene y refuerza la capa de shotcrete. En total se instalaron más de 1,500 m² de malla entre los cuatro puntos críticos.",
        ],
        imagenes: [
          {
            src: "/images/proyectos/llano-tugri-5.jpg",
            alt: "Malla electrosoldada instalada sobre el talud, fijada a los anclajes previamente colocados",
          },
        ],
      },
      {
        titulo: "4. Aplicación de shotcrete",
        parrafos: [
          "Con la malla fija, se aplicó shotcrete de 15 cm de espesor sobre toda la superficie tratada, usando plataformas suspendidas para alcanzar los sectores más altos y empinados del talud. En los puntos de pendiente más pronunciada, el personal trabajó con técnicas de acceso por cuerda para llegar a zonas que la maquinaria no podía cubrir directamente.",
          "Como cierre, se colocaron las placas y tuercas de fijación en las cabezas de los anclajes, completando el sistema de estabilización en cada punto crítico.",
        ],
        imagenes: [
          {
            src: "/images/proyectos/llano-tugri-3.jpg",
            alt: "Aplicación de shotcrete sobre el talud con bomba y excavadora con plataforma suspendida",
          },
          {
            src: "/images/proyectos/llano-tugri-2.jpg",
            alt: "Shotcrete aplicado en un tramo de fuerte pendiente, con personal en técnicas de acceso por cuerda",
          },
        ],
      },
    ],
    resultado:
      "Los cuatro puntos críticos de la vía Quebrada Guabo a Llano Tugrí quedaron estabilizados con anclajes inyectados, malla electrosoldada y shotcrete, ejecutados entre enero y abril de 2026 sobre un diseño entregado por el cliente.",
  },
];

export function getCaso(slug: string) {
  return casos.find((c) => c.slug === slug);
}
