import axios from "@/plugins/axios";

const state = {
    settings: {}
}

const getters = {
    getSettings(state) {
        return state.settings
    }
}

const mutations = {
    SET_SETTINGS(state, settings) {
        state.settings = settings
    }
}

const actions = {
    nuxtServerInit(context) {
        context.dispatch('fetchSettings')
    },
    fetchSettings({commit}) {
        return axios.get('/settings').then((response) => {
            commit('SET_SETTINGS', response.data.data)
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}