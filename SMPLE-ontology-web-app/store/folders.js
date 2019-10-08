//folders.js
import axios from 'axios'

export const state = () => ({
  allFolders: [],
  userFolders: []
})

//TODO** if folder has no users, delete it from DB.
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

    for (const key in allFolders) {//all folders
      //if (allFolders[key].userId == currUsrId)
      for (const uid in allFolders[key].userIds) {//all users in that folder
        if (uid == currUsrId) {
          uFolderArr.push(allFolders[key])
        }
      }
    }
    vuexContext.commit('setUserFolders', uFolderArr)
  },
  /* Setters */
  //use axios.patch when adding more userids or will break it
  addFolder(vuexContext, folder) {
    folder.userIds = { [this.state.getUserId]: this.state.getUserId }//add userId as Object 
    return axios
      .post('https://team-14-ontologies.firebaseio.com/folders.json', folder)
      .then(res => {
        vuexContext.commit('addFolder', { ...folder, id: res.data.name })
        this.$router.push('/folders/' + res.data.name) //route into folder
      })
      .catch(e => console.log(e))
  },

  deleteFolder({ commit }, payload) {//remove user from folder
    let delstring;
    if (Object.keys(payload.folderusers).length == 1) {//if only one user left
      delstring = ('https://team-14-ontologies.firebaseio.com/folders/' + payload.folderid + '.json');//delete entire folder
    } else {
      delstring = ('https://team-14-ontologies.firebaseio.com/folders/' +
        payload.folderid + '/userIds/' + this.state.getUserId + '.json')//delete user from that folder
    }
    axios
      .delete(delstring)
      .then(() => {
        commit('deleteFolder', payload.folderid) //update local store
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
