<template>
  <div>
    <TheHeader/>
    <div class="main">
      <TheSidebar v-if="isLeftSidebar"/>
      <div
        id="content"
        class="content"
      >
        <nuxt/>
      </div>
      <TheProfileSidebar v-if="isRightSidebar"/>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidebar from '@/components/Navigation/TheSidebar'
import TheProfileSidebar from '@/components/Navigation/TheProfileSidebar'

export default {
  components: {
    TheProfileSidebar,
    TheSidebar,
    TheHeader
  },
  computed: {
    isLeftSidebar: function() {
      return !this.$store.getters.getLeftSidebar
    },
    isRightSidebar: function() {
      return this.$store.getters.getRightSidebar
    }
  },
  mounted() {
    renderMathInElement(document.getElementById('content'))
  }
}
</script>

<style>
html {
  font-family: 'Roboto', SansSerif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: white;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 30px;
  color: #777;
}

p {
  margin-bottom: 1.3em;
  text-align: justify;
}

h1,
h2,
h3,
h4 {
  margin: 1.414em 0 0.5em;
  font-weight: inherit;
  line-height: 1.2;
}

h1 {
  margin-top: 0;
  font-size: 2.441em;
}

h2 {
  font-size: 1.953em;
}

h3 {
  font-size: 1.563em;
}

h4 {
  font-size: 1.25em;
}

h5 {
  font-size: 1em;
}

small {
  font-size: 0.8em;
}

.main {
  margin-top: 60px;
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  flex-flow: row nowrap;
  border-top: 1px solid #e5e5e5;
}

.content {
  flex: 1 1 auto;
  overflow: scroll;
  height: 100%;
  background-color: #f4f5f7;
  padding: 0 20px 60px 20px;
}
</style>
