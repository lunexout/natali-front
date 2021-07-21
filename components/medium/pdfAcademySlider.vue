<template>
    <div class="pdf-academy-slider">
        <div class="container">
            <div class="categories">
                <span class="cat" v-for="(cat, index) in categories" :key="index" :class="[ index==0 ? 'active' : '']" @click="cate($event)">{{ cat.name }}</span>
            </div>
            <div class="slider-wrapper">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="(elem, index) in dataList" :key="index">
                        <div class="pdf-box">
                            <div class="img-wrapper">
                                <img :src="elem.img" alt="img">
                            </div>
                            <div class="info-wrapper">
                                <p class="pdf-title">{{ elem.title }}</p>
                                <p class="pdf-desc">{{ elem.desc }}</p>
                                <span class="pdf-button">
                                    <img src="/assets/icons/file_pdf.svg" alt="icon">
                                    DOWNLOAD PDF
                                </span>
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
        name: 'PDFAcademySlider',
        data() {
            return {
                dataList: [
                    {
                        title: 'Cosmetology',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion',
                        img: '/assets/img/pdf.png'
                    },
                    {
                        title: 'Cosmetology',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion',
                        img: '/assets/img/pdf.png'
                    },
                    {
                        title: 'Cosmetology',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion',
                        img: '/assets/img/pdf.png'
                    },
                    {
                        title: 'Cosmetology',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion',
                        img: '/assets/img/pdf.png'
                    },
                    {
                        title: 'Cosmetology',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion',
                        img: '/assets/img/pdf.png'
                    },
                    {
                        title: 'Cosmetology',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion',
                        img: '/assets/img/pdf.png'
                    },
                    {
                        title: 'Cosmetology',
                        desc: 'Currently, the most popular professions in Georgian youth are connected with fashion',
                        img: '/assets/img/pdf.png'
                    },
                ],
                swiperOptions: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: "row",
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerColumn: 1,
                        },
                        1250: {
                            slidesPerView: 3,
                            slidesPerColumn: 1,
                        },
                        1350: {
                            slidesPerView: 3,
                            slidesPerColumn: 2,
                        },
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },
                categories: [
                    {
                        name: 'Cosmetology'
                    },
                    {
                        name: 'Skincare'
                    },
                    {
                        name: 'Hair cut'
                    },
                    {
                        name: 'Make up'
                    },
                    {
                        name: 'Hair cut'
                    },
                    {
                        name: 'Make up'
                    },
                ],
            }
        },
        methods: {
            cate(e) {
                e.target.parentNode.querySelectorAll('.cat').forEach((cat) => {
                    cat.classList.remove('active');
                });
                e.target.classList.add('active');
            }
        },
    }
</script>

<style lang="scss" scoped>

.pdf-academy-slider {
    padding-bottom: 40px;
    .slider-wrapper {
        .pdf-box {
            margin: 0 10px 40px;
            .info-wrapper {
                text-align: center;
                width: 80%;
                margin: 0 auto;
                position: relative;
                bottom: 40px;
                background-color: #fff;
                color: #000;
                font-family: 'Prompt';
                box-sizing: border-box;
                padding: 16px 20px;
                .pdf-title {
                    font-size: 22px;
                    font-weight: 500;
                }
                .pdf-desc {
                    color: #707070;
                    font-size: 16px;
                }
                .pdf-button {
                    cursor: pointer;
                    display: block;
                    font-family: 'Config Condensed';
                    font-size: 16px;
                    width: 174px;
                    height: 36px;
                    border-radius: 5px;
                    margin: 16px auto 6px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    color: #000;
                    box-sizing: border-box;
                    border: 1px solid #EDB136;
                    img {
                        height: 16px;
                        margin: 0 10px 0 0;
                    }
                }
            }
            .img-wrapper {
                width: 100%;
                height: 300px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
    .categories {
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 16px 0;
        .cat {
            cursor: pointer;
            text-transform: capitalize;
            font-family: 'Config Condensed';
            font-size: 24px;
            margin: 0 8px;
            height: 50px;
            word-wrap: none;
            line-height: 50px;
            position: relative;
            &.active::before {
                content: '';
                position: absolute;
                bottom: 0px;
                left: 50%;
                transform: translateX(-50%);
                height: 2px;
                width: 80px;
                background-color: #CFAD67;
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .categories {
        .cat {
            display: block !important;
        }
    }
}

@media screen and (max-width: 500px) {
    .pdf-box {
        margin: 0 0 40px !important;
        .info-wrapper {
            width: 90% !important;
        }
    }
}

// 
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