import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      leftSidebar: true,
      rightSidebar: false,
      token: null,
      loadedFolders: [],
      getUserId: null
    },
    mutations: {
      /* sidebar mutations */
      setLeftSidebar(state) {
        state.leftSidebar = !state.leftSidebar
      },
      setRightSidebar(state) {
        state.rightSidebar = !state.rightSidebar
      },
      /*        **         */
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      },
      setFolders(state, folders) {
        state.loadedFolders = folders
      },
      setUserId(state, userId) {
        state.getUserId = userId
      }
    },
    actions: {
      /* sidebar actions */
      toggleLeftSidebar({ commit }) {
        commit('setLeftSidebar')
      },
      toggleRightSidebar({ commit }) {
        commit('setRightSidebar')
      },
      /*        **         */
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
            //console.log(result.localId)
            vuexContext.commit('setUserId', result.localId)
            vuexContext.commit('setToken', result.idToken)
            localStorage.setItem('token', result.idToken)
            localStorage.setItem(
              'tokenExpiration',
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            )
            localStorage.setItem('userId', result.localId)
            Cookie.set('userId', result.localId)
            Cookie.set('jwt', result.idToken)
            Cookie.set(
              'expirationDate',
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            )
          })
          .catch(error => {
            console.log(error)
            alert('Username or Password is incorrect.')
            commit('SET_ERROR', error)
          })
      },
      initAuth(vuexContext, req) {
        let token
        let userId
        //let localId
        let expirationDate
        if (req) {
          if (!req.headers.cookie) {
            return
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='))
          if (!jwtCookie) {
            return
          }
          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('expirationDate='))
            .split('=')[1]
          userId = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('userId='))
            .split('=')[1]
        } else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')   
          userId = localStorage.getItem(userId)
          //\!! returns null after login, fixed w/ refresh maybe force autorefresh after login?(+saving code also wipes it out)
        }
        /*if (new Date().getTime() > +expirationDate || !token) {
          console.log('No token or invalid token')
          vuexContext.commit('clearToken')
          return
        }*/
        vuexContext.commit('setToken', token)
        vuexContext.commit('setUserId', userId)
        //vuexContext.commit('setUserId', localId)
      }
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
    },

    getters: {
      /* sidebar getters */
      getLeftSidebar(state) {
        return state.leftSidebar
      },
      getRightSidebar(state) {
        return state.rightSidebar
      },
      /*        **         */
      loadedFolders(state) {
        return state.loadedFolders
      },
      isAuthenticated(state) {
        return state.token != null
      },
      getUserId(state) {
        return state.getUserId
      }
    }
  })
}

export default createStore
