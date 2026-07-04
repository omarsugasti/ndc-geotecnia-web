export interface Articulo {
  slug: string;
  titulo: string;
  resumen: string;
  parrafos: string[];
}

export const articulos: Articulo[] = [
  {
    slug: "que-es-un-estudio-de-suelo",
    titulo: "¿Qué es un estudio de suelo y por qué lo necesitas antes de construir?",
    resumen:
      "Antes de diseñar cualquier cimentación, hay una pregunta que solo un estudio de suelo puede responder con datos reales.",
    parrafos: [
      "Cuando alguien pregunta \"¿qué es un estudio de suelo?\", la respuesta corta es: es la investigación técnica que determina si el terreno donde se va a construir puede soportar la estructura planeada, y de qué manera.",
      "La respuesta larga es más útil. Un estudio de suelo combina trabajo de campo — perforaciones, ensayos de penetración estándar (SPT), muestreo — con análisis de laboratorio de las muestras extraídas, para construir un perfil del subsuelo: qué tipo de material hay a cada profundidad, qué tan resistente es, dónde está el nivel freático, y qué tipo de cimentación es la más adecuada.",
      "Sin esa información, el diseño de la cimentación se basa en supuestos genéricos que pueden o no coincidir con la realidad del sitio. En el mejor de los casos, un supuesto conservador de más significa sobrecostos innecesarios. En el peor de los casos, un supuesto optimista de más significa asentamientos, grietas estructurales o, en escenarios extremos, fallas de cimentación.",
      "En Panamá, donde el tipo de suelo cambia significativamente entre zonas — suelos residuales derivados de roca volcánica, rellenos antiguos en áreas urbanas consolidadas, arcillas expansivas en ciertas regiones — no hay forma de generalizar de un proyecto a otro, ni siquiera dentro de la misma manzana. Cada sitio requiere su propia lectura.",
      "El estudio de suelo no es un gasto adicional al proyecto: es la información que evita que el resto del presupuesto se ponga en riesgo por una cimentación mal diseñada.",
    ],
  },
  {
    slug: "diferencia-entre-spt-y-cpt",
    titulo: "Diferencia entre SPT y CPT: ¿cuál necesita tu proyecto?",
    resumen:
      "Dos de los ensayos de campo más usados en geotecnia responden preguntas distintas sobre el mismo suelo.",
    parrafos: [
      "El ensayo SPT (Standard Penetration Test, o Ensayo de Penetración Estándar) mide la resistencia del suelo contando el número de golpes necesarios para hincar una toma-muestras estándar una distancia determinada, usando un martillo de peso y caída normalizados. El resultado, conocido como número de golpes o N-SPT, se correlaciona con la densidad relativa del suelo y su capacidad portante, y además permite obtener una muestra alterada para clasificación en laboratorio.",
      "El ensayo CPT (Cone Penetration Test, o Ensayo de Penetración de Cono) empuja un cono instrumentado dentro del suelo a velocidad constante, registrando de forma continua la resistencia a la penetración y la fricción lateral. A diferencia del SPT, el CPT no extrae muestras físicas, pero ofrece un perfil continuo del subsuelo en vez de datos puntuales cada cierta profundidad.",
      "¿Cuál usar? El SPT sigue siendo el ensayo más extendido porque además de resistencia entrega una muestra física para clasificar el suelo en laboratorio — algo que muchos proyectos necesitan para el diseño final. El CPT es más rápido de ejecutar, da un perfil continuo (útil quando el suelo es muy variable con la profundidad), y funciona especialmente bien en suelos blandos y arenas, aunque tiene limitaciones en suelos con gravas o roca somera.",
      "En la práctica, muchos proyectos combinan ambos: CPT para caracterizar rápidamente la variabilidad del subsuelo, y SPT en los puntos donde se necesita muestra física para clasificación y ensayos de laboratorio adicionales.",
    ],
  },
  {
    slug: "cuando-se-necesitan-micropilotes",
    titulo: "¿Cuándo se necesitan micropilotes?",
    resumen:
      "No todos los terrenos aceptan una cimentación convencional. Estas son las señales de que un proyecto necesita micropilotes.",
    parrafos: [
      "Los micropilotes entran en juego cuando una cimentación superficial (zapatas, losa) no es viable o no es suficiente, y un pilote convencional tampoco es práctico por razones de acceso o espacio.",
      "Las señales más comunes: el estudio de suelo reporta baja capacidad portante en los primeros metros, con un estrato competente solo a mayor profundidad; el sitio tiene acceso restringido (patios internos, sótanos, terrenos con pendiente) donde no cabe maquinaria de pilotaje convencional; se necesita reforzar o recalzar una cimentación existente que presenta asentamientos, sin demoler la estructura; o el proyecto está muy cerca de edificaciones existentes y se requiere minimizar vibración durante la construcción.",
      "La decisión final siempre depende del estudio geotécnico específico del sitio — pero si tu proyecto tiene alguna de estas condiciones, vale la pena preguntar por micropilotes antes de descartar la opción por desconocimiento.",
    ],
  },
  {
    slug: "como-prevenir-deslizamientos-de-tierra",
    titulo: "Cómo prevenir deslizamientos de tierra en taludes",
    resumen:
      "La mayoría de los deslizamientos dan señales antes de ocurrir. Esto es lo que hay que observar y cuándo actuar.",
    parrafos: [
      "Un deslizamiento de tierra rara vez ocurre sin ninguna señal previa. El problema es que esas señales — grietas menores, humedad persistente, pequeños desprendimientos — suelen pasar desapercibidas hasta que el movimiento se vuelve evidente e irreversible.",
      "Las señales de alerta más comunes incluyen: grietas nuevas en la corona del talud o en estructuras cercanas (muros, pisos, aceras), inclinación progresiva de árboles, postes o cercas, agua que aflora en puntos donde antes no había (indicio de cambios en el flujo subterráneo), y aumento en la frecuencia de pequeños desprendimientos de material.",
      "La prevención efectiva combina tres frentes: control del agua (drenaje superficial y subterráneo, que es con frecuencia el factor más determinante en fallas de taludes en climas tropicales), control de cargas (evitar sobrecargar la corona del talud con construcciones, rellenos o vibración), y monitoreo periódico en taludes con historial de movimiento o en zonas de riesgo conocido.",
      "Cuando ya aparecen señales de alerta, la recomendación es simple: una evaluación técnica temprana casi siempre cuesta una fracción de lo que cuesta una intervención de emergencia después de que el talud ya se movió.",
    ],
  },
];

export function getArticulo(slug: string) {
  return articulos.find((a) => a.slug === slug);
}
