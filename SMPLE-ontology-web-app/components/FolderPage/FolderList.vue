<template>
  <section class="folder-list">
    <FolderTile
      v-for="folder in folders"
      :key="folder.id"
      :folder-name="folder.folderName"
      :folder-desc="folder.folderDesc"/>
    <TheCreateFolder @createFolder="toggleCreateFolder()" />
    <AppModal 
      v-if="folderFlag"
      @exitModal="toggleCreateFolder()">
      <FolderForm 
        @FolderCreate="addFolder"
        @exitModal="toggleCreateFolder()"
      />
    </AppModal>
  </section>
</template>

<script>
import FolderTile from '@/components/FolderPage/FolderTile'
import AppModal from '@/components/Utils/AppModal'
import FolderForm from '@/components/FolderPage/CreateFolder/FolderForm'
import TheCreateFolder from '@/components/FolderPage/TheCreateFolder'

export default {
  components: {
    FolderTile,
    AppModal,
    FolderForm,
    TheCreateFolder
  },
  props: {
    folders: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      folderFlag: false
    }
  },
  methods: {
    addFolder(folderData) {
      //add a new folder to the database
      axios
        .post(
          'https://team-14-ontologies.firebaseio.com/folders.json',
          folderData
        )
        .then(result => console.log(result))
        .catch(e => console.log(e))
    },
    toggleCreateFolder() {
      this.folderFlag = !this.folderFlag
    }
  }
}
</script>

<!--to change-->
<style scoped>
.folder-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
</style>
