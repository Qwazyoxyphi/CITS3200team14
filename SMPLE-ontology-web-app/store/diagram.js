//diagram.js
import axios from 'axios'
import Cookie from 'js-cookie'

export const state = () => ({
  currDiag: ''
})

export const mutations = {
  saveDiagDB(state, payload) {
    //Update diagram data in the document
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
  }
}

export const actions = {
  saveDiagram({ commit }, payload) {
    let diagram
    //store in database
    console.log('saving')
    return this.$axios
      .put(
        'documents/' +
          payload.docid +
          '/diagramData.json',
        payload.diagdata
      )
      .then(() => {
        commit('saveDiagDB', payload)
        Cookie.set('diagramData', payload.diagdata)
      })
      .catch(e => console.log(e))
  },

  setDiagram({ commit }, docid, req) {
    let diagData
    console.log(req.headers.cookie)
    if (req) {
      if (!req.headers.cookie) {
        return
      }

      diagData = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('diagramData='))
        .split('=')[1]
      commit('setCurrDiag', diagData)
    } else {
      //out of action set state of current diagram
      const thisDiag = this.state.documents.userDocs.find(
        //get the document for that diagram
        ({ id }) => id === docid
      )
      commit('setCurrDiag', thisDiag.diagramData)
    }
  }
}
export const getters = {
  currDiag(state) {
    //return diagram data for that document
    return state.currDiag
  }
}
