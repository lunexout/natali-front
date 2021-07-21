import Axios from "axios";

export default {
    namespaced: true,
    state: {
        domain: "https://natali.onesoul.io",
        topbar: [
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "About Us",
                link: "/about"
            }
        ],
        menus: [
            {
                toName: "drybar",
                name: "Dry bar",
                link: "/drybar",
                index: 0,
                sub: [
                    {
                        toName: "drybar products",
                        name: "products",
                        link: "/drybar/products",
                        subIndex: 0,
                        index: 0
                    },
                    {
                        toName: "drybar stylist",
                        name: "stylist",
                        link: "/drybar/stylist",
                        subIndex: 1,
                        index: 0
                    },
                    {
                        toName: "drybar services",
                        name: "services",
                        link: "/drybar/services",
                        subIndex: 2,
                        index: 0
                    },
                    {
                        toName: "drybar salon",
                        name: "salon in your home",
                        link: "/drybar/salon",
                        subIndex: 3,
                        index: 0
                    },
                    {
                        toName: "drybar offers",
                        name: "offers",
                        link: "/drybar/offers",
                        subIndex: 4,
                        index: 0
                    },
                    {
                        toName: "drybar gallery",
                        name: "gallery",
                        link: "/drybar/gallery",
                        subIndex: 5,
                        index: 0
                    },
                    {
                        toName: "drybar news",
                        name: "news",
                        link: "/drybar/news",
                        subIndex: 6,
                        index: 0
                    },
                    {
                        toName: "drybar press",
                        name: "press",
                        link: "/drybar/press",
                        subIndex: 7,
                        index: 0
                    },
                    {
                        toName: "drybar gift",
                        name: "gift card",
                        link: "/drybar/gift",
                        subIndex: 8,
                        index: 0
                    },
                    {
                        toName: "drybar contact",
                        name: "contact",
                        link: "/drybar/contact",
                        subIndex: 9,
                        index: 0
                    },
                    {
                        toName: "drybar about",
                        name: "about",
                        link: "/drybar/about",
                        subIndex: 10,
                        index: 0
                    }
                ]
            },
            {
                toName: "antiage",
                name: "ANTI-AGE CLINIC",
                link: "/antiage",
                index: 1,
                sub: [
                    {
                        toName: "antiage products",
                        name: "products",
                        link: "/antiage/products",
                        subIndex: 0,
                        index: 1
                    },
                    {
                        toName: "antiage services",
                        name: "services",
                        link: "/antiage/services",
                        subIndex: 1,
                        index: 1
                    },
                    {
                        toName: "antiage offers",
                        name: "offers",
                        link: "/antiage/offers",
                        subIndex: 2,
                        index: 1
                    },
                    {
                        toName: "antiage before after",
                        name: "before & after",
                        link: "/antiage/beforeafter",
                        subIndex: 3,
                        index: 1
                    },
                    {
                        toName: "antiage news",
                        name: "news",
                        link: "/antiage/news",
                        subIndex: 4,
                        index: 1
                    },
                    {
                        toName: "antiage press",
                        name: "press",
                        link: "/antiage/press",
                        subIndex: 5,
                        index: 1
                    },
                    {
                        toName: "antiage gallery",
                        name: "gallery",
                        link: "/antiage/gallery",
                        subIndex: 6,
                        index: 1
                    },
                    {
                        toName: "antiage gift card",
                        name: "gift card",
                        link: "/antiage/giftcard",
                        subIndex: 7,
                        index: 1
                    },
                    {
                        toName: "antiage contact",
                        name: "contact",
                        link: "/antiage/contact",
                        subIndex: 8,
                        index: 1
                    },
                    {
                        toName: "antiage about",
                        name: "about",
                        link: "/antiage/about",
                        subIndex: 9,
                        index: 1
                    }
                ]
            },
            {
                toName: "wellness",
                name: "WELLNESS LAB",
                link: "/wellness",
                index: 2,
                sub: [
                    {
                        toName: "wellness services",
                        name: "services",
                        link: "/wellness/services",
                        subIndex: 0,
                        index: 2
                    },
                    {
                        toName: "wellness spa",
                        name: "spa in your home",
                        link: "/wellness/spa",
                        subIndex: 1,
                        index: 2
                    },
                    {
                        toName: "wellness offers",
                        name: "offers",
                        link: "/wellness/offers",
                        subIndex: 2,
                        index: 2
                    },
                    {
                        toName: "wellness gallery",
                        name: "gallery",
                        link: "/wellness/gallery",
                        subIndex: 3,
                        index: 2
                    },
                    {
                        toName: "wellness news",
                        name: "news",
                        link: "/wellness/news",
                        subIndex: 4,
                        index: 2
                    },
                    {
                        toName: "wellness press",
                        name: "press",
                        link: "/wellness/press",
                        subIndex: 5,
                        index: 2
                    },
                    {
                        toName: "wellness gift",
                        name: "Gift Card",
                        link: "/wellness/gift",
                        subIndex: 6,
                        index: 2
                    },
                    {
                        toName: "wellness contact",
                        name: "contact",
                        link: "/wellness/contact",
                        subIndex: 7,
                        index: 2
                    },
                    {
                        toName: "wellness about",
                        name: "about",
                        link: "/wellness/about",
                        subIndex: 8,
                        index: 2
                    }
                ]
            },
            {
                toName: "nataliespa",
                name: "NATALIE-SPA",
                link: "/nataliespa",
                index: 3,
                sub: [
                    {
                        toName: "nataliespa services",
                        name: "services",
                        link: "/nataliespa/services",
                        subIndex: 0,
                        index: 3
                    },
                    {
                        toName: "nataliespa offers",
                        name: "offers",
                        link: "/nataliespa/offers",
                        subIndex: 1,
                        index: 3
                    },
                    {
                        toName: "nataliespa salon",
                        name: "Spa in your home",
                        link: "/nataliespa/salon",
                        subIndex: 2,
                        index: 3
                    },
                    {
                        toName: "nataliespa news",
                        name: "news",
                        link: "/nataliespa/news",
                        subIndex: 3,
                        index: 3
                    },
                    {
                        toName: "nataliespa press",
                        name: "press",
                        link: "/nataliespa/press",
                        subIndex: 4,
                        index: 3
                    },
                    {
                        toName: "nataliespa gallery",
                        name: "gallery",
                        link: "/nataliespa/gallery",
                        subIndex: 5,
                        index: 3
                    },
                    {
                        toName: "nataliespa gift card",
                        name: "gift card",
                        link: "/nataliespa/giftcard",
                        subIndex: 6,
                        index: 3
                    },
                    {
                        toName: "nataliespa contact",
                        name: "contact",
                        link: "/nataliespa/contact",
                        subIndex: 7,
                        index: 3
                    },
                    {
                        toName: "nataliespa about",
                        name: "about",
                        link: "/nataliespa/about",
                        subIndex: 8,
                        index: 3
                    }
                ]
            },
            {
                toName: "solarium",
                name: "SOLARIUM CLUB",
                link: "/solarium",
                index: 4,
                sub: [
                    {
                        toName: "solarium services",
                        name: "services",
                        link: "/solarium/services",
                        subIndex: 0,
                        index: 4
                    },
                    {
                        toName: "solarium products",
                        name: "products",
                        link: "/solarium/products",
                        subIndex: 1,
                        index: 4
                    },
                    {
                        toName: "solarium offers",
                        name: "offers",
                        link: "/solarium/offers",
                        subIndex: 2,
                        index: 4
                    },
                    {
                        toName: "solarium gallery",
                        name: "gallery",
                        link: "/solarium/gallery",
                        subIndex: 3,
                        index: 4
                    },
                    {
                        toName: "solarium news",
                        name: "news",
                        link: "/solarium/news",
                        subIndex: 4,
                        index: 4
                    },
                    {
                        toName: "solarium press",
                        name: "press",
                        link: "/solarium/press",
                        subIndex: 5,
                        index: 4
                    },
                    {
                        toName: "solarium gift",
                        name: "gift card",
                        link: "/solarium/gift",
                        subIndex: 6,
                        index: 4
                    },
                    {
                        toName: "solarium contact",
                        name: "contact",
                        link: "/solarium/contact",
                        subIndex: 7,
                        index: 4
                    },
                    {
                        toName: "solarium about",
                        name: "about",
                        link: "/solarium/about",
                        subIndex: 8,
                        index: 4
                    }
                ]
            },
            {
                toName: "academy",
                name: "ACADEMY",
                link: "/academy",
                index: 5,
                sub: [
                    {
                        toName: "academy library",
                        name: "library",
                        link: "/academy/library",
                        subIndex: 0,
                        index: 5
                    },
                    {
                        toName: "academy programs",
                        name: "programs",
                        link: "/academy/programs",
                        subIndex: 1,
                        index: 5
                    },
                    {
                        toName: "academy seminars",
                        name: "seminars",
                        link: "/academy/seminars",
                        subIndex: 2,
                        index: 5
                    },
                    {
                        toName: "academy business",
                        name: "business",
                        link: "/academy/business",
                        subIndex: 3,
                        index: 5
                    },
                    {
                        toName: "academy career",
                        name: "career",
                        link: "/academy/career",
                        subIndex: 4,
                        index: 5
                    },
                    {
                        toName: "academy staff",
                        name: "staff",
                        link: "/academy/staff",
                        subIndex: 5,
                        index: 5
                    },
                    {
                        toName: "academy financial",
                        name: "financial aid",
                        link: "/academy/financial",
                        subIndex: 6,
                        index: 5
                    },
                    {
                        toName: "academy news",
                        name: "news",
                        link: "/academy/news",
                        subIndex: 7,
                        index: 5
                    },
                    {
                        toName: "academy charity",
                        name: "charity",
                        link: "/academy/charity",
                        subIndex: 8,
                        index: 5
                    },
                    {
                        toName: "academy saloon",
                        name: "saloon",
                        link: "/academy/saloon",
                        subIndex: 9,
                        index: 5
                    },
                    {
                        toName: "academy brands",
                        name: "brands",
                        link: "/academy/brands",
                        subIndex: 10,
                        index: 5
                    },
                    {
                        toName: "academy contact",
                        name: "contact",
                        link: "/academy/contact",
                        subIndex: 11,
                        index: 5
                    },
                    {
                        toName: "academy press",
                        name: "press",
                        link: "/academy/press",
                        subIndex: 12,
                        index: 5
                    },
                    {
                        toName: "academy alumni",
                        name: "alumni",
                        link: "/academy/alumni",
                        subIndex: 13,
                        index: 5
                    },
                    {
                        toName: "academy about",
                        name: "about",
                        link: "/academy/about",
                        subIndex: 14,
                        index: 5
                    }
                    // {
                    //     toName: "academy faq",
                    //     name: "F.A.Q",
                    //     link: "/academy/faq",
                    //     subIndex: 10,
                    //     index: 5
                    // },
                ]
            },
            {
                toName: "spa concept",
                name: "SPA CONCEPT",
                link: "/spa/",
                index: 6,
                sub: [
                    {
                        toName: "spa consulting",
                        name: "CONSULTING",
                        link: "/spa/consulting/",
                        subIndex: 0,
                        index: 6
                    },
                    {
                        toName: "spa products",
                        name: "PRODUCTS",
                        link: "/spa/products/",
                        subIndex: 1,
                        index: 6
                    },
                    {
                        toName: "spa partners",
                        name: "PARTNERS",
                        link: "/spa/partners/",
                        subIndex: 2,
                        index: 6
                    },
                    {
                        toName: "spa projects",
                        name: "PROJECTS",
                        link: "/spa/projects/",
                        subIndex: 3,
                        index: 6
                    },
                    {
                        toName: "spa franchize",
                        name: "FRANCHIZE",
                        link: "/spa/franchize/",
                        subIndex: 4,
                        index: 6
                    },
                    {
                        toName: "spa offers",
                        name: "OFFERS",
                        link: "/spa/offers/",
                        subIndex: 5,
                        index: 6
                    },
                    {
                        toName: "spa news",
                        name: "NEWS",
                        link: "/spa/news/",
                        subIndex: 6,
                        index: 6
                    },
                    {
                        toName: "spa press",
                        name: "PRESS",
                        link: "/spa/press/",
                        subIndex: 7,
                        index: 6
                    },
                    {
                        toName: "spa contact",
                        name: "CONTACT",
                        link: "/spa/contact/",
                        subIndex: 8,
                        index: 6
                    },
                    {
                        toName: "spa about",
                        name: "ABOUT",
                        link: "/spa/about/",
                        subIndex: 9,
                        index: 6
                    }
                ]
            },
            {
                toName: "distribution",
                name: "distribution",
                link: "/dist/",
                index: 7,
                sub: [
                    {
                        toName: "distribution products",
                        name: "products",
                        link: "/dist/products",
                        index: 7,
                        subIndex: 0
                    },
                    {
                        toName: "distribution brands",
                        name: "brands",
                        link: "/dist/brands",
                        index: 7,
                        subIndex: 1
                    },
                    {
                        toName: "become distributor",
                        name: "become distributor",
                        link: "/dist/become",
                        index: 7,
                        subIndex: 2
                    },
                    {
                        toName: "distribution seminars",
                        name: "seminars",
                        link: "/dist/seminars",
                        index: 7,
                        subIndex: 3
                    },
                    {
                        toName: "distribution gallery",
                        name: "gallery",
                        link: "/dist/gallery",
                        index: 7,
                        subIndex: 4
                    },
                    {
                        toName: "distribution offers",
                        name: "offers",
                        link: "/dist/offers",
                        index: 7,
                        subIndex: 5
                    },
                    {
                        toName: "distribution news",
                        name: "news",
                        link: "/dist/news",
                        index: 7,
                        subIndex: 6
                    },
                    {
                        toName: "distribution press",
                        name: "press",
                        link: "/dist/press",
                        index: 7,
                        subIndex: 7
                    },
                    {
                        toName: "distribution contact",
                        name: "contact",
                        link: "/dist/contact",
                        index: 7,
                        subIndex: 8
                    },
                    {
                        toName: "distribution about",
                        name: "about",
                        link: "/dist/about",
                        index: 7,
                        subIndex: 9
                    }
                ]
            },
            {
                toName: "batumi",
                name: "batumi",
                link: "/batumi/",
                index: 8,
                sub: [
                    {
                        toName: "batumi services",
                        name: "SERVICES",
                        link: "/batumi/services",
                        index: 8,
                        subIndex: 0
                    },
                    {
                        toName: "batumi salon",
                        name: "spa IN YOUR HOME",
                        link: "/batumi/salon",
                        index: 8,
                        subIndex: 1
                    },
                    {
                        toName: "batumi stylist",
                        name: "STYLISTS",
                        link: "/batumi/stylist",
                        index: 8,
                        subIndex: 2
                    },
                    {
                        toName: "batumi offers",
                        name: "OFFERS",
                        link: "/batumi/offers",
                        index: 8,
                        subIndex: 3
                    },
                    {
                        toName: "batumi gallery",
                        name: "GALLERY",
                        link: "/batumi/gallery",
                        index: 8,
                        subIndex: 4
                    },
                    {
                        toName: "batumi news",
                        name: "NEWS",
                        link: "/batumi/news",
                        index: 8,
                        subIndex: 5
                    },
                    {
                        toName: "batumi press",
                        name: "PRESS",
                        link: "/batumi/press",
                        index: 8,
                        subIndex: 6
                    },
                    {
                        toName: "batumi gift card",
                        name: "GIFT CARD",
                        link: "/batumi/gift",
                        index: 8,
                        subIndex: 7
                    },
                    {
                        toName: "batumi contact",
                        name: "CONTACT",
                        link: "/batumi/contact",
                        index: 8,
                        subIndex: 8
                    },
                    {
                        toName: "batumi about",
                        name: "ABOUT",
                        link: "/batumi/about",
                        index: 8,
                        subIndex: 9
                    }
                ]
            },
            {
                toName: "shop",
                name: "shop",
                link: "/shop/",
                index: 9,
                sub: []
            }
        ],
        activeSub: [],
        activeMenuIndex: null,
        activeSubMenuIndex: null
    },
    getters: {
        getDomain(state) {
            return state.domain;
        },
        menus(state) {
            return state.menus;
        },
        topbar(state) {
            return state.topbar;
        },
        MakeSubActive(state) {
            return state.activeSub;
        },
        activeMenu(state) {
            return state.activeMenuIndex;
        },
        activeSubMenu(state) {
            return state.activeSubMenuIndex;
        }
    },
    mutations: {},
    actions: {}
};
