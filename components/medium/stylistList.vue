<template>
    <div class="block-wrapper">
        <div class="row" :class="{ reverse: reverse == true }">
            <div class="col-sm-6 col-xs-12 nopadding">
                <div class="img-wrapper">
                    <img :src="stylist.img" alt="img" />
                </div>
            </div>
            <div class="col-sm-1 col-xs-1 nopadding"></div>
            <div class="col-sm-5 col-xs-12 nopadding">
                <div class="text-wrapper">
                    <div class="text-inner">
                        <h2 class="title">{{stylist.title}}</h2>
                        <span class="pos">Stylist</span>
                        <p class="text">
                            {{stylist.desc}}
                        </p>
                        <Quote
                            :text="stylist.quote"
                            :author="stylist.quoteAuth"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Quote from "../small/quote";

export default {
    name: "StylistList",
    props: {
        reverse: {
            type: Boolean
        },
        link: {
            default: "/"
        },
        stylist: {
            type: Object
        }
    },
    components: {
        Quote
    },
    data() {
        return {};
    },
    methods: {
        ...mapActions("Forms", ["receiveQuotes"])
    },
    computed: {
        ...mapGetters("Forms", ["getQuote"])
    },
    mounted() {
        this.receiveQuotes(0);
    }
};
</script>

<style lang="scss" scoped>
.block-wrapper {
    width: 100%;
    display: block;
    margin: 40px 0;
    text-decoration: none;
    color: #000;
    .img-wrapper {
        display: flex;
        justify-content: flex-end;
        img {
            max-height: 500px;
            object-fit: cover;
            width: 100%;
            max-width: 1120px;
        }
    }
    .text-wrapper {
        padding: 10px 26px 30px 24px;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
        .text-inner {
            margin: 0 auto;
            .title {
                font-family: "Prompt";
                font-weight: 400;
                margin: 8px auto 4px;
                display: block;
                font-size: 30px;
                text-align: center;
            }
            .pos {
                margin-bottom: 4px;
                display: block;
                text-align: center;
                font-family: "Prompt";
                font-weight: 300;
            }
            .text {
                font-family: "Prompt";
                font-weight: 300;
                max-width: 500px;
                font-size: 16px;
                text-align: center;
            }
            .quote-box {
                border-bottom: 2px solid #e0b763;
            }
        }
    }
}

@media screen and (min-width: 1900px) {
    .block-wrapper {
        .img-wrapper {
            img {
                max-height: 600px !important;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .block-wrapper {
        .img-wrapper {
            img {
                max-height: 440px !important;
            }
        }
        .text-wrapper,
        .reverse .text-wrapper {
            padding-bottom: 45px;
        }
        .reverse {
            .text-wrapper {
                padding-right: 20px;
                padding-left: 40px;
            }
            .text-inner {
                .title {
                    text-align: left;
                    margin-left: unset;
                }
                .text {
                    text-align: left;
                }
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .block-wrapper {
        .img-wrapper {
            img {
                max-height: 260px !important;
            }
        }
        .text-wrapper {
            padding: 10px 20px 30px 20px !important;
            .title {
                font-size: 26px !important;
            }
            .text {
                font-size: 14px !important;
            }
        }
    }
}
</style>
