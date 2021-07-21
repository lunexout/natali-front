<template>
    <div class="our-story">
        <div class="container">
            <h1 class="title">Our story</h1>
            <div class="cont-story">
                <div class="img-wrapper">
                    <img src="/assets/img/rect.png" alt="img" />
                </div>
                <div class="story-info">
                    <p class="head">
                        Nam gravida in nunc eu blandit. Etiam ornare sodales
                        sem, vitae elementum neque imperdiet ac. In semper, quam
                        non egestas eleifend,
                    </p>
                    <!-- truncate(130) -->
                    <p class="desc">
                        Nam gravida in nunc eu blandit. Etiam ornare sodales
                        sem, vitae elementum neque imperdiet ac. In semper, quam
                        non egestas eleifend, neque arcu vehicula ipsum, mattis
                        varius mauris nisl quis magna. Proin accumsan elit ut
                        ipsum venenatis lacinia. Praesent libero tellus,
                        lobortis malesuada aliquet sit amet,
                    </p>
                    <!-- truncate(300) -->
                    <div class="bottom">
                        <p class="tag">eu blanditeu eu</p>
                        <p class="tag2">eu blandit</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="stats">
            <div class="stats-cont">
                <div
                    class="stat"
                    v-for="(item, index) in getStats"
                    :key="index"
                >
                    <span class="num">{{ item.value }}</span>
                    <span class="text">{{ item.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "OurStory",
    data() {
        return {
            //
        };
    },
    methods: {
        ...mapActions("Forms", ["receiveStats"]),
    },
    computed: {
        ...mapGetters("Forms", ["getStats"]),
    },
    mounted() {
        this.receiveStats();
    },
};
</script>

<style lang="scss" scoped>
.our-story {
    padding-bottom: 200px;
    .title {
        font-size: 32px;
        font-weight: 500;
        font-family: "Prompt";
        padding-left: 20px;
        margin: 60px 0 20px;
    }
    .stats {
        margin-top: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        &-cont {
            width: 900px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            .stat {
                margin-bottom: 40px;
                border-bottom: 1px solid #707070;
                display: flex;
                flex-direction: column;
                width: 250px;
                height: 140px;
                text-align: center;
                .num {
                    font-family: "Playfair Display";
                    font-weight: 900;
                    font-size: 68px;
                }
                .text {
                    font-family: "Prompt";
                    font-weight: 500;
                    font-size: 18px;
                    white-space: nowrap;
                }
            }
        }
    }
    .cont-story {
        background-color: #f9f6f6;
        box-sizing: border-box;
        display: flex;
        height: 600px;
        padding: 0 20px;
        margin: 60px 0px 60px 60px;
        .img-wrapper {
            width: 50%;
            height: 100%;
            img {
                position: relative;
                left: -60px;
                bottom: 40px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .story-info {
            width: 50%;
            display: flex;
            flex-direction: column;
            padding: 40px 0;
            .head {
                font-family: "Playfair Display";
                font-weight: bold;
                font-style: italic;
                font-size: 30px;
                margin-bottom: 60px;
            }
            .desc {
                font-family: "Prompt";
                font-size: 23px;
                font-weight: 300;
                margin-bottom: 60px;
            }
            .bottom {
                p {
                    font-family: "Prompt";
                    &.tag {
                        font-weight: 300;
                    }
                    &.tag2 {
                        font-weight: 500;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .our-story {
        .story-info {
            .head {
                font-size: 25px !important;
                margin-bottom: 40px !important;
            }
            .desc {
                font-size: 21px !important;
                margin-bottom: 40px !important;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .our-story {
        .title {
            padding-left: 0px !important;
        }
        .cont-story {
            height: unset !important;
            flex-wrap: wrap;
            margin: 60px 0px 60px 0 !important;
            .img-wrapper {
                width: 60% !important;
                height: 500px !important;
                margin: 0 auto !important;
                img {
                    left: 0px !important;
                    bottom: 40px !important;
                }
            }
            .story-info {
                width: 100% !important;
                padding: 40px 20px !important;
            }
        }
    }
}

@media screen and (max-width: 850px) {
    .our-story {
        .stats {
            .stat {
                .text {
                    font-size: 16px !important;
                }
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .our-story {
        .cont-story {
            .img-wrapper {
                width: 80% !important;
                height: 500px !important;
            }
        }
    }
}

@media screen and (max-width: 550px) {
    .our-story {
        .cont-story {
            .img-wrapper {
                width: 80% !important;
                height: 440px !important;
            }
            .story-info {
                .head {
                    font-size: 24px !important;
                    margin-bottom: 30px !important;
                }
                .desc {
                    font-size: 20px !important;
                    margin-bottom: 30px !important;
                }
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .our-story {
        .cont-story {
            .img-wrapper {
                width: 100% !important;
                height: 360px !important;
            }
            .story-info {
                padding: 0 0 40px !important;
                .head {
                    font-size: 20px !important;
                    margin-bottom: 30px !important;
                }
                .desc {
                    font-size: 16px !important;
                    margin-bottom: 30px !important;
                }
            }
        }
    }
}

@media screen and (min-width: 1200px) {
    .our-story {
        .cont-story {
            height: 700px !important;
        }
    }
}

@media screen and (min-width: 1920px) {
    .our-story {
        .cont-story {
            height: 800px !important;
        }
    }
}
</style>