<template>
  <header>
    <div
      class="drawer-toggle"
      @click="toggleLeftSidebar">
      <div class="bar"/>
      <div class="bar"/>
      <div class="bar"/>
    </div>
    <img src="@/static/masterlyLogo.png">
    <div class="spacer" />
    <img
      src="@/assets/images/Icons/profileIcon.svg"
      class="profile-image"
      @click="toggleRightSidebar"
    >
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  computed: {
    title: function() {
      return this.$store.state.selected.currentTopic.topic
    }
  },
  methods: {
    toggleLeftSidebar() {
      this.$store.dispatch('toggleLeftSidebar')
    },
    toggleRightSidebar() {
      this.$store.dispatch('toggleRightSidebar')
    }
  }
}
</script>

<style lang="css" scoped>

header {
  background-color: white;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 60px;
  top: 0;
  position: fixed;
  padding: 0 40px 0 20px;
}

.drawer-toggle {
  margin-right: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  width: 26px;
  cursor: pointer;
  padding: 5px;
}

.drawer-toggle:hover {
  background-color: #f4f5f7;
}

.drawer-toggle .bar {
  width: 100%;
  height: 2px;
  background-color: #454545;
}

img {
  max-width: 200px;
  width: 100%;
}

.spacer {
  flex: 1 1 auto;
  text-align: center;
}

.profile-image {
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
}

</style>
