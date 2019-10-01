<template>
  <section
    :style="sectionStyle"
    class="section"
  >
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    color: {
      type: String,
      required: false,
      default: 'white'
    },
    title: {
      type: String,
      required: false,
      default: 'Title'
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
    }
  },
  computed: {
    sectionStyle() {
      var color = this.color

      switch (color) {
        case 'red':
          color = '#ec6d5f'
          break
        case 'green':
          color = '#27c9b8'
          break
        case 'blue':
          color = '#1171ba'
          break
      }
      return {
        'border-top-color': color,
        width: this.width,
        'max-width': this.maxWidth,
        'padding-top': 50 + 'px'
      }
    }
  }
}
</script>

<style lang="css" scoped>

.section {
  margin: 40px auto;
  padding: 0 40px 20px 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-top: 5px solid;
  background-color: white;
}

h2 {
  font-weight: bold;
  font-size: 2.4rem;
  text-decoration: underline;
  text-align: center;
}

</style>
