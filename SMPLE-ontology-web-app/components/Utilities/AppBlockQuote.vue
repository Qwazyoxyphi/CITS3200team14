<template>
  <div
    :style="_color"
    class="block-quote"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'AppBlockQuote',
  props: {
    color: {
      type: String,
      required: false,
      default: '#ccc'
    }
  },
  computed: {
    _color: function() {
      var color = this.color

      switch (color) {
        case 'red':
          color = '#ec6d5f'
          break
        case 'green':
          color = '#27c9b8'
          break
        case 'blue':
          color = '#2caaca'
          break
      }

      var rgb = this.hexToRGB(color)

      return {
        'border-left-color': color,
        'background-color':
          'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0.2'
      }
    }
  },
  methods: {
    hexToRGB(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return
      result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          }
        : null
    }
  }
}
</script>

<style scoped>
.block-quote {
  overflow: scroll;
  padding: 10px 10px 10px 20px;
  border-left: 5px solid;
  opacity: 1;
  margin-bottom: 10px;
}
</style>
