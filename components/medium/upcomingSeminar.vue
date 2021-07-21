<template>
    <div class="upcoming-seminar">
        <div class="container">
            <h1 class="title">UPCOMING SEMINAR</h1>
        </div>
        <div class="slider-wrapper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(seminar, index) of data" :key="index">
                    <div class="seminar-box">
                        <div class="seminar-img">
                            <img :src="seminar.image_top" alt="seminar" />
                        </div>
                        <div class="seminar-details">
                            <div class="container">
                                <div class="info-wrapper">
                                    <div class="user-info">
                                        <div class="user">
                                            <div class="img-wrapper">
                                                <img
                                                    :src="seminar.speaker_image"
                                                    alt="user"
                                                />
                                            </div>
                                            <p class="username">
                                                {{ seminar.speaker_full_name }}
                                            </p>
                                        </div>
                                        <div class="date-box">
                                            <span>{{
                                                getParsed(
                                                    seminar.start_date,
                                                    seminar.end_date
                                                )
                                            }}</span>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <p class="seminar-title">
                                            {{ seminar.title }}
                                        </p>
                                        <p class="seminar-text">
                                            {{
                                                seminar.description
                                                    | truncate(240)
                                            }}
                                        </p>
                                        <span class="apply-btn">Apply now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: "UpcomingSeminar",
    props: ["data"],
    data() {
        return {
            swiperOptions: {
                slidesPerView: 1,

                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            }
        };
    },
    methods: {
        getParsed(start, end) {
            let reg = /(\d{4})-(\d{1,2})-(\d{1,2}).(\d{1,2}:\d{1,2})/;
            let mon = [
                "Jan",
                "Fab",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];
            let thisYear = new Date().getFullYear();
            let start_d = start.match(reg);
            let end_d = end.match(reg);
            let start_m =
                mon[
                    parseInt(
                        start_d[2][0] == "0"
                            ? start_d[2].substring(1)
                            : start_d[2]
                    ) - 1
                ];
            let parsedd = "";
            if (thisYear == parseInt(start_d[1])) {
                if (
                    start_d[3] == end_d[3] ||
                    parseInt(start_d[3]) < parseInt(end_d[3])
                ) {
                    parsedd = `${start_d[3]} ${start_m} / ${start_d[4]}`;
                } else {
                    parsedd = `${start_d[3]}-${end_d[3]} ${start_m} / ${start_d[4]}`;
                }
            } else {
                if (
                    start_d[3] == end_d[3] ||
                    parseInt(start_d[3]) < parseInt(end_d[3])
                ) {
                    parsedd = `${start_d[3]} ${start_m} ${start_d[1]} / ${start_d[4]}`;
                } else {
                    parsedd = `${start_d[3]}-${end_d[3]} ${start_m} ${start_d[1]} / ${start_d[4]}`;
                }
            }
            return parsedd;
        }
    },
    mounted() {
        //
    }
};
</script>

<style lang="scss" scoped>
.upcoming-seminar {
    padding-top: 40px;
    padding-bottom: 40px;
    .title {
        font-family: "Prompt";
        font-weight: 500;
        text-align: left;
        text-transform: uppercase;
        font-size: 30px;
        margin: 0 0 20px;
    }
    .seminar-box {
        max-width: 1920px;
        margin: 0 auto;
        width: 100%;
        height: 600px;
        .seminar-img {
            height: 100%;
            width: 100%;
        }
        .seminar-details {
            position: relative;
            bottom: 0px;
            transform: translateY(-100%);
            .info-wrapper {
                background-color: #fff;
                max-width: 600px;
                padding: 20px 0;
                .text-content {
                    font-family: "Prompt";
                    max-width: 400px;
                    margin: 20px 116px 0;
                    .seminar-title {
                        font-weight: 500;
                        font-size: 20px;
                    }
                    .seminar-text {
                        font-size: 14px;
                        color: #707070;
                    }
                    .apply-btn {
                        cursor: pointer;
                        font-family: "Config Condensed";
                        background-color: #ffe1a4;
                        height: 40px;
                        width: 160px;
                        line-height: 40px;
                        text-align: center;
                        font-weight: 500;
                        border-radius: 4px;
                        font-size: 18px;
                        margin-top: 20px;
                        margin-bottom: 10px;
                        text-transform: uppercase;
                        display: block;
                    }
                }
                .user-info {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    padding-left: 30px;
                    box-sizing: border-box;
                    .user {
                        display: flex;
                        align-items: center;
                        .username {
                            font-family: "Prompt";
                            font-weight: 500;
                            margin-left: 16px;
                            font-size: 18px;
                        }
                    }
                    .date-box {
                        height: 50px;
                        background-color: #ededed;
                        padding: 0 16px;
                        span {
                            line-height: 50px;
                            font-family: "Config Condensed";
                            font-weight: 500;
                        }
                    }
                    .img-wrapper {
                        height: 70px;
                        width: 70px;
                        border-radius: 50%;
                        overflow: hidden;
                    }
                }
            }
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

@media screen and (max-width: 768px) {
    .seminar-box {
        height: 500px !important;
    }
}

@media screen and (max-width: 600px) {
    .seminar-box {
        height: unset !important;
        min-height: 500px !important;
        .seminar-details {
            transform: unset !important;
        }
        .container {
            padding: 0 !important;
        }
        .text-content {
            max-width: 520px !important;
            margin: 20px auto 0 !important;
            padding: 0 16px !important;
        }
    }
    .seminar-img {
        height: 300px !important;
    }
}

@media screen and (max-width: 500px) {
    .seminar-box {
        .seminar-img {
            height: 180px !important;
        }
        .user-info {
            padding-left: 16px !important;
            padding-right: 16px !important;
            flex-wrap: wrap !important;
            .date-box {
                margin-top: 20px;
                width: 100%;
            }
        }
    }
}

//
.swiper-container {
    padding-bottom: 80px;
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

.swiper-pagination {
    padding: 0 60px;
    bottom: 0px;
    text-align: center;
    box-sizing: border-box;
}
</style>
