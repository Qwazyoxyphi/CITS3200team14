//folders.js
import axios from 'axios'

export const state = () => ({
  allFolders: [],
  userFolders: []
})

export const mutations = {
  /* Setters */

  setAllFolders(state, allFolders) {
    state.allFolders = allFolders
  },
  setUserFolders(state, userFolders) {
    state.userFolders = userFolders
  },
  /* Setters */

  /* Add Folder */
  addFolder(state, folder) {
    //works
    state.allFolders.push(folder)
  },

  deleteFolder(state, delFolderId) {
    const allFodidx = state.allFolders.findIndex(
      folder => folder.id === delFolderId
    ) //find id of folder in store
    if (allFodidx != -1) {
      // if in store remove it
      state.allFolders.splice(allFodidx, 1)
    }
  }
}

export const actions = {
  /* Setters */
  setUserFolders(vuexContext) {
    const allFolders = this.state.folders.allFolders
    const currUsrId = this.state.getUserId
    const uFolderArr = []

    for (const key in allFolders) {
      if (allFolders[key].userId == currUsrId) {
        uFolderArr.push(allFolders[key])
      }
    }
    vuexContext.commit('setUserFolders', uFolderArr)
  },
  /* Setters */

  addFolder(vuexContext, folder) {
    const userids = {
      id: this.state.getUserId
    }
    //folder.userids = userids

    var tuserids = new Object()
    tuserids[this.state.getUserId] = true
    //folder.userids = tuserids
    //folder.userids[this.state.getUserId] = true

    folder.userids[this.state.getUserId] = true
    return axios
      .post('https://team-14-ontologies.firebaseio.com/folders.json', folder)
      .then(res => {
        vuexContext.commit('addFolder', { ...folder, id: res.data.name })
        this.$router.push('/folders/' + res.data.name) //route into folder
      })
      .catch(e => console.log(e))
  },
  //addUser(id) {},

  deleteFolder(vuexContext, folderid) {
    axios
      .delete(
        'https://team-14-ontologies.firebaseio.com/folders/' +
          folderid +
          '.json'
      )
      .then(res => {
        vuexContext.commit('deleteFolder', folderid) //update local store
      })
      .catch(e => console.log(e))
  }
}

export const getters = {
  allFolders(state) {
    return state.allFolders
  },
  userFolders(state) {
    return state.userFolders
  }
}
