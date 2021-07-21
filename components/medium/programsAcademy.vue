<template>
    <div class="programs-academy">
        <h1 class="title">COURSES &amp; PROGRAMMS</h1>
        <div class="">
            <div class="slider-wrapper">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="(program, index) of programList" :key="index">
                        <div class="program-box">
                            <div class="img-wrapper">
                                <img :src="program.img" alt="img">
                            </div>
                            <div class="info-wrapper">
                                <p class="program-title">{{ program.title }}</p>
                                <p class="desc">{{ program.desc | truncate(250) }}</p> <!-- truncate(250) -->
                                <div class="buttons">
                                    <div class="left">
                                        <a href="#" class="details">See details</a>
                                    </div>
                                    <div class="right">
                                        <a href="#" class="book">BOOK PROGRAMM</a>
                                    </div>
                                </div>
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
        name: 'ProgramsAcademy',
        data() {
            return {
                programList: [
                    {
                        title: 'STANDART STYLIST PROGRAMS',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our Hairdresser’s School to support your talent in this comprehensive need for beauty.',
                        img: '/assets/img/poster.png'
                    },
                    {
                        title: 'STANDART STYLIST PROGRAMS',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our Hairdresser’s School to support your talent in this comprehensive need for beauty.',
                        img: '/assets/img/poster.png'
                    },
                    {
                        title: 'STANDART STYLIST PROGRAMS',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our Hairdresser’s School to support your talent in this comprehensive need for beauty.',
                        img: '/assets/img/poster.png'
                    },
                    {
                        title: 'STANDART STYLIST PROGRAMS',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our Hairdresser’s School to support your talent in this comprehensive need for beauty.',
                        img: '/assets/img/poster.png'
                    },
                ],
                swiperOptions: {
                    slidesPerView: 1,
                    
                    breakpoints: {
                        100: {
                            slidesPerView: 1,
                        },
                        992: {
                            slidesPerView: 2,
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

.programs-academy {
    background-color: #F6F6F6;
    font-family: "Prompt";
    padding-top: 40px;
    padding-bottom: 40px;
    .title {
        text-align: center;
        font-size: 30px;
        font-weight: 500;
        margin: 0 0 20px;
    }
    .slider-wrapper {
        max-width: 1920px;
        margin: 0 auto;
        .program-box {
            box-sizing: border-box;
            background-color: #fff;
            border: 1px solid #CFAD67;
            border-radius: 18px;
            overflow: hidden;
            margin: 30px auto;
            box-shadow: 0 0 30px rgba($color: #000000, $alpha: .05);
            width: 450px;
            min-height: 450px;
            .info-wrapper {
                padding: 26px 40px;
                .program-title {
                    font-family: 'Config Condensed';
                    font-weight: 500;
                    font-size: 20px;
                }
                .desc {
                    font-family: 'Prompt';
                    font-weight: 300;
                    font-size: 14px;
                    margin-top: 6px;
                    min-height: 100px;
                }
                .buttons {
                    margin-top: 30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    .book, .details {
                        font-family: 'Config Condensed';
                        font-size: 16px;
                        width: 174px;
                        height: 36px;
                        border-radius: 5px;
                        margin: 6px 0;
                        font-weight: 500;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                        color: #000;
                        box-sizing: border-box;
                        img {
                            height: 16px;
                            margin: 0 10px 0 0;
                        }
                    }
                    .book {
                        background-color: #F3D678;
                        border: 1px solid #EDB136;
                    }
                }
            }
            .img-wrapper {
                height: 170px;
                width: 100%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
}

@media screen and (max-width: 1600px) {
    .program-box {
        width: 390px !important;
        .info-wrapper {
            padding: 24px 18px !important;
        }
    }
}

@media screen and (max-width: 1350px) {
    .program-box {
        width: 350px !important;
        .info-wrapper {
            padding: 24px 18px !important;
            .buttons {
                flex-direction: column !important;
                align-items: center !important;
                .book {
                    margin-top: 0 !important;
                }
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .program-box {
        width: 400px !important;
        .info-wrapper {
            padding: 24px 32px !important;
        }
    }
}

@media screen and (max-width: 600px) {
    .swiper-container {
        padding: 0 10px 40px !important;
    }
    .program-box {
        width: 340px !important;
        .info-wrapper {
            padding: 16px 20px !important;
        }
    }
}

@media screen and (max-width: 425px) {
    .program-box {
        width: 280px !important;
        .info-wrapper {
            padding: 20px 14px !important;
        }
    }
}

@media screen and (max-width: 1024px) {
    .swiper-pagination {
        text-align: center !important;
        padding: 0 !important;
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

</style>