<template>
  <aside class="sidebar">
    <header> 
		<div class="min">
			<minimise @minimise="toggleMinimise()" /> 
		</div>
		<div v-show="minFlg" class="but-wrapper">MENU</div>
	</header>
    <nav v-show="minFlg" class="sidebar-nav">
      <slot />
    </nav>
  </aside>
</template>

<script>
import minimise from '@/components/Utils/SVG/minimise'

export default {
  name: 'TheSidebar',
  components: {
	  minimise
  },
  data() {
	  return {
		  minFlg: true
	  }
  },
  methods: {
	  toggleMinimise() {
		  this.minFlg = !this.minFlg
	  }
  }
}
</script>

<style scoped>

.but-wrapper {
    padding: 5px;
    width: 100%;
}

.container-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}



.sidebar {
  flex: 1 1 280px;
  min-width: 280px;
  max-width: 280px;
  border-right: 1px solid #e5e5e5;
  background-color: white;
  height: 100%;
  overflow: scroll;
  z-index: 0;
}

a {
  text-decoration: none;
}
/* ------------- Sidebar ----------------*/
.sidebar header {
	height: 70px;
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
  background-color: white;
  height: 100%;
  width: 279px;
  font-weight: 400;
  font-size: 1.2em;
  padding-bottom: 6em;
  z-index: 0;
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

.min {
	width: 35px;
	float: left;
}
</style>
