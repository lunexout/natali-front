<template>
    <div class="brands-wrapper" v-if="brandList">
        <div class="container">
            <h1 class="title">{{ title }}</h1>
        </div>
        <div
            class="brands-slider"
            :style="`background: url(${getDomain}${activeBrand.image}) no-repeat;`"
        >
            <div class="upper-block container">
                <div class="text">
                    <h4>{{ activeBrand.title }}</h4>
                    <p>{{ activeBrand.description | truncate(170) }}</p>
                </div>
            </div>
            <div class="bottom-block">
                <swiper
                    ref="brandsSwiper"
                    :options="swiperOptions"
                    v-if="brandList"
                >
                    <swiper-slide
                        v-for="(brand, index) of brandList"
                        :key="index"
                    >
                        <a
                            :href="brand.button_link"
                            target="_blank"
                            class="brand"
                            v-if="brand.logo_url"
                        >
                            <img
                                :src="`${getDomain}${brand.logo_url}`"
                                alt="img"
                            />
                        </a>
                    </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "BrandsSlider",
    props: ["title", "brandList"],
    data() {
        return {
            activeBrand: "",
            swiperOptions: {
                loop: true,

                slidesPerView: 5,

                centeredSlides: true,

                touchRatio: 0,

                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    500: {
                        slidesPerView: 3,
                    },
                    900: {
                        slidesPerView: 5,
                    },
                },
            },
        };
    },
    methods: {
        activat(that, i) {
            let lenz = that.brandList.length;
            that.activeBrand =
                i < lenz ? that.brandList[i] : that.brandList[i % lenz];
        },
        onSwipe(varuable) {
            varuable.activat(varuable, varuable.swiper.activeIndex);
        },
    },
    computed: {
        ...mapGetters("Menus", ["getDomain"]),
        swiper() {
            return this.$refs.brandsSwiper.$swiper;
        },
    },
    mounted() {
        setTimeout(() => {
            this.activat(this, 0);
            setTimeout(() => {
                this.swiper.slideTo(1);
            }, 900);
            this.onSwipe(this);
            setTimeout(() => {
                this.swiper.slideTo(2);
            }, 1000);
            this.swiper.on("slideChange", () => {
                this.onSwipe(this);
            });
        }, 1000);
    },
};
</script>

<style lang="scss" scoped>
.brands-wrapper {
    .title {
        font-family: "Prompt";
        font-weight: 500;
        text-transform: uppercase;
        margin: 40px 0 20px;
        font-size: 30px;
    }
}

.brands-slider {
    height: 600px;
    background-size: cover !important;
    background-position: center 50% !important;
    position: relative;
    overflow: hidden;
    .upper-block {
        display: flex;
        align-items: flex-end;
        height: calc(100% - 190px);
        .text {
            font-family: "Prompt";
            margin: 20px 0px 40px;
            color: #fff;
            h4 {
                font-size: 22px;
                margin: 0 0 16px;
                font-weight: bold;
            }
            p {
                height: 110px;
                font-size: 18px;
                max-width: 400px;
                font-weight: 600;
            }
        }
    }
    .bottom-block {
        height: 190px;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background: inherit;
        position: relative;
        overflow: hidden;
        &:before {
            background: inherit;
            content: "";
            width: calc(100% + 50px);
            height: calc(100% + 50px);
            position: absolute;
            // background-position: center calc(50% - 205px);
            background-position: center calc(50%);
            filter: blur(4px);
            background-size: calc(100% - 50px);
            top: -25px;
            right: -25px;
            bottom: -25px;
            left: -25px;
            box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.15);
        }
        .swiper-slide-active .brand {
            height: 140px;
            width: 140px;
            margin: 5px auto;
            img {
                width: 100px;
                height: 100px;
            }
        }
        .brand {
            transition: 0.3s;
            margin: 15px auto;
            height: 120px;
            width: 120px;
            background-color: #fff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                transition: 0.3s;
                width: 74px;
                height: 74px;
                object-fit: contain;
            }
        }
    }
}

@media screen and (max-width: 900px) {
    .brands-slider {
        height: 520px;
    }
    .swiper-container {
        max-width: 450px;
    }
    .swiper-slide-active .brand {
        height: 120px !important;
        width: 120px !important;
        margin: 15px auto !important;
        img {
            width: 74px !important;
            height: 74px !important;
        }
    }
    .brand {
        height: 100px !important;
        width: 100px !important;
        margin: 25px auto !important;
        img {
            width: 66px !important;
            height: 66px !important;
        }
    }
    .swiper-button-prev {
        left: 12px !important;
    }

    .swiper-button-next {
        right: 12px !important;
    }
}

@media screen and (max-width: 500px) {
    .brands-slider {
        height: 500px;
    }
}

.swiper-container {
    max-width: 750px;
    padding: 0px 14px;
}

.swiper-button-prev {
    left: -1px;
}

.swiper-button-next {
    right: -1px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 30px;
    color: #fff;
}

.swiper-slide {
    width: 150px;
    height: 150px;
}
</style>