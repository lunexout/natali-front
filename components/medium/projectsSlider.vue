<template>
    <div class="project-slider">
        <p class="title">PROJECTS</p>
        <div class="slider-wrapper">
            <swiper
                ref="mySwiper"
                :options="swiperOptions"
                style="padding: 0 0 300px"
            >
                <swiper-slide
                    v-for="(news, index) of projectsList"
                    :key="index"
                >
                    <div class="project-box">
                        <img :src="news.img" alt="img" />
                    </div>
                </swiper-slide>
                <div
                    class="swiper-pagination"
                    slot="pagination"
                    style="bottom: 60px"
                ></div>
            </swiper>
            <div class="info-box">
                <div class="top">
                    <div class="left">
                        <p class="project-title">
                            {{ activeProject.title | truncate(25) }}
                        </p>
                        <p class="project-capt">
                            {{ activeProject.capt | truncate(25) }}
                        </p>
                    </div>
                    <div class="right">
                        <p class="project-duration">
                            {{ activeProject.duration }}
                        </p>
                    </div>
                </div>
                <p class="project-desc">
                    {{ activeProject.desc | truncate(300) }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectsSlider",
    props: ["projectsList"],
    data() {
        return {
            activeProject: "",
            swiperOptions: {
                loop: true,

                autoplay: {
                    delay: 500,
                },

                slidesPerView: 3,

                centeredSlides: true,

                onSlideChangeEnd: function () {
                    this.onSwipe();
                },

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
            },
            methods: {
                activat(that, i) {
                    let lenz = that.projectsList.length;
                    that.activeProject =
                        i < lenz
                            ? that.projectsList[i]
                            : that.projectsList[i % lenz];
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
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    mounted() {
        this.methods.activat(this, 0);
        this.swiper.slideTo(0);
        this.methods.onSwipe(this);
        setTimeout(() => {
            this.swiper.slideTo(2, 0, false);
        }, 1000);
        this.swiper.on("slideChange", () => {
            this.methods.onSwipe(this);
        });
    },
};
</script>

<style lang="scss" scoped>
.project-slider {
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
        .project-box {
            cursor: pointer;
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
            top: 200px;
            z-index: 9;
            background-color: #fff;
            max-width: 800px;
            left: 50%;
            transform: translateX(-50%);
            min-height: 120px;
            padding: 20px 50px;
            .top {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .project-duration {
                    margin-top: 12px;
                    font-family: "Config Condensed";
                    font-weight: 500;
                    font-size: 20px;
                }
            }
            .project-title {
                font-family: "Config Condensed";
                font-weight: 600;
                font-size: 18px;
                margin-top: 12px;
                margin-bottom: 0px;
            }
            .project-capt {
                font-family: "Config Condensed";
                color: #343a40;
                margin-bottom: 10px;
            }
            .project-desc {
                font-family: "Prompt";
                font-size: 16px;
                color: #6c757d;
            }
        }
    }
}

@media screen and (max-width: 1300px) {
    .project-box {
        width: 330px !important;
        height: 260px !important;
    }
    .info-box {
        max-width: 600px !important;
        box-sizing: content-box;
        padding: 10px 20px;
    }
}

@media screen and (max-width: 1000px) {
    .info-box {
        width: 100% !important;
        box-sizing: border-box;
    }
}

@media screen and (max-width: 600px) {
    .swiper-pagination {
        bottom: -2px !important;
    }
    .info-box {
        .top {
            flex-direction: column !important;
            justify-content: flex-start !important;
            .project-duration {
                margin-top: 12px;
                margin-bottom: 12px;
            }
        }
    }
}

@media screen and (max-width: 400px) {
    .project-box {
        width: 300px !important;
        height: 240px !important;
    }
    .swiper-container {
        padding: 0px 0px 350px !important;
    }
}

//

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