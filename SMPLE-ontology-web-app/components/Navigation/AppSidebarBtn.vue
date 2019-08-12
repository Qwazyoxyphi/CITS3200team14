<template>
  <div
    :style="_borderColor"
    class="button"
  >
    <h5>{{ text }}</h5>
  </div>
</template>

<script>
export default {
  name: 'AppSidebarBtn',
  props: {
    text: {
      type: String,
      required: true
    },
    borderColor: {
      type: String,
      required: false,
      default: 'rgba(255, 255, 255, 0)'
    }
  },
  computed: {
    _borderColor() {
      let color = this.borderColor

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
      return {
        'border-left-color': color
      }
    }
  }
}
</script>

<style lang="css" scoped>

.button {
  background-color: white;
  padding: 6px 10px 6px 20px;
  border-bottom: 1px solid #e5e5e5;
  border-left: 5px solid rgba(0, 0, 0, 0);
}

.button:hover {
  background-color: #f4f5f7;
  cursor: pointer;
}


</style>
