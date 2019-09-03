import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      leftSidebar: true,
      rightSidebar: false,
      token: null,
      loadedFolders: []
    },
    mutations: {
      setLeftSidebar(state) {
        state.leftSidebar = !state.leftSidebar
      },
      setRightSidebar(state) {
        state.rightSidebar = !state.rightSidebar
      },
      setToken(state, token) {
        state.token = token
      },
      setFolders(state, folders) {
        state.loadedFolders = folders
      }
    },
    actions: {
      toggleLeftSidebar({ commit }) {
        commit('setLeftSidebar')
      },
      toggleRightSidebar({ commit }) {
        commit('setRightSidebar')
      },
      authenticateUser(vuexContext, authData) {
        return this.$axios
          .$post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-Eq5EYc7CTwsnIncTCbMkGhtala1izMg',
            {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true
            }
          )
          .then(result => {
            console.log(result)
            vuexContext.commit('setToken', result.idToken)
          })
          .catch(error => {
            alert('Username or Password is incorrect.')
            commit('SET_ERROR', error)
          })
      },
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://team-14-ontologies.firebaseio.com/folders.json')
          .then(res => {
            const foldersArray = []
            for (const key in res.data) {
              foldersArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setFolders', foldersArray)
          })
          .catch(e => context.error(e))
      },
      setFolders(vuexContext, folders) {
        vuexContext.commit('setFolders', folders)
      }
    },
    getters: {
      getLeftSidebar(state) {
        return state.leftSidebar
      },
      getRightSidebar(state) {
        return state.rightSidebar
      },
      loadedFolders(state) {
        return state.loadedFolders
      }
    }
  })
}

export default createStore
