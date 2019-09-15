<template>
      <!-- NAV LINKS -->
      <nav class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link class="link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="link" to="/rerout">Documents</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="link" to="/rerout">Shared</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="link" to="/folders" @click="getAllFolders">Folders</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="link" to="/rerout">Trash</nuxt-link>
          </li>
          <li class="nav-item">
            <AppButton @click="onClick" >Sign out</AppButton>
          </li>
        </ul>
      </nav>
</template>

<script>
import AppButton from '@/components/Utils/AppButton'
export default {
  name: 'LoggedInNavs',
  computed:{
    getAllFolders(){
      //this.$router.push('folders')
    }
  },
  methods: {
    onClick(){
      this.$store.dispatch('logout')
      //this.$router.push('signin-signup')
    }
  }
}
</script>

<style lang="css" scoped>
.nav-item a {
  text-decoration: none;
  color: #19222a;
}

.nav-item {
  margin: 0 10px;
  display: inline-block;
  text-decoration: none;
  font-size: 14pt;
}

.nav-item:hover {
  cursor: pointer;
}

.link:hover {
  color: #2f404f;
}

.nuxt-link-exact-active {
  font-weight: 400;
  color: #1171ba !important;
}
</style>
