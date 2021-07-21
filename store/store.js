import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import menus from "./modules/menus";
import products from "./modules/products";
import news from "./modules/news";
import press from "./modules/press";
import user from "./modules/user";
import brands from "./modules/brands";
import forms from "./modules/forms";
import gift from "./modules/gift";
import general from "./modules/general";
import academy from "./modules/academy";

import cart from './modules/cart'
import services from "./modules/services";

export const store = new Vuex.Store({
    modules: {
        Menus: menus,
        News: news,
        Press: press,
        Products: products,
        User: user,
        Brands: brands,
        Forms: forms,
        Gift: gift,
        General: general,
        Academy: academy,
        Cart: cart,
        Services: services,
    }
    // state: {
    //     domain: "https://natali.onesoul.io",
    //     topbar: [
    //         {
    //             name: "Contact",
    //             link: "/contact"
    //         },
    //         {
    //             name: "About Us",
    //             link: "/about"
    //         }
    //     ],
    //     menus: [
    //         {
    //             toName: "drybar",
    //             name: "Dry bar",
    //             link: "/drybar",
    //             index: 0,
    //             sub: [
    //                 {
    //                     toName: "drybar products",
    //                     name: "products",
    //                     link: "/drybar/products",
    //                     subIndex: 0,
    //                     index: 0
    //                 },
    //                 {
    //                     toName: "drybar stylist",
    //                     name: "stylist",
    //                     link: "/drybar/stylist",
    //                     subIndex: 1,
    //                     index: 0
    //                 },
    //                 {
    //                     toName: "drybar services",
    //                     name: "services",
    //                     link: "/drybar/services",
    //                     subIndex: 2,
    //                     index: 0
    //                 },
    //                 {
    //                     toName: "drybar salon",
    //                     name: "salon in your home",
    //                     link: "/drybar/salon",
    //                     subIndex: 3,
    //                     index: 0
    //                 },
    //                 {
    //                     toName: "drybar offers",
    //                     name: "offers",
    //                     link: "/drybar/offers",
    //                     subIndex: 4,
    //                     index: 0
    //                 },
    //                 {
    //                     toName: "drybar gallery",
    //                     name: "gallery",
    //                     link: "/drybar/gallery",
    //                     subIndex: 5,
    //                     index: 0
    //                 },
    //                 {
    //                     toName: "drybar news",
    //                     name: "news",
    //                     link: "/drybar/news",
    //                     subIndex: 6,
    //                     index: 0
    //                 },
    //                 {
    //                     toName: "drybar press",
    //                     name: "press",
    //                     link: "/drybar/press",
    //                     subIndex: 7,
    //                     index: 0
    //                 },
    //                 {
    //                     toName: "drybar gift",
    //                     name: "gift card",
    //                     link: "/drybar/gift",
    //                     subIndex: 8,
    //                     index: 0
    //                 },
    //                 {
    //                     toName: "drybar contact",
    //                     name: "contact",
    //                     link: "/drybar/contact",
    //                     subIndex: 9,
    //                     index: 0
    //                 },
    //                 {
    //                     toName: "drybar about",
    //                     name: "about",
    //                     link: "/drybar/about",
    //                     subIndex: 10,
    //                     index: 0
    //                 }
    //             ]
    //         },
    //         {
    //             toName: "antiage",
    //             name: "ANTI-AGE CLINIC",
    //             link: "/antiage",
    //             index: 1,
    //             sub: [
    //                 {
    //                     toName: "antiage products",
    //                     name: "products",
    //                     link: "/antiage/products",
    //                     subIndex: 0,
    //                     index: 1
    //                 },
    //                 {
    //                     toName: "antiage services",
    //                     name: "services",
    //                     link: "/antiage/services",
    //                     subIndex: 1,
    //                     index: 1
    //                 },
    //                 {
    //                     toName: "antiage offers",
    //                     name: "offers",
    //                     link: "/antiage/offers",
    //                     subIndex: 2,
    //                     index: 1
    //                 },
    //                 {
    //                     toName: "antiage before after",
    //                     name: "before & after",
    //                     link: "/antiage/beforeafter",
    //                     subIndex: 3,
    //                     index: 1
    //                 },
    //                 {
    //                     toName: "antiage news",
    //                     name: "news",
    //                     link: "/antiage/news",
    //                     subIndex: 4,
    //                     index: 1
    //                 },
    //                 {
    //                     toName: "antiage press",
    //                     name: "press",
    //                     link: "/antiage/press",
    //                     subIndex: 5,
    //                     index: 1
    //                 },
    //                 {
    //                     toName: "antiage gallery",
    //                     name: "gallery",
    //                     link: "/antiage/gallery",
    //                     subIndex: 6,
    //                     index: 1
    //                 },
    //                 {
    //                     toName: "antiage gift card",
    //                     name: "gift card",
    //                     link: "/antiage/giftcard",
    //                     subIndex: 7,
    //                     index: 1
    //                 },
    //                 {
    //                     toName: "antiage contact",
    //                     name: "contact",
    //                     link: "/antiage/contact",
    //                     subIndex: 8,
    //                     index: 1
    //                 },
    //                 {
    //                     toName: "antiage about",
    //                     name: "about",
    //                     link: "/antiage/about",
    //                     subIndex: 9,
    //                     index: 1
    //                 }
    //             ]
    //         },
    //         {
    //             toName: "wellness",
    //             name: "WELLNESS LAB",
    //             link: "/wellness",
    //             index: 2,
    //             sub: [
    //                 {
    //                     toName: "wellness services",
    //                     name: "services",
    //                     link: "/wellness/services",
    //                     subIndex: 0,
    //                     index: 2
    //                 },
    //                 {
    //                     toName: "wellness spa",
    //                     name: "spa in your home",
    //                     link: "/wellness/spa",
    //                     subIndex: 1,
    //                     index: 2
    //                 },
    //                 {
    //                     toName: "wellness offers",
    //                     name: "offers",
    //                     link: "/wellness/offers",
    //                     subIndex: 2,
    //                     index: 2
    //                 },
    //                 {
    //                     toName: "wellness gallery",
    //                     name: "gallery",
    //                     link: "/wellness/gallery",
    //                     subIndex: 3,
    //                     index: 2
    //                 },
    //                 {
    //                     toName: "wellness news",
    //                     name: "news",
    //                     link: "/wellness/news",
    //                     subIndex: 4,
    //                     index: 2
    //                 },
    //                 {
    //                     toName: "wellness press",
    //                     name: "press",
    //                     link: "/wellness/press",
    //                     subIndex: 5,
    //                     index: 2
    //                 },
    //                 {
    //                     toName: "wellness gift",
    //                     name: "Gift Card",
    //                     link: "/wellness/gift",
    //                     subIndex: 6,
    //                     index: 2
    //                 },
    //                 {
    //                     toName: "wellness contact",
    //                     name: "contact",
    //                     link: "/wellness/contact",
    //                     subIndex: 7,
    //                     index: 2
    //                 },
    //                 {
    //                     toName: "wellness about",
    //                     name: "about",
    //                     link: "/wellness/about",
    //                     subIndex: 8,
    //                     index: 2
    //                 }
    //             ]
    //         },
    //         {
    //             toName: "nataliespa",
    //             name: "NATALIE-SPA",
    //             link: "/nataliespa",
    //             index: 3,
    //             sub: [
    //                 {
    //                     toName: "nataliespa services",
    //                     name: "services",
    //                     link: "/nataliespa/services",
    //                     subIndex: 0,
    //                     index: 3
    //                 },
    //                 {
    //                     toName: "nataliespa offers",
    //                     name: "offers",
    //                     link: "/nataliespa/offers",
    //                     subIndex: 1,
    //                     index: 3
    //                 },
    //                 {
    //                     toName: "nataliespa salon",
    //                     name: "Spa in your home",
    //                     link: "/nataliespa/salon",
    //                     subIndex: 2,
    //                     index: 3
    //                 },
    //                 {
    //                     toName: "nataliespa news",
    //                     name: "news",
    //                     link: "/nataliespa/news",
    //                     subIndex: 3,
    //                     index: 3
    //                 },
    //                 {
    //                     toName: "nataliespa press",
    //                     name: "press",
    //                     link: "/nataliespa/press",
    //                     subIndex: 4,
    //                     index: 3
    //                 },
    //                 {
    //                     toName: "nataliespa gallery",
    //                     name: "gallery",
    //                     link: "/nataliespa/gallery",
    //                     subIndex: 5,
    //                     index: 3
    //                 },
    //                 {
    //                     toName: "nataliespa gift card",
    //                     name: "gift card",
    //                     link: "/nataliespa/giftcard",
    //                     subIndex: 6,
    //                     index: 3
    //                 },
    //                 {
    //                     toName: "nataliespa contact",
    //                     name: "contact",
    //                     link: "/nataliespa/contact",
    //                     subIndex: 7,
    //                     index: 3
    //                 },
    //                 {
    //                     toName: "nataliespa about",
    //                     name: "about",
    //                     link: "/nataliespa/about",
    //                     subIndex: 8,
    //                     index: 3
    //                 }
    //             ]
    //         },
    //         {
    //             toName: "solarium",
    //             name: "SOLARIUM CLUB",
    //             link: "/solarium",
    //             index: 4,
    //             sub: [
    //                 {
    //                     toName: "solarium services",
    //                     name: "services",
    //                     link: "/solarium/services",
    //                     subIndex: 0,
    //                     index: 4
    //                 },
    //                 {
    //                     toName: "solarium products",
    //                     name: "products",
    //                     link: "/solarium/products",
    //                     subIndex: 1,
    //                     index: 4
    //                 },
    //                 {
    //                     toName: "solarium offers",
    //                     name: "offers",
    //                     link: "/solarium/offers",
    //                     subIndex: 2,
    //                     index: 4
    //                 },
    //                 {
    //                     toName: "solarium gallery",
    //                     name: "gallery",
    //                     link: "/solarium/gallery",
    //                     subIndex: 3,
    //                     index: 4
    //                 },
    //                 {
    //                     toName: "solarium news",
    //                     name: "news",
    //                     link: "/solarium/news",
    //                     subIndex: 4,
    //                     index: 4
    //                 },
    //                 {
    //                     toName: "solarium press",
    //                     name: "press",
    //                     link: "/solarium/press",
    //                     subIndex: 5,
    //                     index: 4
    //                 },
    //                 {
    //                     toName: "solarium gift",
    //                     name: "gift card",
    //                     link: "/solarium/gift",
    //                     subIndex: 6,
    //                     index: 4
    //                 },
    //                 {
    //                     toName: "solarium contact",
    //                     name: "contact",
    //                     link: "/solarium/contact",
    //                     subIndex: 7,
    //                     index: 4
    //                 },
    //                 {
    //                     toName: "solarium about",
    //                     name: "about",
    //                     link: "/solarium/about",
    //                     subIndex: 8,
    //                     index: 4
    //                 }
    //             ]
    //         },
    //         {
    //             name: "ACADEMY",
    //             link: "/academy",
    //             index: 5,
    //             sub: [
    //                 {
    //                     name: "landing",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "library",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "programs",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "seminar",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "courses",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "business academy",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "about",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "career",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "academy staff",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "financial aid",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "news",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "charity",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "F.A.Q",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "academy saloon",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "brands",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "contact page",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "press",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "about",
    //                     link: "/test"
    //                 },
    //                 {
    //                     name: "alumni",
    //                     link: "/test"
    //                 }
    //             ]
    //         },
    //         {
    //             toName: "spa concept",
    //             name: "SPA CONCEPT",
    //             link: "/spa/",
    //             index: 6,
    //             sub: [
    //                 {
    //                     toName: "spa consulting",
    //                     name: "CONSULTING",
    //                     link: "/spa/consulting/",
    //                     subIndex: 0,
    //                     index: 6
    //                 },
    //                 {
    //                     toName: "spa products",
    //                     name: "PRODUCTS",
    //                     link: "/spa/products/",
    //                     subIndex: 1,
    //                     index: 6
    //                 },
    //                 {
    //                     toName: "spa partners",
    //                     name: "PARTNERS",
    //                     link: "/spa/partners/",
    //                     subIndex: 2,
    //                     index: 6
    //                 },
    //                 {
    //                     toName: "spa projects",
    //                     name: "PROJECTS",
    //                     link: "/spa/projects/",
    //                     subIndex: 3,
    //                     index: 6
    //                 },
    //                 {
    //                     toName: "spa franchize",
    //                     name: "FRANCHIZE",
    //                     link: "/spa/franchize/",
    //                     subIndex: 4,
    //                     index: 6
    //                 },
    //                 {
    //                     toName: "spa offers",
    //                     name: "OFFERS",
    //                     link: "/spa/offers/",
    //                     subIndex: 5,
    //                     index: 6
    //                 },
    //                 {
    //                     toName: "spa news",
    //                     name: "NEWS",
    //                     link: "/spa/news/",
    //                     subIndex: 6,
    //                     index: 6
    //                 },
    //                 {
    //                     toName: "spa press",
    //                     name: "PRESS",
    //                     link: "/spa/press/",
    //                     subIndex: 7,
    //                     index: 6
    //                 },
    //                 {
    //                     toName: "spa contact",
    //                     name: "CONTACT",
    //                     link: "/spa/contact/",
    //                     subIndex: 8,
    //                     index: 6
    //                 },
    //                 {
    //                     toName: "spa about",
    //                     name: "ABOUT",
    //                     link: "/spa/about/",
    //                     subIndex: 9,
    //                     index: 6
    //                 }
    //             ]
    //         },
    //         {
    //             toName: "distribution",
    //             name: "distribution",
    //             link: "/dist/",
    //             index: 7,
    //             sub: [
    //                 {
    //                     toName: "distribution products",
    //                     name: "products",
    //                     link: "/dist/products",
    //                     index: 7,
    //                     subIndex: 0
    //                 },
    //                 {
    //                     toName: "distribution brands",
    //                     name: "brands",
    //                     link: "/dist/brands",
    //                     index: 7,
    //                     subIndex: 1
    //                 },
    //                 {
    //                     toName: "become distributor",
    //                     name: "become distributor",
    //                     link: "/dist/become",
    //                     index: 7,
    //                     subIndex: 2
    //                 },
    //                 {
    //                     toName: "distribution seminars",
    //                     name: "seminars",
    //                     link: "/dist/seminars",
    //                     index: 7,
    //                     subIndex: 3
    //                 },
    //                 {
    //                     toName: "distribution gallery",
    //                     name: "gallery",
    //                     link: "/dist/gallery",
    //                     index: 7,
    //                     subIndex: 4
    //                 },
    //                 {
    //                     toName: "distribution offers",
    //                     name: "offers",
    //                     link: "/dist/offers",
    //                     index: 7,
    //                     subIndex: 5
    //                 },
    //                 {
    //                     toName: "distribution news",
    //                     name: "news",
    //                     link: "/dist/news",
    //                     index: 7,
    //                     subIndex: 6
    //                 },
    //                 {
    //                     toName: "distribution press",
    //                     name: "press",
    //                     link: "/dist/press",
    //                     index: 7,
    //                     subIndex: 7
    //                 },
    //                 {
    //                     toName: "distribution contact",
    //                     name: "contact",
    //                     link: "/dist/contact",
    //                     index: 7,
    //                     subIndex: 8
    //                 },
    //                 {
    //                     toName: "distribution about",
    //                     name: "about",
    //                     link: "/dist/about",
    //                     index: 7,
    //                     subIndex: 9
    //                 }
    //             ]
    //         },
    //         {
    //             toName: "batumi",
    //             name: "batumi",
    //             link: "/batumi/",
    //             index: 8,
    //             sub: [
    //                 {
    //                     toName: "batumi services",
    //                     name: "SERVICES",
    //                     link: "/batumi/services",
    //                     index: 8,
    //                     subIndex: 0
    //                 },
    //                 {
    //                     toName: "batumi salon",
    //                     name: "spa IN YOUR HOME",
    //                     link: "/batumi/salon",
    //                     index: 8,
    //                     subIndex: 1
    //                 },
    //                 {
    //                     toName: "batumi stylist",
    //                     name: "STYLISTS",
    //                     link: "/batumi/stylist",
    //                     index: 8,
    //                     subIndex: 2
    //                 },
    //                 {
    //                     toName: "batumi offers",
    //                     name: "OFFERS",
    //                     link: "/batumi/offers",
    //                     index: 8,
    //                     subIndex: 3
    //                 },
    //                 {
    //                     toName: "batumi gallery",
    //                     name: "GALLERY",
    //                     link: "/batumi/gallery",
    //                     index: 8,
    //                     subIndex: 4
    //                 },
    //                 {
    //                     toName: "batumi news",
    //                     name: "NEWS",
    //                     link: "/batumi/news",
    //                     index: 8,
    //                     subIndex: 5
    //                 },
    //                 {
    //                     toName: "batumi press",
    //                     name: "PRESS",
    //                     link: "/batumi/press",
    //                     index: 8,
    //                     subIndex: 6
    //                 },
    //                 {
    //                     toName: "batumi gift card",
    //                     name: "GIFT CARD",
    //                     link: "/batumi/gift",
    //                     index: 8,
    //                     subIndex: 7
    //                 },
    //                 {
    //                     toName: "batumi contact",
    //                     name: "CONTACT",
    //                     link: "/batumi/contact",
    //                     index: 8,
    //                     subIndex: 8
    //                 },
    //                 {
    //                     toName: "batumi about",
    //                     name: "ABOUT",
    //                     link: "/batumi/about",
    //                     index: 8,
    //                     subIndex: 9
    //                 }
    //             ]
    //         },
    //         {
    //             toName: "shop",
    //             name: "shop",
    //             link: "/shop/",
    //             index: 9,
    //             sub: []
    //         }
    //     ],
    //     activeSub: [],
    //     activeMenuIndex: null,
    //     activeSubMenuIndex: null,
    //     //
    //     oneProduct: null,
    //     oneNews: null,
    //     onePress: null,
    //     allNews: [],
    //     allPress: [],
    //     allProducts: []
    // },
    // getters: {
    //     //
    //     getOnePress(state) {
    //         return state.onePress;
    //     },
    //     getAllPress(state) {
    //         return state.allPress;
    //     },
    //     //
    //     getOneNews(state) {
    //         return state.oneNews;
    //     },
    //     getAllNews(state) {
    //         return state.allNews;
    //     },
    //     //
    //     getOneProduct(state) {
    //         return state.oneProduct;
    //     },
    //     getAllProducts(state) {
    //         return state.allProducts;
    //     },
    //     //
    //     getDomain(state) {
    //         return state.domain;
    //     }
    // },
    // mutations: {
    //     setOnePress(state, data) {
    //         state.onePress = data;
    //     },
    //     setAllPress(state, data) {
    //         state.allPress = data;
    //     },
    //     //
    //     setOneNews(state, data) {
    //         state.oneNews = data;
    //     },
    //     setAllNews(state, data) {
    //         state.allNews = data;
    //     },
    //     //
    //     setOneProduct(state, data) {
    //         state.oneProduct = data;
    //     },
    //     setAllProducts(state, data) {
    //         state.allProducts = data;
    //     }
    // },
    // actions: {
    //     receiveOnePress({ commit }, id) {
    //         return Axios.get(
    //             "https://natali.onesoul.io/api/user/post/one/" + id
    //         )
    //             .then(response => {
    //                 commit("setOnePress", response.data.data[0]);
    //                 // console.log(response.data.data[0]);
    //             })
    //             .catch(err => {
    //                 console.error({ error: err });
    //             });
    //     },
    //     receiveAllPress({ commit }, id) {
    //         return Axios.get("https://natali.onesoul.io/api/user/post/" + id)
    //             .then(response => {
    //                 commit("setAllPress", response.data.data);
    //                 // console.log(response.data.data);
    //             })
    //             .catch(err => {
    //                 console.error({ error: err });
    //             });
    //     },
    //     receiveOneNews({ commit }, id) {
    //         return Axios.get(
    //             "https://natali.onesoul.io/api/user/news/one/" + id
    //         )
    //             .then(response => {
    //                 commit("setOneNews", response.data.data[0]);
    //                 // console.log(response.data.data[0]);
    //             })
    //             .catch(err => {
    //                 console.error({ error: err });
    //             });
    //     },
    //     receiveAllNews({ commit }, id) {
    //         return Axios.get("https://natali.onesoul.io/api/user/news/" + id)
    //             .then(response => {
    //                 commit("setAllNews", response.data.data);
    //                 // console.log(response.data.data);
    //             })
    //             .catch(err => {
    //                 console.error({ error: err });
    //             });
    //     },
    //     receiveOneProduct({ commit }, id, branchId) {
    //         return Axios.get(
    //             "https://natali.onesoul.io/api/user/merge/" +
    //                 id +
    //                 "/" +
    //                 branchId
    //         )
    //             .then(response => {
    //                 commit("setOneProduct", response.data.data);
    //                 console.log(response.data.data);
    //             })
    //             .catch(err => {
    //                 console.error({ error: err });
    //             });
    //     },
    //     receiveAllProducts({ commit }, id) {
    //         return Axios.get(
    //             "https://natali.onesoul.io/api/user/products/" + id
    //         )
    //             .then(response => {
    //                 commit("setAllProducts", response.data.data);
    //                 // console.log(response.data.data);
    //             })
    //             .catch(err => {
    //                 console.error({ error: err });
    //             });
    //     }
    // }
});
