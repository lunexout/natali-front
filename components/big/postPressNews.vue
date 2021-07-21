<template>
    <div class="press-news" v-if="oneData">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-xs-12 nopadding">
                    <div class="img-wrapper">
                        <img
                            v-if="oneData.media"
                            :src="oneData.media[0]"
                            alt="imgOne"
                        />
                        <img v-else :src="oneData.images[0]" alt="imgOne" />
                    </div>
                </div>
                <div class="col-md-6 col-xs-12 nopadding">
                    <h1 class="title">{{ oneData.title }}</h1>
                    <div class="post-text parrent">
                        <p class="main-text" v-html="oneData.content"></p>
                    </div>
                </div>
                <div
                    class="col-md-6 col-xs-12 nopadding"
                    :class="[
                        {
                            'col-md-6': oneData.images.length > 1,
                            'col-xs-12': oneData.images.length > 1,
                            'col-md-12': oneData.images.length <= 1,
                        },
                    ]"
                >
                    <div class="post-text">
                        <p class="text-continue"></p>
                    </div>
                </div>
                <div
                    class="col-md-6 col-xs-12 nopadding"
                    v-if="oneData.images.length > 1"
                >
                    <div class="img-wrapper second">
                        <img :src="oneData.images[1]" alt="imgTwo" />
                        <!-- 2 image -->
                    </div>
                </div>
            </div>
            <div class="slider-section" v-if="oneData.images.length > 2">
                <ImageSlider :slides="oneData.images.slice(2)" />
            </div>
            <div class="additional-text">
                <!-- <p></p>  -->
            </div>
        </div>
    </div>
</template>

<script>
import ImageSlider from "../small/imagesSlider";

export default {
    name: "PostPressNews",
    props: ["oneData"],
    components: {
        ImageSlider,
    },
    data() {
        return {};
    },
    methods: {
        ren() {
            let vw = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            );

            if (vw > 1024) {
                let f = document.querySelector(".main-text");
                let s = document.querySelector(".text-continue");

                let content = this.oneData.content.split(" ");
                let setH = f.parentNode.clientHeight;

                let titleH = f.parentNode.parentNode.querySelector(".title")
                    .clientHeight;

                let tomin = titleH + 25;

                if (vw >= 1500) {
                    tomin = titleH + 75;
                }

                f.innerText = "";

                content.forEach((word) => {
                    if (f.clientHeight < setH - tomin) {
                        f.innerHTML += word + " ";
                    } else {
                        s.innerHTML += word + " ";
                    }
                });
            }
        },
    },
    mounted() {
        let self = this;
        setTimeout(function () {
            self.ren();
        }, 500);
        window.addEventListener("resize", this.ren);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.ren);
    },
};
</script>

<style lang="scss" scoped>
.press-news {
    padding: 40px 0 40px;
    .title {
        font-family: "Playfair Display";
        padding: 28px 0 12px 20px;
        font-weight: bold;
        font-style: italic;
        font-size: 32px;
        margin: 0;
    }
    .additional-text {
        margin-top: 25px;
        p {
            font-family: "Prompt";
            font-size: 16px;
            font-weight: 300;
        }
    }
    .post-text {
        &.parrent {
            height: calc(400px - 100px);
        }
        p {
            font-family: "Prompt";
            font-size: 16px;
            font-weight: 300;
        }
        .main-text {
            padding: 0 0 0 20px;
        }
    }
    .img-wrapper {
        width: 100%;
        height: 400px;
        padding: 0 0px 20px 0;
        &.second {
            padding: 0 0 0 20px;
        }
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}

@media screen and (min-width: 1500px) {
    .post-text {
        &.parrent {
            height: calc(500px - 100px) !important;
        }
    }
    .img-wrapper {
        height: 500px !important;
    }
}

@media screen and (max-width: 1024px) {
    .press-news {
        .post-text {
            &.parrent {
                height: unset !important;
            }
        }
        .title {
            padding-left: 0 !important;
        }
        .main-text {
            margin-bottom: 20px;
            padding: 0 !important;
        }
        .img-wrapper {
            padding: 0 !important;
            width: 100%;
            height: 400px;
        }
    }
}

@media screen and (max-width: 600px) {
    .img-wrapper {
        height: 315px !important;
    }
}

@media screen and (max-width: 425px) {
    .img-wrapper {
        height: 200px !important;
    }
}
</style>