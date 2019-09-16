<template>
  <div>
    <AppSection title="Home > Folders > ____" color="blue">
      <h1>This is the Folders Index Page</h1>
      <!--<p>The Users id:{{getUserId}} </p>-->
      <!--<FolderList :folders="getAllFolders"/>-->
      <FolderList :folders="getUserFolders" />
    </AppSection>
  </div>
</template>

<script>
import FolderList from '@/components/FolderPage/FolderList'
import AppSection from '@/components/Utils/AppSection'
import More from '@/components/FolderPage/More/More'
import AppSelect from '@/components/FolderPage/More/AppSelect'

import axios from 'axios'

export default {
  middleware: ['check-auth', 'auth'],
 /* asyncData(context) {
    //User Owned Folders
    const currUsrId = context.store.getters.getUserId
    const uFolderArr = []
    const allFolders = context.store.getters.getAllFolders
    for (const key in allFolders) {
      if (allFolders[key].userId == currUsrId) {
        uFolderArr.push(allFolders[key])
      }
    }
    return { userFolders: uFolderArr }
  },*/
  components: {
    FolderList,
    AppSection,
    More,
    AppSelect
  },
  data() {
    return {
      folderFlag: false
    }
  },
  computed: {
    getUserId() {//Get User ID
      return this.$store.getters.getUserId
    },
    getAllFolders() {//Load All Folders
      return this.$store.getters.getAllFolders
    },
    getUserFolders(){//Load User's Folders
     this.$store.dispatch('setUserFolders')
     return this.$store.getters.getUserFolders
    }
  },
  methods: {
    toggleCreateFolder() {
      this.folderFlag = !this.folderFlag
    },
  }
}
</script>
