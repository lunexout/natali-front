<template>
    <div class="press-slider" v-if="newsList">
        <p class="title">Press</p>
        <div class="slider-wrapper">
            <swiper
                ref="pressSlider"
                :options="swiperOptions"
                style="padding: 0 0 120px"
            >
                <swiper-slide v-for="(news, index) of newsList" :key="index">
                    <router-link
                        :to="'/' + branch + '/press/' + news.id"
                        class="press-box"
                    >
                        <img :src="news.images[0]" alt="img" />
                    </router-link>
                </swiper-slide>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div> -->
                <div
                    class="swiper-pagination"
                    slot="pagination"
                    style="bottom: 40px"
                ></div>
            </swiper>
            <div class="info-box">
                <p class="press-title">
                    {{ activePress.title | truncate(25) }}
                </p>
                <p class="press-desc">
                    {{ activePress.sub_title | truncate(90) }}
                </p>
                <div
                    class="swiper-button-prev"
                    slot="button-prev"
                    style="top: 150px; left: -50px"
                ></div>
                <div
                    class="swiper-button-next"
                    slot="button-next"
                    style="top: 150px; right: -50px"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PressSlider",
    props: ["newsList", "branch"],
    data() {
        return {
            activePress: {
                title: "",
                sub_title: "",
            },
            swiperOptions: {
                loop: true,

                autoplay: {
                    delay: 500,
                },

                slidesPerView: 3,

                centeredSlides: true,

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    670: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 3,
                    },
                },

                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },

                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        };
    },
    methods: {
        activat(that, i) {
            let lenz = that.newsList.length;
            that.activePress =
                i < lenz ? that.newsList[i] : that.newsList[i % lenz];
        },
        onSwipe(varuable) {
            varuable.activat(varuable, varuable.swiper.activeIndex);
        },
    },
    computed: {
        swiper() {
            return this.$refs.pressSlider.$swiper;
        },
    },
    mounted() {
        setTimeout(() => {
            this.swiper.slideTo(0);
            this.onSwipe(this);
            this.swiper.slideTo(2, 0, false);
            this.swiper.on("slideChange", () => {
                this.onSwipe(this);
            });
            this.activat(this, 0);
        }, 1000);
    },
};
</script>

<style lang="scss" scoped>
.press-slider {
    padding-top: 60px;
    padding-bottom: 40px;
    .title {
        font-family: "Prompt";
        font-weight: 400;
        text-align: center;
        text-transform: uppercase;
        font-size: 30px;
        margin: 0 0 20px;
    }
    .slider-wrapper {
        position: relative;
        .press-box {
            display: block;
            margin: 0 auto;
            width: 420px;
            height: 320px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .info-box {
            position: absolute;
            bottom: 80px;
            z-index: 9;
            background-color: #fff;
            width: 320px;
            left: 50%;
            transform: translateX(-50%);
            height: 120px;
            text-align: center;
            .press-title {
                font-family: "Prompt";
                font-size: 18px;
                margin-top: 12px;
                margin-bottom: 10px;
            }
            .press-desc {
                font-family: "Playfair Display";
                font-style: italic;
                font-size: 20px;
            }
        }
    }
}

@media screen and (max-width: 1300px) {
    .press-box {
        width: 330px !important;
        height: 260px !important;
    }
    .info-box {
        width: 280px !important;
    }
}

@media screen and (max-width: 400px) {
    .press-box {
        width: 300px !important;
        height: 240px !important;
    }
    .info-box {
        .swiper-button-next {
            right: -20px !important;
        }
        .swiper-button-prev {
            left: -20px !important;
        }
    }
    .swiper-button-next:before,
    .swiper-button-prev:before {
        top: calc(50% - 0px) !important;
    }
}

//

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 19px;
    font-weight: bold;
    color: #000;
}

.swiper-button-next:before,
.swiper-button-prev:before {
    content: "";
    height: 2px;
    width: 28px;
    background-color: #000;
    position: absolute;
    top: calc(50% - 1px);
}

.swiper-button-prev:before {
    transform: translateX(10px);
}

.swiper-button-next:before {
    transform: translateX(-10px);
}

.swiper-pagination ::v-deep .swiper-pagination-bullet {
    height: 12px;
    width: 12px;
    border-radius: 0;
    margin: 0 6px;
}

.swiper-pagination ::v-deep .swiper-pagination-bullet-active {
    background-color: #dfaf4c;
}
</style>