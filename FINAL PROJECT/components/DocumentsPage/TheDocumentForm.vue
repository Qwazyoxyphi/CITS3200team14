<template>
  <div class="container">
    <form @submit.prevent="onDocumentSubmit" id="contact" action method="post" name="create_new_document_form">
      <h3>Create a Document.</h3>
      <AppControlInput v-model="newDocument.documentName" placeholder="Document Name" name="create_new_document_form_name_input"/>
      <AppControlInput
        controlType="textarea"
        v-model="newDocument.documentDesc"
        placeholder="Write a description..."
        name="create_new_document_form_description_input"
      />

      <AppButton class="login-but" type="submit" name="create_new_document_form_submit">Create</AppButton>
      <AppButton class="login-but" type="button" @click="onCancel">Cancel</AppButton>
      <p class="copyright">We are UWA.</p>
    </form>
  </div>
</template>

<script>
import AppControlInput from '@/components/Utils/AppControlInput'
import AppButton from '@/components/Utils/AppButton'

export default {
  name: 'TheDocForm',
  components: {
    AppButton,
    AppControlInput
  },
  props: {
    document: {
      type: Object,
      required: false,
      default: () => ({
        documentName: '',
        documentDesc: '',
        docFolderId: ''
      })
    }
  },
  data() {
    return {
      newDocument: this.document
        ? { ...this.document }
        : {
            documentName: '',
            documentDesc: '',
            docFolderId: ''
          }
    }
  },
  computed: {
    adocument() {
      return { ...this.newDocument, ...this.document }
    }
  },
  methods: {
    onDocumentSubmit() {
      this.newDocument.docFolderId = this.$route.params.documents //add folderid to document
      this.$emit('submit', this.newDocument)
      this.$emit('exitModal')
    },
    onCancel() {
      this.$emit('exitModal')
    }
  }
}
</script>

<style lang="Css" scoped>
/*
    Form input styles
*/

.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#contact {
  background: #f9f9f9;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

.copyright {
  text-align: center;
}
</style>
