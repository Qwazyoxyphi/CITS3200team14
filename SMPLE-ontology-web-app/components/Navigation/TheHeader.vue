<template>
  <div>
    <header>
      <div class="drawer-toggle" @click="toggleLeftSidebar">
        <div class="bar" />
        <div class="bar" />
        <div class="bar" />
      </div>
      <img src="@/static/ontVisBetter.png" />
      <div class="spacer" />
      <LoggedInNavs  v-show="true" v-if="isAuth" class="navs"  />
      <!-- if user is logged in -->
      <LoggedoutNavs v-show="true" v-if="isAuth == false" class="navs" />
      <!-- if user is logged out or needs to register -->
      <!--<img
      src="@/assets/images/Icons/profileIcon.svg"
      class="profile-image"
      @click="toggleRightSidebar"
      >-->
    </header>
  </div>
</template>

<script>
import LoggedInNavs from '@/components/Navigation/LoggedInNavs'
import LoggedoutNavs from '@/components/Navigation/LoggedoutNavs'
import { mapGetters } from 'vuex'

export default {
  computed: {
    isAuth(){
      return this.$store.getters.isAuthenticated
    }
  },
  name: 'TheHeader',
  components: {
    LoggedInNavs,
    LoggedoutNavs
  },
  methods: {
    toggleLeftSidebar() {
      this.$store.dispatch('toggleLeftSidebar')
    },
    toggleRightSidebar() {
      this.$store.dispatch('toggleRightSidebar')
    }
  },
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
  width: 100%;
  max-width: 26px;
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

.logo {
  padding: 10px;
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

.drawer-toggle {
  display: none;
}
.navs {
  display: block;
}
@media only screen and (max-width: 900px) {
  .drawer-toggle {
    display: flex;
  }
  .navs {
    display: none;
  }
}
</style>
