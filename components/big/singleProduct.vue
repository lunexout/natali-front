<template>
    <div class="single-product" v-if="oneProduct">
        <div class="container">
            <!-- <span class="path">Day cream / Night cream / Serum / Sets</span> -->
        </div>
        <div class="row">
            <div class="col-lg-8 col-md-7 col-sm-7 col-xs-12">
                <div class="product-images">
                    <swiper ref="productSlider" :options="swiperOptions">
                        <swiper-slide
                            v-for="(slide, index) in oneProduct.products"
                            :key="index"
                        >
                            <div class="img-box">
                                <img
                                    :src="
                                        'https://natali.onesoul.io' +
                                        slide.images[0]
                                    "
                                    style='object-fit: cover;'
                                    :alt="`s${index}`"
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
                    <!-- <div class="bottom-bar">
                        {{ activeColor + 1 }}/{{
                            oneProduct.products[activeColor].images.length
                        }}
                    </div> -->
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-5 col-xs-12">
                <div class="wrapper-p">
                    <div class="product-info">
                        <span class="new">NEW</span>
                        <p class="title">{{ oneProduct.name }}</p>
                        <p class="desc" v-html="oneProduct.content"></p>
                        <span class="price"
                            >$
                            {{ oneProduct.products[activeColor].price }}</span
                        >
                        <div
                            class="colors"
                            v-if="oneProduct.products.length > 1"
                        >
                            <span>Colour</span>
                            <div class="c-list">
                                <Color
                                    :color="prod.color_url"
                                    @click.native="colorCheck(index)"
                                    :class="{
                                        checked: index == activeColor,
                                    }"
                                    v-for="(prod, index) of oneProduct.products"
                                    :key="index"
                                />
                            </div>
                        </div>
                        <div class="quantity">
                            <span>Quantity</span>
                            <div
                                class="inps"
                                v-if="
                                    oneProduct.products[activeColor].quantity >
                                    0
                                "
                            >
                                <!-- <select name="q1" id="quantity1">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select> -->
                                <div class="number-input">
                                    <button
                                        @click='removeQuantity(oneProduct)'
                                        style="padding-right: 30px;"
                                    ></button>
                                    {{oneProduct.cart_quantity}}
                                    <!-- <input
                                        v-model='quantity'
                                        class="quantity"
                                        min="1"
                                        name="quantity"
                                        value="1"
                                        type="number"
                                    /> -->
                                    <button
                                        @click="addQuantity(oneProduct)"
                                        style="padding-left: 30px;"
                                        class="plus"
                                    ></button>
                                </div>
                            </div>
                            <div v-else>
                                <p>Product is not available at the moment</p>
                            </div>
                        </div>
                        <div class="buttons">
                            <span
                                v-if='oneProduct.products[activeColor].quantity > 0'
                                class="add-to-bag"
                                @click="addToCart({...oneProduct.products[activeColor], cart_quantity: oneProduct.cart_quantity})"
                                >Add to bag</span
                            >
                            <span class="wishlist">Wishlist</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="additional">
            <div class="row">
                <div class="col-lg-8 col-md-7 col-sm-7 col-xs-12">
                    <div class="ad-info">
                        <div class="switch">
                            <div
                                class="one-switch"
                                :class="[
                                    {
                                        active: infoSwitch == 0,
                                    },
                                ]"
                                @click="infoSwitch = 0"
                            >
                                Details
                            </div>
                            <div
                                class="one-switch"
                                :class="[
                                    {
                                        active: infoSwitch == 1,
                                    },
                                ]"
                                @click="infoSwitch = 1"
                            >
                                Shipping & returns
                            </div>
                        </div>
                        <div class="sw-info">
                            <div
                                class="details"
                                :class="[
                                    {
                                        active: infoSwitch == 0,
                                    },
                                ]"
                            >
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. In ratione necessitatibus
                                    magni architecto odit ipsam eaque, quas
                                    incidunt, laudantium vitae natus harum
                                    obcaecati temporibus soluta amet itaque
                                    nihil ullam. Error.
                                </p>
                            </div>
                            <div
                                class="shipping"
                                :class="[
                                    {
                                        active: infoSwitch == 1,
                                    },
                                ]"
                            >
                                <p>shipping</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-5 col-xs-12">
                    <div class="img-wrapper">
                        <img src="/assets/img/poster.png" alt="poster" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

import Color from "../small/colorBox";

