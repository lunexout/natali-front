<template>
    <div class="header-wrapper">
        <div class="top-bar">
            <div class="top-bar-wrapper">
                <div class="container">
                    <div class="row between-xs middle-xs">
                        <div class="col-md-6">
                            <ul class="top-bar-opts">
                                <li>
                                    <p class="day-date">Monday, April 23</p>
                                </li>

                                <li v-for="(tab, index) of topbar" :key="index">
                                    <router-link :to="tab.link">{{
                                        tab.name
                                    }}</router-link>
                                </li>

                                <li>
                                    <a
                                        class="phone-num"
                                        href="tel:+032 2 77 77 77"
                                        >+032 2 77 77 77</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <SocialIcons :lang="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-head">
            <div class="logo-line">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-offset-4 col-xs-4 center-xs">
                            <a
                                href="/"
                                class="logo"
                                data-aos="fade-down"
                                data-aos-duration="600"
                            >
                                <img src="/assets/img/logo.svg" alt="logo" />
                            </a>
                        </div>
                        <div class="col-xs-4">
                            <ul class="logo-line-panel">
                                <li>
                                    <!-- routerlink? -->
                                    <a
                                        href="#"
                                        class="shoping-cart-btn"
                                        @click.prevent="
                                            openWindow('.shoping-cart')
                                        "
                                    >
                                        <img
                                            src="/assets/icons/shopping-cart.svg"
                                            alt="icon"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="appoint-btn"
                                        @click.prevent="
                                            openWindow('.appointment')
                                        "
                                    >
                                        <img
                                            src="/assets/icons/feather.svg"
                                            alt="icon"
                                        />
                                    </a>
                                </li>
                                <li class="account-window-btn">
                                    <a
                                        href="#"
                                        @click.prevent="
                                            openWindow('.account-window')
                                        "
                                    >
                                        <img
                                            src="/assets/icons/person-black.svg"
                                            alt="icon"
                                            style="transform: scale(1.2)"
                                        />
                                    </a>
                                    <AccountWindow :upper="true" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-menu">
                <div class="container">
                    <!-- Main Desktop menu -->
                    <ul class="main-menu-list">
                        <li v-for="(menu, index) of menus" :key="index">
                            <router-link
                                class="main-desktop-menu"
                                @click.native="Menu(menu, index)"
                                :to="menu.link"
                                :class="[
                                    currentPage.includes(menu.link)
                                        ? 'active'
                                        : '',
                                ]"
                                >{{ menu.name }}</router-link
                            >
                        </li>
                    </ul>
                </div>
                <div v-if="MakeSubActive.length > 0" class="sep"></div>
                <div class="container">
                    <!-- Desktop Submenu -->
                    <ul
                        v-if="MakeSubActive.length > 0"
                        class="main-menu-list main-menu-list-sub"
                    >
                        <li v-for="(sub, index) of MakeSubActive" :key="index">
                            <router-link
                                :to="sub.link"
                                @click.native="subMenu(index)"
                                :class="[{ active: activeSubMenu == index }]"
                                >{{ sub.name }}</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <AccountWindow :upper="false" />
        <Appointment />
        <ShopingCart />
        <div class="mobile-menu-screen">
            <!-- Main Mobile menu -->
            <div class="inside-wrapper">
                <ul>
                    <li v-for="(menu, index) of menus" :key="index">
                        <span
                            class="animate__animated"
                            :class="[
                                {
                                    animate__fadeInRight: animateState == true,
                                },
                                `animate__delay-${index + 1}s`,
                            ]"
                        >
                            <router-link
                                class="animate__animated main-mobile-menu"
                                @click.native="Menu(menu, index, true)"
                                :to="menu.link"
                                :class="[
                                    currentPage.includes(menu.link)
                                        ? 'active'
                                        : '',
                                ]"
                            >
                                {{ menu.name }}
                            </router-link>
                            <span
                                class="plus"
                                v-if="menus[index].sub.length > 0"
                                @click="subShow(index)"
                                >+</span
                            >
                        </span>
                        <!-- Mobile Subs -->
                        <ul
                            v-if="menus[index].sub.length > 0"
                            class="mobile-sub-box"
                            :id="'ind' + index"
                        >
                            <li
                                v-for="(sub, subIndex) of menus[index].sub"
                                :key="subIndex"
                            >
                                <router-link
                                    :to="sub.link"
                                    @click.native="subMenu(subIndex, true)"
                                    >{{ sub.name }}</router-link
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mobile-bar">
            <div class="mobile-bar-wrapper">
                <li>
                    <a class="mobile-nav-link">
                        <img src="/assets/icons/homeicon.svg" alt="icon" />
                    </a>
                </li>
                <li>
                    <a
                        class="mobile-nav-link shoping-cart-btn"
                        @click.prevent="openWindow('.shoping-cart')"
                    >
                        <img src="/assets/icons/shopping-cart.svg" alt="icon" />
                    </a>
                </li>
                <li>
                    <a
                        class="mobile-nav-link appoint-btn"
                        @click.prevent="openWindow('.appointment')"
                    >
                        <img src="/assets/icons/feather.svg" alt="icon" />
                    </a>
                </li>
                <li>
                    <a
                        class="mobile-nav-link account-window-mobile-btn"
                        @click.prevent="openWindow('.account-window-mobile')"
                    >
                        <img
                            src="/assets/icons/person-black.svg"
                            alt="icon"
                            style="transform: scale(1.2)"
                        />
                    </a>
                </li>
                <li>
                    <a
                        id="hamburger"
                        class="hamburglar closed"
                        @click="mobileMenu()"
                    >
                        <div class="burger-icon">
                            <div class="burger-container">
                                <span class="burger-bun-top"></span>
                                <span class="burger-filling"></span>
                                <span class="burger-bun-bot"></span>
                            </div>
                        </div>
                    </a>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
