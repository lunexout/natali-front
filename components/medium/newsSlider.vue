<template>
    <div class="news-slider">
        <div class="news-slider-inner container">
            <div class="row">
                <div class="col-lg-2 col-md-2 col-xs-12">
                    <div class="slider-text">
                        <span>Discover</span>
                        <p>Our latest news</p>
                    </div>
                </div>
                <div class="col-lg-10 col-md-10 col-xs-12">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide
                            v-for="(news, index) of news"
                            :key="index"
                        >
                            <NewsBox :news="news" :branch="branch" />
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewsBox from "../small/newsBox";

export default {
    name: "NewsSlider",
    components: {
        NewsBox,
    },
    props: ["news", "branch"],
    data() {
        return {
            newsList: [
                {
                    label: "Discover",
                    text:
                        "ornare sodales sem, vitae elementum ornare sodales sem, vitae elementum",
                    img: "/assets/img/onenews.png",
                },
                {
                    label: "Discover",
                    text:
                        "ornare sodales sem, vitae elementum ornare sodales sem, vitae elementum",
                    img: "/assets/img/onenews.png",
                },
                {
                    label: "Discover",
                    text:
                        "ornare sodales sem, vitae elementum ornare sodales sem, vitae elementum",
                    img: "/assets/img/onenews.png",
                },
            ],
            swiperOptions: {
                slidesPerView: 1,

                breakpoints: {
                    100: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1500: {
                        slidesPerView: 3,
                    },
                },

                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.news-slider {
    padding: 20px 0;
    &-inner {
        .slider-text {
            font-family: "Prompt";
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 20px 0;
            box-sizing: border-box;
            span {
                font-size: 18px;
            }
            p {
                font-size: 28px;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .news-slider {
        &-inner {
            .slider-text {
                align-items: center;
                padding: 20px 0;
            }
        }
    }
    .swiper-pagination {
        text-align: center !important;
        padding: 0 !important;
    }
}

@media screen and (max-width: 400px) {
    .swiper-container {
        padding: 0 10px 40px !important;
    }
}

// Swiper
.swiper-container {
    padding: 0 30px 40px;
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

.swiper-pagination {
    padding: 0 60px;
    bottom: 0px;
    text-align: right;
    box-sizing: border-box;
}

.swiper-slide {
    .news-box {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>