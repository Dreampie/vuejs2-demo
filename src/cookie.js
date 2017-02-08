import Vue from "vue";
import VueCookie from "vue-cookie";
import properties from "../application.json";

Vue.use(VueCookie);

const PATTERN_DOMAIN = /(\.([^.]*?\.[^.]*?)$|localhost)/i

const root = properties[process.env.NODE_ENV].root

const cookieDomain = root.match(PATTERN_DOMAIN)[0]

console.log("Cookie domain is: " + cookieDomain)

Vue.cookie.set("SAVED_URL", properties[process.env.NODE_ENV].root, {domain: cookieDomain})