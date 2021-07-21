<template>
    <div class="user-p">
        <div class="top-img">
            <img src="/assets/img/contactsandlivechat.png" alt="img" />
        </div>
        <div class="content-r">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-4 hide-xs-down nopadding">
                    <div class="user-box">
                        <div class="user-image">
                            <img src="/assets/img/rect.png" alt="userimage" />
                        </div>
                        <ul>
                            <router-link
                                to="account"
                                :class="{
                                    active: currentRouteName == 'accountPage',
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
                                to="orders"
                                :class="{
                                    active: currentRouteName == 'ordersPage',
                                }"
                            >
                                <img src="/assets/icons/truck.svg" alt="icon" />
                                My orders
                            </router-link>
                            <router-link
                                to="services"
                                :class="{
                                    active: currentRouteName == 'servicesPage',
                                }"
                            >
                                <img
                                    src="/assets/icons/feather.svg"
                                    alt="icon"
                                />
                                My services
                            </router-link>
                            <router-link
                                to="wishlist"
                                :class="{
                                    active: currentRouteName == 'wishlistPage',
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
                                to="offers"
                                :class="{
                                    active: currentRouteName == 'offersPage',
                                }"
                            >
                                <img src="/assets/icons/tag.svg" alt="icon" />
                                Offers
                            </router-link> -->
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-7 col-xs-12 nopadding">
                    <router-view />
                </div>
                <div class="col-lg-3 col-md-3 hide-sm-down nopadding">
                    <div class="p-image">
                        <img src="/assets/img/gallery.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import AccountPage from "../../components/user/account";

export default {
    name: "userIndex",
    components: {
        AccountPage,
    },
    data() {
        return {
            //
        };
    },
    methods: {
        //
    },
    computed: {
        ...mapGetters("User", ["getUserToken"]),
        ...mapGetters("User", ["getLoggedinUser"]),
        currentRouteName() {
            return this.$route.name;
        },
    },
    mounted() {
        if (this.getUserToken == "" || !this.getUserToken) {
            // console.log("not logged");
            this.$router.push({ name: "login" });
        }

        this.notFormatted = this.getLoggedinUser
            ? this.getLoggedinUser.phone
            : "";
    },
};
</script>

<style lang="scss" scoped>
.user-p {
    font-family: "Config Condensed";
    .top-img {
        height: 180px;
        width: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .content-r {
        max-width: 1400px;
        margin: 0 auto;
    }
    .p-image {
        height: 416px;
        width: 100%;
        max-width: 280px;
        margin-right: auto;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .user-box {
        max-width: 280px;
        margin-left: auto;
        padding: 12px 0;
        box-sizing: border-box;
        background-color: #f8f8f8;
        .user-image {
            height: 100px;
            width: 100px;
            margin: 0 auto;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        ul {
            padding: 16px 0 16px 26px;
            display: flex;
            flex-direction: column;
            a {
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
                    background-color: #ffffff;
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

@media screen and (max-width: 1300px) {
    .user-p {
        .top-img {
            height: 160px;
        }
    }
}

@media screen and (max-width: 1024px) {
    .hide-sm-down {
        display: none;
    }
}

@media screen and (max-width: 768px) {
    .hide-xs-down {
        display: none;
    }
}
</style>