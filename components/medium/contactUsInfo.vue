<template>
    <div class="contacts-and-live-chat">
        <div class="row">
            <div class="col-md-7 col-xs-12 nopadding" v-if="getContactInfo">
                <div class="info-box">
                    <div class="white-box">
                        <div class="address">
                            <h3>Address</h3>
                            <span class="add">{{
                                getContactInfo[0].address1
                            }}</span>
                            <span class="add">{{
                                getContactInfo[0].address2
                            }}</span>
                        </div>
                        <div class="contacts">
                            <span class="cons"
                                >TEL : {{ getContactInfo[0].tel }}</span
                            >
                            <span class="cons"
                                >Phone : {{ getContactInfo[0].phone }}</span
                            >
                            <span class="cons"
                                >E-mail : {{ getContactInfo[0].email }}</span
                            >
                        </div>
                        <div class="socials">
                            <SocialIcons :data="getContactInfo[0]" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5 col-xs-12 nopadding">
                <div class="live-chat-wrapper">
                    <div class="chat-box">
                        <img src="/assets/icons/livechat.svg" alt="" />
                        <span>LIVE CHAT</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import SocialIcons from "../small/socialicons";

export default {
    name: "ContactUsInfo",
    components: {
        SocialIcons,
    },
    computed: {
        ...mapGetters("Forms", ["getContactInfo"]),
    },
    methods: {
        ...mapActions("Forms", ["receiveContactInfo"]),
    },
    mounted() {
        this.receiveContactInfo(0);
    },
};
</script>

<style lang="scss" scoped>
.contacts-and-live-chat {
    margin-top: 110px;
    height: 560px;
    width: 100%;
    background-image: url("/assets/img/contactsandlivechat.png");
    background-size: cover;
    .info-box {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding-left: 30px;
        .white-box {
            top: -100px;
            position: relative;
            font-family: "Config Condensed";
            width: 80%;
            box-sizing: border-box;
            height: 500px;
            background: #f4fce2;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 20px 60px;
            span {
                display: block;
                margin-bottom: 14px;
                font-size: 18px;
            }
            .address {
                padding: 0 10px;
                h3 {
                    font-family: "Prompt";
                    font-weight: 500;
                    margin: 0 0 18px;
                }
            }
            .contacts {
                padding: 0 10px;
            }
            .socials {
                padding: 20px 0 0;
                border-top: 1px solid #bcbcbc;
                display: flex;
                align-items: center;
                .top-bar-opts-social {
                    width: 180px;
                }
            }
        }
    }
    .live-chat-wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        top: -40px;
        .chat-box {
            cursor: pointer;
            width: 200px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            box-sizing: border-box;
            z-index: 2;
            &::before {
                content: "";
                z-index: -1;
                box-sizing: border-box;
                position: absolute;
                left: 0;
                right: 0;
                top: calc(50% - 100px);
                height: 100%;
                width: 100%;
                border: 4px solid #fff;
                background-color: rgba($color: #fff, $alpha: 0.4);
            }
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
}

@media screen and (max-width: 1600px) {
    .contacts-and-live-chat {
        height: 460px !important;
        .info-box {
            .white-box {
                height: 430px !important;
            }
        }
    }
}

@media screen and (max-width: 1023px) {
    .contacts-and-live-chat {
        height: unset !important;
        .info-box {
            padding: 0 20px !important;
            .white-box {
                height: 370px !important;
            }
        }
        .live-chat-wrapper {
            justify-content: center;
            padding: 30px 0;
            box-sizing: border-box;
        }
    }
}

@media screen and (max-width: 600px) {
    .contacts-and-live-chat {
        .info-box {
            .white-box {
                width: 100%;
                padding: 20px 30px;
                span {
                    font-size: 16px !important;
                }
            }
        }
    }
}
</style>