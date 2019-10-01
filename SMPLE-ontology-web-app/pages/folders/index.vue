<template>
  <div>
    <AppSection color="blue">
      <h2>Home > Folders > ____</h2>
      <h1>This is the Folders Index Page</h1>
      <FolderSlider :documents="getAllDocuments" />
      <FolderList :folders="getUserFolders" />
    </AppSection>
  </div>
</template>

<script>
import FolderList from '@/components/FolderPage/FolderList'
import AppSection from '@/components/Utils/AppSection'
import More from '@/components/FolderPage/More/More'
import AppSelect from '@/components/FolderPage/More/AppSelect'
import FolderSlider from '@/components/FolderPage/FolderSlider'

import axios from 'axios'

export default {
  middleware: ['check-auth', 'auth'],

  components: {
    FolderList,
    AppSection,
    More,
    AppSelect,
    FolderSlider
  },
  data() {
    return {
      folderFlag: false
    }
  },
  computed: {
    getUserId() {//unused?
      return this.$store.getters.getUserId
    },
    getUserFolders() {//display user's folders
      this.$store.dispatch('folders/setUserFolders')
      return this.$store.getters['folders/userFolders']
    },
    getAllDocuments() {//display all Documents
      return this.$store.getters['documents/allDocuments']
    }
  },
  methods: {
    toggleCreateFolder() {
      this.folderFlag = !this.folderFlag
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 1.8rem;
  text-align: center;
}
</style>