import Vue from "vue";
import Vuex from "vuex";
import session from "./session/store.js";
import user from "./user/store.js";

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'prod'

export default new Vuex.Store({
    modules: {
        session,
        user
    },
    strict: debug
})