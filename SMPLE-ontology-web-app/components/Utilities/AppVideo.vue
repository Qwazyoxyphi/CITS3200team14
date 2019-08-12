<template>
  <div class="container">
    <iframe
      :allowfullscreen="allowFullScreen"
      :src="path"
      class="video"
      frameborder="0"
    />
  </div>
</template>

<script>
export default {
  name: 'AppVideo',
  props: {
    videoId: {
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
  },
  computed: {
    path: function() {
      let color

      if (this.color === 'blue') color = '2caaca'
      else if (this.color === 'green') color = '27c9b8'
      else if (this.color === 'red') color = 'ec6d5f'
      else {
        color = this.color
        color = color.substr(1)
      }

      let pathSuffix =
        'https://player.vimeo.com/video/' + this.videoId + '?color=' + color

      if (!this.showTitle) pathSuffix = pathSuffix + '&title=0'

      if (!this.showByLine) pathSuffix = pathSuffix + '&byline=0'
      if (!this.showPortrait) pathSuffix = pathSuffix + '&portrait=0'

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
