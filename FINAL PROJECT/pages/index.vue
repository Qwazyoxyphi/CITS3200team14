<template>
  <div class="wrapper">

    <TheHome />

    <div class="wr">
      <div class="home-1" style="max-width:800px">
        <p>
          Graphically represent ontologies. Visualize the individual members of certain sets of objects, their
          attributes (or characteristics), and how these objects and classes are
          related.
        </p>
        <AppModal :mini-player="true">
          <AppVideo video-id="jfUPLuPL3Ho" />
        </AppModal>
        <div class="attribution">
            <p> What is an Ontology <br>
             Author: SpryKnowledge <br>
             Upload Date: Apr 4, 2011 </p>
        </div>
      </div>
    </div>

    <HomeSection 
      title="Try for yourself."
      text="Test out our ontology diagram making tool with this demo.">
    </HomeSection>
	<Demo/>
  <br><br>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
import AppSection from '@/components/Utils/AppSection'
import AppModal from '@/components/Utilities/AppModal'
import AppVideo from '@/components/Utilities/AppVideo'
import TheHome from '@/components/Home/TheHome'
import HomeSection from '@/components/Utils/HomeSection'
import Demo from '@/components/DiagramPage/Syncfusion/Demo'

export default {
  components: {
    AppSection,
    AppModal,
    AppVideo,
    CookieLaw,
    TheHome,
    HomeSection,
    Demo
  },

  data() {
    return {
      flag: true,
      text: 'Angle Difference Identity'
    }
  },
  methods: {
    toggleButton() {
      this.flag = !this.flag
    }
  }
}
</script>

<style scoped>
p {
  font-family: Arial, 'Trebuchet MS', Verdana, sans-serif;
  font-size: 1rem;
}

.wrapper {
  background-color: white;
}

.wr {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-1 h2,
.home-1 p {
  text-align: center;
}

h1 {
  color: rgb(41, 40, 40);
  font-size: 70px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
}

.attribution p {
  font-size: 0.8rem;
}
</style>
