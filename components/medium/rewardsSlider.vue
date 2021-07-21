<template>
    <div class="rewards-slider">
        <div class="container">
            <h1 class="title">Rewards</h1>
        </div>
        <div class="rewards-slider-cont">
            <swiper
                ref="mySwiper"
                :options="swiperOptions"
                style="padding-bottom: 65px"
            >
                <swiper-slide
                    v-for="(reward, index) of getRewards"
                    :key="index"
                >
                    <div class="reward">
                        <div
                            class="row between-xs"
                            :class="{
                                reverse:
                                    index + 1 >
                                    Math.ceil(getRewards.length / 2),
                            }"
                        >
                            <div class="col-md-6 col-xs-12 nopadding">
                                <div class="img-wrapper">
                                    <img
                                        :src="`${getDomain}${reward.media_url}`"
                                        alt="img"
                                    />
                                </div>
                            </div>
                            <div class="col-md-5 col-xs-12 nopadding">
                                <div class="info-wrapper">
                                    <p class="reward-title">
                                        {{ reward.title }}
                                    </p>
                                    <p class="desc">
                                        {{ reward.body | truncate(225) }}
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-1 col-xs-12"></div>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "RewardsSlider",
    props: ["branchId"],
    data() {
        return {
            swiperOptions: {
                slidesPerView: 1,
                slidesPerColumn: 2,
                slidesPerColumnFill: "row",
                breakpoints: {
                    0: {
                        slidesPerColumn: 1,
                    },
                    1024: {
                        slidesPerColumn: 2,
                    },
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "progressbar",
                },
            },
        };
    },
    methods: {
        ...mapActions("General", ["receiveRewards"]),
    },
    computed: {
        ...mapGetters("General", ["getRewards"]),
        ...mapGetters("Menus", ["getDomain"]),
    },
    mounted() {
        this.receiveRewards(this.branchId);
    },
};
</script>

<style lang="scss" scoped>
.rewards-slider {
    padding-bottom: 60px;
    .title {
        font-family: "Prompt";
        font-size: 32px;
        font-weight: 500;
        margin-top: 60px;
    }
    .reward {
        .img-wrapper {
            height: 300px;
            width: 100%;
            box-sizing: border-box;
            padding-right: 20px;
            padding-left: 0px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .info-wrapper {
            padding-left: 20px;
            padding-right: 0px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            font-family: "Prompt";
            .reward-title {
                margin-bottom: 20px;
                font-size: 30px;
            }
            .desc {
                font-weight: 300;
                font-size: 22px;
            }
        }
        .reverse {
            .img-wrapper {
                padding-right: 0px;
                padding-left: 20px;
            }
            .info-wrapper {
                padding-right: 20px;
                padding-left: 0px;
            }
        }
    }
}

.swiper-pagination-progressbar {
    max-width: 700px;
    bottom: 10px;
    top: unset !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
}

@media screen and (max-width: 1500px) {
    .reward {
        .img-wrapper {
            height: 240px !important;
        }
        .info-wrapper {
            .reward-title {
                margin-bottom: 10px !important;
                font-size: 28px !important;
            }
            .desc {
                font-size: 18px !important;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .reward {
        .img-wrapper {
            height: 300px;
            padding: 0px !important;
        }
        .info-wrapper {
            padding: 20px !important;
            box-sizing: border-box;
        }
    }
}
</style>