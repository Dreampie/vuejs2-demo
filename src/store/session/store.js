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
        api.getSession(session => {
            window.localStorage.setItem("session", session)
            window.localStorage.setItem("sso", 0)
            commit(type.RECEIVE_SESSION, {session})
        })
    },
    deleteSession({commit}) {
        api.deleteSession(result => {
            if (result) {
                window.localStorage.removeItem("session")
                commit(type.RECEIVE_SESSION, {})
            }
        })
    }
}

// mutations
const mutations = {
    [type.RECEIVE_SESSION] (state, {session}) {
        state.session = session
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}