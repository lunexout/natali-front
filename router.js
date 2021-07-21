import test from "./pages/test";
import Index from "./pages/index";

// import Landing from "./pages/landing";
// singles
import SingleNews from "./pages/single/news";
import SinglePress from "./pages/single/press";
import SingleProduct from "./pages/single/product";
import LoginPage from "./pages/single/login";
// Spa concept
import spaLanding from "./pages/spa/landing";
import spaConsultent from "./pages/spa/consulting";
import spaProducts from "./pages/spa/products";
import spaPartners from "./pages/spa/partners";
import spaProjects from "./pages/spa/projects";
import spaFranchize from "./pages/spa/franchize";
import spaOffers from "./pages/spa/offers";
import spaNews from "./pages/spa/news";
import spaPress from "./pages/spa/press";
import spaContact from "./pages/spa/contact";
import spaAbout from "./pages/spa/about";
// Batumi
import batumiLanding from "./pages/batumi/landing";
import batumiGift from "./pages/batumi/gift";
import batumiServices from "./pages/batumi/services";
import batumiSalon from "./pages/batumi/salon";
import batumiGallery from "./pages/batumi/gallery";
import batumiNews from "./pages/batumi/news";
import batumiPress from "./pages/batumi/press";
import batumiContact from "./pages/batumi/contact";
import batumiAbout from "./pages/batumi/about";
import batumiStylist from "./pages/batumi/stylist";
import batumiOffers from "./pages/batumi/offers";
// Distribution
import distLanding from "./pages/distribution/landing";
import distBrands from "./pages/distribution/brands";
import distProducts from "./pages/distribution/products";
import distBecome from "./pages/distribution/become";
import distSeminars from "./pages/distribution/seminars";
import distOffers from "./pages/distribution/offers";
import distGallery from "./pages/distribution/gallery";
import distContact from "./pages/distribution/contact";
import distNews from "./pages/distribution/news";
import distPress from "./pages/distribution/press";
import distAbout from "./pages/distribution/about";
// Anti Age
import AntiageLanding from "./pages/antiage/landing";
import AntiageProducts from "./pages/antiage/products";
import AntiageServices from "./pages/antiage/services";
import AntiageOffers from "./pages/antiage/offers";
import AntiageBeforeAfter from "./pages/antiage/beforeafter";
import AntiageNews from "./pages/antiage/news";
import AntiagePress from "./pages/antiage/press";
import AntiageGallery from "./pages/antiage/gallery";
import AntiageContact from "./pages/antiage/contact";
import AntiageGift from "./pages/antiage/gift";
import AntiageAbout from "./pages/antiage/about";
// natali spa
import NataliespaLanding from "./pages/natalispa/landing";
import NataliespaSalon from "./pages/natalispa/salon";
import NataliespaServices from "./pages/natalispa/services";
import NataliespaOffers from "./pages/natalispa/offers";
import NataliespaNews from "./pages/natalispa/news";
import NataliespaPress from "./pages/natalispa/press";
import NataliespaGallery from "./pages/natalispa/gallery";
import NataliespaGift from "./pages/natalispa/gift";
import NataliespaContact from "./pages/natalispa/contact";
import NataliespaAbout from "./pages/natalispa/about";
// solarium
import SolariumLanding from "./pages/solarium/landing";
import SolariumContact from "./pages/solarium/contact";
import SolariumGallery from "./pages/solarium/gallery";
import SolariumGift from "./pages/solarium/gift";
import SolariumNews from "./pages/solarium/news";
import SolariumPress from "./pages/solarium/press";
import SolariumOffers from "./pages/solarium/offers";
import SolariumAbout from "./pages/solarium/about";
import SolariumServices from "./pages/solarium/services";
import SolariumProducts from "./pages/solarium/products";
// shop
import Shop from "./pages/shop/landing";
// wellness lab
import WellnessLab from "./pages/wellness/landing";
import WellnessServices from "./pages/wellness/services";
import WellnessSalon from "./pages/wellness/salon";
import WellnessOffers from "./pages/wellness/offers";
import WellnessGallery from "./pages/wellness/gallery";
import WellnessNews from "./pages/wellness/news";
import WellnessPress from "./pages/wellness/press";
import WellnessGift from "./pages/wellness/gift";
import WellnessContact from "./pages/wellness/contact";
import WellnessAbout from "./pages/wellness/about";
// Dry Bar
import DryBar from "./pages/drybar/landing";
import DryBarProducts from "./pages/drybar/products";
import DryBarStylist from "./pages/drybar/stylist";
import DryBarService from "./pages/drybar/services";
import DryBarSalon from "./pages/drybar/salon";
import DryBarOffers from "./pages/drybar/offers";
import DryBarGallery from "./pages/drybar/gallery";
import DryBarNews from "./pages/drybar/news";
import DryBarPress from "./pages/drybar/press";
import DryBarGift from "./pages/drybar/gift";
import DryBarContact from "./pages/drybar/contact";
import DryBarAbout from "./pages/drybar/about";
// Academy
import Academy from "./pages/academy/landing";

