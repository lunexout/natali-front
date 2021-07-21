/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

window.Vue = require("vue");
import Vue from "vue";

// vue route config
import VueRouter from "vue-router";
Vue.use(VueRouter);
import route from "./router";
const router = new VueRouter({
    routes: route,
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0, behavior: "smooth" };
    }
});

//importing axios
const axios = require("axios").default;

//importing flex box grid
import VueFlexboxgrid from "vue-flexboxgrid";

Vue.use(VueFlexboxgrid);

//import and using skeleton
import Skeleton from "vue-loading-skeleton";

Vue.use(Skeleton);

//import vuex
import { store } from "./store/store";

//import swiper
import VueAwesomeSwiper from "vue-awesome-swiper";

// import swiper style
// import 'swiper/swiper.scss'

Vue.use(VueAwesomeSwiper);



import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

import "swiper/swiper-bundle.css";

let filter = function(text, length, clamp) {
    clamp = clamp || "...";
    let node = document.createElement("div");
    node.innerHTML = text;
    let content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter("truncate", filter);

import "vue-twentytwenty/dist/vue-twentytwenty.css";

import TwentyTwenty from "vue-twentytwenty";

Vue.use(TwentyTwenty);

import AOS from "aos";

import "aos/dist/aos.css";

import "animate.css";

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component("main-component", require("./Index").default);
let noCheck = [
    "TestPage",

    "first page",
    // User Panel
    "login",
    "userIndex",
    "userIndex",
    "accountPage",
    "ordersPage",
    "servicesPage",
    "wishlistPage",
    "offersPage",
    //
    "single press antiage",
    "single products wellness",
    "single press wellness",
    "single press drybar",
    "single press nataliespa",
    "single press solarium",
    "single press spa",
    "single press dist",
    "single press batumi",
    "single press dist",
    "single press academy",
    //
    "single products antiage",
    "single products spa",
    "single products dist",
    "single products drybar",
    "single products solarium",
    //
    "single news antiage",
    "single news wellness",
    "single news drybar",
    "single news nataliespa",
    "single news solarium",
    "single news spa",
    "single news dist",
    "single news batumi",
    "single news dist",
    "single news academy",

    // shop
    "shop single product"
];
router.beforeEach((to, from, next) => {
    store.state.News.oneNews = null;
    let an = to.name;
    if (an != undefined) {
        if (!noCheck.includes(to.name)) {
            let lan = store.state.Menus.menus.filter(item => {
                return item.toName == an;
            });
            if (lan.length > 0) {
                store.state.Menus.activeSub = lan[0].sub;
                store.state.Menus.activeSubMenuIndex = null;
                store.state.Menus.activeMenuIndex = lan[0].index;
            } else {
                let ov = {};
                store.state.Menus.menus.filter(item => {
                    item.sub.filter(item2 => {
                        if (item2.toName == an) {
                            ov = item2;
                        }
                    });
                });
                let we = store.state.Menus.menus.filter(item => {
                    return item.index == ov.index;
                });
                store.state.Menus.activeSub = we[0].sub;
                store.state.Menus.activeMenuIndex = ov.index;
                store.state.Menus.activeSubMenuIndex = ov.subIndex;
            }
        }
    } else {
        store.state.Menus.activeSub = [];
        store.state.Menus.activeMenuIndex = null;
        store.state.Menus.activeSubMenuIndex = null;
    }
    next();
    // explicitly return false to cancel the navigation return false
});

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
const app = new Vue({
    store: store,
    router,
    axios,
    created() {
        AOS.init();
    },
    el: "#app"
});
