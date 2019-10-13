<template>
  <aside class="sidebar">
    <header>Menu</header>
    <!-- User has logged in navs -->
    <section v-show="true" v-if ="isAuth">
      <nav class="sidebar-nav">
        <ul @click="closeSidebar()">
          <li>
            <nuxt-link to="/">
              <home class="icon" />
              <div class="nav-text">Home</div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/folders">
              <file class="icon" />
              <div class="nav-text">Folders</div>
            </nuxt-link> 
          </li>
          <!--<li>
            <nuxt-link to="/rerout">
              <network class="icon" />
              <div class="nav-text">Shared Documents</div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/rerout">
              <trash class="icon" />
              <div class="nav-text">Trash</div>
            </nuxt-link>
          </li>-->
          <li @click="onClick()">
            <nuxt-link to="/">
              <login class="icon" />
              <div class="nav-text">Sign out</div>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </section>

    <!-- User has not logged in navs -->
    <section v-show="true" v-if ="isAuth == false">
      <nav class="sidebar-nav">
        <ul @click="closeSidebar()">
          <li>
            <nuxt-link to="/">
              <home class="icon" />
              <div class="nav-text">Home</div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/signin-signup">
              <login class="icon" />
              <div class="nav-text">Sign in / Sign up</div>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </section>
  </aside>
</template>

<script>
import file from '@/components/Utils/SVG/file'
import network from '@/components/Utils/SVG/network'
import trash from '@/components/Utils/SVG/trash'
import home from '@/components/Utils/SVG/home'
import logout from '@/components/Utils/SVG/logout'
import login from '@/components/Utils/SVG/login'

export default {
  name: 'TheSidebar',
  components: {
    file,
    network,
    trash,
    logout,
    home,
    login
  },
  computed: {
	isAuth(){
		return this.$store.getters.isAuthenticated
	}
  },
  methods: {
    closeSidebar() {
      this.$store.dispatch('toggleLeftSidebar')
    },
    onClick(){
      this.$store.dispatch('logout')
      //this.$router.push('signin-signup')
    }
  
  }
}
</script>

<style scoped>
.sidebar {
  position: absolute;
  min-width: 280px;
  max-width: 280px;
  border-right: 1px solid #e5e5e5;
  background-color: white;
  height: 100%;
  overflow: scroll;
  z-index: 1000;
}

a {
  text-decoration: none;
}
/* ------------- Sidebar ----------------*/
.sidebar header {
  background-color: #1171ba;
  width: 100%;
  display: block;
  padding: 0.75em 1em;
  color: white;
  font-weight: bolder;
  text-align: center;
  font-size: 16pt;
}
/* ------------- Sidebar Nav ----------------*/
.sidebar-nav {
  position: fixed;
  /*background-color: #19222a;*/
  background-color: #f4f5f7;
  height: 100%;
  font-weight: 400;
  font-size: 1.2em;
  overflow: auto;
  padding-bottom: 6em;
  z-index: 9;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  /* ------------- Chev elements ----------------*/
}
.sidebar-nav ul {
  list-style: none;
  display: block;
  padding: 0;
  margin: 0;
}
ul {
  width: 279px;
}
.sidebar-nav ul li {
  margin-left: 0;
  padding-left: 0;
  display: inline-block;
  width: 100%;
  /* ------------- Sidebar: icons ----------------*/
}
.sidebar-nav ul li a {
  /*color: rgba(255, 255, 255, 0.9);*/
  color: #19222a;
  font-size: 0.75em;
  padding: 1.05em 1em;
  position: relative;
  display: block;
}
.sidebar-nav ul li a:hover {
  /*background-color: rgba(0, 0, 0, 0.9);*/
  background-color: #e5e5e5;
}

.icon {
  float: left;
}

.nav-text {
  padding-left: 50px;
  font-size: 14pt;
}
</style>
