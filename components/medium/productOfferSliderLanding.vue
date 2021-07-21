<template>
    <div class="product-offer-slider-landing">
        <div class="info">
            <h2 class="title">Offers</h2>
            <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscingvt elit. enean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscingvt elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
        </div>
        <div class="slide-section">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(offer, index) in OFFERS" :key="index">
                    <ProductOffer class='landing' :oneOffer="offer" />
                </swiper-slide>
                <div class="swiper-pagination top" slot="pagination"></div>
            </swiper>
        </div>
        <a class="apply"  style="cursor: pointer" @click="addOffersToCart">APPLY</a>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
    import ProductOffer from '../small/productOffer';

    export default {
        name: "ProductOfferSliderLanding",
        data() {
            return {
                swiperOptions: {
                    slidesPerView: 1,

                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                        },
                        820: {
                            slidesPerView: 2,
                        },
                        1250: {
                            slidesPerView: 3,
                        },
                        1674: {
                            slidesPerView: 4,
                        },
                    }
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
        },
        components: {
            ProductOffer
        }
    }
</script>

<style lang="scss" scoped>

.product-offer-slider-landing {
    .info {
        text-align: center;
        font-family: 'Prompt';
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title {
            margin: 60px 0 10px;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 32px;
        }
        .desc {
            font-weight: 400;
            max-width: 600px;
            padding: 0 10px;
            font-size: 18px;
        }
    }
    .apply {
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

@media screen and (max-width: 820px) {
    .swiper-pagination.top {
        text-align: center !important;
    }
    .product-offer-slider-landing {
        .info {
            .title {
                font-size: 26px !important;
            }
            .desc {
                font-size: 16px !important;
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .product-offer-slider-landing {
        .info {
            .title {
                font-size: 28px !important;
            }
            .desc {
                font-size: 14px !important;
            }
        }
    }
}

//
.swiper-container {
    max-width: 1800px;
    padding-top: 30px;
    .product-offer-box {
        margin-left: auto;
        margin-right: auto;
    }
}

.swiper-pagination.top {
    text-align: right;
    padding: 0 20px;
    box-sizing: border-box;
    top: 10px;
    bottom: unset;
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

</style>