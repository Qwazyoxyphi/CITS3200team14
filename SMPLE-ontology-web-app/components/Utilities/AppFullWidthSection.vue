<template>
  <section
    :style="sectionStyle"
    class="section"
  >
    <h2>{{ title }}</h2>
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    width: {
      type: String,
      required: false,
      default: '100%'
    },
    maxWidth: {
      type: String,
      required: false,
      default: '900px'
    },
    minHeight: {
      type: String,
      required: false,
      default: '100vh'
    }
  },
  computed: {
    sectionStyle() {
      return {
        'width': this.width,
        'max-width': this.maxWidth,
        'min-height': 'calc( ' + this.minHeight + ' - 70px )'
      }
    }
  }
}
</script>

<style scoped>

.section {
  padding: 0;
  background-color: white;
  width: 100vw;
}
</style>
