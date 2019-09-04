<template>
  <div>
    <AppSection 
      title="Welcome to Ontology Visualisations" 
      color="blue"
    >
      
      <AppModal :mini-player="true">
        <AppVideo 
          video-id="204135196" 
          color="green" 
        />
      </AppModal>

      <p class="intro-text">
        <br>The study of “Ontology” concerns itself with questions relating to the nature of
        existence, what properties can explain existence, and how these properties explain
        the differences of existence between existing entities (etc.).
        <br>
        <br>This website allows for the creation of graphical ontological representations, consisting
        of components that visualize the relationships between different “beings” of existence.
        <br>
        <br>It can visualize the individual members of certain sets (or classes) of objects, their
        attributes (the characteristics of those objects), how these objects and classes are
        related.
        <br>
        <br>It can also describe the nature of these relations by allowing for the
        specification of any function terms relating to these relations, the relations’
        restrictions, rules that can be logically expressed in these relations, any axioms of the
        domain of a specific Ontology, and possible events that may affect the relations between
        different objects and their state of “being”.
        <br>
        <br>( Dev Note: This is just some draft text. Changes can easily be made in the future, just be sure
        to let me know.
        <br>-Mitch )
      </p>

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
