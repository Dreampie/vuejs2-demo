import Vue from "vue";
import VueResource from "vue-resource";
import properties from "../application.json";

Vue.use(VueResource)
Vue.http.options.credentials = true
Vue.http.options.root = properties[process.env.NODE_ENV].apiRoot;

console.log("App root is: " + properties[process.env.NODE_ENV].root)
console.log("Api root is: " + properties[process.env.NODE_ENV].apiRoot)

Vue.http.interceptors.push((request, next) => {

    Vue.bus.$emit('v-loading:start')

    next(response => {
        Vue.bus.$emit('v-loading:complete')
    })
})