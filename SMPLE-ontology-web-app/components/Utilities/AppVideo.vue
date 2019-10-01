<template>
  <div class="container">
    <iframe  class="video"
      width="560" 
      height="315" 
      :src="path"
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen />
  </div>
</template>

<script>
export default {
  name: 'AppVideo',
  props: {
    videoId: {
      type: String,
      required: true
    }
  },
  computed: {
    path: function() {
      let pathSuffix = 'https://www.youtube.com/embed/' + this.videoId
      return pathSuffix
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  padding: 56.25% 0 0 0;
  position: relative;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
