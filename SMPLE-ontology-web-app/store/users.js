import Cookie from 'js-cookie'

export const state = () => ({
    leftSidebar: true,
    rightSidebar: false,
    token: null,
    getUserId: null
})

export const mutations = {

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
    setUserId(state, userId) {
        state.getUserId = userId
    }  

}

export const actions = { 
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
          userId = localStorage.getItem('userId')
        }
        vuexContext.commit('setToken', token)
        vuexContext.commit('setUserId', userId)
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
}

export const getters = {
    
    getLeftSidebar(state) {
        return state.leftSidebar
    },
    getRightSidebar(state) {
        return state.rightSidebar
    },          
    isAuthenticated(state) {
        return state.token != null
    },
    getUserId(state) {
        return state.getUserId
    }
}
  
  
  