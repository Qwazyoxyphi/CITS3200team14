<template>
  <div class="container">
    <form @submit.prevent="onFolderSubmit" id="contact" action method="post" name="create_new_folder_form">
      <h3>Create a Folder.</h3>
      <AppControlInput 
          v-model="newFolder.folderName"
          placeholder="Folder Name"
          name="create_new_folder_form_name_input"
      />
      <AppControlInput 
          controlType="textarea"
          v-model="newFolder.folderDesc"
          placeholder="Write a description..."
          name="create_new_folder_form_description_input"
      />

      <AppButton 
          class="login-but" 
          type="submit"
          name="create_new_folder_form_submit">Create</AppButton>
        <AppButton 
          class="login-but" 
          type="button" 
          @click="onCancel">Cancel</AppButton>
      <p class="copyright">We are OVers.</p>
    </form>
  </div>
</template>

<script>
import AppControlInput from '@/components/Utils/AppControlInput'
import AppButton from '@/components/Utils/AppButton'
import axios from 'axios'

export default {
  name: "TheForm",
  components: {
    AppButton,
    AppControlInput
  },
   props: {
    folder: {
      type: Object,
      required: false,
      default: () => ({
        folderName: '',
        folderDesc: '',
      })
    }
  },
  data() {
    return {
      newFolder: this.folder
        ? { ...this.folder }
        : {
            folderName: '',
            folderDesc: '',
          }
    }
  },
  computed: {
    afolder() {
      return { ...this.newFolder, ...this.folder }
    }
  },
  methods: {
    onFolderSubmit() {//Save folder
      this.$emit('submit', this.newFolder)
      this.$emit('exitModal')
    },

    onCancel() {//exit folder form
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
