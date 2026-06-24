<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Evaluación, informes y ajuste del modelo organizacional

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La implementación de un modelo organizacional requiere procesos permanentes de evaluación que permitan conocer el nivel de cumplimiento de los objetivos, la efectividad de las estrategias aplicadas y los resultados obtenidos durante su ejecución. La evaluación constituye una herramienta fundamental para analizar el desempeño organizacional, identificar fortalezas y detectar aspectos que requieren mejoramiento. Como parte de este proceso, la elaboración de informes permite registrar y comunicar los resultados obtenidos a los diferentes actores involucrados, facilitando la transparencia, la rendición de cuentas y la toma de decisiones. Asimismo, la evaluación y el análisis de resultados proporcionan información valiosa para formular ajustes y acciones de mejora que contribuyan al fortalecimiento de la organización.

    p.mb-0(data-aos="zoom-in-right") En las organizaciones rurales y comunitarias, estos procesos favorecen la sostenibilidad de las iniciativas, fortalecen la gestión organizacional y promueven la mejora continua mediante la adaptación de estrategias y procedimientos a las necesidades del entorno.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1 Elaboración de informes de resultados
    .mb-0 

    p.mb-4(data-aos="zoom-in-right") Los informes de resultados son documentos que presentan de manera organizada la información relacionada con las actividades desarrolladas, los avances alcanzados, las dificultades identificadas y los resultados obtenidos durante la implementación de un proceso organizacional. Su finalidad es comunicar información relevante a directivos, asociados, entidades de apoyo y demás actores interesados, facilitando el análisis de la gestión realizada y la toma de decisiones.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema2/img_13.svg', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Tipos de informes organizacionales

    p.mb-5(data-aos="zoom-in-right") Los informes organizacionales son documentos que permiten registrar, analizar y comunicar información relacionada con las actividades, resultados y procesos desarrollados por una organización. Dependiendo de su finalidad y contenido, pueden clasificarse en diferentes tipos:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-3.mb-lg-0.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-center.align-items-center(titulo="Informe de actividades")
            .col-12.col-lg-12.mb-3.mb-lg-0
              p.mb-0 Describe las acciones ejecutadas durante un período determinado, detallando las tareas realizadas y los responsables involucrados.
          .row.justify-content-center.align-items-center(titulo="Informe de seguimiento")
            .col-12.col-lg-12.mb-3.mb-lg-0
              p.mb-0 Presenta el avance de las actividades, el cumplimiento de cronogramas y el estado de ejecución de los procesos organizacionales.
          .row.justify-content-center.align-items-center(titulo="Informe de gestión")
            .col-12.col-lg-12.mb-3.mb-lg-0
              p.mb-0 Resume los resultados obtenidos en una organización o dependencia durante un período específico, evidenciando el cumplimiento de objetivos y metas.
          .row.justify-content-center.align-items-center(titulo="Informe técnico")
            .col-12.col-lg-12.mb-3.mb-lg-0
              p.mb-0 Presenta análisis especializados, resultados de estudios, diagnósticos o evaluaciones que requieren un tratamiento técnico de la información.
          .row.justify-content-center.align-items-center(titulo="Informe final")
            .col-12.col-lg-12.mb-3.mb-lg-0
              p.mb-0 Consolida los resultados generales, logros, dificultades y conclusiones obtenidas al finalizar un proyecto, programa o proceso organizacional.
      .col-12.col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema4/img_2.png', class="img-fluid")

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema2/img_13.svg', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Características de un buen informe

    p.mb-5(data-aos="zoom-in-right") Para que un informe cumpla adecuadamente su función de comunicar información y apoyar la toma de decisiones, debe reunir una serie de características que garanticen su calidad y utilidad, como lo son:

    .row.justify-content-center.align-items-center
      .col-12.col-lg-8.order-2.order-lg-1.mb-0
        .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5.mb-0(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10.mb-0
                h5.mb-4 Claridad y precisión
                p.mb-0 La información debe presentarse de forma comprensible, concreta y ordenada, evitando ambigüedades o interpretaciones erróneas que puedan afectar la comprensión del contenido y los resultados expuestos.
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10.mb-0
                h5.mb-4 Información verificable
                p.mb-0 Los datos y resultados incluidos en el informe deben estar sustentados en evidencias, registros o fuentes confiables que permitan comprobar la validez y exactitud de la información presentada.
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10.mb-0
                h5.mb-4 Organización lógica
                p.mb-0 El contenido debe seguir una secuencia coherente que facilite la lectura y comprensión de los temas desarrollados, permitiendo identificar fácilmente los aspectos más relevantes del informe.
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10.mb-0
                h5.mb-4 Objetividad
                p.mb-0 La información debe presentarse de manera imparcial, basada en hechos y evidencias, evitando opiniones personales que puedan afectar la interpretación de los resultados o situaciones analizadas.
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10.mb-0
                h5.mb-4 Lenguaje técnico apropiado
                p.mb-0 El informe debe utilizar términos acordes con el contexto y la temática abordada, favoreciendo una comunicación precisa y adecuada para los destinatarios de la información.
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10.mb-0
                h5.mb-4 Soporte documental
                p.mb-0 El informe debe estar respaldado por documentos, registros, fotografías, actas u otras evidencias que sustenten la información presentada y fortalezcan su credibilidad.
      .col-8.col-lg-4.order-1.order-lg-2.mb-0.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img_3.png', class="img-fluid")

    br

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0(data-aos="flip-left") 
        .cajon.color-acento-botones.p-4(data-aos="zoom-in-right")
          p.mb-0 #[strong NOTA:] los informes representan una fuente valiosa de información para las organizaciones, ya que facilitan la comunicación de resultados, fortalecen los procesos de seguimiento y control, y apoyan la construcción de estrategias orientadas al mejoramiento continuo y al cumplimiento de los objetivos institucionales.
    
    Separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 Estructura, características y normativa aplicable a los informes
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") La elaboración de informes constituye una actividad fundamental dentro de los procesos organizacionales, ya que permite documentar las acciones desarrolladas, comunicar resultados, registrar evidencias y generar información para la toma de decisiones. Un informe bien elaborado debe presentar la información de manera organizada, objetiva y comprensible, facilitando su consulta y análisis por parte de los diferentes grupos de interés. 

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema2/img_13.svg', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Estructura

    p.mb-5(data-aos="zoom-in-right") Aunque la estructura de un informe puede variar según la naturaleza de la organización, el tipo de actividad desarrollada o los requerimientos institucionales, existen algunos componentes básicos que contribuyen a garantizar la calidad y utilidad del documento.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 4.
      |    Estructura de un informe
    figure(data-aos="flip-left").mb-5
      img(src='@/assets/curso/tema4/img_4.svg', class="img-fluid d-none d-lg-block").mb-3
      img(src='@/assets/curso/tema4/img_5.svg', class="img-fluid d-block d-lg-none").mb-3
      figcaption Nota. SENA, (2026).

    p.mb-5(data-aos="zoom-in-right") Aunque la estructura de un informe puede variar según la naturaleza de la organización, el tipo de actividad desarrollada o los requerimientos institucionales, existen algunos componentes básicos que contribuyen a garantizar la calidad y utilidad del documento.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema2/img_13.svg', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Características

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-right")
      p.mb-0 La elaboración de informes, análisis y documentos técnicos requiere garantizar la calidad, confiabilidad y utilidad de la información presentada. Para ello, es fundamental verificar la exactitud de los datos y respaldarlos con fuentes confiables y verificables. Asimismo, debe existir coherencia entre la información recopilada, los análisis realizados y las conclusiones obtenidas. La presentación de los contenidos debe ser clara, organizada y lógica para facilitar su comprensión, complementándose con evidencias de soporte, como registros, fotografías, actas, gráficos e indicadores, que permitan validar los resultados y fortalecer la credibilidad del documento. 

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema2/img_13.svg', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Normativa y documentación organizacional

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-3.mb-lg-0.order-2.order-lg-1
        p.mb-0(data-aos="zoom-in-right") La elaboración de informes debe ajustarse a requisitos administrativos, técnicos y normativos que garanticen la trazabilidad, transparencia y confiabilidad de la información. La documentación organizacional respalda la ejecución de actividades, facilita el seguimiento, control, auditoría, evaluación y toma de decisiones, además de preservar la memoria institucional. En organizaciones rurales, comunitarias y agropecuarias, una adecuada gestión documental fortalece la transparencia, la confianza de los asociados y la articulación con diferentes entidades. Entre los principales documentos de soporte se encuentran las actas de reunión, registros de asistencia, planes de acción, informes de seguimiento, evidencias fotográficas, indicadores de gestión y registros administrativos y financieros.
      .col-12.col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema4/img_6.png', class="img-fluid")

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3 Identificación de oportunidades de mejora
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") La mejora organizacional comienza con la identificación de aspectos que pueden optimizarse para incrementar la eficiencia, efectividad y sostenibilidad de los procesos desarrollados. Las oportunidades de mejora surgen del análisis de resultados, las observaciones realizadas durante el seguimiento, las recomendaciones de los participantes y la evaluación del desempeño organizacional.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema2/img_13.svg', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto ¿Qué es una oportunidad de mejora?

    p.mb-5(data-aos="zoom-in-right") Es una situación identificada dentro de un proceso organizacional que puede fortalecerse mediante la implementación de acciones correctivas, preventivas o de optimización.

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-right")
      h5 Tabla 7.
      |  Fuentes para identificar oportunidades de mejora
    .tabla-a.mb-4(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA. (2026).
        thead
          tr
            th.col-auto.col-lg-3 Fuente
            th.col-auto.col-lg-auto Descripción
            th.col-auto.col-lg-auto Ejemplo
        tbody
          tr
            td Seguimiento de actividades
            td.text-start Consiste en la revisión periódica de las tareas ejecutadas para verificar su avance e identificar oportunidades de mejora.
            td.text-start Se detecta un retraso en el cronograma y se realizan ajustes.
          tr.bg-table-01
            td Evaluación de resultados
            td.text-start Permite comparar los resultados obtenidos con los objetivos propuestos para identificar fortalezas y aspectos por mejorar.
            td.text-start Se evidencia que no se alcanzó la meta de aprendizaje esperada.
          tr
            td Opinión de los participantes
            td.text-start Recoge percepciones, sugerencias y niveles de satisfacción de quienes participan en las actividades.
            td.text-start Los participantes solicitan ampliar el tiempo de las actividades.
          tr.bg-table-01
            td Informes organizacionales
            td.text-start Documentan la ejecución y los resultados de los procesos, facilitando el análisis y la toma de decisiones.
            td.text-start El informe muestra incumplimientos en algunas actividades programadas.
          tr
            td Indicadores de gestión
            td.text-start Miden el desempeño de procesos o actividades para apoyar la mejora continua.
            td.text-start La asistencia registrada es inferior a la meta establecida.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-0 La identificación de oportunidades de mejora aporta importantes beneficios para el fortalecimiento y desarrollo de las organizaciones, ya que permite reconocer aspectos que pueden optimizarse para alcanzar mejores resultados. Entre sus principales ventajas se encuentra el incremento de la eficiencia organizacional, al facilitar la implementación de acciones que mejoran el desempeño de los procesos y el cumplimiento de los objetivos establecidos. Asimismo, contribuye a reducir errores, dificultades y situaciones que puedan afectar el funcionamiento de la organización, permitiendo anticipar problemas y adoptar medidas oportunas para su solución.
              .bloque-enlace__accion

    Separador

    #t_4_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.4 Técnicas y herramientas para el ajuste organizacional
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema4/img_7.png', class="img-fluid")
      .col-12.col-lg-8.mb-3.mb-lg-0
        .tarjeta.color-secundario-10.p-4.rounded-0.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          p.mb-0 El ajuste organizacional corresponde al conjunto de acciones orientadas a corregir, fortalecer o mejorar los procesos, procedimientos y actividades desarrolladas dentro de una organización. Su propósito es garantizar que las acciones implementadas respondan adecuadamente a los objetivos establecidos y que las dificultades identificadas durante el seguimiento puedan ser atendidas de manera oportuna.
        p.mb-0(data-aos="zoom-in-right") Para realizar ajustes efectivos es necesario utilizar técnicas que permitan analizar la situación actual de la organización, identificar las causas de los problemas, valorar alternativas de solución y construir estrategias de mejoramiento. Estas técnicas facilitan la participación de los diferentes actores organizacionales, promueven la toma de decisiones basada en evidencias y contribuyen al fortalecimiento de la gestión institucional. A continuación, se presentan algunas de las técnicas más utilizadas en los procesos de ajuste organizacional:

    .row.justify-content-center.align-items-center.mb-5 
      .col-12.col-lg-8.order-2.order-lg-1
        .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-6").p-2.rounded-3
            .tarjeta-img-titulo
              .tarjeta-img-titulo__imagen
                figure.mb-0
                  img(src='@/assets/curso/tema4/img_8.png', class="img-fluid")
              .tarjeta-img-titulo__contenido
                h5.tarjeta-img-titulo__titulo.mb-3 Análisis de causas
                p.mb-0 Técnica que permite identificar los factores que originan problemas o limitan el cumplimiento de objetivos, facilitando la implementación de soluciones enfocadas en las causas reales y no solo en sus efectos.
            .tarjeta-img-titulo
              .tarjeta-img-titulo__imagen
                figure.mb-0
                  img(src='@/assets/curso/tema4/img_9.png', class="img-fluid")
              .tarjeta-img-titulo__contenido
                h5.tarjeta-img-titulo__titulo.mb-3 Revisión de procesos
                p.mb-0 Consiste en evaluar cómo se desarrollan las actividades organizacionales para detectar ineficiencias, duplicidades, retrasos o procedimientos susceptibles de mejora, optimizando recursos y fortaleciendo la gestión.
            .tarjeta-img-titulo
              .tarjeta-img-titulo__imagen
                figure.mb-0
                  img(src='@/assets/curso/tema4/img_10.png', class="img-fluid")
              .tarjeta-img-titulo__contenido
                h5.tarjeta-img-titulo__titulo.mb-3 Mesas de trabajo
                p.mb-0 Espacios de participación y diálogo donde diferentes actores analizan situaciones, intercambian experiencias y construyen propuestas de solución de manera conjunta para fortalecer los procesos organizacionales.
            .tarjeta-img-titulo
              .tarjeta-img-titulo__imagen
                figure.mb-0
                  img(src='@/assets/curso/tema4/img_11.png', class="img-fluid")
              .tarjeta-img-titulo__contenido
                h5.tarjeta-img-titulo__titulo.mb-3 Evaluación participativa
                p.mb-0 Método que involucra a los integrantes de la organización en el análisis de resultados y la identificación de oportunidades de mejora, promoviendo el compromiso, la transparencia y la corresponsabilidad.
            .tarjeta-img-titulo
              .tarjeta-img-titulo__imagen
                figure.mb-0
                  img(src='@/assets/curso/tema4/img_12.png', class="img-fluid")
              .tarjeta-img-titulo__contenido
                h5.tarjeta-img-titulo__titulo.mb-3 Análisis comparativo
                p.mb-0 Técnica que compara resultados obtenidos con metas, objetivos o indicadores establecidos, permitiendo identificar brechas, reconocer buenas prácticas y definir acciones de mejora continua.
      .col-10.col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2(data-aos="zoom-out-up")
        figure
          img(src='@/assets/curso/tema4/img_13.png', class="img-fluid")

    p.mb-5(data-aos="zoom-in-right") Una vez identificadas las técnicas es necesario contar con instrumentos que permitan transformar estos hallazgos en acciones concretas. Para ello, las organizaciones disponen de diversas herramientas de ajuste organizacional que facilitan la planificación, implementación y seguimiento de las mejoras, contribuyendo al fortalecimiento de los procesos, la optimización de los recursos y el cumplimiento de los objetivos institucionales. A continuación, se presentan algunas de las herramientas más utilizadas para este propósito: 

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-right")
      h5 Tabla 8.
      |  Herramientas utilizadas para el ajuste organizacional
    .tabla-a.mb-4(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-3 Herramienta
            th.col-auto.col-lg-auto Finalidad
            th.col-auto.col-lg-auto Ejemplo
        tbody
          tr
            td Matriz DOFA
            td.text-start Permite analizar las condiciones internas y externas de la organización para identificar fortalezas, debilidades, oportunidades y amenazas que apoyen la toma de decisiones.
            td.text-start Identificar como fortaleza la experiencia de los asociados y como amenaza la disminución de recursos financieros.
          tr.bg-table-01
            td Árbol de problemas
            td.text-start Facilita la identificación de las causas y consecuencias de una situación problemática, contribuyendo a definir acciones de mejora más efectivas.
            td.text-start Analizar las causas y efectos de la baja participación de los asociados en las reuniones.
          tr
            td Planes de mejoramiento
            td.text-start Organizan las acciones necesarias para corregir debilidades, fortalecer procesos y alcanzar los objetivos propuestos.
            td.text-start Establecer actividades de capacitación para mejorar la gestión administrativa.
          tr.bg-table-01
            td Indicadores de gestión
            td.text-start Permiten medir el desempeño de procesos, actividades o proyectos para evaluar resultados y orientar la mejora continua.
            td.text-start Medir el porcentaje de cumplimiento de las actividades programadas durante el año.
          tr
            td Matrices de seguimiento
            td.text-start Facilitan el control y monitoreo de las acciones implementadas, verificando avances, responsables y cumplimiento de metas.
            td.text-start Registrar el avance mensual de las actividades definidas en un plan de mejoramiento.

    Separador

    #t_4_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.5 Formulación e implementación de acciones de mejora
    .mb-0 

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-right")
      p.mb-0 Las acciones de mejora son actividades diseñadas para corregir dificultades, fortalecer procesos o incrementar la efectividad organizacional. Estas acciones pueden surgir de los procesos de evaluación, seguimiento o análisis de resultados. Su formulación requiere identificar claramente el problema o situación a mejorar, establecer objetivos específicos y definir actividades concretas que permitan alcanzar los resultados esperados

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-right")
      h5 Tabla 9.
      |  Tipos de acciones de mejora
    .tabla-a.mb-4(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota: SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-3 Tipo de acción de mejora
            th.col-auto.col-lg-auto Finalidad
            th.col-auto.col-lg-auto Características
        tbody
          tr
            td Acciones correctivas
            td.text-start Eliminar las causas de problemas o situaciones ya identificadas.
            td.text-start Se implementan cuando existe una desviación, incumplimiento o dificultad que afecta los resultados. Permiten corregir errores y evitar que vuelvan a presentarse.
          tr.bg-table-01
            td Acciones preventivas
            td.text-start Evitar la ocurrencia de situaciones no deseadas.
            td.text-start Permiten anticiparse a posibles riesgos, dificultades o fallas potenciales. Contribuyen a fortalecer la planificación y la gestión organizacional.
          tr
            td Acciones de fortalecimiento
            td.text-start Incrementar las capacidades institucionales y organizacionales.
            td.text-start Mejoran el desempeño de los procesos, los equipos de trabajo y los mecanismos de gestión. Favorecen el crecimiento, la sostenibilidad y la consolidación de la organización.
          tr.bg-table-01
            td Acciones de innovación
            td.text-start Incorporar nuevas prácticas, metodologías, tecnologías o herramientas.
            td.text-start Promueven la modernización de los procesos organizacionales, estimulan la creatividad y facilitan la adaptación a nuevas necesidades y condiciones del entorno.

    p.mb-5(data-aos="zoom-in-right") Para garantizar una adecuada planificación y ejecución de las acciones propuestas, un plan de mejora debe contener como mínimo los siguientes elementos:

    .row.justify-content-center.mb-0
      .col-12.col-lg-6.mb-4
        .tarjeta.color-primario-20.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-4.col-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img_14.svg', class="img-fluid")
            .col-12.col-lg-10.mb-3
              h5.mb-0 Situación identificada
              p.mb-0 Descripción del problema, necesidad u oportunidad de mejora.
      .col-12.col-lg-6.mb-4
        .tarjeta.color-secundario-20.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-4.col-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img_15.svg', class="img-fluid")
            .col-12.col-lg-10.mb-3
              h5.mb-0 Objetivo de mejora
              p.mb-0 Resultado que se espera alcanzar mediante las acciones propuestas.
      .col-12.col-lg-6.mb-4
        .tarjeta.color-primario-20.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-4.col-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img_16.svg', class="img-fluid")
            .col-12.col-lg-10.mb-3
              h5.mb-0 Actividades propuestas
              p.mb-0 Conjunto de acciones que se desarrollarán para lograr el objetivo
      .col-12.col-lg-6.mb-4
        .tarjeta.color-secundario-20.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-4.col-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img_17.svg', class="img-fluid")
            .col-12.col-lg-10.mb-3
              h5.mb-0 Responsables
              p.mb-0 Personas o equipos encargados de ejecutar las actividades. 
      .col-12.col-lg-6.mb-4
        .tarjeta.color-primario-20.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-4.col-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img_18.svg', class="img-fluid")
            .col-12.col-lg-10.mb-3
              h5.mb-0 Recursos requeridos
              p.mb-0 Medios humanos, técnicos, materiales y financieros necesarios para la implementación.
      .col-12.col-lg-6.mb-4
        .tarjeta.color-secundario-20.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-4.col-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img_19.svg', class="img-fluid")
            .col-12.col-lg-10.mb-3
              h5.mb-0 Cronograma de ejecución
              p.mb-0 Programación de fechas, tiempos y plazos para cada actividad. 
      .col-12.col-lg-6.mb-4
        .tarjeta.color-primario-20.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-4.col-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img_20.svg', class="img-fluid")
            .col-12.col-lg-10.mb-3
              h5.mb-0 Indicadores de seguimiento
              p.mb-0 Criterios utilizados para medir el avance y cumplimiento de las acciones
      .col-12.col-lg-6.mb-4
        .tarjeta.color-secundario-20.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-4.col-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img_21.svg', class="img-fluid")
            .col-12.col-lg-10.mb-3
              h5.mb-0 Resultados esperados
              p.mb-0 Beneficios o cambios que se pretende obtener una vez implementadas las mejoras. 
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