export default {
    name: "SingleProduct",
    components: {
        Color,
    },
    props: ["oneProduct"],
    data() {
        return {
            infoSwitch: 0,
            activeColor: 0,
            activeIndex: 0,
            colors: [
                {
                    color: "#BD9F3F",
                    value: "1",
                },
                {
                    color: "#73DAAA",
                    value: "2",
                },
                {
                    color: "#5C905C",
                    value: "3",
                },
                {
                    color: "#6C8CB7",
                    value: "4",
                },
                {
                    color: "#BC76AC",
                    value: "5",
                },
                {
                    color: "#CD6981",
                    value: "6",
                },
                {
                    color: "#6C8CB7",
                    value: "4",
                },
                {
                    color: "#BC76AC",
                    value: "5",
                },
                {
                    color: "#CD6981",
                    value: "6",
                },
            ],
            swiperOptions: {
                slidesPerView: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        };
    },
    methods: {
        // ...mapActions("User", ["addToCart"]),
        ...mapActions("Cart", ['addToCart', 'removeFromCart', 'addQuantity', 'removeQuantity', 'detailItemShow']),
        colorCheck(index) {
            this.activeColor = index;
        },
        addToBag(u_id, i_id, q, t) {
            let obj = {
                user_id: u_id,
                item_id: i_id,
                quantity: q,
                type: t,
            };
            this.addToCart(obj);
        },
    },
    computed: {
        swiper() {
            return this.$refs.productSlider.$swiper;
        },
    },
    mounted() {
        setTimeout(() => {
            this.swiper.slideTo(0);
            this.activeIndex = this.swiper.activeIndex;
            this.swiper.on("slideChange", function () {
                this.activeIndex = this.swiper.activeIndex;
            });
        }, 1000);
    },
};
</script>

<style lang="scss" scoped>
.additional {
    .ad-info {
        .switch {
            display: flex;
            .one-switch {
                text-transform: uppercase;
                display: block;
                width: 100%;
                text-align: center;
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.219);
                cursor: pointer;
                &.active {
                    border-bottom: 1px solid black;
                }
            }
        }
        .sw-info {
            padding: 20px;
            color: rgba(0, 0, 0, 0.7);
            .details,
            .shipping {
                display: none;
                max-width: 400px;
                &.active {
                    display: block;
                }
            }
        }
    }
    .img-wrapper {
        width: 100%;
        height: 500px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
.single-product {
    font-family: "Prompt";
}
.wrapper-p {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
}
.product-images {
    position: relative;
    .bottom-bar {
        position: absolute;
        bottom: 8px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        z-index: 9;
    }
    .img-box {
        width: 100%;
        height: 500px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
.product-info {
    width: 100%;
    max-width: 300px;
    .new {
        color: #e0b763;
    }
    .title {
        margin-top: 10px;
        text-transform: uppercase;
        font-weight: 500;
    }
    .desc {
        font-weight: 300;
        margin-bottom: 16px;
    }
    .price {
        font-weight: 500;
        font-size: 20px;
    }
    .colors {
        margin-top: 10px;
        margin-bottom: 20px;
        span {
            font-weight: 400;
            font-size: 15px;
            color: rgba(0, 0, 0, 0.6);
        }
        .c-list {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            width: 200px;
            .more {
                margin-left: 10px;
                cursor: pointer;
            }
        }
    }
    .quantity {
        margin-bottom: 20px;
        span {
            font-weight: 400;
            font-size: 15px;
            color: rgba(0, 0, 0, 0.6);
        }
        .inps {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            select {
                border-radius: 6px;
                width: 120px;
                height: 26px;
                background-color: #dddddd;
                border: none;
                padding: 0 8px;
                font-weight: 600;
                font-size: 16px;
            }
            .number-input {
                height: 26px;
                background-color: #dddddd;
                display: inline-flex;
                width: 120px;
                justify-content: center;
                padding: 4px;
                border-radius: 6px;
                input[type="number"] {
                    -webkit-appearance: textfield;
                    -moz-appearance: textfield;
                    appearance: textfield;
                    background: none;
                }
                input[type="number"]::-webkit-inner-spin-button,
                input[type="number"]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                }
                &,
                & * {
                    box-sizing: border-box;
                }
                & button {
                    outline: none;
                    -webkit-appearance: none;
                    background-color: transparent;
                    border: none;
                    align-items: center;
                    justify-content: center;
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    margin: 0;
                    position: relative;
                }
                & button:before,
                & button:after {
                    display: inline-block;
                    position: absolute;
                    content: "";
                    width: 14px;
                    height: 1px;
                    background-color: #212121;
                    transform: translate(-50%, -50%);
                }
                & button.plus:after {
                    transform: translate(-50%, -50%) rotate(90deg);
                }
                & input[type="number"] {
                    font-family: sans-serif;
                    width: 70px;
                    border: none;
                    font-size: 16px;
                    height: 20px;
                    font-weight: bold;
                    text-align: center;
                }
            }
        }
    }
    .buttons {
        span {
            cursor: pointer;
            display: block;
            width: 100%;
            text-align: center;
            height: 40px;
            line-height: 40px;
            box-sizing: border-box;
            border-radius: 4px;
        }
        .add-to-bag {
            margin-bottom: 12px;
            background-color: #e0b763;
            color: #fff;
        }
        .wishlist {
            border: 1px solid #e0b763;
        }
    }
}
.path {
    margin-top: 12px;
    padding: 0 0 0 8px;
    margin-bottom: 10px;
    display: block;
}

.swiper-button-prev,
.swiper-button-next {
    width: 50px;
    height: 50px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    position: absolute;
}

.swiper-button-prev:before,
.swiper-button-next:before {
    content: "";
    background-color: #fff;
    opacity: 0.8;
    width: 42px;
    height: 42px;
    border-radius: 50%;
}

@media screen and (max-width: 1024px) {
    .product-images {
        .img-box {
            height: 400px !important;
        }
    }
}
@media screen and (max-width: 768px) {
    .wrapper-p {
        height: unset;
    }
    .swiper-container {
        max-width: 500px;
    }
    .product-images {
        .img-box {
            height: 300px !important;
        }
    }
    .additional {
        .img-wrapper {
            width: 100%;
            height: 260px;
        }
    }
}
@media screen and (max-width: 500px) {
    .product-images {
        .img-box {
            height: 200px !important;
        }
    }
    .ad-info {
        .switch {
            .one-switch {
                font-size: 13px;
                &.active {
                    font-size: 14px;
                }
            }
        }
        .sw-info {
            font-size: 15px;
        }
    }
    .additional {
        .img-wrapper {
            width: 100%;
            height: 200px;
        }
    }
}
</style>