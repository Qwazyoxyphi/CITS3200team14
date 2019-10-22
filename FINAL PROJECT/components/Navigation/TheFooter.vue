<template>
  <div class="container">
    <div class="parent">
      <div class="child1 parent">

        <div class="block" v-if="isAuth" v-show="true">
          <br><h5><strong>Navigation</strong></h5> <br>
          <nuxt-link to="/">Home</nuxt-link> <br>
          <nuxt-link to="/Folders">Folders</nuxt-link><br>
          <AppButton @click="onClick" id='signOut'>Sign out</AppButton>
        </div>


        <div class="block" v-if="isAuth == false" v-show="true">
          <br><h5><strong>Navigation</strong></h5> <br>
          <nuxt-link to="/">Home</nuxt-link> <br>
          <nuxt-link to="/signin-signup">Sign in/ Sign up</nuxt-link><br>
        </div>

        <div class="block">
          <br><h5><strong>Contact</strong></h5> <br>
          <a 
            target="_blank" 
            rel="noreferrer"
            href = "https://www.google.com/maps/place/The+University+of+Western+Australia/@-31.9800641,115.8157093,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32a4ee6e7380e9:0xf04f0b618f28290!8m2!3d-31.9800687!4d115.817898"><i class="fa fa-map-marker" /> UWA, Stirling Highway<br>
            Crawley WA  <br><br></a>
          phone: 0412 345 678 <br>
          email: <a href = "mailto:admin@ontologyvisualisation.com">offic@ontologyvisualisation.com</a><br>
          fax: 123-456-6789
        </div>
        <div class="block" />
        <div class="block" />
      </div>
    </div>


    <div class="banner"> 
      <div class="spacer" />
      <div class="copywrite">&#169;2019 - OVers</div>
      <div class="spacer" />
      <div 
        v-scroll-to="'#header'" 
        class="scroll"
      >Back to top &#8679;</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isAuth(){
      return this.$store.getters.isAuthenticated
    }
  },
    methods: {
    onClick(){
      this.$store.dispatch('logout')
      this.$router.push('/signin-signup')
    }
  }
}
</script>

<style scoped>
#signOut {
    cursor: pointer;
}
  .container {
      width: 100%;
      max-width: 100vw;
  }

  .copywrite {
    margin-left: 100px;
  }

  .scroll {
    padding-right: 20px;
  }

  .scroll:hover {
    color: #6699cc;
    cursor: pointer;
  }

  .banner {
      height: 50px;
      background-color: rgb(37, 37, 37);
      color: #B0B0B0;

      display: flex;
      align-items: center;
      justify-content: center;
  }

  .spacer {
    flex: 1;
  }



    .parent {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }

  .child1 {
    flex: 1 1 400px;
    background-color: rgb(37, 37, 37);
  color: #B0B0B0;
  border-bottom: solid 1px #393939;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;

  justify-content: center;
  color: #B0B0B0;
  }

  .block {
    flex: 1 1 auto;
    padding: 15px;
    width: 230px;
}

  .child2 {
    flex: 1 1 400px;
    background-image: url("https://www.google.com/maps/vt/data=5gDPcsOjVZR4TSBDz6OG1scv1_t_FgQrouZDoyEDnlXFOY806Ksi0fcrIO5xOciAWxrWvNtlORz5BhR8Uk0idmFx-XwJxhf7le1OpF2_AX5crzARh4AwJUW0pCYNx5PJC44HoY7uq4U");
  /* Image is centered vertically and horizontally at all times */
  background-position: center center;
  
  /* Image doesn't repeat */
  background-repeat: no-repeat;
  background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
  }


  a:link {
  text-decoration: none;
}

a {
  color: #B0B0B0;
}

a:hover {
  color: #6699cc;
}

</style>
