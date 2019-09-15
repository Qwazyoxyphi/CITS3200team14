<template>
  <div>
    <AppSection 
      title="Welcome to Ontology Visualisations"
      color="blue"
    >
    <br>
      <AppModal :mini-player="true">
        <AppVideo 
          video-id="204135196" 
          color="green" 
        />
      </AppModal>

      <div class="intro-text">
        <p class="paragraph-1">
          <br>
          The study of “Ontology” concerns itself with questions relating to the nature of
          existence.
          <ul>
            <li>what properties can explain the existence of an object?</li>
            <li>how can these properties explain the differences between existing objects?</li>
          </ul>
        </p>
        <p class="paragraph-2">
          This website allows for the creation of graphical representations of ontologies.
          <br><br>
          <img src="@/static/placeholder.png" class="ontologies-example" />
          <br><br>
          It can visualize the individual members of certain sets of objects, their
          attributes (or characteristics), and how these objects and classes are
          related.
          <br>
        </p>
        <p class="paragraph-3">
          It can also describe the nature of these relations by allowing you to:
          <ul>
            <li>specify the function terms relating to these relations,</li>
            <li>detail any restrictions the relations have,</li>
            <li>show rules for relations with logical expressions,</li>
            <li>specify the axioms of a domain-specific ontology, and</li>
            <li>describe possible events that may affect the relations between
                different objects and their state of being.</li>
          </ul>
          <br>
        </p>
      </div>

    </AppSection>
  </div>
</template>

<script>
import AppSection from '@/components/Utilities/AppSection'
import AppSubtitle from '@/components/Utilities/AppSubtitle'
import AppModal from '@/components/Utilities/AppModal'
import AppVideo from '@/components/Utilities/AppVideo'
import AppImage from '@/components/Utilities/AppImage'
import AppBlockQuote from '@/components/Utilities/AppBlockQuote'

export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppVideo,
    AppImage,
    AppBlockQuote
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
  font-family: Arial, "Trebuchet MS", Verdana, sans-serif;
  font-size: 1rem;
}
</style>
