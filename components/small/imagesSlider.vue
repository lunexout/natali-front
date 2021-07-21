<template>
    <div class="img-slider">
        <swiper
            ref="mySwiper"
            :options="swiperOptions"
            style="padding-bottom: 65px"
        >
            <swiper-slide v-for="(slide, index) of slides" :key="index">
                <div class="img-box">
                    <img :src="slide" alt="slide" />
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "ImageSlider",
    props: ["slides", "dots"],
    data() {
        return {
            swiperOptions: {
                slidesPerView: 3,
                freeMode: true,
                centeredSlides: true,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    825: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 4,
                    },
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: this.dots || "progressbar",
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.img-slider {
    padding: 40px 0 0 0;
    .img-box {
        margin: 0 auto;
        cursor: grabbing;
        height: 360px;
        width: 300px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
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

.swiper-pagination-progressbar {
    max-width: 700px;
    bottom: 10px;
    top: unset !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
}
</style>