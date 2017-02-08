import Vue from "vue";

const sso = Vue.resource('sso')
const resource = Vue.resource('sessions')

export default {
    getSession(cb){
        resource.get().then(response => {
            // success callback
            cb(response.body)
        })
    },
    deleteSession(cb){
        resource.delete().then(response => {
            // success callback
            cb(response.body)
        })
    }
}