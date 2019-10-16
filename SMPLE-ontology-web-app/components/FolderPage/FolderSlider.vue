<template>
  <section class="document-slideshow">
    <vueper-slides
      class="no-shadow"
      :visible-slides="3"
      :slide-ratio="1/5"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2 } }"
      :infinite="true"
      slide-multiple
    >
      <vueper-slide
      v-for="document in documents"
      :key="document.id"
      :id="document.id"
      :title="document.documentName"
      :content="document.documentDesc"
      :link="'/'"
      />
    </vueper-slides>
  </section>
</template>

<script>
import axios from 'axios'
import AppModal from '@/components/Utils/AppModal'
import TheDocumentForm from '@/components/DocumentsPage/TheDocumentForm'
import TheCreateDocument from '@/components/DocumentsPage/CreateDocument/TheCreateDocument'

export default {
  components: {
    AppModal,
    TheDocumentForm,
    TheCreateDocument
  },
  props: {
    documents: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      documentFlag: false
    }
  },
  methods: {
    addDocument(documentData) {
      axios
        .post(//add to folder
          'https://team-14-ontologies.firebaseio.com/' +
            this.$route.path +
            '/folderDocs.json',
          documentData
        )
        .then(res => {
          axios
            .put(//add to document table
              'https://team-14-ontologies.firebaseio.com/Documents/'+ res.data.name +'.json',
              documentData
            )
          this.$router.push('/diagram/') //+ res.data.name)
        }).catch(e => console.log(e))
    
    },
    toggleCreateDocument() {
      this.documentFlag = !this.documentFlag
    }
  }
}
</script>

<style scoped>
.vueperslide.vueperslide--visible {
    background-image: url("/_nuxt/assets/images/File.jpg");
    background-repeat: no-repeat;
    background-size: contain;
}

</style>
