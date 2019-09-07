<template>
  <div>
    <header>
      <div 
        class="drawer-toggle" 
        @click="toggleLeftSidebar">
        <div class="bar" />
        <div class="bar" />
        <div class="bar" />
      </div>
      <img src="@/static/masterlyLogo.png">
      <div class="spacer" />
      <div class="title">{{ getDocTitle }}</div>
      <div class="spacer" />
      <!-- NAV LINKS -->
      <nav class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/signin-signup">Sign in / Sign up</nuxt-link>
          </li>
          <li 
            v-show="false" 
            class="nav-item">
            <nuxt-link to="/logout">Log Out</nuxt-link>
          </li>
        </ul>
      </nav>
      <!-- end NAV LINKS -->
      <!--<img
      src="@/assets/images/Icons/profileIcon.svg"
      class="profile-image"
      @click="toggleRightSidebar"
      >-->
    </header>
    <TheIndicator />
  </div>
</template>

<script>
import TheIndicator from '@/components/Navigation/TheIndicator'

export default {
  name: 'TheHeader',
  components: {
    TheIndicator
  },
  computed: {
    getDocTitle: function() {
      return this.$store.getters.getDocTitle
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

.title {
  font-weight: 400;
  font-size: 16pt;
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

/* Nav-Links */
.navigation-items {
  display: none;
}

@media (min-width: 1000px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

/* Stylig and Animating nav-items */
.nav-item a {
  text-decoration: none;
  color: rgb(54, 54, 54);
}

.nav-item {
  margin: 0 10px;
  display: inline-block;
  text-decoration: none;
}

.nav-item:hover {
  cursor: pointer;
}

.nav-item::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #2caaca;
  transition: width 0.3s;
}

.nav-item:hover::after {
  width: 100%;
}

.nuxt-link-exact-active {
  border-bottom: 3px solid #2caaca;
}
/* ----- nav-items ------ */
.header-background {
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 0;
  border-bottom: 1px solid #e5e5e5;
}
</style>
