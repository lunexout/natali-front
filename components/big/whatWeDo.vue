<template>
    <div class="what-we-do">
        <div class="box">
            <img
                :src="`${getDomain}${getWhatWeDo.image}`"
                alt="bigImg"
                class="bigImg"
            />
            <p class="title">What We Do</p>
            <swiper
                ref="brandsSwiper"
                :options="swiperOptions"
                v-if="getWhatWeDo"
            >
                <swiper-slide
                    v-for="(item, index) of getWhatWeDo.data.data"
                    :key="index"
                >
                    <div class="text-box">{{ item.title | truncate(125) }}</div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "WhatWeDo",
    data() {
        return {
            swiperOptions: {
                loop: true,

                slidesPerView: 3,

                centeredSlides: true,

                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    745: {
                        slidesPerView: 2,
                    },
                    1100: {
                        slidesPerView: 3,
                    },
                },
            },
        };
    },
    computed: {
        ...mapGetters("General", ["getWhatWeDo"]),
        ...mapGetters("Menus", ["getDomain"]),
    },
    methods: {
        ...mapActions("General", ["receiveWhatWeDo"]),
    },
    mounted() {
        this.receiveWhatWeDo();
    },
};
</script>

<style lang="scss" scoped>
.what-we-do {
    font-family: "Prompt";
    margin-bottom: 74px;
    .box {
        height: 700px;
        position: relative;
        .title {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            text-transform: uppercase;
            color: #000;
            top: 60px;
            font-size: 28px;
            white-space: nowrap;
        }
        .bigImg {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
        .swiper-container {
            top: -160px;
            padding-bottom: 60px;
            .text-box {
                margin: 0 auto;
                padding: 12px 32px;
                box-sizing: border-box;
                max-width: 360px;
                height: 160px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                background-color: #fff;
            }
        }
    }
}

.swiper-pagination {
    bottom: 5px !important;
}

@media screen and (max-width: 1500px) {
    .what-we-do {
        .box {
            height: 600px;
        }
    }
}
@media screen and (max-width: 1200px) {
    .what-we-do {
        .box {
            height: 500px;
        }
    }
}
@media screen and (max-width: 800px) {
    .what-we-do {
        .box {
            height: 400px;
        }
    }
}
@media screen and (max-width: 400px) {
    .what-we-do {
        .box {
            .text-box {
                max-width: 300px !important;
                height: 180px !important;
            }
            .title {
                font-size: 26px;
            }
        }
    }
    .swiper-pagination {
        bottom: 25px !important;
    }
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