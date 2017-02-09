import * as type from "./type.js";
import api from "./api.js";

// initial state
const state = {
    session: {}
}

// getters
const getters = {
    session: state => state.session
}

// actions
const actions = {
    getSession ({commit}) {
        api.getSession().then(session => {
            window.localStorage.setItem("session", session)
            commit(type.SET_SESSION, {session})
        })
    },
    deleteSession({commit}) {
        api.deleteSession(result => {
            if (result) {
                window.localStorage.removeItem("session")
                commit(type.SET_SESSION, {})
            }
        })
    }
}

// mutations
const mutations = {
    [type.SET_SESSION] (state, {session}) {
        state.session = session
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}