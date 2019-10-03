<template>
  <section class="document-list">
    <DocsTile
      v-for="document in documents"
      :key="document.id"
      :id="document.id"
      :document-name="document.documentName"
      :document-desc="document.documentDesc"
    />
    <TheCreateDocument @createDocument="toggleCreateDocument()" />
    <AppModal v-if="documentFlag" @exitModal="toggleCreateDocument()">
      <TheDocumentForm @submit="onDocSubmitted" @exitModal="toggleCreateDocument()" />
    </AppModal>
    <AppModal v-if="inviteFlag" @exitModal="toggleInviteFlag()">
      <TheInviteForm @toggleInvite="toggleInviteFlag()" @exitModal="toggleInviteFlag()" />
    </AppModal>
  </section>
</template>

<script>
import axios from 'axios'
import DocsTile from '@/components/DocumentsPage/DocsTile'
import AppModal from '@/components/Utils/AppModal'
import TheDocumentForm from '@/components/DocumentsPage/TheDocumentForm'
import TheCreateDocument from '@/components/DocumentsPage/CreateDocument/TheCreateDocument'
import TheInviteForm from '@/components/DocumentsPage/TheInviteForm'

export default {
  components: {
    DocsTile,
    AppModal,
    TheDocumentForm,
    TheCreateDocument,
    TheInviteForm
  },
  props: {
    documents: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      documentFlag: false,
      inviteFlag: false
    }
  },
  methods: {
    toggleInviteFlag() {
      this.inviteFlag = !this.inviteFlag
    },
    onDocSubmitted(documentData) {
      //add Document
      this.$store.dispatch('documents/addDocument', documentData)
      this.$store.dispatch('documents/addDiagram',documentData)
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
