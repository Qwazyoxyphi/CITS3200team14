<template>
  <div>

    <AppSection
      title="hello"
      color="blue"
    >

      <h1>This is the Folders Index Page</h1> 
      <FolderList :folders="loadFolders" />
      <!--<TheCreateFolder @createFolder="toggleCreateFolder()" />-->
      <div>documents > biology</div>
    </AppSection>

  </div>
</template>

<script>
import TheCreateFolder from '@/components/FolderPage/TheCreateFolder'
import AppModal from '@/components/Utils/AppModal'
import FolderForm from '@/components/FolderPage/CreateFolder/FolderForm'
import FolderList from '@/components/FolderPage/FolderList'
import AppSection from '@/components/Utils/AppSection'

import axios from 'axios'

export default {
  asyncData(context) {
    //load folders onto folderpage
    return axios
      .get('https://team-14-ontologies.firebaseio.com/folders.json')
      .then(res => {
        return {
          loadFolders: res.data
        }
      })
      .catch(e => context.log(e))
  },
  components: {
    TheCreateFolder,
    AppModal,
    FolderForm,
    FolderList,
    AppSection
  }
}
</script>
