<template>
    <div class="program-donation">
        <div class="container">
            <h1 class="title">How You Can Get Involved</h1>
            <div class="slider-wrapper">
                <swiper
                    ref="mySwiper"
                    :options="swiperOptions"
                    style="padding-bottom: 65px"
                >
                    <swiper-slide v-for="(program, index) of programList" :key="index">
                        <div class="program-box">
                            <div class="img-wrapper">
                                <img :src="program.img" alt="programm">
                            </div>
                            <div class="info-wrapper">
                                <p class="program-title">{{ program.title | truncate(20, '.') }}</p>
                                <p class="desc">{{ program.desc | truncate(150) }}</p>
                                <a href="#" class="donate">donate now</a>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProgramDonation',
        data () {
            return {
                programList: [
                    {
                        img: '/assets/img/charity.png',
                        title: 'Volunteer programasds',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion. We offer you sasd asdasd asdasd asdd asdsad asdasd asd asdasd ss'
                    },
                    {
                        img: '/assets/img/charity.png',
                        title: 'Volunteer program',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our'
                    },
                    {
                        img: '/assets/img/charity.png',
                        title: 'Volunteer program',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our'
                    },
                    {
                        img: '/assets/img/charity.png',
                        title: 'Volunteer program',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our'
                    }
                ],
                swiperOptions: {
                    slidesPerView: 3,
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1600: {
                            slidesPerView: 3,
                        },
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                },
            }
        }
    }
</script>

<style lang="scss" scoped>

.program-donation {
    .title {
        margin: 40px 0 20px;
        font-family: 'Prompt';
        font-weight: 500;
        font-size: 30px;
        text-align: center;
    }
    .program-box {
        position: relative;
        margin: 0 auto 140px;
        width: 400px;
        height: 260px;
        text-align: center;
        .info-wrapper {
            bottom: 0;
            background-color: #fff;
            width: calc(100% - 60px);
            border: 2px solid #DFAF4C;
            left: 50%;
            height: 250px;
            transform: translateX(-50%) translateY(50%);
            position: absolute;
            font-family: 'Prompt';
            padding: 20px;
            box-sizing: border-box;
            .program-title {
                font-weight: 500;
                font-size: 26px;
                margin-bottom: 6px;
                white-space: nowrap;
            }
            .desc {
                height: 100px;
                font-weight: 300;
                font-size: 16px;
            }
            .donate {
                font-family: 'Config Condensed';
                font-weight: 600;
                text-transform: uppercase;
                text-decoration: none;
                color: #000;
                width: 120px;
                white-space: nowrap;
                margin: 25px auto 0;
                font-size: 15px;
                height: 36px;
                line-height: 36px;
                display: block;
                border-radius: 7px;
                background: #FFD683;
            }
        }
        .img-wrapper {
            height: 100%;
            width: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

@media screen and (max-width: 1350px) {
    .program-box {
        width: 360px !important;
        .info-wrapper {
            width: calc(100% - 20px) !important;
        }
    }
}

@media screen and (max-width: 1024px) {
    .program-box {
        width: 340px !important;
        .info-wrapper {
            width: calc(100% - 20px) !important;
            .program-title {
                font-size: 24px !important;
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .program-box {
        width: 300px !important;
        .info-wrapper {
            width: calc(100% - 8px) !important; 
            .program-title {
                font-size: 22px !important;
            }
            .desc {
                font-size: 14px !important;
            }
        }
    }
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

</style>