<template>
  <section 
    :style="_theme"
    class="section">
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  computed: {
    _theme: function () {
      var theme = this.theme

      switch(theme) {
        case "dark": theme = 'rgb(255,249,249)'
              break
        default: theme = 'white'
      }

      return {
        'background-color': theme
      }
    }
  },
}
</script>

<style scoped>
  .section {
    border-bottom: solid 1px #efefef;
    overflow: hidden;
  }
</style>
