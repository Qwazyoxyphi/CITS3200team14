<template>
  <div>
    <AppSection color="blue">
      <h2>Welcome to Ontology Visualisations</h2>
      <br />
      <AppModal :mini-player="true">
        <AppVideo video-id="jfUPLuPL3Ho" />
      </AppModal>

      <div class="intro-text">
        <p id="paragraph-1">
          <br />In many contexts where the use of formal languages is needed (e.g., software
          development, GUI implementation, ontology engineering), the adoption of an
          appropriate graphical notation simplifies the design and property checking of a
          system since it enables an overview of the system that is difficult to have using
          textual syntaxes. Designing a graphical notation specific for OWL requires to consider
          what are the appropriate requirements that such notation should address according to
          different kinds of players coming from several academic and industrial contexts.
        </p>
        <p id="paragraph-2">
          This website allows for the creation of graphical representations of ontologies.
          It can visualize the individual members of certain sets of objects, their
          attributes (or characteristics), and how these objects and classes are
          related.
          <br />
        </p>
        <p id="paragraph-3">It can also describe the nature of these relations by allowing you to:</p>
        <ul>
          <li>Specify the function terms relating to these relations,</li>
          <li>Detail any restrictions the relations have,</li>
          <li>Show rules for relations with logical expressions,</li>
          <li>Specify the axioms of a domain-specific ontology, and</li>
          <li>
            Describe possible events that may affect the relations between
            different objects and their state of being.
          </li>
        </ul>
        <br />
      </div>
    </AppSection>
    <footer>
      <no-ssr>
        <cookie-law theme="blood-orange"></cookie-law>
      </no-ssr>
    </footer>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
import AppSection from '@/components/Utils/AppSection'
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
    AppBlockQuote,
    CookieLaw
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
</style>
