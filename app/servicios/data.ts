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
    slug: "mallas-geobrugg",
    nombre: "Protección de Taludes con Mallas GEOBRUGG",
    tituloSeo: "Mallas GEOBRUGG en Panamá | Instalador Certificado TECCO, SPIDER, DELTAX y MINAX",
    resumen:
      "Instalación certificada de sistemas de malla de alta resistencia GEOBRUGG (TECCO®, SPIDER®, DELTAX® y MINAX®) para estabilización superficial de taludes en roca y suelo, incluyendo minería y canteras.",
    intro:
      "NDC Geotecnia es instalador certificado de los sistemas de malla de alta resistencia GEOBRUGG, la referencia suiza en protección de taludes y control de caída de rocas. Con más de 40,000 m² instalados, somos uno de los equipos con mayor experiencia acumulada en este tipo de sistemas en Panamá. Cuando un talud necesita una solución superficial de alta capacidad — sin recurrir únicamente a shotcrete o concreto — las mallas GEOBRUGG ofrecen una alternativa flexible, revegetable y de probada trayectoria a nivel mundial.",
    secciones: [
      {
        titulo: "¿Qué son los sistemas GEOBRUGG?",
        parrafos: [
          "GEOBRUGG es un fabricante suizo especializado en sistemas de malla de acero de alta resistencia para estabilización de taludes y protección contra caída de rocas, con proyectos instalados en todo el mundo. Sus sistemas están fabricados con alambre de acero de alta resistencia a la tracción — superior a 1770 N/mm² — en calibres de 2, 3 u 4 mm, lo que permite mantener la malla altamente pretensionada y minimizar deformaciones del talud tratado.",
          "Como instalador certificado, NDC Geotecnia ha sido capacitado y avalado directamente para ejecutar montajes de estos sistemas siguiendo las especificaciones técnicas del fabricante, lo que garantiza que el desempeño de la malla en campo corresponda al diseño calculado.",
        ],
      },
      {
        titulo: "Sistema TECCO®: estabilización superficial de taludes",
        parrafos: [
          "El sistema TECCO® es una malla de acero de alta resistencia que se ancla directamente sobre la superficie del talud —ya sea roca o suelo suelto— mediante placas spike conectadas a anclajes o pernos. La malla se tensiona contra el terreno, generando una presión superficial que confina el material suelto y previene desprendimientos, deslizamientos superficiales y erosión.",
          "Al tratarse de una estructura abierta (no una capa sólida como el shotcrete), el sistema TECCO® permite que la vegetación se desarrolle a través de la malla, lo que la hace especialmente adecuada para taludes donde se busca una solución que se integre visualmente al entorno con el tiempo, además de la función estructural.",
        ],
      },
      {
        titulo: "Sistema SPIDER®: protección activa en roca fracturada",
        parrafos: [
          "El sistema SPIDER® es una malla de cable espiral de alta resistencia diseñada para asegurar bloques de roca sueltos, formaciones irregulares, salientes rocosas y macizos con superficie muy fracturada — condiciones donde una malla plana convencional no se adapta bien al terreno. Utiliza una retícula flexible de anclajes junto con cables perimetrales que se ajustan al contorno irregular de la roca.",
          "Es la solución típica cuando el talud presenta bloques individuales con riesgo de desprendimiento puntual, más que una falla superficial generalizada — un escenario distinto al que resuelve TECCO®, y frecuentemente se evalúan ambos sistemas (o su combinación) según el diagnóstico geotécnico del sitio.",
        ],
      },
      {
        titulo: "Sistema DELTAX®: alternativa liviana de instalación rápida",
        parrafos: [
          "El sistema DELTAX® es una malla de acero de alta resistencia que funciona como alternativa más económica y liviana a la malla hexagonal de doble torsión tradicional, para protección contra caída de rocas e inestabilidad de taludes. Al ser una malla de bajo peso, se instala sin necesidad de maquinaria pesada: se despliega en rollo, se corta al largo requerido y se adapta bien al contorno del terreno, lo que agiliza montajes en sitios de acceso limitado.",
          "NDC Geotecnia también ha instalado malla DELTAX® en proyectos donde la prioridad es una solución de protección superficial rápida de montar y de menor costo relativo, sin sacrificar el respaldo técnico de un sistema certificado GEOBRUGG.",
        ],
      },
      {
        titulo: "Sistema MINAX®: soporte de superficie para minería y canteras",
        parrafos: [
          "MINAX® es una malla de acero de alta resistencia diseñada específicamente para soporte de superficie a gran escala en minería subterránea y canteras a cielo abierto, como alternativa más liviana y eficiente frente a la malla soldada o la malla de cadena de acero convencional. Ofrece mayor resistencia con menor pérdida de área por traslape y tiempos de instalación significativamente más cortos.",
          "Ensayos realizados por la Western Australian School of Mines (WASM) mostraron que la malla MINAX®, con alambre de alta resistencia (tensión superior a 1770 N/mm²), soporta cargas estáticas y dinámicas considerablemente mayores que las mallas de refuerzo convencionales, lo que también le permite absorber mayores niveles de energía en eventos como microsismicidad inducida por voladuras.",
          "NDC Geotecnia instaló malla MINAX® G80/3 como parte del cierre de una mina en Panamá, en un caso presentado en el Congreso GEOBRUGG Panamá 2022 (ver caso completo en la sección de Proyectos).",
        ],
      },
      {
        titulo: "Proceso de instalación",
        parrafos: [
          "La instalación comienza con el mismo paso que cualquier intervención seria en taludes: un diagnóstico geotécnico que determine el mecanismo de falla, la geometría del talud y la carga que la malla debe resistir. A partir de ahí se define el sistema (TECCO®, SPIDER®, DELTAX®, MINAX® o una combinación), el calibre de malla, el patrón de anclajes y las placas de fijación según las tablas de dimensionamiento del fabricante.",
          "En campo, la superficie se limpia y perfila, se instalan los anclajes o pernos en el patrón definido, se extiende y fija la malla con las placas spike o el sistema de cables según corresponda, y se aplica el pretensado final. Todo el montaje sigue los manuales técnicos de GEOBRUGG, lo que permite verificar que la instalación cumple con el diseño calculado.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Cuánta experiencia tiene NDC instalando estos sistemas?",
        respuesta:
          "NDC Geotecnia ha instalado más de 40,000 m² de mallas GEOBRUGG en proyectos de estabilización de taludes, como instalador certificado del fabricante.",
      },
      {
        pregunta: "¿Cuál es la diferencia entre malla GEOBRUGG y shotcrete?",
        respuesta:
          "El shotcrete es una capa sólida de concreto proyectado; las mallas GEOBRUGG son sistemas flexibles y abiertos que permiten revegetación y suelen requerir menos intervención en la superficie del talud. Muchas veces se combinan: malla para confinamiento superficial y shotcrete en zonas puntuales que lo requieran.",
      },
      {
        pregunta: "¿Por qué importa que el instalador esté certificado?",
        respuesta:
          "Porque el desempeño de estos sistemas depende de que el montaje —anclajes, patrón, pretensado— siga exactamente las especificaciones del fabricante. Una instalación certificada da respaldo técnico de que la malla funcionará según lo calculado en el diseño.",
      },
      {
        pregunta: "¿Se puede usar en cualquier tipo de talud?",
        respuesta:
          "El sistema se selecciona según el diagnóstico: TECCO® para taludes de roca o suelo suelto con superficie relativamente uniforme, SPIDER® para roca fracturada con bloques irregulares, DELTAX® como alternativa liviana y de instalación rápida, y MINAX® para soporte de superficie en minería y canteras. Un estudio geotécnico previo determina cuál aplica, o si se necesita una combinación con anclajes y drenaje.",
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
  {
    slug: "monitoreo-satelital",
    nombre: "Monitoreo Satelital",
    tituloSeo: "Monitoreo Satelital de Taludes e Infraestructura en Panamá | INERSIA MONITORING",
    resumen:
      "Monitoreo de deformación del terreno con tecnología satelital, a través de nuestra alianza como representantes de INERSIA MONITORING para Centroamérica y Panamá.",
    intro:
      "Hay movimientos del terreno demasiado lentos o demasiado extendidos para detectarse solo con inspección visual o instrumentación puntual. El monitoreo satelital resuelve eso: mide desplazamientos milimétricos del terreno sobre grandes áreas, a partir de imágenes de radar captadas por satélite, sin necesidad de instalar sensores en el sitio.",
    secciones: [
      {
        titulo: "¿Qué es el monitoreo satelital de terreno?",
        parrafos: [
          "La técnica compara imágenes de radar satelital sucesivas sobre la misma área para detectar y medir movimientos del terreno con precisión milimétrica a lo largo del tiempo, sin necesidad de sensores físicos instalados en campo. Al depender de imágenes satelitales, permite cubrir corredores completos — una vía, una cuenca minera, una zona urbana — en vez de puntos aislados.",
          "En muchas regiones existe además un historial de imágenes de varios años, lo que permite reconstruir la tendencia de movimiento de un sitio antes de decidir si amerita una intervención, no solo su estado actual.",
        ],
      },
      {
        titulo: "Usos principales",
        parrafos: [
          "Monitoreo de taludes de riesgo conocido a lo largo de corredores extensos, como carreteras y vías de acceso en zonas montañosas. Seguimiento de asentamientos (subsidencia) en zonas urbanas o sobre infraestructura crítica — presas, ductos, edificaciones. Monitoreo de operaciones mineras activas y depósitos de relaves o material estéril. Verificación de estabilidad posterior a una intervención de estabilización, como monitoreo de seguimiento a mediano y largo plazo.",
        ],
      },
      {
        titulo: "NDC como representante de INERSIA MONITORING",
        parrafos: [
          "NDC Geotecnia es representante para Centroamérica y Panamá de INERSIA MONITORING, y a través de esta alianza canaliza su plataforma de monitoreo satelital para clientes en la región — como complemento a los estudios de campo y las intervenciones de estabilización que NDC ejecuta directamente.",
          "Para el detalle técnico completo de la plataforma, ver inersiamonitoring.com.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿El monitoreo satelital reemplaza el monitoreo en campo?",
        respuesta:
          "No, lo complementa. Cubre áreas extensas y detecta tendencias de movimiento, pero el criterio de campo — instrumentación puntual, evaluación geotécnica — sigue siendo necesario para decisiones de intervención.",
      },
      {
        pregunta: "¿Se necesita instalar equipos en el sitio para el monitoreo satelital?",
        respuesta:
          "No. Esa es la principal diferencia frente al monitoreo convencional: la medición se obtiene a partir de imágenes satelitales, sin sensores instalados en campo.",
      },
    ],
  },
];

export function getServicio(slug: string) {
  return servicios.find((s) => s.slug === slug);
}
