//diagram.js
import axios from 'axios'

export const state = () => ({
    currDiag: ''
})

export const mutations = {

    saveDiagDB(state, payload) {//Update diagram data in the document
        const docIdx = this.state.documents.allDocuments.findIndex(
            document => document.id === payload.docid
        )
        console.log(docIdx)
        if (docIdx != -1) {
            this.state.documents.allDocuments[docIdx].diagramData = payload.diagdata
        }
    },

    setCurrDiag(state, diagram) {
        state.currDiag = diagram
    },
}


export const actions = {

    saveDiagram({ commit }, payload) {//store in database
        console.log("saving")
        return axios
            .put(
                'https://team-14-ontologies.firebaseio.com/documents/' +
                payload.docid + '/diagramData.json', payload.diagdata)
            .then(() => {
                commit("saveDiagDB", payload);
            }).catch(e => console.log(e))
    },

    setDiagram({ commit }, docid) {//set state of current diagram
        //console.log(docid)
        const thisDiag = this.state.documents.userDocs.find(//get the document for that diagram
            ({ id }) => id === docid
        )
        //console.log("thisDiag")
        //console.log(thisDiag)
        var retdiag = JSON.stringify(thisDiag.diagramData)
        console.log("retdiag")
        console.log(retdiag)
        commit("setCurrDiag", retdiag)
    },

}
export const getters = {
    currDiag(state) {//return diagram data for that document
        return state.currDiag
    }

}

