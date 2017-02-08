import Vue from "vue";
import VueRouter from "vue-router";
import IndexView from "./view/Index.vue";
import UserView from "./view/user/Index.vue";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {path: '/users', component: UserView},
        {path: '/', component: IndexView}
    ]
})