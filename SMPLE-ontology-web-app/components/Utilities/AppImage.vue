<template>
  <div
    :style="_width"
    class="image-container"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'AppImage',
  props: {
    width: {
      type: String,
      required: false,
      default: 'medium'
    }
  },
  computed: {
    _width: function() {
      switch (this.width) {
        case 'large':
          return { 'max-width': '540px' }
        case 'medium':
          return { 'max-width': '320px' }
        case 'small':
          return { 'max-width': '240px' }
      }
      return { 'max-width': this.width }
    }
  }
}
</script>

<style lang="css" scoped>

.image-container {
  margin: 0 auto;
  width: 100%;
  max-width: 360px;
}

</style>
