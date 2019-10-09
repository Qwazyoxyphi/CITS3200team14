//diagram.js
import axios from 'axios'

export const state = () => ({
    currDiag: {}
})

export const mutations = {

    storeDiagDB(state, payload) {//Update diagram data in the document
        const docIdx = this.state.documents.allDocuments.findIndex(
            document => document.id === payload.docid
        )
        if (docIdx != -1) {
            this.state.documents.allDocuments[docIdx].diagramData = payload.diagdata
        }
    },

    setCurrDiag(state, diagram) {
        state.currDiag = diagram
    },
}


export const actions = {

    storeDiagram({ commit }, payload) {//store in database
        return axios
            .put(
                'https://team-14-ontologies.firebaseio.com/documents/' +
                payload.docid + '/diagramData.json', payload.diagdata)
            .then(() => {
                commit("storeDiagDB", payload);
            }).catch(e => console.log(e))

    },

    setDiagram({ commit }, payload) {//set state of current diagram
        const thisDiag = this.state.documents.userDocs.find(//get the document for that diagram
            ({ id }) => id === payload.docid
        )
        var retdiag = JSON.stringify(thisDiag.diagramData)
        commit("setCurrDiag", retdiag)
    },

}
export const getters = {
    currDiag(state) {//return diagram data for that document
        return state.currDiag
    }

}

