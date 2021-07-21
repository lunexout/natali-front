<template>
    <div class="catalogue">
        <div class="container">
            <h1 class="title">Catalogue</h1>
            <p class="text">Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our Hairdresser’s School to support your talent in this comprehensive need for</p>
        </div>
        <div class="slider-container">
            <swiper ref="mySwiper" :options="swiperOptions" style="padding: 0 0 120px;">
                <swiper-slide v-for="(cat, index) of catList" :key="index">
                    <div class="cat-box">
                        <img :src="cat.img" alt="img">
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev" style="top: unset; bottom: 31px; left: 40px; color: #000;"></div>
                <div class="swiper-button-next" slot="button-next" style="top: unset; bottom: 31px; right: 40px; color: #000;"></div>
                <div class="swiper-pagination" slot="pagination" style="bottom: 44px"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Catalogue',
        data() {
            return {
                catList: [
                    {
                        img: '/assets/img/ongoing.png'
                    },
                    {
                        img: '/assets/img/pn.png'
                    },
                    {
                        img: '/assets/img/poster.png'
                    },
                    {
                        img: '/assets/img/onenews.png'
                    },
                    {
                        img: '/assets/img/offertst.png'
                    },
                ],
                swiperOptions: {
                    slidesPerView: 4,
                    
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                        },
                        730: {
                            slidesPerView: 2,
                        },
                        1096: {
                            slidesPerView: 3,
                        },
                        1920: {
                            slidesPerView: 4,
                        },
                    },
                    
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                },
            }
        }
    }
</script>

<style lang="scss" scoped>

.catalogue {
    font-family: 'Prompt';
    .title {
        font-weight: 500;
        font-size: 30px;
        margin: 40px 0 20px;
    }
    .text {
        font-weight: 400;
        font-size: 18px;
    }
    .slider-container {
        max-width: 1920px;
        margin: 36px auto 0;
        .cat-box {
            margin: 0 auto;
            width: 450px;
            height: 600px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

@media screen and (max-width: 1400px) {
    .cat-box {
        width: 360px !important;
        height: 500px !important;
    }
}

@media screen and (max-width: 400px) {
    .cat-box {
        width: 300px !important;
        height: 450px !important;
    }
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