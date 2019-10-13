<template>
  <div class="container">
    <div class="eqi-container">
      <Icon 
        v-scroll-to="'#products'"
        title="Our Products"
        message="Manufactured in Australia." 
      >
        <img 
          class="aus"
          alt="Made in Australia"
          src="@/assets/images/Home/aus.svg">
      </Icon>  
      <Icon 
        v-scroll-to="'#team'"
        title="Our Team"
        message="Driven and Innovative." 
      >
        <img 
          alt="Teamwork"
          src="@/assets/images/Home/teamwork.svg">
      </Icon> 
      <Icon 
        v-scroll-to="'#clients'"
        title="Our Clients"
        message="Our First Priority." 
      >
        <img 
          alt="Our Clients"
          src="@/assets/images/Home/clients.svg">
      </Icon>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Home/AboutIconRack/Icon'

export default {
    name: "IconRack",
    components: {
      Icon
    }
}
</script>

<style scoped>

.container {
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.eqi-container {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
}

@media only screen and (max-width: 850px) {
  .eqi-container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
}


</style>
