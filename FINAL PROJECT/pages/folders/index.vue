<template>
  <div>
    <AppSection color="blue">
      <FolderSlider :documents="getAllDocuments" class="slider" />
      <FolderList :folders="getUserFolders" />
    </AppSection>
  </div>
</template>

<script>
import FolderList from '@/components/FolderPage/FolderList'
import AppSection from '@/components/Utils/AppSection'
import FolderSlider from '@/components/FolderPage/FolderSlider'

import axios from 'axios'

export default {
  middleware: ['check-auth', 'auth'],

  components: {
    FolderList,
    AppSection,
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

.slider {
	padding: 10px;
	z-index: 0;
}
</style>