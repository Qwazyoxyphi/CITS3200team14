//documents.js
import axios from 'axios'

//work backwards, with code
export const state = () => ({
    allDocuments: [], //all documents
    userDocs: [],//documents inside that folder.
})

export const mutations = {
    
    setAllDocuments(state, allDocuments) {
        state.allDocuments = allDocuments
    },
    setUserDocs(state, userDocs) {
        state.userDocs = userDocs
    },
}

export const actions = {
    //docArray needs to be changed when table structure fixed, will only hold the ids

    setUserDocs({ commit }, folderid) {
        let allDocuments = this.state.documents.allDocuments
        const uDocsArr = []//documents inside the folder
        const docArray = []//id in folder
        //Get id's of docs in that folder
        const thisFolder = this.state.folders.allFolders.find(({id}) => id === folderid)
        const folderDocs = thisFolder.folderDocs 
        for (const key in folderDocs) { docArray.push(key) }       
        
        for (const key in allDocuments){        
            if (docArray.includes(allDocuments[key].id)) {
                uDocsArr.push(allDocuments[key])
            }
        }       
        commit('setUserDocs', uDocsArr)
    }

}

export const getters = {
    userDocs(state) {
        return state.userDocs
    },
    allDocuments(state){
        return state.allDocuments
    },
}