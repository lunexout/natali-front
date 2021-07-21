<template>
    <div class="testimonial">
        <h1 class="title">TESTIMONIALS</h1>
        <div class="container">
            <swiper
                ref="mySwiper"
                :options="swiperOptions"
                style="padding: 0 0 120px"
                v-if="getTestimonials"
            >
                <swiper-slide
                    v-for="(testimonial, index) of getTestimonials"
                    :key="index"
                >
                    <div class="testimonial-box">
                        <div class="author">
                            <div class="img-wrapper">
                                <img
                                    :src="`${getDomain}${testimonial.image_url}`"
                                    alt="img"
                                />
                            </div>
                            <span class="name">{{ testimonial.title }}</span>
                            <span class="und-text">{{
                                testimonial.subtitle
                            }}</span>
                        </div>
                        <Quote
                            :text="testimonial.description | truncate(200)"
                            :author="false"
                        />
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev">
                    <span class="ball"></span>
                </div>
                <div class="swiper-button-next" slot="button-next">
                    <span class="ball"></span>
                </div>
            </swiper>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Quote from "../small/quote";

export default {
    name: "TestimonialsSlider",
    props: ["branchId"],
    components: {
        Quote,
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 1,

                centeredSlides: true,

                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        };
    },
    computed: {
        ...mapGetters("General", ["getTestimonials"]),
        ...mapGetters("Menus", ["getDomain"]),
    },
    methods: {
        ...mapActions("General", ["receiveAllTestimonials"]),
    },
    mounted() {
        this.receiveAllTestimonials(this.branchId || 0);
    },
};
</script>

<style lang="scss" scoped>
.testimonial {
    font-family: "Prompt";
    text-align: center;
    .title {
        font-weight: 500;
        font-size: 30px;
        margin: 40px 0 20px;
    }
    &-box {
        padding: 20px 0 40px;
        max-width: 700px;
        margin: 0 auto;
        .author {
            .img-wrapper {
                margin: 20px auto;
                width: 300px;
                height: 300px;
                border-radius: 50%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .name {
                font-weight: 600;
                display: block;
                font-size: 26px;
                color: #3f3f3f;
            }
            .und-text {
                font-weight: 500;
                color: #5d5c5c;
                font-size: 20px;
            }
        }
    }
}

@media screen and (max-width: 700px) {
    .testimonial {
        &-box {
            .author {
                .img-wrapper {
                    width: 250px !important;
                    height: 250px !important;
                }
            }
            .text {
                .quote {
                    padding: 0 20px !important;
                    font-size: 22px !important;
                    &::before {
                        left: -14px !important;
                    }
                    &::after {
                        right: -14px !important;
                    }
                }
            }
        }
    }
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 36px;
    font-weight: bold;
    color: #000;
}

.swiper-button-next:before,
.swiper-button-prev:before {
    content: "";
    height: 4px;
    width: 32px;
    border-radius: 2px;
    background-color: #000;
    position: absolute;
    top: calc(50% - 2px);
}
.swiper-button-prev,
.swiper-button-next {
    top: 400px !important;
    span.ball {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: block;
        position: absolute;
        background: #f3d678;
        z-index: -1;
    }
}
.swiper-button-next {
    span.ball {
        right: -14px;
    }
}
.swiper-button-prev {
    span.ball {
        left: -14px;
    }
}
.swiper-button-next {
    right: 100px !important;
    &::before {
        right: 7px;
    }
}
.swiper-button-prev {
    left: 100px !important;
    &::before {
        left: 7px;
    }
}

@media screen and (max-width: 1024px) {
    .swiper-button-next {
        right: 20px !important;
    }
    .swiper-button-prev {
        left: 20px !important;
    }
}
</style>