import SocialIcons from "./small/socialicons";
import AccountWindow from "./small/bars/accountWindow";
import Appointment from "./small/bars/appointment";
import ShopingCart from "./small/bars/shopingCart";

import { mapGetters, mapActions } from "vuex";

export default {
    name: "Header",
    components: {
        SocialIcons,
        AccountWindow,
        Appointment,
        ShopingCart,
    },
    data() {
        return {
            animateState: false,
        };
    },
    created() {},
    mounted() {
        // this.receiveCart(1);
    },
    updated() {},
    computed: {
        ...mapGetters("Menus", [
            "topbar",
            "menus",
            "MakeSubActive",
            "activeMenu",
            "activeSubMenu",
        ]),
        // ...mapGetters("User", ["getCart"]),
        currentPage() {
            return this.$route.path;
        },
    },
    methods: {
        // ...mapActions("User", ["receiveCart"]),
        Menu(menu, index, mobile) {
            this.$store.state.Menus.activeSub = menu.sub;
            this.$store.state.Menus.activeMenuIndex = index;
            this.$store.state.Menus.activeSubMenuIndex = null;
            if (mobile) {
                this.mobileMenu();
            }
        },
        subMenu(index, mobile) {
            this.$store.state.Menus.activeSubMenuIndex = index;
            if (mobile) {
                this.mobileMenu();
            }
        },
        subShow(index) {
            let allOb = document.querySelectorAll(".mobile-sub-box");
            allOb.forEach(function (el) {
                if (index !== "f" && el.id == `ind${index}`) {
                    el.classList.toggle("active");
                } else {
                    el.classList.remove("active");
                }
            });
        },
        mobileMenu() {
            this.subShow("f");
            // toggle burger
            let elem = document.getElementById("hamburger");
            if (elem.classList.contains("closed")) {
                elem.classList.add("is-open");
                elem.classList.remove("is-closed");
                elem.classList.remove("closed");
            } else {
                elem.classList.remove("is-open");
                elem.classList.add("is-closed");
                elem.classList.add("closed");
            }
            // toggle scroll body
            document.body.classList.toggle("no-scroll");
            // open menu
            let mobileMenuScreen = document.querySelector(
                ".mobile-menu-screen"
            );
            mobileMenuScreen.classList.toggle("active");
            // anim list
            this.animateState = !this.animateState;
        },
        ...mapActions("Cart", ["setCartItems"]),
        openWindow(selector) {
            let target = document.querySelector(selector);
            target.classList.toggle("active");
            if (selector == ".appointment" || selector == ".shoping-cart") {
                document.body.classList.toggle("no-scroll");
            }
            this.setCartItems()
            },

    },
    created: function () {
        document.body.addEventListener("click", function (e) {
            let aw = document.querySelector(".account-window");
            let awmob = document.querySelector(".account-window-mobile");
            let appoint = document.querySelector(".appointment");
            let shopingcart = document.querySelector(".shoping-cart");
            if (
                aw.classList.contains("active") &&
                !aw.contains(e.target) &&
                !e.target.parentNode.parentNode.classList.contains(
                    "account-window-btn"
                )
            ) {
                aw.classList.remove("active");
            } else if (
                awmob.classList.contains("active") &&
                !awmob.contains(e.target) &&
                !e.target.parentNode.classList.contains(
                    "account-window-mobile-btn"
                )
            ) {
                awmob.classList.remove("active");
            } else if (
                appoint.classList.contains("active") &&
                !appoint.contains(e.target) &&
                !e.target.parentNode.classList.contains("appoint-btn")
            ) {
                appoint.classList.remove("active");
                document.body.classList.remove("no-scroll");
            } else if (
                shopingcart.classList.contains("active") &&
                !shopingcart.contains(e.target) &&
                !e.target.parentNode.classList.contains("shoping-cart-btn")
            ) {
                shopingcart.classList.remove("active");
                document.body.classList.remove("no-scroll");
            }
        });
        
    },
};
</script>

