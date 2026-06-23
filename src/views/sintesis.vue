<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama del componente formativo “Implementación, seguimiento y mejora del modelo organizacional”, organizado en cuatro ejes temáticos: Implementación del modelo organizacional (concepto, importancia, estrategias, recursos, responsabilidades y factores asociados); Comunicación y socialización de procesos organizacionales (estrategias, técnicas, herramientas, socialización, presentación de información y participación); Seguimiento y verificación de la implementación (seguimiento organizacional, control de actividades, verificación, herramientas y análisis de resultados); y Evaluación, informes y ajuste del modelo organizacional (informes, estructura y normativa, oportunidades de mejora, herramientas de ajuste y acciones de mejoramiento). El esquema representa un proceso continuo de fortalecimiento organizacional en proyectos agropecuarios comunitarios.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
