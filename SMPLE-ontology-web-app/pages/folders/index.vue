<template>
  <div>
    <AppSection title="Home > Folders > ____" color="blue">
      <h1>This is the Folders Index Page</h1>
      <!--<p>The Users id:{{getUserId}} </p>-->
      <FolderSlider :documents="allDocs"/>
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
  asyncData(context) {
    return axios //return all folders no filter
    .get('https://team-14-ontologies.firebaseio.com/Documents.json')
    .then(res => {
      const documentsArray = []
      for (const key in res.data) {
              documentsArray.push({ ...res.data[key], id: key })
            }
            return { allDocs: documentsArray }
          })
          .catch(e => context.error(e))          
  },
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
    AppSelect,
    FolderSlider
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
