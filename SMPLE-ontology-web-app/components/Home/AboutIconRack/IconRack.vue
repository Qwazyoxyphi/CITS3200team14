<template>
  <div class="container">
    <div class="eqi-container">
      <Icon 
        v-scroll-to="'#products'"
        title="Creation"
        message="Create your own ontology diagrams." 
      >
        <img 
          class="aus"
          alt="creation"
          src="@/assets/images/Home/structure.svg">
      </Icon>  
      <Icon 
        v-scroll-to="'#team'"
        title="Collaboration"
        message="Collectively work on projects." 
      >
        <img 
          alt="Teamwork"
          src="@/assets/images/Home/teamwork.svg">
      </Icon> 
      <Icon 
        v-scroll-to="'#clients'"
        title="Community"
        message="Participate in growing community." 
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
