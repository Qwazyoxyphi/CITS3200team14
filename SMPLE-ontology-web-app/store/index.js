import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      leftSidebar: true,
      rightSidebar: false
    },
    mutations: {
      setLeftSidebar(state) {
        state.leftSidebar = !state.leftSidebar
      },
      setRightSidebar(state) {
        state.rightSidebar = !state.rightSidebar
      }
    },
    actions: {
      toggleLeftSidebar({ commit }) {
        commit('setLeftSidebar')
      },
      toggleRightSidebar({ commit }) {
        commit('setRightSidebar')
      }
    },
    getters: {
      getLeftSidebar(state) {
        return state.leftSidebar
      },
      getRightSidebar(state) {
        return state.rightSidebar
      }
    }
  })
}

export default createStore
