<template>
    <div class="offer-slider">
        <div class="offer-slider-inner container">
            <div class="row">
                <div class="col-lg-2 col-md-2 col-xs-12">
                    <div class="slider-text">
                        <span>Offers</span>
                        <a href="#">SEE MORE</a> <!-- route to the all offers page -->
                    </div>
                </div>
                <div class="col-lg-10 col-md-10 col-xs-12">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide>
                            <OfferBox/>
                        </swiper-slide>
                        <swiper-slide>
                            <OfferBox/>
                        </swiper-slide>
                        <swiper-slide>
                            <OfferBox/>
                        </swiper-slide>
                        <swiper-slide>
                            <OfferBox/>
                        </swiper-slide>
                        <swiper-slide>
                            <OfferBox/>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import OfferBox from '../small/offerBox';

    export default {
        name: 'OffersSlider',
        components: {
            OfferBox
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
                            spaceBetween: 50,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 10,
                        },
                        1500: {
                            slidesPerView: 3,
                        },
                    },
                    
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },
            }
        }
    }
</script>

<style lang="scss" scoped>

.offer-slider {
    background-color: #F8F9F8;
    padding: 30px 0 30px;
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
    background-color: #DFAF4C;
}

.swiper-pagination {
    padding: 0 60px;
    bottom: 0px;
    text-align: right;
    box-sizing: border-box;
}

.swiper-slide {
    .offer-box {
        margin-left: auto;
        margin-right: auto;
    }
}

</style>