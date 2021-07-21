<template>
    <div class="gift-card">
        <div class="container">
            <div class="row reverse">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="form-wrapper">
                        <form action="#">
                            <h1>Natali Group Gift Card</h1>
                            <label for="to" class="starting">
                                <input
                                    @input="checkActive"
                                    type="text"
                                    name="to"
                                    id="to"
                                    v-model="giftData.to"
                                />
                                <span>to</span>
                            </label>
                            <label for="from" class="starting">
                                <input
                                    @input="checkActive"
                                    type="text"
                                    name="from"
                                    id="from"
                                    v-model="giftData.from"
                                />
                                <span>from</span>
                            </label>
                            <label for="note" class="starting">
                                <input
                                    @input="checkActive"
                                    type="text"
                                    name="note"
                                    id="note"
                                    v-model="giftData.name"
                                />
                                <span>note</span>
                            </label>
                            <div class="line">
                                <label for="amount">
                                    <input
                                        type="number"
                                        :value="amount"
                                        @input="amountCheck"
                                        name="amount"
                                        id="amount"
                                    />
                                    <span>amount</span>
                                </label>
                                <label for="services">
                                    <select
                                        name="services"
                                        id="services"
                                        v-model="giftData.service_id"
                                    >
                                        <option :value="372">haircut</option>
                                        <option :value="372">haircut 1</option>
                                        <option :value="372">haircut 2</option>
                                        <option :value="372">haircut 3</option>
                                    </select>
                                    <span>services</span>
                                </label>
                            </div>
                            <label for="branch" class="branch">
                                <select
                                    name="branch"
                                    id="branch"
                                    v-model="giftData.branch_id"
                                >
                                    <option :value="0">dry bar</option>
                                    <option :value="0">anti age</option>
                                    <option :value="0">distribution</option>
                                    <option :value="0">haircut 3</option>
                                </select>
                                <span>branch</span>
                            </label>
                            <div @click="sendG()" class="buynow">Buy now</div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="card-wrapper">
                        <div class="slider-wrapper">
                            <swiper
                                ref="mySwiper"
                                :options="swiperOptions"
                                v-if="getGiftImages"
                            >
                                <swiper-slide
                                    v-for="(gift, index) in getGiftImages.data"
                                    :key="index"
                                >
                                    <div class="card-img">
                                        <img
                                            :src="`${getDomain}${gift.image}`"
                                            alt="img"
                                        />
                                    </div>
                                </swiper-slide>
                                <div
                                    class="swiper-button-prev"
                                    slot="button-prev"
                                ></div>
                                <div
                                    class="swiper-button-next"
                                    slot="button-next"
                                ></div>
                            </swiper>
                            <span class="num">{{ amount }}</span>
                        </div>
                        <div class="card-info">
                            <p class="card-title">GIFT CARD FROM NATALI</p>
                            <p class="card-desc">
                                Nam gravida in nunc eu blandit. Etiam ornare
                                sodales sem, vitae elementum neque imperdiet ac.
                                In semper, quam non egestas eleifend, neque arcu
                                vehicula ipsum, mattis varius mauris nisl quis
                                magna. Proin accumsan elit ut ipsum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "GiftCard",
    props: ["branchId"],
    data() {
        return {
            giftData: {
                to: "",
                from: "",
                service_id: 0,
                branch_id: "",
                name: "",
                delivery_method: "post",
                image_id: 1,
            },
            amount: 30,
            swiperOptions: {
                slidesPerView: 1,
                centeredSlides: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        };
    },
    methods: {
        ...mapActions("Gift", ["sendGift"]),
        ...mapActions("Gift", ["receiveGiftImages"]),
        amountCheck(e) {
            this.amount = parseInt(e.target.value);
        },
        checkActive(e) {
            if (e.target.value.length > 0) {
                e.target.parentNode
                    .querySelector("span")
                    .classList.add("active");
            } else {
                e.target.parentNode
                    .querySelector("span")
                    .classList.remove("active");
            }
        },
        sendG() {
            this.giftData.total = this.amount;
            console.log(this.giftData);
            this.sendGift(this.giftData);
        },
    },
    computed: {
        ...mapGetters("Gift", ["getGiftImages"]),
        ...mapGetters("Menus", ["getDomain"]),
    },
    mounted() {
        this.receiveGiftImages();
    },
};
</script>

