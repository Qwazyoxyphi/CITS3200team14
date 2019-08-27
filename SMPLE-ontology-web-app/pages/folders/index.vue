<template>
  <div>

    <h1>This is the Folders Index Page</h1> 
    <FolderTile
      fullname="item.fullname"
      jobtitle="item.jobtitle" 
      imagelink="" />

    <TheCreateFolder @createFolder="toggleCreateFolder()" />
    <div v-if="folderFlag">hello world</div>

    <AppModal 
      v-if="folderFlag"
      @exitModal="toggleCreateFolder()">
      <FolderForm @FolderCreate="addFolder"/>

    </AppModal>

  </div>
</template>

<script>
import AppSection from '@/components/Utilities/AppSection'
import AppSubtitle from '@/components/Utilities/AppSubtitle'
import FolderTile from '@/components/FolderPage/FolderTile'
import TheCreateFolder from '@/components/FolderPage/TheCreateFolder'
import AppModal from '@/components/Utils/AppModal'
import FolderForm from '@/components/FolderPage/CreateFolder/FolderForm'
import axios from 'axios'

export default {
  components: {
    AppSubtitle,
    AppSection,
    FolderTile,
    TheCreateFolder,
    AppModal,
    FolderForm
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
