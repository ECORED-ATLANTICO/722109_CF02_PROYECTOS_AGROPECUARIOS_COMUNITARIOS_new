<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Prueba de conocimientos sobre gestión, seguimiento y mejora continua del modelo organizacional.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos adquiridos sobre la implementación, comunicación, seguimiento, evaluación y mejora de modelos organizacionales en contextos rurales y comunitarios.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por implementación organizacional?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La elaboración de diagnósticos comunitarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La ejecución de actividades y estrategias previamente planificadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La creación de normas jurídicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La elaboración de informes financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es uno de los principales objetivos de la implementación de un modelo organizacional?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la burocracia institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar la ejecución de las acciones planificadas para alcanzar los objetivos organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la planeación estratégica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes elementos es un recurso necesario para la implementación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Recursos humanos.', esCorrecta: true },
            { id: 'b', texto: 'Rumores organizacionales.', esCorrecta: false },
            { id: 'c', texto: 'Opiniones informales.', esCorrecta: false },
            { id: 'd', texto: 'Costumbres familiares.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 4,
          texto: 'La asignación de responsabilidades permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar el trabajo en equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de supervisión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la comunicación organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Distribuir funciones y compromisos entre los participantes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes factores puede limitar la implementación de un modelo organizacional?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Participación activa de los miembros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disponibilidad de recursos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Falta de compromiso de los participantes.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Buena comunicación.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 6,
          texto:
            'Una estrategia de comunicación organizacional tiene como finalidad:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Restringir el acceso a la información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar el intercambio de información entre los actores involucrados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir las reuniones de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir los procesos administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes es una herramienta de comunicación efectiva?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Boletines informativos.', esCorrecta: true },
            { id: 'b', texto: 'Cartografía social.', esCorrecta: false },
            { id: 'c', texto: 'Árbol de problemas.', esCorrecta: false },
            { id: 'd', texto: 'Matriz DOFA.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 8,
          texto: 'La socialización de planes y resultados busca:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ocultar información sensible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Compartir información con los actores interesados y promover su participación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Limitar la toma de decisiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la retroalimentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 9,
          texto: '¿Qué se entiende por grupo de interés?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Personas que realizan actividades recreativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Equipos de trabajo temporales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizaciones privadas exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Actores que pueden influir o verse afectados por las decisiones de la organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 10,
          texto:
            'La gestión de la participación durante la implementación permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer el compromiso y la apropiación de los procesos organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar los conflictos internos.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Reducir la comunicación.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Eliminar responsabilidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 11,
          texto: '¿Qué es el seguimiento organizacional?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un proceso de control y observación del avance de las actividades.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Una estrategia financiera.', esCorrecta: false },
            { id: 'c', texto: 'Un mecanismo jurídico.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Un sistema de contratación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 12,
          texto: 'La coordinación de actividades tiene como propósito:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Duplicar funciones dentro de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar y armonizar las acciones necesarias para alcanzar los objetivos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Eliminar la planificación.', esCorrecta: false },
            { id: 'd', texto: 'Reducir la participación.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 13,
          texto: '¿Qué permite verificar un cronograma?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La misión institucional.', esCorrecta: false },
            {
              id: 'b',
              texto: 'El cumplimiento de actividades y tiempos establecidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los recursos naturales disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La estructura legal de una organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de las siguientes herramientas es utilizada para el seguimiento organizacional?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Lista de verificación.', esCorrecta: true },
            { id: 'b', texto: 'Constitución Política.', esCorrecta: false },
            { id: 'c', texto: 'Organigrama familiar.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Reglamento interno escolar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 15,
          texto: 'La interpretación de resultados permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Sustituir el seguimiento.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Analizar los avances y dificultades de la implementación.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Eliminar la evaluación.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Reducir la participación de los actores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 16,
          texto: '¿Cuál es el propósito principal de un informe de resultados?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar y comunicar los avances, logros y dificultades del proceso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar las reuniones de trabajo.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Generar nuevas normas.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Eliminar la documentación institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de los siguientes elementos hace parte de la estructura básica de un informe?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Introducción.', esCorrecta: true },
            { id: 'b', texto: 'Publicidad institucional.', esCorrecta: false },
            { id: 'c', texto: 'Inventario comercial.', esCorrecta: false },
            { id: 'd', texto: 'Catálogo de productos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 18,
          texto: 'Una oportunidad de mejora corresponde a:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un problema sin solución.', esCorrecta: false },
            { id: 'b', texto: 'Una obligación jurídica.', esCorrecta: false },
            { id: 'c', texto: 'Un recurso económico.', esCorrecta: false },
            {
              id: 'd',
              texto:
                'Una situación que puede fortalecerse para optimizar el desempeño organizacional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de las siguientes herramientas es utilizada para el ajuste organizacional?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Matriz DOFA.', esCorrecta: true },
            { id: 'b', texto: 'Registro civil.', esCorrecta: false },
            { id: 'c', texto: 'Escritura pública.', esCorrecta: false },
            { id: 'd', texto: 'Factura comercial.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación, seguimiento y mejora del modelo organizacional.',
        },
        {
          id: 20,
          texto: '¿Cuál es la finalidad de las acciones de mejora?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar los procesos administrativos innecesarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Corregir dificultades y fortalecer el desempeño organizacional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la planeación estratégica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha superado la actividad y demuestra sólidos conocimientos sobre la implementación, seguimiento y mejora del modelo organizacional.',
          mensaje_incorrecto:
            'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la implementación, seguimiento y mejora del modelo organizacional.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
