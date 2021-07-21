<template>
    <div class="product-offer-slider">
        <div class="product-offer-slider-inner container">
            <div class="row">
                <div class="col-lg-2 col-md-2 col-xs-12">
                    <div class="slider-text">
                        <span>Product<br>Offers</span>
                    </div>
                </div>
                <div class="col-lg-10 col-md-10 col-xs-12">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide v-for="(offer, index) in OFFERS" :key="index">
                            <ProductOffer :oneOffer="offer" />
                        </swiper-slide>
                        <div class="swiper-pagination top" slot="pagination"></div>
                    </swiper>
                </div>
                <div class="container" style="cursor: pointer">
                    <a class="apply" @click="addOffersToCart">APPLY</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductOffer from '../small/productOffer';
    import axios from 'axios'
import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'ProductOfferSlider',
        components: {
            ProductOffer
        },
        data() {
            return {
                swiperOptions: {
                    // loop: true,

                    autoplay: {
                        delay: 500,
                    },

                    slidesPerView: 1,
                    
                    breakpoints: {
                        100: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1700: {
                            slidesPerView: 3.2,
                        },
                    },
                    
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },
                OFFERS: []
            }
        },
        computed:{
            ...mapGetters("Cart",["getOffersArray"])
        },
        methods:{
            ...mapActions("Cart", ["addOffersToCart"])
        },
        mounted() {
            axios.get(`https://natali.onesoul.io/api/user/offers`).then(res =>{
                this.OFFERS = res.data.data;
            })
        }
    }
</script>

<style lang="scss" scoped>
.product-offer-slider {
    background-color: #fff;
    padding: 30px 0 30px;
    margin: 0 auto;
    &-inner {
        .slider-text {
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            font-family: 'Prompt';
            span {
                font-weight: 500;
                text-transform: uppercase;
                font-size: 30px;
            }
            a {
                margin-top: 10px;
                font-family: 'Config Condensed';
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
        .apply {
            float: right;
            text-decoration: none;
            color: #000;
            background: #FFD47D;
            line-height: 60px;
            margin: 30px auto 60px;
            display: block;
            text-align: center;
            border-radius: 9px;
            font-family: 'Config Condensed';
            font-weight: 600;
            width: 280px;
            height: 60px;
            font-size: 26px;
        }
    }
}

@media screen and (max-width: 1024px) {
    .slider-text {
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 820px) {
    .swiper-pagination.top {
        text-align: center !important;
    }
}

@media screen and (max-width: 400px) {
    .swiper-container {
        padding: 30px 0 40px !important;
    }
}

// Swiper
.swiper-container {
    padding-top: 30px;
}

.swiper-pagination.top {
    text-align: right;
    padding: 0 20px;
    box-sizing: border-box;
    top: 10px;
    bottom: unset !important;
}

.swiper-pagination ::v-deep .swiper-pagination-bullet {
    height: 12px;
    width: 12px;
    border-radius: 0;
    margin: 0 6px;
}

.swiper-pagination ::v-deep .swiper-pagination-bullet-active {
    background-color: #DFAF4C;
}

.swiper-slide {
    .product-offer-box {
        margin-left: auto;
        margin-right: auto;
    }
}

</style>