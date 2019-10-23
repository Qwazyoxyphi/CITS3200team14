<template>
  <div class="container">
    <div class="eqi-container">
      <IconClient 
        title=""
        message="Royal Perth Hospital" 
      >
        <img 
          style="width:90px;" 
          alt="Royal Perth Hospital"
          src="@/static/logos/RPH-logo.webp"> 
          
      </IconClient>
      <IconClient 
        title=""
        message="Perth Childrens Hospital" 
      >
        <img 
          style="width:150px;" 
          alt="Perth Childrens Hospital"
          src="@/static/logos/PCH-logo.webp"> 
      </IconClient>
      
      <IconClient 
        title=""
        message="St. John of God" 
      >
        <img 
          style="width:180px;" 
          alt="Saint John of God"
          src="@/static/logos/JOG-logo.webp"> 
      </IconClient>
      <IconClient 
        title=""
        message="SKG" 
      >
        <img 
          style="width:150px;" 
          alt="SKG"
          src="@/static/logos/SKG-logo.webp"> 
      </IconClient>
    </div>
  </div>
</template>

<script>
import IconClient from '@/components/Sections/About/AboutIconRack/IconClient'

export default {
    name: "IconRack",
    components: {
      IconClient
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

@media only screen and (max-width: 550px) {
  .eqi-container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
}

</style>
