import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      leftSidebar: true,
      rightSidebar: false,
      token: null,
      allFolders: [],
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
      
      //////////Folders
      setAllFolders(state, folders) {
        state.allFolders = folders
      },
      addFolder(state, folder){//attempt this
        state.allFolders.push(folder)
      },

     //deleteFolder(state, delFolder){
       // const folderidx = state.allFolders.findIndex(
         // folder => folder.id === delFolder.id//id match
         // );
        //state.allFolders.splice(state.allFolders.indexOf(folderidx),1) 
      //},
      setUserId(state, userId) {
        state.getUserId = userId
      }
      ///////////Folders

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
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        Cookie.remove('userId')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
      },
      nuxtServerInit(vuexContext, context) {
        return axios //return all folders no filter
          .get('https://team-14-ontologies.firebaseio.com/folders.json')
          .then(res => {
            const foldersArray = []
            for (const key in res.data) {
              foldersArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setAllFolders', foldersArray)
          })
          .catch(e => context.error(e))
      },
      addFolder(vuexContext, folder){
        return axios
          .post(
            'https://team-14-ontologies.firebaseio.com/folders.json', folder
          )
          .then(res => {
            vuexContext.commit('addFolder', {...folder, id: res.data.name})
           // location.reload(true)
            this.$router.push('/folders/' + res.data.name)
          })
          .catch(e => console.log(e))
        },
        setAllFolders(vuexContext, folders){
          vuexContext.commit("setAllFolders", folders)
        }

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
      getAllFolders(state) {
        return state.allFolders
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
