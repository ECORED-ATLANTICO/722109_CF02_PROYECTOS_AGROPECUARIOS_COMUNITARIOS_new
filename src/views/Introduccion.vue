<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 El componente formativo Implementación, seguimiento y mejora del modelo organizacional se orienta al fortalecimiento de las competencias técnicas, organizacionales y metodológicas necesarias para ejecutar, verificar y ajustar modelos organizacionales en organizaciones rurales y comunitarias. En el marco del programa Proyectos Agropecuarios Comunitarios, este componente busca que el aprendiz adquiera herramientas que le permitan coordinar actividades, gestionar procesos de implementación y realizar acciones de seguimiento orientadas al fortalecimiento de la gestión organizacional y comunitaria.

    .row.justify-content-center.align-items-start.mb-4
      .col-12.col-lg-9.mb-0.order-2.order-lg-1(data-aos="flip-left")
        .cajon.color-secundario.p-4(data-aos="zoom-in-right")
          p.mb-0 La implementación y el seguimiento de los procesos organizacionales constituyen elementos fundamentales para garantizar el cumplimiento de los objetivos propuestos, la adecuada articulación de los actores involucrados y el fortalecimiento de las capacidades organizativas. En este sentido, el componente aborda herramientas relacionadas con la coordinación de actividades, la programación de acciones, la asignación de responsabilidades, la gestión de recursos y la aplicación de estrategias de comunicación que faciliten la ejecución efectiva de los procesos organizacionales.
      .col-12.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2(data-aos="flip-right")
        figure
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid")
    
    .row.justify-content-center.align-items-start.mb-0
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-right")
        figure
          img(src='@/assets/curso/introduccion/img_2.png', class="img-fluid")
      .col-12.col-lg-8.mb-0(data-aos="flip-left")
        p.mb-3 Asimismo, el componente integra metodologías y herramientas para la verificación de resultados, la interpretación de información y la socialización de avances ante los diferentes actores de la organización y la comunidad. De igual manera, se promueve la elaboración de informes de resultados como instrumentos fundamentales para documentar el desarrollo de las actividades, evaluar el cumplimiento de los objetivos y apoyar los procesos de toma de decisiones.
        .cajon.color-primario.p-4(data-aos="zoom-in-right")
          p.mb-0 Desde una perspectiva de mejora continua, el módulo desarrolla capacidades para identificar oportunidades de fortalecimiento organizacional y formular ajustes al proceso de implementación mediante la aplicación de técnicas, herramientas y estrategias orientadas al mejoramiento del desempeño organizacional. De esta manera, se busca que el aprendiz contribuya al fortalecimiento de las organizaciones rurales y comunitarias mediante la ejecución eficiente de procesos, la comunicación efectiva de resultados y la implementación de acciones de mejora que favorezcan la sostenibilidad y el desarrollo de las iniciativas agropecuarias comunitarias.    
</template>

<script>
export default {
  name: 'Introduccion',
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
