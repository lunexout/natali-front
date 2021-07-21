<template>
    <div class="jobs-slider">
        <div class="container">
            <div class="sort">
                <span class="sp"><p>SORT BY :</p>
                    <div class="custom-select-wrapper filter" @click="openDropdown($event)">
                        <div class="custom-select">
                            <div class="custom-select__trigger"><span>{{ dropdownlist[0].shortName }}</span>
                                <div class="arrow"></div>
                            </div>
                            <div class="custom-options">
                                <span v-for="(filt, index) of dropdownlist" :key="index" :data-value="filt.value" :class="{ 'selected' : index == selectedIndex }" class="custom-option" @click="customOption($event)">{{filt.shortName}}</span>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
            <div class="slider-wrapper">
                <swiper
                    ref="mySwiper"
                    :options="swiperOptions"
                    style="padding-bottom: 65px"
                >
                    <swiper-slide v-for="(job, index) of jobList" :key="index">
                        <div class="job-box">
                            <div class="img-wrapper">
                                <img :src="job.img" alt="img" />
                            </div>
                            <div class="info-wrapper">
                                <p class="head">{{ job.title }}</p>
                                <p class="desc">
                                    {{ job.desc | truncate(190) }}
                                </p>
                            </div>
                            <div class="details-wrapper">
                                <span class="see">See details</span>
                                <a href="#" class="apply">Apply now</a>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination top" slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "JobsSlider",
    data() {
        return {
            selectedIndex: 0,
            dropdownlist: [
                {
                    shortName: 'salary',
                    value: 'salary'
                },
                {
                    shortName: 'salary 1',
                    value: 'salary 1'
                },
                {
                    shortName: 'salary 2',
                    value: 'salary 2'
                }
            ],
            jobList: [
                {
                    img: "/assets/img/poster.png",
                    title: "Skincare",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolore autem est quod nobis voluptatum am?",
                },
                {
                    img: "/assets/img/poster.png",
                    title: "Skincare",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolore autem est quod nobis voluptatum accusantium, obcaecati totam voluptas corrupti eius repellendus dignissimos quasi quam?",
                },
                {
                    img: "/assets/img/poster.png",
                    title: "Skincare",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolore autem est quod noccusantium, obcaecati totam voluptas corrupti eius repellendus dignissimos quasi quam?",
                },
                {
                    img: "/assets/img/poster.png",
                    title: "Skincare",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolore autem est quod nobis voluptatum ",
                },
                {
                    img: "/assets/img/poster.png",
                    title: "Skincare",
                    desc: "Lorem ipsum dolor sit am?",
                },
            ],
            swiperOptions: {
                slidesPerView: 3,
                slidesPerColumn: 2,
                slidesPerColumnFill: "row",
                breakpoints: {
                    0: {
                        slidesPerColumn: 1,
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerColumn: 1,
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerColumn: 1,
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerColumn: 2,
                        slidesPerView: 3,
                    },
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
        };
    },
    methods: {
        openDropdown(e) {
            document.querySelector('.custom-select-wrapper.filter').querySelector('.custom-select').classList.toggle('open');
        },
        customOption(e) {
            let dis = e.target;
            if (!dis.classList.contains('selected')) {
                dis.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                dis.classList.add('selected');
                dis.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = dis.textContent;
            }
        }
    }
};

window.addEventListener('click', function (e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});

</script>

<style lang="scss" scoped>
.jobs-slider {
    .sort {
        span.sp {
            z-index: 99;
            font-family: "Prompt";
            font-weight: 500;
            position: relative;
            bottom: -34px;
            p {
                font-size: 24px;
                display: inline;
            }
        }
    }
    .job-box {
        margin: 10px auto;
        width: 400px;
        height: 450px;
        background-color: #f3f5f7;
        padding: 24px;
        border-radius: 13px;
        box-sizing: border-box;
        .details-wrapper {
            font-family: "Config Condensed";
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 8px;
            .see {
                font-weight: 600;
                cursor: pointer;
            }
            .apply {
                text-decoration: none;
                color: #000;
                display: block;
                height: 36px;
                border-radius: 10px;
                background: rgba($color: #ffaa00, $alpha: 0.5);
                line-height: 36px;
                width: 100px;
                text-align: center;
                font-weight: 600;
                font-size: 16px;
                &:hover {
                    background: rgba($color: #ffaa00, $alpha: 0.7);
                }
            }
        }
        .info-wrapper {
            font-family: "Prompt";
            padding: 16px 12px;
            .head {
                font-weight: 500;
                font-size: 24px;
            }
            .desc {
                color: #6e6e6e;
                font-size: 16px;
                height: 120px;
            }
        }
        .img-wrapper {
            width: 100%;
            height: 180px;
            img {
                border-radius: 10px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

.swiper-container {
    padding-top: 40px;
}

.swiper-pagination.top {
    text-align: right;
    padding: 0 20px;
    box-sizing: border-box;
    top: 10px;
    bottom: unset !important;
}

@media screen and (max-width: 500px) {
    .top {
        top: unset !important;
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

@media screen and (max-width: 1600px) {
    .job-box {
        width: 360px !important;
        height: 500px !important;
        .info-wrapper {
            .desc {
                height: 168px !important;
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .job-box {
        width: 400px !important;
        height: 500px !important;
        .info-wrapper {
            .desc {
                height: 120px !important;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .job-box {
        width: 340px !important;
        height: 484px !important;
        padding: 16px !important;
        .info-wrapper {
            .desc {
                height: 168px !important;
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .job-box {
        width: 300px !important;
        height: 450px !important;
        .info-wrapper {
            .head {
                font-size: 22px !important;
            }
            .desc {
                height: 130px !important;
                font-size: 14px !important;
            }
        }
    }
}

// dropdown

.custom-select-wrapper {
    display: inline-block;
    position: relative;
    user-select: none;
    width: 150px;
    height: 20px;
    margin-left: 14px;
}

.custom-select {
    position: relative;
    display: flex;
    flex-direction: column;
}

.custom-select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 0 4px;
    font-size: 16px;
    font-weight: 400;
    color: #3b3b3b;
    height: 36px;
    border-radius: 24px;
    line-height: 20px;
    background: #F5F5F5;
    cursor: pointer;
    border: none;
    span {
        width: 100%;
        text-align: center;
    }
}

.custom-options {
    text-align: center;
    position: absolute;
    display: block;
    top: 100%;
    left: 0;
    right: 0;
    border-top: 0;
    background: #fff;
    transition: all 0.5s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 2;
}

.custom-select.open .custom-options {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
}

.custom-option {
    position: relative;
    display: block;
    padding: 0 4px;
    font-size: 16px;
    font-weight: 300;
    color: #3b3b3b;
    line-height: 20px;
    cursor: pointer;
    transition: all 0.5s;
}

.custom-option:hover {
    cursor: pointer;
    background-color: #3d3d3d;
    color: #fff;
}

.custom-option.selected {
    color: #ffffff;
    background-color: #000;
}

.arrow {
    position: relative;
    height: 10px;
    width: 10px;
}

.arrow::before,
.arrow::after {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 0.15rem;
    height: 100%;
    transition: all 0.5s;
}

.arrow::before {
    left: -3px;
    transform: rotate(45deg);
    background-color: #000;
}

.arrow::after {
    left: 3px;
    transform: rotate(-45deg);
    background-color: #000;
}

.open .arrow::before {
    left: -3px;
    transform: rotate(-45deg);
}

.open .arrow::after {
    left: 3px;
    transform: rotate(45deg);
}
</style>