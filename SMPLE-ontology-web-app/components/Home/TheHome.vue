<template>
  <div class="cover">
    <TheBanner />
    <AppScrollTo id="start"/>
    <!-- 
        About
    -->
    
    <br><br>
    <HomeSection 
      title="We Are Ontology Visualisation."
      text="Below are some details on what we are all about." />
    
    <!-- 
      icon rack here  
    -->
    
    <IconRack />
    
    <!-- Full width banner -->
    <!--
    <ImageBanner />
    -->
  </div>
</template>

<script>
// Essential Components
import AppSection from '@/components/Utils/AppSection'
import HomeSection from '@/components/Utils/HomeSection'
import AppFullWidthSection from '@/components/Utilities/AppFullWidthSection'
import AppScrollTo from '@/components/Utilities/AppScrollTo'
// Functionality Components
import IconRack from '@/components/Home/AboutIconRack/IconRack'
import TheBanner from '@/components/Utilities/TheBanner'

export default {
    name: "About",
    components: {
      // Essential Components
      AppSection,
      AppFullWidthSection,
      AppScrollTo,
      // Functionality Components
      IconRack,
      TheBanner,
      HomeSection
    }
}
</script>


<style scoped>
.cover {
  background-color: white;
}

/* Three image containers (use 25% for four, and 50% for two, etc) */
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}

.tile-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 4px;
    padding: 0;
    Width: 90%;
}

.container {
  display: flex;
  justify-content: center;
}

.bar {
  width: 75%;
  height: 1px;
  border-bottom: 2px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.slot {
  text-align: center;
}

.list {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}

li {
  list-style: none;
}

li:hover {
  color: #6699cc;
  list-style: circle;
  font-size: 120%
}

.buffer {
  margin: 10px 20px 10px 20px;
}
</style>
