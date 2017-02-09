import Vue from "vue";

//use bus
Vue.use({
    install(Vue) {
        const bus = new Vue({})
        Vue.prototype.$bus = bus
        Vue.bus = bus
    }
})
