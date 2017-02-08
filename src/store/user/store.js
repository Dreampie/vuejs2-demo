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
        api.getUsers(users => {
            commit(type.RECEIVE_USERS, {users})
        })
    }
}

// mutations
const mutations = {
    [type.RECEIVE_USERS] (state, {users}) {
        state.users = users
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}