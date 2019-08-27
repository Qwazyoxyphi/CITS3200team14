<template>
  <div>

    <p>this is text</p> 
    <FolderTile
      fullname="item.fullname"
      jobtitle="item.jobtitle" 
      imagelink="" />

    <TheCreateFolder @createFolder="toggleCreateFolder()" />
    <div v-if="folderFlag">hello world</div>

    <AppModal 
      v-if="folderFlag"
      @exitModal="toggleCreateFolder()">
      <FolderForm />
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
    }
  }
}
</script>
