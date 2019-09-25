import axios from 'axios'

export const state = () => ({
    allFolders: [],
    userFolders: [],
})


export const mutations = {
    setAllFolders(state, allFolders) {
        state.allFolders = allFolders
    },
    setUserFolders(state, ufolders) {
        state.userFolders = ufolders
    },
}

export const actions = {

    setAllFolders(VuexContext) {
        return axios //return all folders no filter
            .get('https://team-14-ontologies.firebaseio.com/folders.json')
            .then(res => {
                const foldersArray = []
                for (const key in res.data) {
                    foldersArray.push({ ...res.data[key], id: key })
                }
                VuexContext.commit('setAllFolders', foldersArray)
            })
            .catch(e => console.error(e))
    },

    setUserFolders(vuexContext) {
        const allFolders = this.state.allFolders
        const currUsrId = this.state.getUserId
        const uFolderArr = []

        for (const key in allFolders) {
            if (allFolders[key].userId == currUsrId) {
                uFolderArr.push(allFolders[key])
            }
        }
        vuexContext.commit('setUserFolders', uFolderArr)
    }
}

export const getters = {
    allFolders(state) {
        return state.allFolders
    },
    userFolders(state) {
        return state.userFolders
    },
}
