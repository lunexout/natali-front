<template>
    <div class="product-slider">
        <div class="product-slider-inner container">
            <div class="row">
                <div class="col-lg-2 col-md-2 col-xs-12">
                    <div class="slider-text">
                        <span v-if="title">{{ title }}</span>
                        <span v-else>PRODUCTS</span>
                        <router-link to="/shop">Shop Now</router-link>
                    </div>
                </div>
                <div class="col-lg-10 col-md-10 col-xs-12" v-if="products">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <!-- first 5 products -->
                        <swiper-slide
                            v-for="(prod, index) in products.slice(0, 10)"
                            :key="index"
                        >
                            <ShopProduct :branch_link="`shop`" :branch_id='prod.BranchIds[0]' :oneProduct="prod" />
                        </swiper-slide>
                        <div
                            class="swiper-button-prev"
                            slot="button-prev"
                        ></div>
                        <div
                            class="swiper-button-next"
                            slot="button-next"
                        ></div>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ShopProduct from "../small/shopProduct";

export default {
    name: "ProductSlider",
    props: ["products", "title", "branch_id", "branch_link"],
    components: {
        ShopProduct,
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 1,
                touchRatio: 0,

                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },

                breakpoints: {
                    100: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2.5,
                    },
                    1500: {
                        slidesPerView: 3,
                    },
                },
            },
        };
    },
    mounted(){
    }
};
</script>

<style lang="scss" scoped>
.product-slider {
    background-color: #fff;
    padding: 30px 0 30px;
    &-inner {
        .slider-text {
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            font-family: "Prompt";
            span {
                font-weight: 500;
                text-transform: uppercase;
                font-size: 30px;
            }
            a {
                margin-top: 10px;
                font-family: "Config Condensed";
                font-size: 24px;
                text-decoration: none;
                color: #000;
                position: relative;
                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #707070;
                    height: 1px;
                    width: 100%;
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .slider-text {
        margin-bottom: 20px;
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
    .swiper-button-prev {
        left: -5px !important;
    }
    .swiper-button-next {
        right: -5px !important;
    }
    .swiper-slide {
        padding-left: 10px !important;
        padding-right: 10px !important;
        box-sizing: border-box;
        .product-box {
            width: 240px !important;
        }
    }
}

// Swiper
.swiper-container {
    padding: 30px 30px 0px;
}

.swiper-button-prev {
    left: 20px;
}

.swiper-button-next {
    right: 20px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 30px;
    color: #000;
}

.swiper-slide {
    .product-box {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>