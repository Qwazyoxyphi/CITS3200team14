<template>
  <div>

    <h1>This is the Folders Index Page</h1> 
    <FolderList :folders="loadFolders" />
    <TheCreateFolder @createFolder="toggleCreateFolder()" />
    <div v-if="folderFlag">hello world</div>

    <AppModal 
      v-if="folderFlag"
      @exitModal="toggleCreateFolder()">
      <FolderForm 
        @FolderCreate="addFolder"
        @exitModal="toggleCreateFolder()"
      />
    </AppModal>

  </div>
</template>

<script>
import TheCreateFolder from '@/components/FolderPage/TheCreateFolder'
import AppModal from '@/components/Utils/AppModal'
import FolderForm from '@/components/FolderPage/CreateFolder/FolderForm'
import FolderList from '@/components/FolderPage/FolderList'

import axios from 'axios'

export default {
  asyncData(context) {
    //load folders onto folderpage
    return axios
      .get('https://team-14-ontologies.firebaseio.com/folders.json')
      .then(res => {
        return {
          loadFolders: res.data
        }
      })
      .catch(e => context.log(e))
  },
  components: {
    TheCreateFolder,
    AppModal,
    FolderForm,
    FolderList
  },
  data() {
    return {
      folderFlag: false
    }
  },
  methods: {
    toggleCreateFolder() {
      this.folderFlag = !this.folderFlag
    },
    addFolder(folderData) {
      //add a new folder to the database
      axios
        .post(
          'https://team-14-ontologies.firebaseio.com/folders.json',
          folderData
        )
        .then(result => console.log(result))
        .catch(e => console.log(e))
    }
  }
}
</script>
