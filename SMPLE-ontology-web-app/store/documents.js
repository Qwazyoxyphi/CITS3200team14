//documents.js
import axios from 'axios'

//work backwards, with code
export const state = () => ({
  allDocuments: [], //all documents
  userDocs: [] //documents inside that folder.
})

export const mutations = {
  setAllDocuments(state, allDocuments) {
    state.allDocuments = allDocuments
  },
  setUserDocs(state, userDocs) {
    state.userDocs = userDocs
  },

  addDocument(state, document) {
    state.allDocuments.push(document)
  },
  deleteDocument(state, delDocId) {
    const allDocidx = state.allDocuments.findIndex(
      document => document.id === delDocId
    ) //find id of document in store
    if (allDocidx != -1) {
      // if in store remove it
      state.allDocuments.splice(allDocidx, 1)
    }
  }
}

export const actions = {
  setUserDiagrams({ commit }, data) {
    console.log(data)

    /*let allDocuments = this.state.documents.allDocuments
    const uDocsArr = [] //documents inside the folder

    const thisDoc=this.state.allDocuments.find(
      ({id}) => data.id
    )
    for(const key in allDocuments) {
      
      if(allDocuments[key] ==thisDoc.id){
        
      }
    }*/
  },
  setUserDocs({ commit }, folderid) {
    //display docs in that folder
    let allDocuments = this.state.documents.allDocuments
    const uDocsArr = [] //documents inside the folder
    const thisFolder = this.state.folders.allFolders.find(
      //get folder
      ({ id }) => id === folderid
    )
    for (const key in allDocuments) {
      //loops through all docs to find folder
      if (allDocuments[key].docFolderId == thisFolder.id) {
        // if (docArray.includes(allDocuments[key].id)) {
        uDocsArr.push(allDocuments[key])
      }
    }
    commit('setUserDocs', uDocsArr)
  },
  addDiagram(data) {
    axios.post(
      'https://team-14-ontologies.firebaseio.com/folders/' +
        data.folder_id +
        '/folderDocs/' +
        data.id +
        '.json',
      data.saveData
    )
  },
  addDocument({ commit }, document) {
    return axios
      .post(
        //add to doc-table
        'https://team-14-ontologies.firebaseio.com/documents.json',
        document
      )
      .then(res => {
        axios
          .patch(
            //add to folder, use patch to not override data
            'https://team-14-ontologies.firebaseio.com/folders/' +
              document.docFolderId +
              '/folderDocs.json',
            { [res.data.name]: res.data.name }
          )
          .then(() => {
            commit('addDocument', { ...document, id: res.data.name })
            console.log(this.$router.payload)
            this.$router.push(
              '/folders/' + this.$router.payload + '/' + res.data.name
            ) //+ res.data.name)//TODO add diagid to route to.
          })
      })
      .catch(e => console.log(e))
  },
  addDiagram({ commit }, payload) {
    let diagramData = ''
    axios
      .post(
        'https://team-14-ontologies.firebaseio.com/folders/' +
          payload.folderid +
          '/folderDocs/' +
          payload.docid +
          '/diagramData.json',
        payload.diagdata
      )
      .then(res => {
        console.log(res.data)
      })
  },

  deleteDocument({ commit }, payload) {
    axios //delete from doc-table
      .delete(
        'https://team-14-ontologies.firebaseio.com/documents/' +
          payload.docid +
          '.json'
      )
      .then(() => {
        axios //delete from folders-Docs
          .delete(
            'https://team-14-ontologies.firebaseio.com/folders/' +
              payload.folderid +
              '/folderDocs/' +
              payload.docid +
              '.json'
          )
          .then(() => {
            commit('deleteDocument', payload.docid)
          })
      })
      .catch(e => console.log(e))
  }
}

export const getters = {
  userDocs(state) {
    return state.userDocs
  },
  allDocuments(state) {
    return state.allDocuments
  }
}
