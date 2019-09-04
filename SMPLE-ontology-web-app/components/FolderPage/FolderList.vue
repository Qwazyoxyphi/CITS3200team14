<template>
  <section class="folder-list">
    <FolderTile
      v-for="folder in folders"
      :key="folder.id"
      :id="folder.id"
      :folder-name="folder.folderName"
      :folder-desc="folder.folderDesc"/>
    <TheCreateFolder @createFolder="toggleCreateFolder()" />
    <AppModal 
      v-if="folderFlag"
      @exitModal="toggleCreateFolder()">
      <FolderForm 
        @submit="addFolder"
        @exitModal="toggleCreateFolder()"
      />
    </AppModal>
  </section>
</template>

<script>
import axios from 'axios'
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
      type: Array,
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
        .then(() => {
          this.$router.push('/folders/' + this.newFolder.folderName)
        })
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