<style lang="scss" scoped>
.top-bar-opts-social {
    display: flex;
    justify-content: space-between;
    // max-width: 140px;
    float: right;
    li {
        padding: 0 10px;
        display: inline-block;
        color: #000;
        a {
            color: #494949;
            text-decoration: none;
            font-size: 20px;
            width: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                color: #000;
            }
        }
    }
}

$orange: #e09603;

.header-wrapper {
    min-height: 100px;
    font-family: "Config Condensed";
    .mobile-menu-screen {
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        transform: translateX(100%);
        transition: 0.3s;
        // display: block;
        background-color: #fff;
        font-family: "Config Condensed";
        box-shadow: none;
        z-index: 99998;
        box-sizing: border-box;
        display: none;
        &.active {
            transform: translateX(0%);
            box-shadow: 0 15px 100px rgba(0, 0, 0, 0.15);
        }
        .inside-wrapper {
            display: flex;
            justify-content: center;
            position: absolute;
            overflow-y: scroll;
            overflow-x: hidden;
            top: 0;
            bottom: 0;
            width: 100%;
            margin-bottom: 70px;
            padding: 40px 12px 0;
            box-sizing: border-box;
            /* width */
            &::-webkit-scrollbar {
                width: 8px;
            }
            /* Track */
            &::-webkit-scrollbar-track {
                background: #f1f1f1;
            }
            /* Handle */
            &::-webkit-scrollbar-thumb {
                background: rgba($color: #f0a210, $alpha: 0.3);
            }
            /* Handle on hover */
            &::-webkit-scrollbar-thumb:hover {
                background: rgba($color: #f0a210, $alpha: 0.5);
            }
            ul {
                list-style: none;
                li {
                    text-align: center;
                    span:not(.plus) {
                        display: block;
                        position: relative;
                        .plus {
                            cursor: pointer;
                            position: absolute;
                            left: -14px;
                            font-size: 42px;
                            font-weight: 300;
                            top: 40%;
                            transform: translateY(-50%);
                        }
                    }
                    a {
                        text-decoration: none;
                        color: #000;
                        font-weight: 500;
                        font-size: 26px;
                        margin-bottom: 20px;
                        display: block;
                        text-transform: uppercase;
                        transition: 0.2s;
                        border-bottom: 2px solid transparent;
                        &.active,
                        &:hover {
                            border-bottom: 2px solid #f0a210;
                        }
                    }
                    &:last-child {
                        padding-bottom: 2px;
                    }
                    .mobile-sub-box {
                        transition: 0.3s;
                        height: 0;
                        overflow: hidden;
                        &.active {
                            height: unset;
                        }
                        li a {
                            font-weight: 300;
                            font-size: 25px;
                        }
                    }
                }
            }
        }
    }
    .top-bar {
        box-sizing: border-box;
        height: 38px;
        display: flex;
        align-items: center;
        background-color: #fff;
        .top-bar-wrapper {
            width: 100%;
            .top-bar-opts {
                display: flex;
                justify-content: flex-start;
                li {
                    margin-right: 10px;
                    display: inline-block;
                    color: #000000;
                    font-size: 16px;
                    a {
                        color: #000;
                        text-decoration: none;
                    }
                }
            }
        }
    }
    .main-head {
        min-height: 100px;
        position: relative;
        background-size: cover;
        background-blend-mode: lighten;
        &::after {
            content: "";
            background: url("/assets/img/spa_concept.png") center -10px no-repeat;
            background-size: cover;
            opacity: 0.5;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: -1;
        }
        .logo-line {
            padding: 14px 0;
            .logo {
                display: inline-block;
                img {
                    width: 100px;
                    height: 100px;
                }
            }
            .logo-line-panel {
                list-style-type: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 150px;
                float: right;
                height: 100%;
                li {
                    position: relative;
                    display: inline-block;
                    a {
                        color: #000;
                        width: 25px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        img {
                            width: 25px;
                            height: auto;
                        }
                    }
                }
            }
        }
        .main-menu {
            min-height: 20px;
            padding-bottom: 14px;
            font-weight: 600;
            font-size: 18px;
            .sep {
                border-bottom: 1px solid #000;
                opacity: 0.2;
                margin: 10px 0;
            }
            .main-menu-list {
                list-style-type: none;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                li {
                    display: inline-block;
                    margin: 0 10px;
                    text-decoration: none;
                    color: #000;
                    line-height: 24px;
                    a {
                        text-transform: uppercase;
                        color: #000;
                        opacity: 0.3;
                        text-decoration: none;
                        transition: 0.3s;
                        &.active {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
    .mobile-bar {
        position: fixed;
        z-index: 999999;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 70px;
        background-color: #fff;
        box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
        display: none;
        .mobile-bar-wrapper {
            height: 50px;
            margin: 10px 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li {
                color: #000;
                display: block;
                height: 24px;
                width: 24px;
                text-align: center;
                font-size: 20px;
                line-height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                a {
                    cursor: pointer;
                    color: #000;
                    display: block;
                    height: 100%;
                    width: 100%;
                    &.mobile-nav-link {
                        position: relative;
                        &.active::after {
                            content: "";
                            position: absolute;
                            bottom: -6px;
                            left: 0;
                            right: 0;
                            width: 100%;
                            height: 2px;
                            background-color: $orange;
                        }
                    }
                    img {
                        max-width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .mobile-menu-screen {
        display: block !important;
    }
    .mobile-bar {
        // mobile bar on
        display: block !important;
    }
    .header-wrapper,
    .main-head,
    .logo-line {
        height: 100px !important ;
    }
    .logo {
        height: 60px !important;
        img {
            max-height: 60px !important;
            width: auto !important;
        }
    }
    .logo-line {
        height: 80px !important;
        padding: 10px 0 !important;
    }
    .main-menu {
        display: none !important;
    }
    .logo-line-panel {
        display: none !important;
    }
    .top-bar {
        display: none !important;
    }
}

// burger

// vars
$color: #000; // icon color
$blue: transparent; // background color
$animation: 0.6s; // animation speed
$scale: 0.5; // icon scale 68/68 default

#hamburger {
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hamburglar {
    cursor: pointer;
    transform: scale($scale);
    position: relative;
    display: block;
    width: 60px;
    height: 60px;
    background: $blue;
    -webkit-touch-callout: none;
    user-select: none;
}

// transition mask
.path-burger {
    position: absolute;
    top: 0;
    left: 0;
    height: 68px;
    width: 68px;
}

// All good burgers need filling!

.burger-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 60px;
    width: 60px;
}

.burger-container {
    position: relative;
    height: 28px;
    width: 36px;
}

.burger-bun-top,
.burger-bun-bot,
.burger-filling {
    position: absolute;
    display: block;
    height: 4px;
    width: 36px;
    border-radius: 2px;
    background: $color;
}

.burger-bun-top {
    top: 0;
    transform-origin: 34px 2px;
}

.burger-bun-bot {
    bottom: 0;
    transform-origin: 34px 2px;
}
.burger-filling {
    top: 12px;
}

// bun animations
.hamburglar.is-open {
    .burger-bun-top {
        animation: bun-top-out $animation linear normal;
        animation-fill-mode: forwards;
    }
    .burger-bun-bot {
        animation: bun-bot-out $animation linear normal;
        animation-fill-mode: forwards;
    }
}
.hamburglar.is-closed {
    .burger-bun-top {
        animation: bun-top-in $animation linear normal;
        animation-fill-mode: forwards;
    }
    .burger-bun-bot {
        animation: bun-bot-in $animation linear normal;
        animation-fill-mode: forwards;
    }
}

@keyframes bun-top-out {
    0% {
        left: 0;
        top: 0;
        transform: rotate(0deg);
    }
    20% {
        left: 0;
        top: 0;
        transform: rotate(15deg);
    }
    80% {
        left: -5px;
        top: 0;
        transform: rotate(-60deg);
    }
    100% {
        left: -5px;
        top: 1px;
        transform: rotate(-45deg);
    }
}

@keyframes bun-bot-out {
    0% {
        left: 0;
        transform: rotate(0deg);
    }
    20% {
        left: 0;
        transform: rotate(-15deg);
    }
    80% {
        left: -5px;
        transform: rotate(60deg);
    }
    100% {
        left: -5px;
        transform: rotate(45deg);
    }
}

@keyframes bun-top-in {
    0% {
        left: -5px;
        bot: 0;
        transform: rotate(-45deg);
    }
    20% {
        left: -5px;
        bot: 0;
        transform: rotate(-60deg);
    }
    80% {
        left: 0;
        bot: 0;
        transform: rotate(15deg);
    }
    100% {
        left: 0;
        bot: 1px;
        transform: rotate(0deg);
    }
}

@keyframes bun-bot-in {
    0% {
        left: -5px;
        transform: rotate(45deg);
    }
    20% {
        left: -5px;
        bot: 0;
        transform: rotate(60deg);
    }
    80% {
        left: 0;
        bot: 0;
        transform: rotate(-15deg);
    }
    100% {
        left: 0;
        transform: rotate(0deg);
    }
}

// burger filling
.hamburglar.is-open {
    .burger-filling {
        animation: burger-fill-out $animation linear normal;
        animation-fill-mode: forwards;
    }
}

.hamburglar.is-closed {
    .burger-filling {
        animation: burger-fill-in $animation linear normal;
        animation-fill-mode: forwards;
    }
}

@keyframes burger-fill-in {
    0% {
        width: 0;
        left: 36px;
    }
    40% {
        width: 0;
        left: 40px;
    }
    80% {
        width: 36px;
        left: -6px;
    }
    100% {
        width: 36px;
        left: 0px;
    }
}

@keyframes burger-fill-out {
    0% {
        width: 36px;
        left: 0px;
    }
    20% {
        width: 42px;
        left: -6px;
    }

    40% {
        width: 0;
        left: 40px;
    }

    100% {
        width: 0;
        left: 36px;
    }
}
</style>
