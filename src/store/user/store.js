import * as type from "./type.js";
import api from "./api.js";

// initial state
const state = {
    users: []
}

// getters
const getters = {
    users: state => state.users
}

// actions
const actions = {
    getUsers ({commit}) {
        api.getUsers().then(users => {
            commit(type.SET_USERS, {users})
        })
    }
}

// mutations
const mutations = {
    [type.SET_USERS] (state, {users}) {
        state.users = users
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}