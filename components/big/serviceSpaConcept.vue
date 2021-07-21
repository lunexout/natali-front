<template>
    <div class="service-spa-concept">
        <!-- <div class="service-spa-concept" v-show="loading">
            <PuSkeleton circle height="50px" width="30px">

            </PuSkeleton>

            <PuSkeleton circle height="300px" width="300px">

            </PuSkeleton>
        </div> -->
        <h1 class="title">OUR SERVICE</h1>
        <div class="content-wrapper">
            <div class="row reverse">
                <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 nopadding">
                    <div class="img-wrapper">
                        <img src="/assets/img/servicesp.png" alt="img" />
                    </div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 nopadding">
                    <div class="text-cont">
                        <div class="text-wrapper">
                            <div class="left">
                                <span class="num">01.</span>
                            </div>
                            <div class="right">
                                <span class="info-title">Lorem ipsum ,</span>
                                <p class="info-text">
                                    Nam gravida in nunc eu blandit. Etiam ornare
                                    sodales sem, vitae elementum neque imperdiet
                                    ac. In semper, quam non egestas eleifend,
                                    neque arcu vehicula ipsum, mattis varius
                                    mauris nisl quis magna. Proin accumsan elit
                                    ut ipsum venenatis lacinia. Praesent libero
                                    tellus, lobortis malesuada aliquet sit amet,
                                    malesuada a libero. Nulla facilisi. Nunc sed
                                    risus aliquam, rutrum urna sed, convallis
                                    augue. Duis vulputate libero in consequat
                                    elementum. Fusce et eros at urna facilisis
                                    tincidunt posuere a massa.Nam gravida in
                                    nunc eu blandit. Etiam ornare sodales sem,
                                    vitae elementum neque imperdiet ac. In
                                    semper, quam non egestas eleifend, neque
                                    arcu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 nopadding">
                    <div class="img-wrapper">
                        <img src="/assets/img/servicesp.png" alt="img" />
                    </div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 nopadding">
                    <div class="text-cont">
                        <div class="text-wrapper">
                            <div class="left">
                                <span class="num">02.</span>
                            </div>
                            <div class="right">
                                <span class="info-title">Lorem ipsum ,</span>
                                <p class="info-text">
                                    Nam gravida in nunc eu blandit. Etiam ornare
                                    sodales sem, vitae elementum neque imperdiet
                                    ac. In semper, quam non egestas eleifend,
                                    neque arcu vehicula ipsum, mattis varius
                                    mauris nisl quis magna. Proin accumsan elit
                                    ut ipsum venenatis lacinia. Praesent libero
                                    tellus, lobortis malesuada aliquet sit amet,
                                    malesuada a libero. Nulla facilisi. Nunc sed
                                    risus aliquam, rutrum urna sed, convallis
                                    augue. Duis vulputate libero in consequat
                                    elementum. Fusce et eros at urna facilisis
                                    tincidunt posuere a massa.Nam gravida in
                                    nunc eu blandit. Etiam ornare sodales sem,
                                    vitae elementum neque imperdiet ac. In
                                    semper, quam non egestas eleifend, neque
                                    arcu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row reverse">
                <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 nopadding">
                    <div class="img-wrapper">
                        <img src="/assets/img/servicesp.png" alt="img" />
                    </div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 nopadding">
                    <div class="text-cont">
                        <div class="text-wrapper">
                            <div class="left">
                                <span class="num">03.</span>
                            </div>
                            <div class="right">
                                <span class="info-title">Lorem ipsum ,</span>
                                <p class="info-text">
                                    Nam gravida in nunc eu blandit. Etiam ornare
                                    sodales sem, vitae elementum neque imperdiet
                                    ac. In semper, quam non egestas eleifend,
                                    neque arcu vehicula ipsum, mattis varius
                                    mauris nisl quis magna. Proin accumsan elit
                                    ut ipsum venenatis lacinia. Praesent libero
                                    tellus, lobortis malesuada aliquet sit amet,
                                    malesuada a libero. Nulla facilisi. Nunc sed
                                    risus aliquam, rutrum urna sed, convallis
                                    augue. Duis vulputate libero in consequat
                                    elementum. Fusce et eros at urna facilisis
                                    tincidunt posuere a massa.Nam gravida in
                                    nunc eu blandit. Etiam ornare sodales sem,
                                    vitae elementum neque imperdiet ac. In
                                    semper, quam non egestas eleifend, neque
                                    arcu
                                </p>
                                <a href="#" class="button">Book now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ServiceSpaConcept",
    data() {
        return {
            loading: true,
        };
    },
    mounted() {
        // alert('working')
        setTimeout(function () {
            // alert('time out')
            this.loading = !this.loading;
        }, 2000);
    },
};
</script>

<style lang="scss" scoped>
.service-spa-concept {
    font-family: "Prompt";
    .title {
        text-align: center;
        font-weight: 500;
        font-size: 30px;
        margin: 40px 0 20px;
    }
    .content-wrapper {
        max-width: 1920px;
        margin: 0 auto;
        .row {
            margin-bottom: 20px;
        }
        .img-wrapper {
            width: 100%;
            height: 700px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .text-cont {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 40px 24px 40px 16px;
            .text-wrapper {
                display: flex;
                max-width: 500px;
                margin: 0 auto;
                .left {
                    .num {
                        font-weight: bold;
                        font-size: 50px;
                        margin-right: 16px;
                        height: 76px;
                    }
                }
                .right {
                    .info-title {
                        font-weight: 500;
                        height: 76px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        font-size: 30px;
                    }
                    .info-text {
                        font-size: 18px;
                    }
                    .button {
                        font-family: "Config Condensed";
                        text-transform: uppercase;
                        font-weight: 600;
                        display: block;
                        width: 160px;
                        color: #000;
                        background-color: #ffe1a4;
                        border-radius: 6px;
                        text-decoration: none;
                        text-align: center;
                        height: 40px;
                        line-height: 40px;
                        margin-top: 30px;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 1750px) {
    .service-spa-concept {
        .content-wrapper {
            .img-wrapper {
                height: 800px !important;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .service-spa-concept {
        .content-wrapper {
            .img-wrapper {
                height: 500px !important;
            }
            .text-cont {
                .text-wrapper {
                    .right {
                        .button {
                            margin: 30px auto 0;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 750px) {
    .service-spa-concept {
        .content-wrapper {
            .img-wrapper {
                height: 400px !important;
            }
        }
    }
}

@media screen and (max-width: 500px) {
    .service-spa-concept {
        .content-wrapper {
            .img-wrapper {
                height: 280px !important;
            }
            .text-cont {
                .text-wrapper {
                    .left {
                        .num {
                            font-size: 34px !important;
                        }
                    }
                    .right {
                        .info-title {
                            font-size: 26px !important;
                            height: unset !important;
                            min-height: 52px !important;
                        }
                        .info-text {
                            font-size: 16px !important;
                        }
                        .button {
                            margin: unset !important;
                            margin-top: 30px !important;
                        }
                    }
                }
            }
        }
    }
}
</style>
