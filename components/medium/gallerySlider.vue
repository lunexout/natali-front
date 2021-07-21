<template>
    <div class="gallery-slider">
        <div class="container">
            <h1 class="title">Gallery</h1>
        </div>
        <div class="gallery-slider-cont">
            <div class="main-image">
                <img :src="activeGallery.bigImg" alt="img" />
                <div class="info">
                    <p class="tag">{{ activeGallery.tag }}</p>
                    <p class="image-title">{{ activeGallery.title }}</p>
                    <div
                        v-if="activeGallery.video"
                        class="playnow"
                        @click="playVideo"
                    >
                        PLAY NOW
                    </div>
                </div>
                <iframe
                    :class="[
                        {
                            active: activeFrame,
                        },
                    ]"
                    v-if="activeGallery.videoLink"
                    :src="
                        urlFormat(activeGallery.videoLink) +
                        '?autoplay=' +
                        startVideo
                    "
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <div class="slider-cont">
                <swiper
                    class="swpr"
                    :class="[
                        {
                            down: activeFrame,
                        },
                    ]"
                    ref="mySwiper"
                    :options="swiperOptions"
                >
                    <swiper-slide
                        v-for="(box, index) of galleryList"
                        :key="index"
                    >
                        <div
                            @click="activSlide(index)"
                            class="gallery-box"
                            :style="`background: url(${box.img}) center center no-repeat;`"
                        >
                            <span class="small">{{ box.tag }}</span>
                            <p class="box-title">{{ box.title }}</p>
                            <div v-if="box.video" class="player">
                                <span class="dot"></span>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GallerySlider",
    // props: ["galleryList"],
    data() {
        return {
            galleryList: null,
            galleryListT: [
                {
                    title: "Nataligroup 1",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: true,
                    videoLink: "https://www.youtube.com/watch?v=Mysshd3GyDI",
                },
                {
                    title: "Nataligroup 2",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: false,
                    videoLink: "",
                },
                {
                    title: "Nataligroup 3",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: true,
                    videoLink: "https://youtu.be/DE5AOOvFr7w",
                },
                {
                    title: "Nataligroup 4",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: false,
                    videoLink: "",
                },
                {
                    title: "Nataligroup 5",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: true,
                    videoLink: "https://youtu.be/DE5AOOvFr7w",
                },
            ],
            activeFrame: false,
            activeGallery: "",
            startVideo: 0,
            activSlide: function (i) {
                this.activeGallery = this.galleryList[i];
                this.swiper.slideTo(i);
            },
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
                    1700: {
                        slidesPerView: 4,
                    },
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "progressbar",
                },
            },
            methods: {
                activat(that, i) {
                    that.activeGallery = that.galleryList[i];
                },
                onSwipe(varuable) {
                    varuable.methods.activat(
                        varuable,
                        varuable.swiper.activeIndex
                    );
                },
            },
        };
    },
    methods: {
        playVideo() {
            this.activeFrame = !this.activeFrame;
            this.startVideo = 1;
        },
        urlFormat(url) {
            if (url.includes("watch?v=")) {
                url = url.replace("watch?v=", "embed/");
            } else if (url.includes("youtu.be")) {
                url = url.replace("youtu.be", "youtube.com/embed");
            }
            return url;
        },
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    mounted() {
        this.galleryList = this.galleryListT;
        this.methods.activat(this, 0);
        this.swiper.slideTo(0);
        this.methods.onSwipe(this);
        this.swiper.on("slideChange", () => {
            this.activeFrame = false;
            this.startVideo = 0;
        });
    },
};
</script>

<style lang="scss" scoped>
.gallery-slider {
    .title {
        font-family: "Prompt";
        font-size: 32px;
        font-weight: 500;
        margin-top: 60px;
    }
    &-cont {
        .swpr {
            padding-bottom: 65px;
            bottom: 50px !important;
            transition: 0.5s;
            &.down {
                bottom: -10px !important;
            }
        }
        .main-image {
            height: 500px;
            font-family: "Prompt";
            position: relative;
            iframe {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: none;
                &.active {
                    display: block;
                    z-index: 9;
                }
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .info {
                color: #fff;
                margin-left: 40px;
                position: absolute;
                bottom: 100px;
                .tag {
                    font-size: 18px;
                }
                .image-title {
                    font-size: 32px;
                    font-weight: 600;
                }
                .playnow {
                    cursor: pointer;
                    width: 200px;
                    margin-top: 20px;
                    display: block;
                    font-family: "Config Condensed";
                    font-weight: 600;
                    border: 2px solid #fff;
                    text-align: center;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 10px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 20px;
                }
            }
        }
        .slider-cont {
            .gallery-box {
                margin: 0 auto;
                cursor: pointer;
                background-size: cover !important;
                width: 400px;
                height: 200px;
                font-family: "Prompt";
                color: #fff;
                padding: 20px;
                box-sizing: border-box;
                position: relative;
                .small {
                    font-weight: 400;
                }
                .box-title {
                    font-weight: 500;
                }
                .player {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    background: #e7e7e7;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .dot {
                        box-sizing: border-box;
                        margin-left: 4px;
                        width: 14px;
                        border-left: 14px solid #5e5e5e;
                        border-bottom: 10px solid transparent;
                        border-top: 10px solid transparent;
                    }
                }
            }
        }
    }
}

.swiper-slide {
    padding: 0 20px;
    box-sizing: border-box;
}

.swiper-pagination-progressbar {
    max-width: 700px;
    bottom: 10px;
    top: unset !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: 100%;
    height: 4px;
}

@media screen and (min-width: 1500px) {
    .main-image {
        height: 600px !important;
    }
}

@media screen and (max-width: 768px) {
    .main-image {
        height: 400px !important;
    }
}

@media screen and (max-width: 550px) {
    .main-image {
        height: 340px !important;
    }
}
</style>