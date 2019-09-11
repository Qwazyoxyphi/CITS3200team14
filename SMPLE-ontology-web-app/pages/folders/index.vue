<template>
  <div>

    <AppSection
      title="documents > ____"
      color="blue"
    >
      <h1>This is the Folders Index Page</h1> 
      <p>The Users id:{{getUserId}} </p>
      <FolderList :folders="getAllFolders"/>
      <FolderList :folders="userFolders" />
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
  asyncData(context) {//load user specific folders
    return axios
      .get('https://team-14-ontologies.firebaseio.com/folders.json', {
      })
      .then(res => {
        const foldersArray = []
        const currusrid = context.store.getters.getUserId;
        for (const key in res.data) {
          if (res.data[key].userId == currusrid){
            foldersArray.push({ ...res.data[key], id: key })
          }
        }
        return {
          userFolders :foldersArray
        }
      })
      .catch(e => context.log(e))
  },
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
    getUserId(){
	    return this.$store.getters.getUserId
    },
    getAllFolders(){//load all folders
      return this.$store.getters.getAllFolders
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
