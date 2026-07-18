export interface Fuente {
  texto: string;
  url: string;
}

export interface Articulo {
  slug: string;
  titulo: string;
  resumen: string;
  parrafos: string[];
  categoria: "tecnico" | "actualidad";
  fuentes?: Fuente[];
}

export const articulos: Articulo[] = [
  {
    slug: "que-es-un-estudio-de-suelo",
    titulo: "¿Qué es un estudio de suelo y por qué lo necesitas antes de construir?",
    resumen:
      "Antes de diseñar cualquier cimentación, hay una pregunta que solo un estudio de suelo puede responder con datos reales.",
    categoria: "tecnico",
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
    categoria: "tecnico",
    parrafos: [
      "El ensayo SPT (Standard Penetration Test, o Ensayo de Penetración Estándar) mide la resistencia del suelo contando el número de golpes necesarios para hincar una toma-muestras estándar una distancia determinada, usando un martillo de peso y caída normalizados. El resultado, conocido como número de golpes o N-SPT, se correlaciona con la densidad relativa del suelo y su capacidad portante, y además permite obtener una muestra alterada para clasificación en laboratorio.",
      "El ensayo CPT (Cone Penetration Test, o Ensayo de Penetración de Cono) empuja un cono instrumentado dentro del suelo a velocidad constante, registrando de forma continua la resistencia a la penetración y la fricción lateral. A diferencia del SPT, el CPT no extrae muestras físicas, pero ofrece un perfil continuo del subsuelo en vez de datos puntuales cada cierta profundidad.",
      "¿Cuál usar? El SPT sigue siendo el ensayo más extendido porque además de resistencia entrega una muestra física para clasificar el suelo en laboratorio — algo que muchos proyectos necesitan para el diseño final. El CPT es más rápido de ejecutar, da un perfil continuo (útil cuando el suelo es muy variable con la profundidad), y funciona especialmente bien en suelos blandos y arenas, aunque tiene limitaciones en suelos con gravas o roca somera.",
      "En la práctica, muchos proyectos combinan ambos: CPT para caracterizar rápidamente la variabilidad del subsuelo, y SPT en los puntos donde se necesita muestra física para clasificación y ensayos de laboratorio adicionales.",
    ],
  },
  {
    slug: "cuando-se-necesitan-micropilotes",
    titulo: "¿Cuándo se necesitan micropilotes?",
    resumen:
      "No todos los terrenos aceptan una cimentación convencional. Estas son las señales de que un proyecto necesita micropilotes.",
    categoria: "tecnico",
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
    categoria: "tecnico",
    parrafos: [
      "Un deslizamiento de tierra rara vez ocurre sin ninguna señal previa. El problema es que esas señales — grietas menores, humedad persistente, pequeños desprendimientos — suelen pasar desapercibidas hasta que el movimiento se vuelve evidente e irreversible.",
      "Las señales de alerta más comunes incluyen: grietas nuevas en la corona del talud o en estructuras cercanas (muros, pisos, aceras), inclinación progresiva de árboles, postes o cercas, agua que aflora en puntos donde antes no había (indicio de cambios en el flujo subterráneo), y aumento en la frecuencia de pequeños desprendimientos de material.",
      "La prevención efectiva combina tres frentes: control del agua (drenaje superficial y subterráneo, que es con frecuencia el factor más determinante en fallas de taludes en climas tropicales), control de cargas (evitar sobrecargar la corona del talud con construcciones, rellenos o vibración), y monitoreo periódico en taludes con historial de movimiento o en zonas de riesgo conocido.",
      "Cuando ya aparecen señales de alerta, la recomendación es simple: una evaluación técnica temprana casi siempre cuesta una fracción de lo que cuesta una intervención de emergencia después de que el talud ya se movió.",
    ],
  },
  {
    slug: "que-es-el-shotcrete",
    titulo: "¿Qué es el shotcrete y cuándo se usa en estabilización de taludes?",
    resumen:
      "Concreto proyectado a alta velocidad para estabilizar superficies irregulares sin necesidad de encofrado tradicional.",
    categoria: "tecnico",
    parrafos: [
      "El shotcrete (concreto lanzado o proyectado) es concreto que se aplica sobre una superficie a alta velocidad mediante aire comprimido, en vez de vaciarse dentro de un encofrado. Existen dos métodos principales: vía húmeda (el concreto ya mezclado con agua se bombea hasta la boquilla) y vía seca (los materiales secos se transportan por manguera y el agua se agrega en la boquilla). Ambos logran una adherencia fuerte a la superficie tratada, incluso en terrenos irregulares donde un encofrado convencional no sería práctico.",
      "En estabilización de taludes, el shotcrete casi nunca trabaja solo: se combina con anclajes (que transfieren la carga del talud a un estrato más competente) y malla electrosoldada o de refuerzo (que le da continuidad estructural a la capa proyectada y evita que se agriete o se desprenda en placas). El shotcrete sella la superficie contra la erosión superficial y el ingreso de agua, mientras el sistema de anclajes resuelve la estabilidad global del talud.",
      "Es también la solución típica en soporte de túneles y en muros de contención sobre roca o suelo irregular, precisamente porque se adapta a la geometría existente del terreno en vez de requerir que el terreno se adapte a un molde.",
      "La ventaja principal frente a un muro de concreto convencional es la velocidad de ejecución y la capacidad de trabajar en accesos difíciles — plataformas suspendidas, acceso por cuerda, pendientes pronunciadas — donde llevar equipo de encofrado y vaciado tradicional no es viable.",
    ],
  },
  {
    slug: "que-es-el-rep-2021",
    titulo: "REP-2021: qué es y por qué afecta el diseño estructural en Panamá",
    resumen:
      "El Reglamento para el Diseño Estructural de la República de Panamá entró en vigencia en 2023 y define los criterios sísmicos con los que hoy se diseñan estructuras y cimentaciones.",
    categoria: "tecnico",
    parrafos: [
      "El REP-2021 (Reglamento para el Diseño Estructural de la República de Panamá) es la norma oficial vigente para el diseño estructural en el país. Fue adoptado por la Junta Técnica de Ingeniería y Arquitectura (JTIA) mediante la Resolución JTIA 020-2022 del 22 de junio de 2022, publicada en la Gaceta Oficial No. 29594-A del 5 de agosto de 2022, y entró en vigencia el 30 de abril de 2023.",
      "Para efectos de geotecnia, lo relevante del REP-2021 es que liga directamente el diseño sísmico de una estructura a las condiciones reales del subsuelo del sitio: la clasificación del tipo de suelo bajo la cimentación es un dato de entrada obligatorio para definir los parámetros sísmicos de diseño, no un supuesto genérico que se pueda tomar de una tabla sin verificar.",
      "En la práctica, esto significa que un estudio geotécnico ya no es solo un requisito para dimensionar la cimentación — es también la fuente de la información que el ingeniero estructural necesita para aplicar correctamente los criterios sísmicos del reglamento. Un estudio incompleto o genérico puede llevar a una clasificación de sitio incorrecta, y de ahí a un diseño sísmico mal calibrado para el terreno real.",
      "Por eso, en zonas de mayor exigencia sísmica o con perfiles de suelo complejos, vale la pena confirmar que el estudio geotécnico del proyecto efectivamente incluya la caracterización necesaria para el diseño bajo REP-2021, y no solo los parámetros de capacidad portante.",
    ],
    fuentes: [
      { texto: "Gaceta Oficial No. 29594-A (5 de agosto de 2022) — Resolución JTIA 020-2022", url: "https://www.gacetaoficial.gob.pa/storage/gacetas/2022/08/29594_A/92903.pdf" },
    ],
  },
  {
    slug: "deslizamientos-2025-cifras-globales",
    titulo: "2025 fue uno de los años más letales por deslizamientos de tierra: qué dicen las cifras globales",
    resumen:
      "El registro global de deslizamientos fatales de 2025 confirma una tendencia que también aplica a terrenos montañosos como los de Panamá: el riesgo de talud no se puede subestimar.",
    categoria: "actualidad",
    parrafos: [
      "Según el registro global de deslizamientos fatales que mantiene la American Geophysical Union (AGU), 2025 cerró con 663 deslizamientos fatales registrados en el mundo y 5,091 muertes asociadas — el segundo año más letal desde que existe este conteo sistemático.",
      "El país más golpeado fue Indonesia. En noviembre de 2025, el ciclón Senyar desató miles de deslizamientos e inundaciones en Sumatra del Norte, Sumatra Occidental y Aceh, dejando más de 1,170 muertos en uno de los eventos de deslizamiento más letales de la década reciente. Dos meses después, en enero de 2026, un deslizamiento en West Bandung dejó más de 20 muertos, entre ellos un grupo de infantes de marina que entrenaba en la zona.",
      "El patrón detrás de ambos eventos es conocido en cualquier país de terreno montañoso y clima tropical: pendientes pronunciadas, lluvias intensas y saturación del suelo. Panamá comparte esos mismos factores de riesgo, aunque a otra escala — es exactamente el motivo por el que el monitoreo de taludes y el control del agua subterránea no son un lujo, sino la primera línea de defensa.",
      "La lección que se repite en los análisis técnicos de estos eventos es la misma que aplicamos en cualquier evaluación de talud: el drenaje —superficial y subterráneo— sigue siendo, en la mayoría de los casos, el factor individual más determinante para prevenir una falla.",
    ],
    fuentes: [
      { texto: "Global fatal landslides in 2025 — Eos.org (AGU Landslide Blog)", url: "https://eos.org/thelandslideblog/global-fatal-landslides-in-2025" },
      { texto: "Death toll from Indonesia landslide rises — Al Jazeera", url: "https://www.aljazeera.com/news/2026/1/26/death-toll-from-indonesia-landslide-rises-to-17-as-dozens-remain-missing" },
    ],
  },
  {
    slug: "inteligencia-artificial-geotecnia-tendencias",
    titulo: "Cómo la inteligencia artificial está entrando a la geotecnia",
    resumen:
      "Del análisis de laboratorio al monitoreo de taludes con drones, la IA se está integrando a herramientas que antes dependían solo del criterio de campo.",
    categoria: "actualidad",
    parrafos: [
      "El uso de inteligencia artificial y machine learning en geotecnia viene creciendo de forma consistente: investigación de deslizamientos, análisis de licuefacción y modelos de estabilidad de taludes que combinan datos de presión de poro, desplazamiento y lluvia en tiempo real. El tema tiene suficiente peso como para sostener un workshop internacional dedicado — el tercero se realizó en Florencia en octubre de 2025, y el próximo está programado para Seúl en 2026.",
      "Un ejemplo concreto: Fugro, una de las firmas de geotecnia e ingeniería del subsuelo más grandes del mundo, publicó en 2025 sobre cómo está usando IA para acelerar y estandarizar los ensayos de laboratorio de suelos — automatizando parte de la clasificación e interpretación de resultados que tradicionalmente toma más tiempo manual.",
      "En campo, el monitoreo de taludes con drones y LiDAR ya permite generar nubes de puntos 3D con precisión centimétrica para mapear riesgo de caída de rocas. Escaneos repetidos detectan micro-movimientos y propagación de grietas antes de que sean visibles a simple vista, y los modelos de machine learning cada vez distinguen mejor vegetación de roca fracturada real en esos escaneos.",
      "Una innovación relacionada, aunque todavía de nicho por su costo: la biocementación (o MICP, precipitación de carbonato de calcio inducida microbiológicamente), que usa bacterias para mejorar suelos como alternativa más sostenible al cemento tradicional. Hay ensayos activos en varios países para cimentaciones, vías, ferrocarril y presas, según reportó Ground Engineering en enero de 2026.",
      "Ninguna de estas herramientas reemplaza el criterio de campo de un ingeniero geotécnico — pero sí están cerrando la brecha entre la inspección visual periódica y el monitoreo continuo, algo especialmente relevante en proyectos de infraestructura de mayor escala.",
    ],
    fuentes: [
      { texto: "Third Workshop on the Future of Machine Learning in Geotechnics — ScienceDirect", url: "https://www.sciencedirect.com/science/article/pii/S3050483X25000486" },
      { texto: "Transforming Soil Lab Testing with AI Technology — Fugro", url: "https://www.fugro.com/news/long-reads/2025/transforming-soil-lab-testing-with-ai-technology" },
      { texto: "Ground improvement: Is biocementation a viable alternative to cement? — Ground Engineering", url: "https://www.geplus.co.uk/features/ground-improvement-is-biocementation-a-viable-alternative-to-cement-16-01-2026/" },
    ],
  },
  {
    slug: "cimentaciones-mas-profundas-del-mundo",
    titulo: "Las cimentaciones más profundas del mundo (y una lección de advertencia)",
    resumen:
      "Desde el Burj Khalifa hasta la Jeddah Tower, los rascacielos más altos del mundo dependen de cimentaciones diseñadas a la medida de su suelo — y un caso reciente en Hamburgo muestra qué pasa cuando algo no cuadra después de construido.",
    categoria: "actualidad",
    parrafos: [
      "El Burj Khalifa, en Dubái, se apoya sobre 194 pilotes perforados de 1.5 metros de diámetro y hasta 50 metros de profundidad, bajo una losa de cimentación de 3.7 metros de espesor que requirió más de 45,000 m³ de concreto. Es uno de los ejemplos más citados de cimentación profunda diseñada para un edificio extremo.",
      "La Jeddah Tower, en Arabia Saudita, va más allá: con 102 pisos construidos y el objetivo de superar el kilómetro de altura, su cimentación usa 270 pilotes perforados de 1.8 metros de diámetro, algunos de hasta 105 metros de profundidad, bajo una losa de 5 metros. El diseño tuvo que resolver un problema particular del sitio: caliza arrecifal con cavidades y exposición a agua salina, manteniendo el asentamiento diferencial máximo en apenas 25 milímetros.",
      "El caso más interesante, sin embargo, es una advertencia. En el Elbtower de Hamburgo, los pilotes de prueba y cimentación alcanzaron 111.4 metros de profundidad (1.85 metros de diámetro) — los más largos jamás ejecutados en Alemania, necesarios por los suelos cohesivos, profundos y poco competentes del río Elba. Pero para mediados de 2025, el monitoreo del proyecto reportó asentamientos que superaron los umbrales de alerta establecidos, generando dudas sobre si la estructura necesitará refuerzo adicional.",
      "La lección no es sutil: ni la cimentación más profunda ni el diseño más sofisticado eliminan la necesidad de monitoreo después de construido. El comportamiento real del suelo bajo carga sostenida solo se confirma con instrumentación y seguimiento — algo válido tanto para un rascacielos de un kilómetro como para cualquier cimentación convencional.",
    ],
    fuentes: [
      { texto: "Jeddah Tower: Engineering the World's Next Tallest Building — Build-Construct.com", url: "https://build-construct.com/structures/jeddah-tower-engineering-the-worlds-next-tallest-building/" },
      { texto: "Foundation piles for the Elbtower reach a record depth — Geodrilling International", url: "https://www.geodrillinginternational.com/piling/news/1371914/foundation-piles-elbtower-reach-record-depth" },
      { texto: "Top Five Deepest Foundations Globally — Capital Piling", url: "https://www.capitalpiling.co.uk/articles/top-five-deepest-foundations" },
    ],
  },
];

export function getArticulo(slug: string) {
  return articulos.find((a) => a.slug === slug);
}
