<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Implementación del modelo organizacional
  
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las organizaciones que desarrollan proyectos agropecuarios comunitarios requieren una estructura que facilite la coordinación de actividades, la participación de sus integrantes y el cumplimiento de los objetivos propuestos. Para ello, es fundamental contar con mecanismos que orienten la gestión de recursos, la toma de decisiones y la articulación de esfuerzos entre los diferentes actores involucrados. De esta manera, se fortalece la capacidad organizativa, se promueve el trabajo colaborativo y se generan condiciones favorables para la sostenibilidad y el crecimiento de las iniciativas productivas en beneficio de la comunidad.

    p.mb-5(data-aos="zoom-in-right") La adecuada implementación requiere coordinación, liderazgo, asignación de recursos y participación de los integrantes de la organización. Asimismo, demanda mecanismos de seguimiento que permitan verificar el cumplimiento de las actividades y realizar ajustes cuando sea necesario.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Concepto e importancia de la implementación organizacional
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_2.png', class="img-fluid")
      .col-12.col-lg-8.mb-3.mb-lg-0
        p.mb-4(data-aos="zoom-in-right") La implementación organizacional corresponde al proceso mediante el cual una organización ejecuta las acciones, estrategias y actividades definidas en sus planes de trabajo con el propósito de alcanzar los objetivos establecidos. Este proceso permite transformar la planeación en resultados concretos, facilitando la coordinación de esfuerzos, la utilización eficiente de los recursos y la articulación de los diferentes actores involucrados.
        .cajon.color-acento-contenido.p-4(data-aos="zoom-in-right")
          p.mb-0 Su importancia radica en que permite orientar de manera ordenada las actividades, optimizar el uso de los recursos disponibles y fortalecer la coordinación entre los miembros de la organización. Asimismo, contribuye al cumplimiento de los objetivos establecidos, favorece la toma de decisiones oportunas y promueve una mayor eficiencia en la ejecución de los proyectos productivos.

    p.mb-5(data-aos="zoom-in-right") Importancia de la implementación organizacional:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center.align-items-center(titulo="Cumplimiento de objetivos")
        .col-12.col-lg-9.mb-3.mb-lg-0.order-2.order-lg-1
          p.mb-0 Permite convertir los planes y metas en acciones concretas, facilitando el cumplimiento de los objetivos institucionales. Mediante la asignación clara de responsabilidades, el seguimiento de actividades y la evaluación de resultados, la organización puede verificar avances, corregir desviaciones y mejorar continuamente su desempeño.
        .col-12.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema1/img_3.png', class="img-fluid")
      .row.justify-content-center.align-items-center(titulo="Coordinación institucional")
        .col-12.col-lg-9.mb-3.mb-lg-0.order-2.order-lg-1
          p.mb-0 Fortalece la coordinación entre las diferentes áreas, líderes y miembros de la organización. Esto favorece la comunicación, la articulación de esfuerzos y el desarrollo ordenado de las actividades, evitando duplicidades y facilitando el cumplimiento de compromisos tanto internos como con entidades externas y aliados estratégicos.
        .col-12.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema1/img_4.png', class="img-fluid")
      .row.justify-content-center.align-items-center(titulo="Uso eficiente de recursos")
        .col-12.col-lg-9.mb-3.mb-lg-0.order-2.order-lg-1
          p.mb-0 Contribuye al aprovechamiento adecuado de los recursos humanos, financieros, físicos y tecnológicos. Al definir procesos y responsabilidades claras, se optimiza la gestión de los recursos disponibles, se reducen desperdicios y se mejora la eficiencia operativa, favoreciendo la sostenibilidad y productividad de la organización.
        .col-12.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema1/img_5.png', class="img-fluid")
      .row.justify-content-center.align-items-center(titulo="Participación")
        .col-12.col-lg-9.mb-3.mb-lg-0.order-2.order-lg-1
          p.mb-0 La implementación organizacional promueve la participación de los integrantes en la gestión y desarrollo de las actividades. Esto fortalece el sentido de pertenencia, el compromiso y la corresponsabilidad frente a los objetivos comunes, además de facilitar la generación de ideas, propuestas y soluciones que benefician a la organización.
        .col-12.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema1/img_6.png', class="img-fluid")
      .row.justify-content-center.align-items-center(titulo="Desarrollo organizacional")
        .col-12.col-lg-9.mb-3.mb-lg-0.order-2.order-lg-1
          p.mb-0 Impulsa el fortalecimiento de las capacidades internas y la mejora de los procesos de trabajo. Además, favorece la adaptación a los cambios del entorno, el desarrollo del liderazgo y la consolidación de una cultura de mejoramiento continuo, contribuyendo al crecimiento y sostenibilidad de la organización.
        .col-12.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema1/img_7.png', class="img-fluid")

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Estrategias para la implementación del modelo organizacional
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") Las estrategias de implementación son acciones planificadas que facilitan la ejecución ordenada y eficiente del modelo organizacional. Estas estrategias permiten orientar el trabajo de los equipos, organizar recursos y garantizar el cumplimiento de los objetivos propuestos. Entre las principales estrategias se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_8.png', class="img-fluid")
      .col-12.col-lg-8.mb-3.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-center.align-items-center(titulo="Socialización del modelo")
            .col-12.col-lg-12.mb-3.mb-lg-0
              p.mb-0 Divulgación de objetivos, funciones y actividades a los integrantes de la organización.
          .row.justify-content-center.align-items-center(titulo="Asignación de responsabilidades")
            .col-12.col-lg-12.mb-3.mb-lg-0
              p.mb-0 Definición de funciones y compromisos para cada participante.
          .row.justify-content-center.align-items-center(titulo="Capacitación")
            .col-12.col-lg-12.mb-3.mb-lg-0
              p.mb-0 Fortalecimiento de conocimientos y habilidades requeridas para la implementación.
          .row.justify-content-center.align-items-center(titulo="Coordinación de actividades")
            .col-12.col-lg-12.mb-3.mb-lg-0
              p.mb-0 Organización de tareas y recursos necesarios para la ejecución.
          .row.justify-content-center.align-items-center(titulo="Seguimiento permanente")
            .col-12.col-lg-12.mb-3.mb-lg-0
              p.mb-0 Verificación continua del avance de las acciones programadas.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-0 La aplicación de estas estrategias facilita la apropiación del modelo organizacional por parte de los integrantes de la organización y contribuye a reducir dificultades durante su ejecución.
              .bloque-enlace__accion

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.3 Recursos necesarios para la implementación
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_10.png', class="img-fluid")
      .col-12.col-lg-8.mb-3.mb-lg-0
        p.mb-4(data-aos="zoom-in-right") La implementación de cualquier proceso organizacional requiere la disponibilidad y adecuada administración de diferentes tipos de recursos. Estos constituyen los medios que permiten ejecutar las actividades planificadas, alcanzar los objetivos establecidos y garantizar el adecuado funcionamiento de la organización durante el desarrollo de sus acciones. La identificación previa de los recursos necesarios facilita la planificación, la asignación de responsabilidades y la coordinación de actividades, evitando retrasos o limitaciones que puedan afectar el cumplimiento de las metas propuestas. Asimismo, una gestión eficiente de los recursos contribuye a optimizar los esfuerzos de la organización, mejorar el uso de los bienes disponibles y fortalecer la sostenibilidad de los procesos organizacionales.
        .tarjeta.color-primario-10.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          p.mb-0 En las organizaciones rurales y comunitarias, la disponibilidad de recursos influye directamente en la capacidad para desarrollar proyectos, prestar servicios, gestionar iniciativas y promover la participación de sus integrantes. Por esta razón, es fundamental realizar una valoración periódica de los recursos existentes, identificar necesidades adicionales y establecer mecanismos que permitan su adecuada utilización, control y seguimiento durante la implementación de las actividades. La implementación de cualquier proceso organizacional requiere la disponibilidad y adecuada administración de diferentes tipos de recursos, entre lo más comunes tenemos:
    
    TabsA.color-secundario.mb-3.uno.mb-5
      .tarjeta.color-secundario-10.p-5(titulo="Humanos")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-8.mb-3.mb-lg-0.order-2.order-lg-1
            h5.mb-4 Humanos
            p.mb-0 Corresponden a las personas que participan en la ejecución de las actividades organizacionales. Incluyen directivos, asociados, trabajadores, técnicos y demás colaboradores que aportan conocimientos, habilidades y experiencia para el cumplimiento de los objetivos, garantizando el adecuado funcionamiento y desarrollo de la organización.
          .col-12.col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema1/img_11.png', class="img-fluid")
      .tarjeta.color-secundario-10.p-5(titulo="Financieros")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-8.mb-3.mb-lg-0.order-2.order-lg-11
            h5.mb-4 Financieros
            p.mb-0 Comprenden los fondos económicos que permiten financiar las actividades, proyectos y operaciones de la organización. Incluyen ingresos, ahorros, créditos, aportes de los asociados y otras fuentes de financiación necesarias para cubrir costos, realizar inversiones y asegurar la sostenibilidad institucional.
          .col-12.col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema1/img_12.png', class="img-fluid")
      .tarjeta.color-secundario-10.p-5(titulo="Materiales")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-8.mb-3.mb-lg-0.order-2.order-lg-11
            h5.mb-4 Materiales
            p.mb-0 Son los bienes físicos requeridos para el desarrollo de las actividades organizacionales y productivas. Incluyen infraestructura, maquinaria, equipos, herramientas, insumos y suministros que facilitan la ejecución de los procesos y contribuyen al cumplimiento eficiente de los objetivos establecidos por la organización.
          .col-12.col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema1/img_13.png', class="img-fluid")
      .tarjeta.color-secundario-10.p-5(titulo="Tecnológicos")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-8.mb-3.mb-lg-0.order-2.order-lg-11
            h5.mb-4 Tecnológicos
            p.mb-0 Son las diferentes herramientas, equipos y sistemas tecnológicos que apoyan la gestión organizacional. Incluyen software, hardware, plataformas digitales, sistemas de información y medios de comunicación que facilitan el acceso a datos, mejoran los procesos y fortalecen la toma de decisiones.
          .col-12.col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema1/img_14.png', class="img-fluid")
      .tarjeta.color-secundario-10.p-5(titulo="Institucionales")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-8.mb-3.mb-lg-0.order-2.order-lg-11
            h5.mb-4 Institucionales
            p.mb-0 Hacen parte las políticas, normas, procedimientos, alianzas y mecanismos de gestión que respaldan el funcionamiento de la organización. Estos recursos fortalecen la estructura organizacional, facilitan la coordinación de actividades y promueven el cumplimiento de los objetivos, la transparencia y la mejora continua.
          .col-12.col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema1/img_15.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0(data-aos="flip-left") 
        .cajon.color-acento-botones.p-4(data-aos="zoom-in-right")
          p.mb-0 #[strong NOTA:] la adecuada gestión de estos recursos permite optimizar la ejecución de las actividades y mejorar los resultados organizacionales.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.4 Asignación de responsabilidades y organización de actividades
    .mb-0 

    .bg_img_1.mb-0

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-8.mb-3.mb-lg-0.order-2.order-lg-1
          p.mb-4(data-aos="zoom-in-right") La asignación de responsabilidades consiste en definir claramente quién será el encargado de ejecutar, supervisar o apoyar cada una de las actividades contempladas en el proceso de implementación. Cuando las responsabilidades están claramente establecidas se facilita la coordinación, se reducen los conflictos y se fortalece el compromiso de los participantes. Los elementos para la asignación de responsabilidades son los siguientes:
          ul.list-unstyled.mb-0
            li.d-flex.align-items-baseline.mb-0
              i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
              span Identificación de actividades. 
            li.d-flex.align-items-baseline.mb-0
              i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
              span Designación de responsables. 
            li.d-flex.align-items-baseline.mb-0
              i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
              span Definición de funciones. 
            li.d-flex.align-items-baseline.mb-0
              i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
              span Establecimiento de tiempos de ejecución. 
            li.d-flex.align-items-baseline.mb-0
              i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
              span Determinación de recursos requeridos. 
            li.d-flex.align-items-baseline.mb-0
              i.fa-solid.fa-circle.me-3.flex-shrink-0(style="color:#FF8E6B; font-size: 8px; line-height: 1.5;").mb-0
              span Definición de mecanismos de seguimiento. 
        .col-6.col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema1/img_17.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0(data-aos="flip-left") 
        .cajon.color-acento-botones.p-4(data-aos="zoom-in-right")
          p.mb-0 #[strong NOTA:] la organización adecuada de actividades permite distribuir las cargas de trabajo y garantizar el cumplimiento de los cronogramas establecidos.

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.5 Factores que favorecen o limitan la implementación
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_18.png', class="img-fluid")
      .col-12.col-lg-8.mb-3.mb-lg-0
        .tarjeta.color-secundario-10.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          p.mb-0 La implementación de un modelo organizacional es un proceso dinámico que puede verse influenciado por múltiples condiciones internas y externas. Estas condiciones pueden facilitar el cumplimiento de los objetivos organizacionales o, por el contrario, generar dificultades que afecten el desarrollo de las actividades programadas. Por esta razón, es importante que las organizaciones identifiquen de manera permanente los factores que inciden en la ejecución de sus procesos, con el fin de fortalecer aquellos elementos que contribuyen al éxito organizacional y gestionar adecuadamente los riesgos que puedan afectar los resultados esperados.
        p.mb-4(data-aos="zoom-in-right") El análisis de estos factores permite anticipar situaciones que podrían influir en el desempeño de la organización, mejorar la capacidad de respuesta frente a los cambios del entorno y fortalecer la toma de decisiones. Asimismo, facilita la formulación de estrategias orientadas a optimizar los recursos disponibles, mejorar la coordinación entre los actores involucrados y promover una mayor participación de los integrantes de la organización.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.mb-0(data-aos="flip-left") 
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 1.
          |  Factores que favorecen la implementación
        .tabla-a.mb-0(data-aos="flip-left")
          table
            caption 
              p.mb-0 Nota. SENA, (2026).
            thead
              tr
                th.col-auto.col-lg-3 Factor
                th.col-auto.col-lg-auto Descripción
                th.col-auto.col-lg-auto Ejemplo
            tbody
              tr
                td Liderazgo efectivo
                td.text-start Orienta las acciones de la organización, facilita la toma de decisiones, promueve el compromiso de los integrantes y fortalece el cumplimiento de los objetivos institucionales.
                td.text-start El representante de una asociación cafetera coordina las actividades de producción y comercialización.
              tr.bg-table-01
                td Comunicación adecuada
                td.text-start Una comunicación clara y oportuna facilita la transmisión de información, mejora la coordinación de actividades, reduce errores y fortalece las relaciones entre los miembros de la organización.
                td.text-start Los integrantes de una asociación agrícola realizan reuniones semanales para informar avances del cultivo.
              tr
                td Participación
                td.text-start La participación de los integrantes fortalece el sentido de pertenencia, favorece la toma de decisiones colectivas y contribuye al logro de los objetivos organizacionales.
                td.text-start La comunidad propone estrategias para mejorar la comercialización de sus productos agropecuarios.
              tr.bg-table-01
                td Disponibilidad de recursos
                td.text-start Contar con recursos suficientes permite desarrollar las actividades planificadas, garantizar la continuidad de los procesos y facilitar el cumplimiento de las metas organizacionales.
                td.text-start La asociación cuenta con recursos económicos para realizar capacitaciones técnicas a los productores.
              tr
                td Planeación adecuada
                td.text-start Permite organizar actividades, definir responsabilidades, establecer tiempos de ejecución y optimizar recursos para alcanzar los resultados esperados.
                td.text-start La organización elabora un cronograma para las labores de siembra, mantenimiento y cosecha.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-0 Los factores favorables fortalecen la capacidad de la organización para alcanzar sus objetivos y facilitan la ejecución eficiente de las actividades. Cuando estos elementos están presentes, se generan condiciones que promueven el compromiso de los participantes, mejoran el ambiente organizacional y contribuyen a una gestión más efectiva de los procesos.
              .bloque-enlace__accion

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.mb-0(data-aos="flip-left") 
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 2.
          |  Factores que pueden limitar la implementación
        .tabla-a.mb-0(data-aos="flip-left")
          table
            caption 
              p.mb-0 Nota. SENA, (2026)
            thead
              tr
                th.col-auto.col-lg-3 Factor
                th.col-auto.col-lg-auto Descripción
                th.col-auto.col-lg-auto Ejemplo
            tbody
              tr
                td Escasez de recursos
                td.text-start La insuficiencia de recursos humanos, financieros, materiales o tecnológicos dificulta la ejecución de las actividades planificadas, limita el alcance de los proyectos y afecta el cumplimiento de los objetivos organizacionales.
                td.text-start Una asociación de productores no cuenta con recursos suficientes para adquirir insumos agrícolas.
              tr.bg-table-01
                td Falta de coordinación
                td.text-start La ausencia de una adecuada articulación entre los integrantes de la organización genera retrasos, duplicidad de esfuerzos y dificultades en la ejecución de las actividades necesarias para el proyecto.
                td.text-start Se programan jornadas de trabajo sin informar a todos los miembros de la organización.
              tr
                td Resistencia al cambio
                td.text-start La falta de disposición para adoptar nuevas prácticas, tecnologías o formas de trabajo puede limitar la implementación de mejoras y afectar el desarrollo de los procesos organizacionales.
                td.text-start Algunos productores se niegan a implementar técnicas agrícolas recomendadas por los asistentes técnicos.
              tr.bg-table-01
                td Comunicación deficiente
                td.text-start La transmisión inadecuada o insuficiente de información puede generar confusiones, errores en la ejecución de actividades y dificultades para coordinar acciones entre los miembros de la organización.
                td.text-start Los cambios en el cronograma de siembra no son comunicados oportunamente a los productores.
              tr
                td Baja participación
                td.text-start La escasa participación de los integrantes reduce el compromiso con los objetivos organizacionales, limita la toma de decisiones colectivas y dificulta el desarrollo efectivo de las actividades programadas.
                td.text-start Pocos asociados asisten a las reuniones de planificación del proyecto productivo.

    p.mb-4(data-aos="zoom-in-right") Los factores limitantes representan situaciones que pueden afectar el desempeño organizacional y dificultar el cumplimiento de los objetivos propuestos. Si no son identificados y gestionados oportunamente, pueden generar retrasos, disminuir la eficiencia de los procesos y afectar la participación de los miembros de la organización.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0(data-aos="flip-left") 
        .cajon.color-acento-botones.p-4(data-aos="zoom-in-right")
          p.mb-0 #[strong NOTA:] la identificación temprana de estos factores permite implementar acciones preventivas y correctivas orientadas a minimizar los riesgos, fortalecer las capacidades organizacionales y mejorar las condiciones necesarias para una implementación exitosa. De esta manera, las organizaciones pueden adaptarse con mayor facilidad a los desafíos del entorno y consolidar procesos más eficientes, participativos y sostenibles.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
