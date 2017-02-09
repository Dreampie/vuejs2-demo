import Vue from "vue";

const sso = Vue.resource('sso')
const resource = Vue.resource('sessions')

export default {
    getSession(){
        return resource.get().then(response => response.body)
    },
    deleteSession(){
        return resource.delete().then(response => response.body)
    }
}