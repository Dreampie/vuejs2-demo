import Vue from "vue";
//noinspection ES6UnusedImports
import bus from "./bus.js";
//noinspection ES6UnusedImports
import resource from "./resource.js";
//noinspection ES6UnusedImports
import cookie from "./cookie.js";
import router from "./router.js";
import store from "./store/store.js";
import App from "./App.vue";

new Vue({
    router,
    store,
    ...App
}).$mount('#app')

console.log("App started with env: " + process.env.NODE_ENV)