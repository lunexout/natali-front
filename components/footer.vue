<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 cols">
                    <div class="subscription">
                        <span class="title">Subscribe to Our Newsletter2</span>
                        <input
                            type="text"
                            name="footer-email"
                            placeholder="Email Address"
                        />
                        <div class="bottom">
                            <a href="" class="button-sign_up">SIGN UP</a>
                            <span class="additional"
                                >By clicking SIGN UP, you agree to receive
                                emails from Poosh and agree to our
                                <a href="#">terms</a> of use and
                                <a href="#">privacy policy.</a></span
                            >
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 cols">
                    <div class="contacts">
                        <li
                            v-for="(tab, index) of topbar.slice().reverse()"
                            :key="index"
                        >
                            <router-link :to="tab.link">{{
                                tab.name
                            }}</router-link>
                        </li>
                        <div class="chat-box">
                            <img src="/assets/icons/livechat.svg" alt="" />
                            <span>LIVE CHAT</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 cols">
                    <div class="third-wrapper">
                        <div class="list-cond">
                            <span>TERMS &amp; CONDITIONS</span>
                            <span>PRIVACY POLICY</span>
                            <span>COOKIE POLICY</span>
                            <span>CALIFORNIA PRIVACY RIGHTS</span>
                            <span>AFFILIATE DISCLOSURE</span>
                        </div>
                        <div class="cprt">
                            <span>Natalie Group (C) 2018</span>
                            <span>All rights reserved</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 cols">
                    <div class="socials">
                        <span class="title">KEEP IN TOUCH</span>
                        <SocialIcons :lang="false" />
                        <div class="img-wrapper">
                            <img src="/assets/img/footerlogo.svg" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SocialIcons from "./small/socialicons";

import { mapGetters, mapActions } from "vuex";

export default {
    name: "Footer",
    components: {
        SocialIcons
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters("Menus", ["topbar"])
    }
};
</script>

<style lang="scss" scoped>
.footer {
    border-top: 2px solid rgba($color: #ae9228, $alpha: 0.2);
    width: 100%;
    min-height: 300px;
    padding-bottom: 50px;
    .container,
    .row {
        height: 100%;
    }
    .cols {
        position: relative;
    }
    .subscription,
    .contacts,
    .third-wrapper,
    .socials {
        max-width: 300px;
        margin: 0 auto;
        height: 100%;
        min-height: 280px;
        padding: 20px 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        &:not(.socials)::after {
            background-color: rgba($color: #707070, $alpha: 0.5);
            width: 1px;
            height: 80%;
            position: absolute;
            top: 50%;
            right: 0;
            content: "";
            transform: translateX(0) translateY(-50%);
        }
    }
    .socials {
        font-family: "Config Condensed";
        text-align: center;
        .title {
            font-size: 18px;
            margin-bottom: 20px;
            margin-right: 70px;
        }
        .top-bar-opts-social {
            justify-content: center !important;
            margin-right: 70px;
        }
        .img-wrapper {
            margin: 0 auto;
            width: 180px;
            height: 100%;
            display: flex;
            align-items: flex-end;
            img {
                width: 100%;
                height: auto;
            }
        }
    }
    .third-wrapper {
        font-family: "Config Condensed";
        justify-content: space-between;
        span {
            display: block;
        }
        .list-cond {
            font-size: 18px;
            span {
                cursor: pointer;
                padding-bottom: 4px;
            }
        }
        .cprt {
            font-size: 16px;
            font-weight: 500;
        }
    }
    .contacts {
        li {
            list-style-type: none;
            a {
                text-decoration: none;
                font-size: 18px;
                color: #000;
                font-family: "Config Condensed";
            }
        }
        .chat-box {
            cursor: pointer;
            display: flex;
            width: 150px;
            height: 100%;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            img {
                width: 40px;
                height: 40px;
            }
            span {
                font-family: "Config Condensed";
                font-weight: 500;
                font-size: 22px;
                margin-left: 20px;
            }
        }
    }
    .subscription {
        font-family: "Prompt";
        justify-content: space-between;
        .title {
            font-size: 16px;
            font-weight: 300;
        }
        input {
            font-family: "Prompt";
            display: block;
            border: none;
            border-bottom: 1px solid #000;
            font-weight: 300;
            font-size: 16px;
            &::-webkit-input-placeholder {
                color: #000;
            }
            &:focus::-webkit-input-placeholder {
                color: transparent;
            }
        }
        .button-sign_up {
            display: block;
            color: #000;
            text-decoration: none;
            font-family: "Config Condensed";
            font-weight: 500;
        }
        .additional {
            font-size: 14px;
            font-family: "Config Condensed";
            a {
                color: #000;
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .footer {
        .contacts {
            &::after {
                display: none;
            }
        }
        .socials {
            text-align: left;
            .title,
            .top-bar-opts-social {
                margin-right: unset;
            }
            .top-bar-opts-social {
                width: 100px !important;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .footer {
        .subscription,
        .contacts,
        .third-wrapper {
            &::after {
                display: block !important;
                width: 80% !important;
                height: 1px !important;
                top: unset !important;
                right: unset !important;
                left: 50% !important;
                bottom: 0 !important;
                transform: translateY(0) translateX(-50%) !important;
            }
        }
    }
}
</style>
