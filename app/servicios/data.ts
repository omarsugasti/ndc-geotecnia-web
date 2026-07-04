export interface ServicioContenido {
  slug: string;
  nombre: string;
  tituloSeo: string;
  resumen: string;
  intro: string;
  secciones: { titulo: string; parrafos: string[] }[];
  faqs: { pregunta: string; respuesta: string }[];
}

export const servicios: ServicioContenido[] = [
  {
    slug: "estudios-de-suelos",
    nombre: "Estudios de Suelos",
    tituloSeo: "Estudios de Suelos en Panamá | Sondeos y Ensayos SPT",
    resumen:
      "Exploración geotécnica completa: sondeos, ensayos SPT, muestreo e interpretación de resultados para informes de cimentación.",
    intro:
      "Todo proyecto de construcción — desde una vivienda hasta un puente — empieza con una pregunta que no se puede adivinar: ¿qué tan capaz es este terreno de soportar la estructura que se quiere construir encima? Un estudio de suelos responde esa pregunta con datos, no con supuestos.",
    secciones: [
      {
        titulo: "¿Qué es un estudio de suelos?",
        parrafos: [
          "Un estudio de suelos (también llamado estudio geotécnico) es la investigación de campo y laboratorio que permite conocer las propiedades físicas y mecánicas del terreno donde se va a construir. El objetivo es determinar la capacidad portante del suelo, la profundidad y tipo de cimentación recomendada, el nivel freático, y cualquier condición del subsuelo que pueda representar un riesgo para la obra.",
          "En Panamá, donde conviven suelos residuales, rellenos antiguos, arcillas expansivas y roca a distintas profundidades según la zona, un estudio de suelos no es un trámite — es la diferencia entre un diseño de cimentación que funciona y uno que genera asentamientos, grietas o sobrecostos durante la construcción.",
        ],
      },
      {
        titulo: "¿Qué incluye el proceso?",
        parrafos: [
          "El proceso típico combina trabajo de campo y de laboratorio. En campo se ejecutan perforaciones o calicatas según la profundidad y el tipo de proyecto, se realizan ensayos de penetración estándar (SPT) para medir la resistencia del suelo a distintas profundidades, y se extraen muestras alteradas e inalteradas para análisis posterior.",
          "En laboratorio se determinan propiedades como granulometría, límites de Atterberg, humedad natural, peso unitario y, cuando el proyecto lo requiere, ensayos de corte directo o consolidación. Con esta información se construye el perfil estratigráfico del sitio y se calcula la capacidad portante admisible para el tipo de cimentación propuesta.",
          "El resultado final es un informe geotécnico que el ingeniero estructural utiliza directamente para diseñar la cimentación: zapatas aisladas, corridas, losa de cimentación, pilotes o micropilotes, según lo que el suelo permita.",
        ],
      },
      {
        titulo: "¿Cuándo es obligatorio o recomendable?",
        parrafos: [
          "En Panamá, los proyectos de cierta envergadura requieren un estudio de suelos como parte de los requisitos para el permiso de construcción ante el Municipio y el Ministerio de Obras Públicas. Pero incluso cuando no es obligatorio por normativa, es recomendable en cualquier proyecto donde el costo de equivocarse en la cimentación — grietas, asentamientos diferenciales, reparaciones estructurales — sea mayor que el costo del estudio mismo, que en la enorme mayoría de los casos es así.",
          "Es especialmente crítico en terrenos con antecedentes de rellenos no controlados, cercanía a taludes o cuerpos de agua, o cuando el proyecto contempla varios niveles o cargas concentradas.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto tiempo toma un estudio de suelos?",
        respuesta:
          "Depende del alcance y del número de sondeos, pero para una vivienda o edificio pequeño el trabajo de campo suele tomar entre 1 y 3 días, y el informe final se entrega en un plazo de 1 a 2 semanas una vez procesados los ensayos de laboratorio.",
      },
      {
        pregunta: "¿Cuántos sondeos necesita mi proyecto?",
        respuesta:
          "El número de sondeos depende del área de construcción, el tipo de estructura y la variabilidad del terreno. Un ingeniero geotécnico define esto durante la visita inicial, siguiendo criterios de normas como la ASTM y buenas prácticas locales.",
      },
      {
        pregunta: "¿Qué pasa si el suelo tiene baja capacidad portante?",
        respuesta:
          "No significa que no se pueda construir. Existen soluciones como micropilotes, mejoramiento de suelo o rediseño de la cimentación — lo importante es saberlo antes de construir, no después de que aparezcan grietas.",
      },
    ],
  },
  {
    slug: "anclajes",
    nombre: "Anclajes",
    tituloSeo: "Anclajes Geotécnicos en Panamá | Activos y Pasivos",
    resumen:
      "Instalación de anclajes activos y pasivos para contención de estructuras y taludes. Trabajamos con sistemas de inyección a presión en roca y suelo.",
    intro:
      "Cuando un talud, un muro de contención o una excavación necesita resistir fuerzas que la gravedad y la fricción del terreno no alcanzan a controlar por sí solas, los anclajes geotécnicos son la solución que transfiere esa carga a un estrato de suelo o roca competente.",
    secciones: [
      {
        titulo: "¿Qué es un anclaje geotécnico?",
        parrafos: [
          "Un anclaje es un elemento estructural — generalmente una barra o torón de acero — que se instala dentro de una perforación en el terreno, se inyecta con lechada de cemento a presión para fijarlo a un estrato competente, y se tensiona para transferir carga desde la estructura que se quiere estabilizar hacia el suelo o roca circundante.",
          "Se utilizan para estabilizar taludes inestables, reforzar muros de contención, anclar estructuras sometidas a subpresión (como losas de fondo en excavaciones profundas), y en general en cualquier situación donde una estructura necesite resistir fuerzas de volcamiento, deslizamiento o levantamiento.",
        ],
      },
      {
        titulo: "Anclajes activos y pasivos",
        parrafos: [
          "Los anclajes activos se tensionan a una carga de diseño específica inmediatamente después de su instalación, lo que permite controlar deformaciones desde el primer momento — son la opción típica en muros de contención y estabilización de taludes donde se necesita resultados inmediatos.",
          "Los anclajes pasivos (o pernos de anclaje) no se tensionan deliberadamente; trabajan cuando el terreno o la estructura comienzan a moverse, generando resistencia a partir de ese movimiento. Se usan comúnmente en refuerzo de macizos rocosos y estabilización complementaria junto con malla y shotcrete.",
        ],
      },
      {
        titulo: "Proceso de instalación",
        parrafos: [
          "El proceso comienza con la perforación hasta la profundidad de diseño, definida según el estudio geotécnico del sitio. Se instala el elemento de acero (barra o torón), se inyecta la lechada de cemento a presión para crear el bulbo de anclaje en la zona de fijación, y se espera el curado antes de proceder con el tensado y prueba de carga, en el caso de anclajes activos.",
          "Cada anclaje se somete a pruebas de carga para verificar que alcanza la capacidad de diseño antes de considerarse en servicio — este control de calidad es lo que garantiza que la solución funcione a largo plazo y no solo en el momento de la instalación.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto dura un anclaje geotécnico?",
        respuesta:
          "Un anclaje bien diseñado e instalado, con protección anticorrosiva adecuada, está pensado para la vida útil de la estructura que soporta — décadas, no años. La calidad de la inyección y la protección del acero son determinantes.",
      },
      {
        pregunta: "¿Se pueden instalar anclajes en roca y en suelo?",
        respuesta:
          "Sí. El diseño y la longitud del bulbo de anclaje cambian según se trabaje en macizo rocoso o en suelo, pero la técnica es aplicable a ambos, siempre que exista un estrato competente donde fijar la carga.",
      },
    ],
  },
  {
    slug: "estabilizacion-de-taludes",
    nombre: "Estabilización de Taludes",
    tituloSeo: "Estabilización de Taludes en Panamá | Control de Deslizamientos",
    resumen:
      "Análisis y solución de taludes inestables. Combinamos malla, shotcrete y anclajes para garantizar la estabilidad a largo plazo.",
    intro:
      "Un talud inestable no avisa con mucho tiempo de anticipación. Grietas en la corona, árboles inclinados, humedad persistente o pequeños desprendimientos son señales de que el terreno está buscando un nuevo equilibrio — y ese equilibrio, sin intervención, casi siempre termina en un deslizamiento.",
    secciones: [
      {
        titulo: "¿Por qué falla un talud?",
        parrafos: [
          "La estabilidad de un talud depende del balance entre las fuerzas que lo mantienen en su lugar (fricción interna, cohesión del suelo, vegetación) y las que buscan moverlo (peso propio, agua infiltrada, cargas adicionales en la corona, vibraciones). Cuando ese balance se rompe — típicamente por saturación de agua durante la temporada lluviosa, corte del pie del talud, o sobrecarga en la parte superior — el talud se mueve.",
          "En Panamá, la combinación de suelos residuales, pendientes pronunciadas y precipitaciones intensas hace que la estabilización de taludes sea una necesidad recurrente en proyectos de infraestructura vial, urbanizaciones en zonas de cerro y desarrollos industriales.",
        ],
      },
      {
        titulo: "Soluciones de estabilización",
        parrafos: [
          "No existe una solución única — el tratamiento depende del mecanismo de falla identificado en el análisis geotécnico. Las soluciones más comunes combinan varias técnicas: anclajes activos o pasivos para transferir carga a un estrato competente, shotcrete para proteger la superficie expuesta y controlar la erosión superficial, malla de refuerzo para contener bloques sueltos en macizos rocosos fracturados, y sistemas de drenaje (subdrenes, drenes de penetración) para reducir la presión de poros generada por el agua infiltrada.",
          "El drenaje merece mención aparte porque es, con frecuencia, el factor que más se subestima: gran parte de las fallas de taludes en el trópico están relacionadas con agua que no tiene por dónde salir. Una solución de estabilización sin un sistema de drenaje adecuado suele ser una solución temporal.",
        ],
      },
      {
        titulo: "Diagnóstico antes de intervenir",
        parrafos: [
          "Antes de proponer cualquier tratamiento, es necesario entender el mecanismo de falla: si es una falla superficial por erosión, una falla rotacional profunda, o un desplazamiento a lo largo de un plano de debilidad geológica. Cada uno requiere un enfoque distinto, y aplicar la solución equivocada — por ejemplo, shotcrete superficial sobre una falla profunda — no resuelve el problema, solo retrasa su manifestación.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Cómo sé si mi talud está en riesgo?",
        respuesta:
          "Señales de alerta incluyen grietas nuevas en la corona o en construcciones cercanas, árboles o postes inclinados, agua que aflora en puntos donde antes no había, y movimiento visible después de lluvias fuertes. Ante cualquiera de estas señales, conviene una evaluación técnica antes de que el movimiento se acelere.",
      },
      {
        pregunta: "¿Cuánto tiempo toma estabilizar un talud?",
        respuesta:
          "Depende del tamaño y la complejidad de la falla, pero proyectos de estabilización puntual suelen ejecutarse en semanas, no meses, una vez definida la solución técnica.",
      },
    ],
  },
  {
    slug: "micropilotes",
    nombre: "Micro Pilotes",
    tituloSeo: "Micropilotes en Panamá | Cimentaciones Profundas",
    resumen:
      "Cimentaciones profundas para estructuras en terrenos difíciles. Solución eficiente cuando el acceso es limitado o las cargas son altas.",
    intro:
      "Cuando el suelo superficial no tiene la capacidad portante suficiente para una cimentación convencional, o cuando el acceso al sitio no permite maquinaria pesada, los micropilotes ofrecen una alternativa de cimentación profunda que transfiere la carga a estratos más competentes sin las limitaciones de los pilotes tradicionales.",
    secciones: [
      {
        titulo: "¿Qué es un micropilote?",
        parrafos: [
          "Un micropilote es un elemento de cimentación profunda de pequeño diámetro (generalmente entre 100 y 300 mm), construido mediante perforación e inyección de lechada de cemento, reforzado con una barra o tubería de acero. A diferencia de un pilote convencional, se instala con equipos compactos, lo que lo hace ideal para sitios con acceso restringido, espacios reducidos o proximidad a estructuras existentes.",
        ],
      },
      {
        titulo: "¿Cuándo se necesitan micropilotes?",
        parrafos: [
          "Los casos más frecuentes son: refuerzo o recalce de cimentaciones existentes que presentan asentamientos, construcción sobre suelos de baja capacidad portante donde una zapata convencional resultaría en asentamientos excesivos, proyectos en terrenos con pendiente o acceso limitado donde no cabe maquinaria de pilotaje tradicional, y estructuras cercanas a edificaciones existentes donde se requiere minimizar vibración durante la instalación.",
          "También son la solución habitual cuando se necesita ampliar una estructura existente y la cimentación original no fue diseñada para la carga adicional.",
        ],
      },
      {
        titulo: "Proceso constructivo",
        parrafos: [
          "La instalación comienza con la perforación hasta la profundidad definida por el estudio geotécnico, que debe alcanzar un estrato con capacidad portante adecuada. Se coloca el refuerzo de acero dentro de la perforación y se inyecta lechada de cemento, en ocasiones con inyecciones adicionales a presión para mejorar la adherencia entre el micropilote y el suelo circundante. Finalmente se conecta el micropilote al cabezal o dado de cimentación que transmite la carga de la estructura.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Los micropilotes reemplazan a los pilotes convencionales?",
        respuesta:
          "No siempre — depende de la carga y las condiciones del sitio. Para cargas muy altas y acceso amplio, un pilote convencional puede ser más eficiente en costo. Los micropilotes ganan cuando el acceso, el espacio o la proximidad a estructuras existentes limitan las opciones.",
      },
      {
        pregunta: "¿Sirven para reforzar una cimentación que ya presenta asentamientos?",
        respuesta:
          "Sí, es uno de sus usos más comunes: recalce de cimentaciones existentes sin necesidad de demoler la estructura, transfiriendo la carga a un estrato más profundo y competente.",
      },
    ],
  },
  {
    slug: "shotcrete",
    nombre: "Shotcrete",
    tituloSeo: "Shotcrete en Panamá | Concreto Proyectado para Taludes",
    resumen:
      "Aplicación de concreto proyectado para revestimiento y protección de superficies rocosas y taludes. Seco o húmedo, según el proyecto.",
    intro:
      "El shotcrete —concreto lanzado a alta velocidad mediante una manguera— es una de las herramientas más versátiles en geotecnia para proteger superficies expuestas de taludes y excavaciones, controlar la erosión y complementar sistemas de anclaje y malla.",
    secciones: [
      {
        titulo: "¿Qué es el shotcrete y para qué se usa?",
        parrafos: [
          "El shotcrete es concreto (u ocasionalmente mortero) que se proyecta neumáticamente sobre una superficie a alta velocidad, compactándose por el propio impacto sin necesidad de encofrado. Esto lo hace especialmente útil en superficies irregulares o de difícil acceso, como taludes rocosos, paredes de excavaciones y túneles.",
          "En estabilización de taludes, el shotcrete cumple una doble función: protege la superficie expuesta de la erosión causada por agua y viento, y actúa como elemento estructural complementario cuando se combina con malla electrosoldada y anclajes, distribuyendo cargas y confinando el macizo rocoso fracturado.",
        ],
      },
      {
        titulo: "Shotcrete seco vs. húmedo",
        parrafos: [
          "En el proceso por vía seca, los materiales secos (cemento, agregado) se transportan por la manguera y el agua se añade en la boquilla de proyección, justo antes del impacto. Esto da al operador control directo sobre la consistencia en el momento de aplicar, lo que resulta útil en trabajos puntuales o de menor volumen.",
          "En el proceso por vía húmeda, el concreto ya mezclado (incluyendo el agua) se bombea a través de la manguera y se proyecta con aire comprimido en la boquilla. Este método suele generar menos polvo, menos rebote de material y mayor rendimiento en volúmenes grandes, por lo que es la opción preferida en proyectos de mayor escala.",
          "La elección entre uno y otro depende del volumen del proyecto, el acceso al sitio y las condiciones específicas de la superficie a tratar.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿El shotcrete sirve solo/a como protección, o también estructuralmente?",
        respuesta:
          "Ambas cosas. Puede aplicarse como capa de protección contra erosión en superficies estables, o como parte de un sistema estructural de estabilización cuando se combina con malla y anclajes, distribuyendo carga sobre el macizo tratado.",
      },
      {
        pregunta: "¿Cuánto dura una capa de shotcrete?",
        respuesta:
          "Con un diseño de mezcla adecuado y control de calidad en la aplicación (espesor, curado), una capa de shotcrete tiene una vida útil de varias décadas, similar a la de un elemento de concreto convencional expuesto a la intemperie.",
      },
    ],
  },
  {
    slug: "prospeccion-mineral",
    nombre: "Prospección Mineral",
    tituloSeo: "Prospección Mineral en Panamá | Estudios Geológicos",
    resumen:
      "Estudios geológicos para identificar y evaluar depósitos minerales. Cartografía geológica, muestreo y análisis estructural del macizo rocoso.",
    intro:
      "Antes de que cualquier proyecto minero avance de la exploración a la extracción, necesita respuestas fundamentadas en geología de campo: qué hay en el subsuelo, cómo está estructurado, y qué tan viable es su aprovechamiento.",
    secciones: [
      {
        titulo: "¿Qué incluye un estudio de prospección mineral?",
        parrafos: [
          "La prospección mineral combina trabajo de campo y análisis técnico para identificar y caracterizar depósitos minerales. Incluye cartografía geológica de superficie para identificar formaciones y estructuras de interés, muestreo sistemático de roca y suelo para análisis geoquímico, y análisis estructural del macizo rocoso para entender fallas, plegamientos y otras condiciones que afectan tanto la ubicación del recurso como la viabilidad de su extracción.",
        ],
      },
      {
        titulo: "Del campo al informe técnico",
        parrafos: [
          "El trabajo comienza con reconocimiento geológico regional y local, seguido de mapeo detallado de afloramientos, toma de muestras representativas y, según el alcance del proyecto, sondeos exploratorios. La información se integra en modelos geológicos que permiten estimar la extensión y orientación probable del depósito.",
          "Este tipo de trabajo requiere un equipo que entienda tanto la geología de campo como la interpretación estructural — no es un ejercicio de laboratorio aislado, sino una lectura del terreno que combina observación directa con análisis técnico.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿La prospección mineral aplica solo a proyectos mineros de gran escala?",
        respuesta:
          "No necesariamente. También es relevante para evaluación de canteras, fuentes de agregado para construcción, y estudios preliminares de viabilidad en proyectos de menor escala.",
      },
    ],
  },
];

export function getServicio(slug: string) {
  return servicios.find((s) => s.slug === slug);
}
