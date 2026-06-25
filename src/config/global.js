export default {
  global: {
    Name: 'Implementación, seguimiento y mejora del modelo organizacional',
    Description:
      'BREVE DESCRIPCIÓN	El componente formativo busca fortalecer las capacidades para implementar, verificar y mejorar procesos organizacionales en organizaciones rurales y comunitarias. Para ello, aborda conceptos, herramientas y metodologías relacionadas con la gestión organizacional, la coordinación de actividades, la administración de recursos y el fortalecimiento institucional. Asimismo, promueve habilidades para la comunicación efectiva, la socialización de procesos y la presentación de información, favoreciendo la participación, el trabajo colaborativo y la articulación entre los diferentes actores involucrados en los proyectos agropecuarios comunitarios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Implementación del modelo organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Concepto e importancia de la implementación organizacional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Estrategias para la implementación del modelo organizacional',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Recursos necesarios para la implementación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Asignación de responsabilidades y organización de actividades',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Factores que favorecen o limitan la implementación',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación y socialización de procesos organizacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estrategias de comunicación organizacional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas y herramientas para la comunicación efectiva',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Socialización de planes, actividades y resultados',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Presentación de información a grupos de interés',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Gestión de la participación durante la implementación',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguimiento y verificación de la implementación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto e importancia del seguimiento organizacional',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Coordinación y control de actividades',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Programación y verificación del cumplimiento de acciones',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Herramientas para el seguimiento de procesos organizacionales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Interpretación y análisis de resultados de la implementación',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Evaluación, informes y ajuste del modelo organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Elaboración de informes de resultados',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Estructura, características y normativa aplicable a los informes',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Identificación de oportunidades de mejora',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Técnicas y herramientas para el ajuste organizacional',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Formulación e implementación de acciones de mejora',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acción de mejora',
      significado:
        'Actividad diseñada para corregir, fortalecer u optimizar procesos organizacionales con el fin de mejorar su desempeño y resultados.',
    },
    {
      termino: 'Comunicación organizacional',
      significado:
        'Proceso de intercambio de información entre los miembros de una organización para facilitar la coordinación, participación y cumplimiento de objetivos.',
    },
    {
      termino: 'Coordinación',
      significado:
        'Proceso mediante el cual se articulan recursos, personas y actividades para garantizar el desarrollo eficiente de las acciones organizacionales.',
    },
    {
      termino: 'Cronograma',
      significado:
        'Herramienta de planificación que organiza las actividades de acuerdo con tiempos, fechas y responsables definidos.',
    },
    {
      termino: 'Estrategia de comunicación',
      significado:
        'Conjunto de acciones planificadas para transmitir información de manera efectiva a los diferentes actores de una organización o comunidad.',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso de análisis que permite valorar los resultados obtenidos frente a los objetivos y metas previamente establecidos.',
    },
    {
      termino: 'Gestión organizacional',
      significado:
        'Conjunto de acciones orientadas a planificar, coordinar, ejecutar y mejorar los procesos de una organización.',
    },
    {
      termino: 'Grupo de interés',
      significado:
        'Persona, organización o institución que puede influir o verse afectada por las decisiones y actividades de una organización.',
    },
    {
      termino: 'Implementación',
      significado:
        'Etapa en la que se ejecutan las actividades, estrategias y acciones definidas para alcanzar los objetivos organizacionales.',
    },
    {
      termino: 'Indicador',
      significado:
        'Medida cuantitativa o cualitativa utilizada para evaluar el desempeño, avance o cumplimiento de una actividad, proceso o meta.',
    },
    {
      termino: 'Informe de resultados',
      significado:
        'Documento que presenta de manera organizada los avances, logros, dificultades y conclusiones de un proceso o actividad desarrollada.',
    },
    {
      termino: 'Mejoramiento continuo',
      significado:
        'Proceso permanente de evaluación y ajuste orientado a incrementar la eficiencia, calidad y efectividad de los procesos organizacionales.',
    },
    {
      termino: 'Participación',
      significado:
        'Intervención activa de las personas o grupos en los procesos de implementación, seguimiento, toma de decisiones y mejora organizacional.',
    },
    {
      termino: 'Seguimiento',
      significado:
        'Proceso sistemático de observación y control que permite verificar el avance y cumplimiento de las actividades programadas.',
    },
    {
      termino: 'Verificación',
      significado:
        'Acción de comprobar que las actividades, procedimientos o resultados se desarrollen conforme a los parámetros y criterios establecidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'AAU – Atlantic International University. (2024, 3 de julio). <em>Herramientas de desarrollo organizacional</em>. AAU Universidad a Distancia.',
      link:
        'https://www.aauniv.com/s/blog/herramientas-de-desarrollo-organizacional/',
    },
    {
      referencia:
        'Equipo de colaboradores. (2024, 7 de junio). <em>Gestión del cambio organizacional: Qué es, tipos e implementación</em>. Cegos España.',
      link:
        'https://www.cegos.es/insights/blog/tendencias-desarrollo-aprendizaje/gestion-del-cambio-organizacional-que-es-tipos-e-implementacion',
    },
    {
      referencia:
        'Laplacianos. (s. f.). <em>Estrategias de comunicación organizacional efectivas</em>. Laplacianos.',
      link:
        'https://laplacianos.com/estrategias-de-comunicacion-organizacional-efectivas/',
    },
    {
      referencia:
        'Peris, O. (2022, 17 de enero). <em>Cómo elaborar un informe para presentar los resultados de tu estrategia</em>. InboundCycle.',
      link:
        'https://www.inboundcycle.com/blog-de-inbound-marketing/como-elaborar-informe-para-presentar-resultados-estrategia',
    },
    {
      referencia:
        'Sertisoft S. A. S. (2025, 25 de junio). <em>La importancia de la trazabilidad en la gestión organizacional</em>. Sertisoft.',
      link:
        'https://sertisoft.com.co/la-importancia-de-la-trazabilidad-en-la-gestion-organizacional/',
    },
    {
      referencia:
        'Suarez, M. (2023, 22 de marzo). <em>Comunicación organizacional: concepto, estrategias, ejemplos y beneficios</em>. Guía del Empresario.',
      link:
        'https://guiadelempresario.com/administracion/comunicacion-organizacional/',
    },
    {
      referencia:
        'Universitat Carlemany. (2026, 11 de marzo). <em>Gestión del cambio organizacional: qué es, etapas y modelos</em>. Universitat Carlemany.',
      link:
        'https://www.universitatcarlemany.com/actualidad/blog/gestion-cambio-organizacional-cp',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Nacional Ecosistema de Recursos Educativos Digitales (RED) - Profesional 06',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto Temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
