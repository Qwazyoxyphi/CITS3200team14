<template>
  <div>
    <form 
      class="login-form" 
      @submit.prevent="onFolderSubmit">
      <div 
        class="login-container">
        <h2>Create Folder</h2>
        <AppControlInput 
          v-model="newFolder.folderName" 
          placeholder="FolderName">
          <b>Folder Name:</b>
        </AppControlInput>
        <AppControlInput
          v-model="newFolder.folderDesc"
          control-type="textarea"
          placeholder="Description of Folder Contents"
        >
          <b>Description:</b>
        </AppControlInput>
        <AppButton 
          class="login-but" 
          type="submit">Create</AppButton>
        <AppButton 
          class="login-but" 
          type="button" 
          @click="onCancel">Cancel</AppButton>
      </div>
    </form>
  </div>
</template>

<script>
import AppControlInput from '@/components/Utils/AppControlInput'
import AppButton from '@/components/Utils/AppButton'
import axios from 'axios'
export default {
  name: 'FolderForm',
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
        folderDocs: ''
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
            folderDocs: ''
          }
    }
  },
  computed: {
    afolder() {
      return { ...this.newFolder, ...this.folder }
    }
  },
  methods: {
    onFolderSubmit() {
      //add a new folder to the database
      this.$emit('submit', this.newFolder)
    }
    //on submit take the user into new folder 'to change'
  },
  onCancel() {
    this.$emit('exitModal')
  }
}
</script>

<style lang="Css" scoped>
#login-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  border: 3px solid #f1f1f1;
  max-width: 400px;
  width: 100%;
  background-color: white;
}

.questions-wrap {
  margin: 20px;
}

.flexcontainer {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}

textarea {
  resize: none;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

input[type='text']:focus,
input[type='password']:focus {
  outline: none !important;
  border: 1px solid #2caaca;
  box-shadow: 0 0 3px rgba(44, 170, 202, 0.9);
}

button {
  background-color: #2caaca;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  width: 100%;
}

.button {
  cursor: pointer;
}

.button:hover {
  color: rgba(51, 51, 51, 0.7);
}

button:hover {
  opacity: 0.8;
  cursor: pointer;
}

.remember,
.psw {
  color: #2caaca;
}

.login-form h2 {
  font-weight: bold;
  color: #2caaca;
}

.login-container {
  padding: 16px;
}

.login-but {
  font-size: 1.3em;
}
</style>
