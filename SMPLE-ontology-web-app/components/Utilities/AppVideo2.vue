<template>
  <div class="container">
    <iframe 
      class="video"
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/b9g95m8OHqA" 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen />
  </div>
</template>

<script>
export default {
  name: "AppVideo",
  props: {
    path: {
      type: String,
      required: true
    },
    allowFullScreen: {
      type: Boolean,
      required: false,
      default: true
    },
    color: {
      type: String,
      required: false,
      default: '#ffffff'
    },
    showTitle: {
      type: Boolean,
      required: false,
      default: false
    },
    showByLine: {
      type: Boolean,
      required: false,
      default: false
    },
    showPortrait: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>

.container
  padding 56.25% 0 0 0
  position relative

.video
  position absolute
  top 0
  left 0
  width 100%
  height 100%

</style>
