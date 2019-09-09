<template>
  <div>

    <AppSection
      title="documents > ____"
      color="blue"
    >
      <h1>This is the Folders Index Page</h1> 
      <FolderList :folders="loadedFolders" />
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
  //asyncData(context) {
  //load folders onto folderpage
  //  return axios
  //    .get('https://team-14-ontologies.firebaseio.com/folders.json')
  //    .then(res => {
  //      return {
  //        loadFolders: res.data
  //      }
  //    })
  //    .catch(e => context.log(e))
  //},
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
    loadedFolders() {
      return this.$store.getters.loadedFolders
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
