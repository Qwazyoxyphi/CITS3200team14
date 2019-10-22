<template>
      <!-- NAV LINKS -->
      <nav class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link class="link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="link" to="/signin-signup">Sign in / Sign up</nuxt-link>
          </li>
        </ul>
      </nav>
</template>

<script>
export default {
  name: 'LoggedInNavs'
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