<style lang="scss" scoped>
.gift-card {
    padding: 40px 0;
    .card-wrapper {
        max-width: 570px;
        margin: 0 auto;
        padding-top: 20px;
        .card-info {
            padding: 0 50px;
            .card-title {
                margin: 20px 0 6px;
                color: #e0b763;
                font-size: 26px;
                font-family: "Config Condensed";
            }
            .card-desc {
                font-size: 16px;
                font-family: "Prompt";
            }
        }
        .slider-wrapper {
            position: relative;
            .card-img {
                height: 260px;
                margin: 0 auto;
                width: 100%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .num {
                font-family: "Config Condensed";
                position: absolute;
                bottom: 14px;
                font-size: 28px;
                left: 50%;
                transform: translateX(-50%);
                color: #fff;
                z-index: 9;
            }
        }
    }
    .form-wrapper {
        form {
            max-width: 400px;
            margin: 0 auto;
            label.starting {
                font-family: "Config Condensed";
                font-size: 16px;
                text-transform: uppercase;
                display: block;
                position: relative;
                input {
                    display: block;
                    width: 100%;
                    box-sizing: border-box;
                    height: 40px;
                    border: none;
                    margin-top: 32px;
                    margin-bottom: 8px;
                    border-bottom: 1px solid gray;
                    padding-left: 8px;
                }
                input:focus ~ span,
                span.active {
                    top: -20px;
                    left: 0;
                    opacity: 1;
                }
                span {
                    transition: 0.2s;
                    position: absolute;
                    left: 8px;
                    top: 10px;
                    opacity: 0.8;
                }
            }
            .line label,
            label.branch {
                display: block;
                position: relative;
                font-family: "Config Condensed";
                font-size: 16px;
                text-transform: uppercase;
                span {
                    position: absolute;
                    top: 6px;
                    left: 8px;
                    opacity: 0.8;
                }
                input,
                select {
                    font-family: "Config Condensed";
                    font-weight: 500;
                    font-size: 18px;
                    padding-left: 8px;
                    box-sizing: border-box;
                    height: 50px;
                    width: 140px;
                    margin-top: 32px;
                    margin-bottom: 8px;
                    display: inline-block;
                    border: 1px solid #d1d1d1;
                }
            }
            .line {
                display: flex;
                justify-content: space-between;
            }
            label.branch {
                select {
                    width: 100% !important;
                }
            }
            h1 {
                font-family: "Config Condensed";
                font-weight: 600;
                font-size: 30px;
                text-align: center;
                margin: 20px 0;
            }
            .buynow {
                cursor: pointer;
                text-transform: uppercase;
                display: block;
                background-color: #ffe1a4;
                color: #000;
                text-decoration: none;
                line-height: 40px;
                text-align: center;
                margin-top: 26px;
                font-family: "Config Condensed";
                font-weight: 600;
                font-size: 18px;
                height: 40px;
                border-radius: 4px;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .card-img {
        height: 190px !important;
    }
}

@media screen and (max-width: 450px) {
    .card-img {
        height: 160px !important;
    }
}

@media screen and (max-width: 440px) {
    .swiper-button-prev {
        left: -5px !important;
    }
    .swiper-button-next {
        right: -5px !important;
    }
    .swiper-slide,
    .card-info {
        padding: 0 25px !important;
    }
}

.swiper-slide {
    padding: 0 50px;
    box-sizing: border-box;
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 30px;
    color: #000;
}
</style>