<template>
  <div>
    <buttonRack @createFolder="toggleCreateFolder()" @createDoc="toggleCreateFolder()" />
    <section class="folder-list">
      <FolderTile
        v-for="folder in folders"
        :key="folder.id"
        :id="folder.id"
        :folder-name="folder.folderName"
        :folder-desc="folder.folderDesc"
        :folder-docs="folder.folderDocs"
      />
      <TheCreateFolder @createFolder="toggleCreateFolder()" />
      <AppModal v-if="folderFlag" @exitModal="toggleCreateFolder()">
        <TheFolderForm @submit="onSubmitted" @exitModal="toggleCreateFolder()" />
      </AppModal>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import FolderTile from '@/components/FolderPage/FolderTile'
import AppModal from '@/components/Utils/AppModal'
import TheFolderForm from '@/components/FolderPage/CreateFolder/TheFolderForm'
import TheCreateFolder from '@/components/FolderPage/TheCreateFolder'
import buttonRack from '@/components/FolderPage/NewDocFolderRack/buttonRack'

export default {
  components: {
    FolderTile,
    AppModal,
    TheFolderForm,
    TheCreateFolder,
    buttonRack
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
    onSubmitted(folderData) {
      //add folderData
      this.$store.dispatch('addFolder', folderData).then(res => {
        // this.$router.push('/folders/' + res.data.name)
      })
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
