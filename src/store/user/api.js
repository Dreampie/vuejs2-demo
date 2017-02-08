import Vue from "vue";
const users = [{id: 1, parentId: 2}]

const resource = Vue.resource('users{/id}')

export default {
    getUsers(cb){
        resource.get().then(response => {
            // success callback
            cb(response.body)
        })
    }
}