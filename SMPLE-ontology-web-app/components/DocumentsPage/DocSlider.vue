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
      :title="document.documentName"
      :content="document.documentDesc"
      :style="'background-color: #7FBFEC'"
      :link="'/folders'"
      />
    </vueper-slides>
    <TheCreateDocument @createDocument="toggleCreateDocument()" />
    <AppModal v-if="documentFlag" @exitModal="toggleCreateDocument()">
      <TheDocumentForm @submit="addDocument" @exitModal="toggleCreateDocument()" />
    </AppModal>
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
      type: Object,
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
      //todo improve
      axios
        .post(
          'https://team-14-ontologies.firebaseio.com/' +
            this.$route.path +
            '/folderDocs.json',
          documentData
        )
        .then(() => {})
        .catch(e => console.log(e))
    },
    toggleCreateDocument() {
      this.documentFlag = !this.documentFlag
    }
  }
}
</script>
