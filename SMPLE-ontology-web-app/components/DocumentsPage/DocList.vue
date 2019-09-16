<template>
  <section class="document-list">
    <DocsTile
      v-for="document in documents"
      :key="document.id"
      :id="document.id"
      :document-name="document.documentName"
      :document-desc="document.documentDesc"/>
      <TheCreateDocument @createDocument="toggleCreateDocument()" />
      <AppModal 
      v-if="documentFlag"
      @exitModal="toggleCreateDocument()">
      <TheDocumentForm 
        @submit="addDocument"
        @exitModal="toggleCreateDocument()"
      /> 
    </AppModal>
  </section>
</template>

<script>
import axios from 'axios'
import DocsTile from '@/components/DocumentsPage/DocsTile'
import AppModal from '@/components/Utils/AppModal'
import TheDocumentForm from '@/components/DocumentsPage/TheDocumentForm'
import TheCreateDocument from '@/components/DocumentsPage/CreateDocument/TheCreateDocument'

export default {
  components: {
    DocsTile,
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
  data(){
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

<!--to change-->
<style scoped>
.document-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
