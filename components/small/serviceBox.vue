<template>
    <div class="service-box">
        <div class="front-img">
            <img :src="'http://natali.onesoul.io' + oneService.image" alt="serviceimg" />
        </div>
        <div class="info single" v-if="oneService.type == 'NORMAL'">
            <div class="info-text">
                <div class="left">
                    <h3>{{ oneService.name }}</h3>
                    <p>{{ oneService.translations[0].content.substring(1, 100) }} ... </p>
                </div>
                <div class="right">
                    <span class="price">${{ oneService.discount_price ? oneService.discount_price : oneService.price }}</span>
                </div>

            </div>
            <a style="cursor: pointer;" class="booknow">Book now</a>
        </div>

        <div class="info multi" v-else>

            <div class="multi-cats">
                
                
                <div class="types">
                    <span
                        v-for="(oneGroup, index) of oneService.styles"
                        :key="index"
                        :class="[{
                            active: index == choosenIndex
                        }]"
                        @click="chooseGroup(index)"
                        >{{ oneGroup.styleGroup.name }}</span
                    >
                </div>
                
                <div style="margin-top: 50px;display: flex; justify-content: space-between; align-items: center;">
                    <p class="servname" style="font-size: 18px;">{{ oneService.styles[choosenIndex].styleGroup.style.name }}</p>
                    <p class="time">time: {{  oneService.styles[choosenIndex].styleGroup.style.time}}</p>
                    <p class="price">${{  oneService.styles[choosenIndex].styleGroup.style.price }}</p>
                </div>

                <!-- <div class="left">
                    <h1>{{ oneService.name }}</h1>
                </div> -->
                <!-- <ul
                    v-for="(oneGroup, index) of oneService.subGroups"
                    :key="index"
                >
                    <template v-if='oneGroup.group == "Stylist" && Stylist'>
                    <li
                        v-for="(oneLine, index) of oneGroup.subService"
                        :key="index"
                    >
                        <p class="servname">{{ oneLine.name }}</p>
                        <p class="time">{{ oneLine.time }}</p>
                        <p class="price">${{ oneLine.price }}</p>
                    </li>
                    </template>
                    <template v-if='oneGroup.group == "Top Stylist" && TopStylist'>
                    <li
                        v-for="(oneLine, index) of oneGroup.subService"
                        :key="index"
                    >
                        <p class="servname">{{ oneLine.name }}</p>
                        <p class="time">{{ oneLine.time }}</p>
                        <p class="price">${{ oneLine.price }}</p>
                    </li>
                    </template>
                    <template v-if='oneGroup.group == "ART DIR" && ArtDir'>
                    <li
                        v-for="(oneLine, index) of oneGroup.subService"
                        :key="index"
                    >
                        <p class="servname">{{ oneLine.name }}</p>
                        <p class="time">{{ oneLine.time }}</p>
                        <p class="price">${{ oneLine.price }}</p>
                    </li>
                    </template>
                </ul> -->
            </div>
            <a style="cursor: pointer;" class="booknow">Book now</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "serviceBox",
    props: ["oneService"],
    data() {
        return {
            choosenIndex: 0,
            Stylist: true,
            TopStylist: false,
            ArtDir: false,
        }
    },
    methods: {
        chooseGroup(index) {
            this.choosenIndex = index;

            // if(index == 0) {this.Stylist = true; this.TopStylist = false; this.ArtDir = false;}
            // else if(index == 1) {this.Stylist = false; this.TopStylist =true; this.ArtDir =false;}
            // else if(index == 2) {this.Stylist = false; this.TopStylist =false; this.ArtDir =true;}
        },
    },
    mounted() {
        // console.log(this.oneService)
    }
};
</script>

<style lang="scss" scoped>
.service-box {
    box-sizing: border-box;
    position: relative;
    width: 480px;
    height: 500px;

    &:hover .info {
        opacity: 1;
    }

    .front-img {
        height: 100%;

        img {
            height: 100%;
            object-fit: cover;
        }
    }

    .info {
        opacity: 0;
        transition: 0.4s;
        border: 1px solid #dfaf4c;
        background-color: #fff;
        position: absolute;
        padding: 90px 50px;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        a.booknow {
            margin: 24px auto;
            color: #000;
            font-family: "Config Condensed";
            font-weight: 600;
            font-size: 25px;
            text-decoration: none;
            line-height: 60px;
            text-align: center;
            height: 60px;
            width: 200px;
            display: block;
            border-radius: 6px;
            border: 1px solid #ffa200;
        }

        &.multi {
            .multi-cats {
                font-family: "Config Condensed";
                .types {
                    display: flex;
                    justify-content: space-between;
                    span {
                        cursor: pointer;
                        white-space: nowrap;
                        font-size: 22px;
                        font-weight: 500;
                        &.active {
                            text-decoration: underline;
                        }
                    }
                }
                ul {
                    margin-top: 30px;
                    li {
                        padding: 0 8px 0 0;
                        display: flex;
                        margin-bottom: 30px;
                        list-style: none;
                        justify-content: space-between;
                        p {
                            &.time {
                                font-size: 18px;
                            }
                            &.price {
                                font-size: 18px;
                                margin-right: 40px;
                            }
                            &.servname {
                                font-size: 18px;
                                font-weight: 600;
                                width: 50px;
                                display: flex;
                                flex-wrap: nowrap;
                            }
                        }
                    }
                }
            }
        }

        &.single {
            .info-text {
                font-family: "Prompt";
                display: flex;
                justify-content: space-between;

                .left {
                    h3 {
                        color: #1c1c1c;
                        font-weight: normal;
                        margin: 0;
                        font-size: 30px;
                        margin-bottom: 20px;
                    }

                    p {
                        color: #1c1c1c;
                        font-weight: 300;
                        font-size: 14px;
                        max-width: 270px;
                    }
                }

                .right {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;

                    span.price {
                        margin-bottom: 30px;
                        color: #2c2d33;
                        font-size: 38px;
                        font-weight: 600;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1920px) {
    .service-box {
        width: 420px !important;
        height: 440px !important;

        .info {
            padding: 50px 50px !important;
        }
    }
}

@media screen and (max-width: 1600px) {
    .service-box {
        width: 400px !important;
        height: 400px !important;

        .info {
            padding: 50px 22px !important;
        }
    }
}

@media screen and (max-width: 1024px) {
    .service-box {
        width: 320px !important;
        height: 340px !important;

        .info {
            padding: 52px 16px !important;

            a.booknow {
                line-height: 45px !important;
                height: 45px !important;
                width: 150px !important;
            }

            &.single {
                .info-text {
                    .left {
                        h3 {
                            font-size: 24px !important;
                            margin-bottom: 6px !important;
                        }

                        p {
                            font-size: 12px !important;
                        }
                    }

                    .right {
                        span.price {
                            font-size: 24px !important;
                        }
                    }
                }
            }

            &.multi {
                .multi-cats {
                    .types {
                        span {
                            font-size: 20px !important;
                        }
                    }
                    ul {
                        margin-top: 22px !important;
                        li {
                            margin-bottom: 22px !important;
                            p {
                                &.price {
                                    margin-right: 30px !important;
                                }
                                &.servname {
                                    font-size: 18px !important;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 460px) {
    .service-box {
        width: 280px !important;
        height: 280px !important;

        .info {
            padding: 10px 11px !important;

            &.single {
                .info-text {
                    .left {
                        h3 {
                            font-size: 18px !important;
                        }
                    }
                }
            }
        }
    }
}
</style>