import AcademyFinancial from "./pages/academy/financial";
import AcademyBrands from "./pages/academy/brands";
import AcademyCareer from "./pages/academy/career";
import AcademyLibrary from "./pages/academy/library";
import AcademyPrograms from "./pages/academy/programs";
import AcademyAlumni from "./pages/academy/alumni";
import AcademyBussiness from "./pages/academy/bussiness";
import AcademyStaff from "./pages/academy/staff";
import AcademyCharity from "./pages/academy/charity";
import AcademySeminars from "./pages/academy/seminars";
import AcademyNews from "./pages/academy/news";
import AcademyPress from "./pages/academy/press";
import AcademySalon from "./pages/academy/salon";
import AcademyContact from "./pages/academy/contact";
import AcademyAbout from "./pages/academy/about";

// User pages
const UserIndex = () => import("./pages/user/userIndex");

const accountPage = () => import("./pages/user/accountPage");
const ordersPage = () => import("./pages/user/ordersPage");
const servicesPage = () => import("./pages/user/servicesPage");
const wishlistPage = () => import("./pages/user/wishlistPage");
const offersPage = () => import("./pages/user/offersPage");

export default [
    {
        path: "/test",
        component: test,
        name: "TestPage"
    },
    {
        path: "/",
        component: Index,
        children: [
            // Login
            {
                path: "login/",
                component: LoginPage,
                name: "login"
            },

            // User
            {
                path: "user",
                component: UserIndex,
                redirect: { name: "accountPage" },
                name: "userIndex",
                children: [
                    // Login
                    {
                        path: "account",
                        component: accountPage,
                        name: "accountPage"
                    },
                    // orders
                    {
                        path: "orders",
                        component: ordersPage,
                        name: "ordersPage"
                    },
                    // services
                    {
                        path: "services",
                        component: servicesPage,
                        name: "servicesPage"
                    },
                    // wishlist
                    {
                        path: "wishlist",
                        component: wishlistPage,
                        name: "wishlistPage"
                    }
                    // offers
                    // {
                    //     path: "offers",
                    //     component: offersPage,
                    //     name: "offersPage"
                    // }
                ]
            },
            // Academy
            {
                path: "academy/",
                component: Academy,
                name: "academy"
            },
            {
                path: "academy/library",
                component: AcademyLibrary,
                name: "academy library"
            },
            {
                path: "academy/programs",
                component: AcademyPrograms,
                name: "academy programs"
            },
            {
                path: "academy/seminars",
                component: AcademySeminars,
                name: "academy seminars"
            },
            {
                path: "academy/business",
                component: AcademyBussiness,
                name: "academy business"
            },
            {
                path: "academy/career",
                component: AcademyCareer,
                name: "academy career"
            },
            {
                path: "academy/staff",
                component: AcademyStaff,
                name: "academy staff"
            },
            {
                path: "academy/financial",
                component: AcademyFinancial,
                name: "academy financial"
            },
            {
                path: "academy/news",
                component: AcademyNews,
                name: "academy news"
            },
            {
                path: "academy/news/:id",
                component: SingleNews,
                name: "single news academy"
            },
            {
                path: "academy/press",
                component: AcademyPress,
                name: "academy press"
            },
            {
                path: "academy/press/:id",
                component: SinglePress,
                name: "single press academy"
            },
            {
                path: "academy/charity",
                component: AcademyCharity,
                name: "academy charity"
            },
            // {
            //     path: "academy/faq",
            //     component: AntiageAbout,
            //     name: "academy faq"
            // },
            {
                path: "academy/saloon",
                component: AcademySalon,
                name: "academy saloon"
            },
            {
                path: "academy/brands",
                component: AcademyBrands,
                name: "academy brands"
            },
            {
                path: "academy/contact",
                component: AcademyContact,
                name: "academy contact"
            },
            {
                path: "academy/alumni",
                component: AcademyAlumni,
                name: "academy alumni"
            },
            {
                path: "academy/about",
                component: AcademyAbout,
                name: "academy about"
            },
            // Dry bar
            {
                path: "drybar/",
                component: DryBar,
                name: "drybar"
            },
            {
                path: "drybar/products",
                component: DryBarProducts,
                name: "drybar products"
            },
            {
                path: "drybar/products/:id/:branchId",
                component: SingleProduct,
                name: "single products drybar"
            },
            {
                path: "drybar/stylist",
                component: DryBarStylist,
                name: "drybar stylist"
            },
            {
                path: "drybar/services",
                component: DryBarService,
                name: "drybar services"
            },
            {
                path: "drybar/salon",
                component: DryBarSalon,
                name: "drybar salon"
            },
            {
                path: "drybar/offers",
                component: DryBarOffers,
                name: "drybar offers"
            },
            {
                path: "drybar/gallery",
                component: DryBarGallery,
                name: "drybar gallery"
            },
            {
                path: "drybar/news",
                component: DryBarNews,
                name: "drybar news"
            },
            {
                path: "drybar/news/:id",
                component: SingleNews,
                name: "single news drybar"
            },
            {
                path: "drybar/press",
                component: DryBarPress,
                name: "drybar press"
            },
            {
                path: "drybar/press/:id",
                component: SinglePress,
                name: "single press drybar"
            },
            {
                path: "drybar/gift",
                component: DryBarGift,
                name: "drybar gift"
            },
            {
                path: "drybar/contact",
                component: DryBarContact,
                name: "drybar contact"
            },
            {
                path: "drybar/about",
                component: DryBarAbout,
                name: "drybar about"
            },
            // Wellness
            {
                path: "wellness/",
                component: WellnessLab,
                name: "wellness"
            },
            {
                path: "wellness/services",
                component: WellnessServices,
                name: "wellness services"
            },
            {
                path: "wellness/spa",
                component: WellnessSalon,
                name: "wellness spa"
            },
            {
                path: "wellness/offers",
                component: WellnessOffers,
                name: "wellness offers"
            },
            {
                path: "wellness/gallery",
                component: WellnessGallery,
                name: "wellness gallery"
            },
            {
                path: "wellness/news",
                component: WellnessNews,
                name: "wellness news"
            },
            {
                path: "wellness/news/:id",
                component: SingleNews,
                name: "single news wellness"
            },
            {
                path: "wellness/products/:id/:branchId",
                component: SingleProduct,
                name: "single products wellness"
            },
            {
                path: "wellness/press",
                component: WellnessPress,
                name: "wellness press"
            },
            {
                path: "wellness/press/:id",
                component: SinglePress,
                name: "single press wellness"
            },
            {
                path: "wellness/gift",
                component: WellnessGift,
                name: "wellness gift"
            },
            {
                path: "wellness/contact",
                component: WellnessContact,
                name: "wellness contact"
            },
            {
                path: "wellness/about",
                component: WellnessAbout,
                name: "wellness about"
            },
            // Shop
            {
                path: "shop/",
                component: Shop,
                name: "shop"
            },
            {
                path: "shop/products/:id/:branchId",
                component: SingleProduct,
                name: "shop single product"
            },
            // Solarium Club
            {
                path: "solarium/",
                component: SolariumLanding,
                name: "solarium"
            },
            {
                path: "solarium/services",
                component: SolariumServices,
                name: "solarium services"
            },
            {
                path: "solarium/products",
                component: SolariumProducts,
                name: "solarium products"
            },
            {
                path: "solarium/products/:id/:branchId",
                component: SingleProduct,
                name: "single products solarium"
            },
            {
                path: "solarium/offers",
                component: SolariumOffers,
                name: "solarium offers"
            },
            {
                path: "solarium/gallery",
                component: SolariumGallery,
                name: "solarium gallery"
            },
            {
                path: "solarium/news",
                component: SolariumNews,
                name: "solarium news"
            },
            {
                path: "solarium/news/:id",
                component: SingleNews,
                name: "single news solarium"
            },
            {
                path: "solarium/press",
                component: SolariumPress,
                name: "solarium press"
            },
            {
                path: "solarium/press/:id",
                component: SinglePress,
                name: "single press solarium"
            },
            {
                path: "solarium/gift",
                component: SolariumGift,
                name: "solarium gift"
            },
            {
                path: "solarium/contact",
                component: SolariumContact,
                name: "solarium contact"
            },
            {
                path: "solarium/about",
                component: SolariumAbout,
                name: "solarium about"
            },
            // Natali spa
            {
                path: "nataliespa/",
                component: NataliespaLanding,
                name: "nataliespa"
            },
            {
                path: "nataliespa/services",
                component: NataliespaServices,
                name: "nataliespa services"
            },
            {
                path: "nataliespa/offers",
                component: NataliespaOffers,
                name: "nataliespa offers"
            },
            {
                path: "nataliespa/salon",
                component: NataliespaSalon,
                name: "nataliespa salon"
            },
            {
                path: "nataliespa/news",
                component: NataliespaNews,
                name: "nataliespa news"
            },
            {
                path: "nataliespa/news/:id",
                component: SingleNews,
                name: "single news nataliespa"
            },
            {
                path: "nataliespa/press",
                component: NataliespaPress,
                name: "nataliespa press"
            },
            {
                path: "nataliespa/press/:id",
                component: SinglePress,
                name: "single press nataliespa"
            },
            {
                path: "nataliespa/gallery",
                component: NataliespaGallery,
                name: "nataliespa gallery"
            },
            {
                path: "nataliespa/giftcard",
                component: NataliespaGift,
                name: "nataliespa gift card"
            },
            {
                path: "nataliespa/contact",
                component: NataliespaContact,
                name: "nataliespa contact"
            },
            {
                path: "nataliespa/about",
                component: NataliespaAbout,
                name: "nataliespa about"
            },
            // Distribution
            {
                path: "dist/",
                component: distLanding,
                name: "distribution"
            },
            {
                path: "dist/products",
                component: distProducts,
                name: "distribution products"
            },
            {
                path: "dist/products/:id/:branchId",
                component: SingleProduct,
                name: "single products dist"
            },
            {
                path: "dist/brands",
                component: distBrands,
                name: "distribution brands"
            },
            {
                path: "dist/become",
                component: distBecome,
                name: "become distributor"
            },
            {
                path: "dist/seminars",
                component: distSeminars,
                name: "distribution seminars"
            },
            {
                path: "dist/gallery",
                component: distGallery,
                name: "distribution gallery"
            },
            {
                path: "dist/offers",
                component: distOffers,
                name: "distribution offers"
            },
            {
                path: "dist/news",
                component: distNews,
                name: "distribution news"
            },
            {
                path: "dist/news/:id",
                component: SingleNews,
                name: "single news dist"
            },
            {
                path: "dist/press",
                component: distPress,
                name: "distribution press"
            },
            {
                path: "dist/press/:id",
                component: SinglePress,
                name: "single press dist"
            },
            {
                path: "dist/contact",
                component: distContact,
                name: "distribution contact"
            },
            {
                path: "dist/about",
                component: distAbout,
                name: "distribution about"
            },
            // Spa
            {
                path: "spa",
                component: spaLanding,
                name: "spa concept"
            },
            {
                path: "spa/consulting",
                component: spaConsultent,
                name: "spa consulting"
            },
            {
                path: "spa/products",
                component: spaProducts,
                name: "spa products"
            },
            {
                path: "spa/products/:id/:branchId",
                component: SingleProduct,
                name: "single products spa"
            },
            {
                path: "spa/partners",
                component: spaPartners,
                name: "spa partners"
            },
            {
                path: "spa/projects",
                component: spaProjects,
                name: "spa projects"
            },
            {
                path: "spa/franchize",
                component: spaFranchize,
                name: "spa franchize"
            },
            {
                path: "spa/offers",
                component: spaOffers,
                name: "spa offers"
            },
            {
                path: "spa/news",
                component: spaNews,
                name: "spa news"
            },
            {
                path: "spa/news/:id",
                component: SingleNews,
                name: "single news spa"
            },
            {
                path: "spa/press",
                component: spaPress,
                name: "spa press"
            },
            {
                path: "spa/press/:id",
                component: SinglePress,
                name: "single press spa"
            },
            {
                path: "spa/contact",
                component: spaContact,
                name: "spa contact"
            },
            {
                path: "spa/about",
                component: spaAbout,
                name: "spa about"
            },
            // Batumi
            {
                path: "batumi/",
                component: batumiLanding,
                name: "batumi"
            },
            {
                path: "batumi/services",
                component: batumiServices,
                name: "batumi services"
            },
            {
                path: "batumi/salon",
                component: batumiSalon,
                name: "batumi salon"
            },
            {
                path: "batumi/stylist",
                component: batumiStylist,
                name: "batumi stylist"
            },
            {
                path: "batumi/news",
                component: batumiNews,
                name: "batumi news"
            },
            {
                path: "batumi/news/:id",
                component: SingleNews,
                name: "single news batumi"
            },
            {
                path: "batumi/gallery",
                component: batumiGallery,
                name: "batumi gallery"
            },
            {
                path: "batumi/press",
                component: batumiPress,
                name: "batumi press"
            },
            {
                path: "batumi/press/:id",
                component: SinglePress,
                name: "single press batumi"
            },
            {
                path: "batumi/offers",
                component: batumiOffers,
                name: "batumi offers"
            },
            {
                path: "batumi/gift",
                component: batumiGift,
                name: "batumi gift card"
            },
            {
                path: "batumi/contact",
                component: batumiContact,
                name: "batumi contact"
            },
            {
                path: "batumi/about",
                component: batumiAbout,
                name: "batumi about"
            },
            // anti age
            {
                path: "antiage/",
                component: AntiageLanding,
                name: "antiage"
            },
            {
                path: "antiage/products",
                // component: DryBarProducts,
                component: AntiageProducts,
                name: "antiage products"
            },
            {
                path: "antiage/products/:id/:branchId",
                component: SingleProduct,
                name: "single products antiage"
            },
            {
                path: "antiage/services",
                component: AntiageServices,
                name: "antiage services"
            },
            {
                path: "antiage/offers",
                component: AntiageOffers,
                name: "antiage offers"
            },
            {
                path: "antiage/beforeafter",
                component: AntiageBeforeAfter,
                name: "antiage before after"
            },
            {
                path: "antiage/news",
                component: AntiageNews,
                name: "antiage news"
            },
            {
                path: "antiage/news/:id",
                component: SingleNews,
                name: "single news antiage"
            },
            {
                path: "antiage/press",
                component: AntiagePress,
                name: "antiage press"
            },
            {
                path: "antiage/press/:id",
                component: SinglePress,
                name: "single press antiage"
            },
            {
                path: "antiage/gallery",
                component: AntiageGallery,
                name: "antiage gallery"
            },
            {
                path: "antiage/giftcard",
                component: AntiageGift,
                name: "antiage gift card"
            },
            {
                path: "antiage/contact",
                component: AntiageContact,
                name: "antiage contact"
            },
            {
                path: "antiage/about",
                component: AntiageAbout,
                name: "antiage about"
            }
        ]
    }
];
