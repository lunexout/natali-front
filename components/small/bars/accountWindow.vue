<template>
    <div :class="upper ? 'account-window' : 'account-window-mobile'">
        <div v-if="upper" class="upper-box">
            <span></span>
        </div>
        <div class="head-bar">
            <p v-if="loggedinUser && loggedinUser.name">
                Hi, {{ loggedinUser.name }}
            </p>
        <div v-else @click="reloadLogin()">
            <a
                    class="loginbefore"
                    style="cursor: pointer;"
                    @click.native="closeOnSign()"
                    >Sign in</a
                >
            </div>
            <span
                v-if="!upper"
                @click="closeWindow('.account-window-mobile')"
                class="close"
                >&#10005;</span
            >
        </div>
        <div class="list-bar" v-show="loggedinUser && loggedinUser.name">
            <ul>
                <router-link
                    @click.native="
                        closeWindow(
                            upper ? '.account-window' : '.account-window-mobile'
                        )
                    "
                    to="/user/account"
                    :class="{
                        active: currentRouteName == 'accountPage'
                    }"
                >
                    <img
                        src="/assets/icons/person-black.svg"
                        style="transform: scale(1.2)"
                        alt="icon"
                    />
                    Account
                </router-link>
                <router-link
                    @click.native="
                        closeWindow(
                            upper ? '.account-window' : '.account-window-mobile'
                        )
                    "
                    to="/user/orders"
                    :class="{
                        active: currentRouteName == 'ordersPage'
                    }"
                >
                    <img src="/assets/icons/truck.svg" alt="icon" />
                    My orders
                </router-link>
                <router-link
                    @click.native="
                        closeWindow(
                            upper ? '.account-window' : '.account-window-mobile'
                        )
                    "
                    to="/user/services"
                    :class="{
                        active: currentRouteName == 'servicesPage'
                    }"
                >
                    <img src="/assets/icons/feather.svg" alt="icon" />
                    My services
                </router-link>
                <router-link
                    @click.native="
                        closeWindow(
                            upper ? '.account-window' : '.account-window-mobile'
                        )
                    "
                    to="/user/wishlist"
                    :class="{
                        active: currentRouteName == 'wishlistPage'
                    }"
                >
                    <img
                        src="/assets/icons/heart-no.svg"
                        alt="icon"
                        style="transform: scale(1.2)"
                    />
                    Wishlist
                </router-link>
                <!-- <router-link
                    @click.native="
                        closeWindow(
                            upper ? '.account-window' : '.account-window-mobile'
                        )
                    "
                    to="/user/offers"
                    :class="{
                        active: currentRouteName == 'offersPage',
                    }"
                >
                    <img src="/assets/icons/tag.svg" alt="icon" />
                    Offers
                </router-link> -->
                <span @click="logOut()">
                    Logout
                </span>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
    name: "AccountWindow",
    props: ["upper"],
    data() {
        return {
            // userState: false,
        };
    },
    methods: {
        ...mapActions("User", ["logout"]),
        logOut() {
            this.logout();
            this.$router.go(); // refreshing the route
        },
        closeWindow(selector) {
            let target = document.querySelector(selector);
            target.classList.remove("active");
        },
        closeOnSign() {
            let selector = this.upper
                ? ".account-window"
                : ".account-window-mobile";
            this.closeWindow(selector);
        },
        reloadLogin() {
            window.location.href="/login"
        }
    },
    computed: {
        ...mapGetters("User", ["getLoggedinUser"]),
        ...mapState("User", ["loggedinUser"]),
        currentRouteName() {
            return this.$route.name;
        }
    },
    watch: {
        getLoggedinUser(a, b) {
            // console.log(a + " " + b);
        }
    },
    mounted() {
        //
    }
};
</script>

<style lang="scss" scoped>
.account-window-mobile {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 360px;
    height: 100%;
    transform: translateX(100%);
    box-shadow: none;
    transition: 0.3s;
    display: none;
    &.active {
        transform: translateX(0%);
        box-shadow: 0 15px 100px rgba(0, 0, 0, 0.15);
    }
}
.loginbefore {
    font-size: 20px;
    text-decoration: none;
    color: #000;
    &:hover {
        color: #ffaa00;
    }
}
.account-window {
    cursor: default;
    display: none;
    position: absolute;
    transform: translateY(100%);
    bottom: -60px;
    right: -75px;
    margin: 30px 30px 30px;
    width: 310px;
    transition: 0.2s;
    box-shadow: 0 15px 100px rgba(0, 0, 0, 0.15);
    &.active {
        display: block;
    }
    .upper-box {
        width: 100%;
        height: 0;
        span {
            position: relative;
            left: calc(80% - 25px);
            top: -25px;
            width: 0px;
            background-color: transparent;
            display: block;
            box-sizing: border-box;
            border-bottom: 25px solid #fff;
            border-left: 30px solid transparent;
            border-right: 30px solid transparent;
        }
    }
}

.account-window,
.account-window-mobile {
    background-color: #fff;
    font-family: "Config Condensed";
    z-index: 99998;
    box-sizing: border-box;
    .head-bar {
        height: 50px;
        padding: 0 28px;
        border-bottom: 2px solid rgba($color: #707070, $alpha: 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            font-weight: 600;
            font-size: 20px;
        }
        span.close {
            cursor: pointer;
            font-size: 20px;
            font-weight: 900;
        }
    }
    .list-bar {
        ul {
            padding: 16px 0 16px 14px;
            display: flex;
            flex-direction: column;
            a,
            span {
                cursor: pointer;
                color: #000;
                text-decoration: none;
                cursor: pointer;
                list-style-type: none;
                font-weight: 500;
                padding: 8px 0 8px 14px;
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
                line-height: 28px;
                font-size: 18px;
                &:not(:last-child) {
                    margin-bottom: 10px;
                }
                &.active,
                &:hover {
                    background-color: #f6f6f6;
                }
                img {
                    margin-right: 4px;
                    height: 20px;
                    width: 20px;
                    object-fit: contain;
                    position: relative;
                    top: 3px;
                }
            }
        }
    }
}

@media screen and (max-width: 860px) {
    .account-window {
        right: -55px !important;
        .upper-box {
            span {
                left: calc(80% - 5px) !important;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .account-window-mobile {
        display: block;
        .list-bar ul li {
            font-size: 20px;
        }
    }
}

@media screen and (max-width: 350px) {
    .account-window-mobile {
        width: 100% !important;
    }
}
</style>
