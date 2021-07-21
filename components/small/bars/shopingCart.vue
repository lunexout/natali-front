<template>
    <div class="shoping-cart">
        <div class="flow bag" data-flow="0">
            <div class="topbar">
                <p class="title">Shoping Bag</p>
                <span class="close" @click="closeTab">&#10005;</span>
            </div>
            <div class="cart" v-if="cart">
                <div
                    class="item"
                    v-for="(item, index) in getCartItems"
                    :key="index"
                >
                    <div class="outer">
                        <div class="img-wrapper">
                            <img :src="`https://natali.onesoul.io/`+item.image" alt="item" />
                        </div>
                    </div>
                    <div class="details">
                        <p class="item-title">{{ item.name }}</p>
                        <span class="price">$ {{ item.price }}</span>
                        <span v-if='item.type == "Offer"'>{{item.type}}</span>
                        <!-- <span>Quantity {{item.quantity}}</span> -->
                        <!-- <span class="quantity-show"
                            >Quantity: {{ item.quantity }}</span
                        >
                        <span class="colour"
                            >Colour:
                            <Color
                                color="rgb(3,71,72)"
                                style="width: 18px; height: 18px"
                        /></span> -->
                        <!-- <div class="number-input">
                            <button
                                @click='removeQuantity(item)'
                                style="padding-right: 30px;"
                            ></button>
                            {{item.cart_quantity}}
                            <button
                                @click="addQuantity(item)"
                                style="padding-left: 30px;"
                                class="plus"
                            ></button>
                        </div> -->
                    </div>
                    <span class="remove" @click='removeFromCart(item)'>&#10005;</span>
                </div>
            </div>
            <div class="otheropts">
                <span class="redeem" @click="setFlow(2)"
                    >Redeem points
                    <img src="/assets/icons/star.svg" alt="star" class="star"
                /></span>
                <span class="giftcard" @click="setFlow(1)"
                    >Gift card code
                    <img src="/assets/icons/next.svg" alt="next" class="next"
                /></span>
            </div>
            <div class="bottom-bar" v-if="cart">
                <BookInBars
                    :text="'$' + getTotalAmount + '- Checkout'"
                    style="max-width: 100%"
                />
                <!-- no action -->
                <SecondaryBtn
                    text="continue shopping"
                    style="font-size: 20px; color: #302f31"
                />
                <!-- no action -->
            </div>
        </div>
        <div class="flow gift-card" data-flow="1">
            <div class="u-wrapper">
                <div class="topbar">
                    <p class="title">GIFT CARD CODE</p>
                    <span class="close" @click="closeTab">&#10005;</span>
                </div>
                <div class="content-bar">
                    <p class="head">Lorem ipsum dolor sit amet.</p>
                    <span class="under"
                        >Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Laudantium voluptates repellendus
                        perferendis.</span
                    >
                    <input type="text" />
                    <input type="text" />
                    <BookInBars text="APPLY" style="max-width: 100%" />
                    <!-- no action -->
                </div>
            </div>
            <div class="bottom-bar">
                <span class="back" @click="setFlow(0)">Back</span>
            </div>
        </div>
        <div class="flow redeem-points" data-flow="2">
            <div class="u-wrapper">
                <div class="topbar">
                    <p class="title">REEDEM POINTS</p>
                    <span class="close" @click="closeTab">&#10005;</span>
                </div>
                <div class="content-bar">
                    <div class="exchange">
                        <p class="title">Exchange</p>
                        <div class="points">
                            <p>
                                <img src="/assets/icons/star.svg" alt="star" />
                                Current points
                            </p>
                            <span class="q">7000</span>
                        </div>
                        <div class="cost">
                            <p>The Exchange will cost</p>
                            <span class="co">4000</span>
                        </div>
                        <div class="icon-bottom">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 8.4 15.1"
                            >
                                <g
                                    id="chevron-down"
                                    transform="translate(4.376 7.55) rotate(180)"
                                >
                                    <path
                                        id="chevron-down-2"
                                        data-name="chevron-down"
                                        d="M0,6.348,6.348,0,12.7,6.348"
                                        transform="translate(-6.348 -3.174)"
                                        fill="none"
                                        stroke="#FFBC35"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.7"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="receive">
                        <p class="title">Receive</p>
                        <div class="cash">
                            <p>Cash</p>
                            <span class="ca">$80</span>
                        </div>
                        <div class="value">
                            <input
                                type="range"
                                name="value"
                                min="0"
                                max="100"
                                value="10"
                                step="1"
                            />
                        </div>
                    </div>
                    <BookInBars
                        text="Redeem Points"
                        @click.native="setFlow(3)"
                        style="
                            box-shadow: 0 10px 20px rgba(155, 84, 15, 0.25);
                            border: none;
                            color: #000;
                        "
                    />
                </div>
            </div>
            <div class="bottom-bar">
                <span class="back" @click="setFlow(0)">Back</span>
            </div>
        </div>
        <div class="flow redeem-points-confirm" data-flow="3">
            <div class="u-wrapper">
                <div class="topbar">
                    <p class="title">REEDEM POINTS</p>
                    <span class="close" @click="closeTab">&#10005;</span>
                </div>
                <div class="content-bar">
                    <div class="exchange">
                        <p class="title">Exchange</p>
                        <div class="points">
                            <p>
                                <img src="/assets/icons/star.svg" alt="star" />
                                Points
                            </p>
                            <span class="q">-4000</span>
                        </div>
                        <div class="cost">
                            <p>After Exchange</p>
                            <span class="co">2000</span>
                        </div>
                    </div>
                    <div class="receive">
                        <p class="title">Receive</p>
                        <div class="cash">
                            <p>Cash</p>
                            <span class="ca">$80</span>
                        </div>
                    </div>
                    <BookInBars
                        text="DONE"
                        @click.native="redeem()"
                        style="
                            box-shadow: 0 10px 20px rgba(155, 84, 15, 0.25);
                            border: none;
                            color: #000;
                        "
                    />
                    <!-- no action -->
                </div>
            </div>
            <div class="bottom-bar">
                <span class="back" @click="setFlow(2)">Back</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import BookInBars from "../buttons/bookInBars";
import SecondaryBtn from "../buttons/secondaryBtn";
import Color from "../colorBox";

export default {
    name: "ShopingCart",
    data(){
        return{
            quantity: 1,
        }
    },
    components: {
        BookInBars,
        SecondaryBtn,
        Color
    },
    watch: {
        getCart() {
            this.cart = this.getCart;
        }
    },
    data() {
        return {
            cart: null
        };
    },
    methods: {
        ...mapActions("User", ["receiveCart"]),
        ...mapActions("Cart", ["removeFromCart",'addQuantity', 'removeQuantity',"setCartItems"]),
        closeTab() {
            let cart = document.querySelector(".shoping-cart");
            cart.classList.remove("active");
            document.body.classList.remove("no-scroll");
            this.restartTabs(0);
        },
        restartTabs(set) {
            let flows = document
                .querySelector(".shoping-cart")
                .querySelectorAll(".flow");
            flows.forEach(flow => flow.classList.remove("active-tab"));
            if (set != undefined) {
                if (set >= flows.length) {
                    set = 0;
                }
                flows.forEach(flow =>
                    flow.getAttribute("data-flow") == set
                        ? flow.classList.add("active-tab")
                        : 0
                );
            }
        },
        setFlow(index) {
            this.restartTabs(index);
        },
        redeem() {
            this.closeTab();
        }
    },
    computed: {
        ...mapGetters("User", ["getCart"]),
        ...mapGetters("Menus", ["getDomain"]),
        ...mapGetters("Cart", ['getCartItems', 'getTotalAmount'])
    },
    mounted() {
        this.receiveCart(0).then(() => {
            // console.log("this is card:", this.getCart);
            this.cart = this.getCart;
        });
        // this.setCartItems()
        // this.getCartItems()
        this.cart = this.getCart;
        this.restartTabs(0);
    }
};
</script>

<style lang="scss" scoped>
.shoping-cart {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 360px;
    height: 100%;
    transform: translateX(100%);
    transition: 0.3s;
    display: block;
    background-color: #fff;
    font-family: "Config Condensed";
    box-shadow: none;
    z-index: 99998;
    box-sizing: border-box;
    &.active {
        transform: translateX(0%);
        box-shadow: 0 15px 100px rgba(0, 0, 0, 0.15);
    }
    .redeem-points,
    .redeem-points-confirm {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .content-bar {
            padding: 20px 24px;
            .exchange,
            .receive {
                font-family: "Config Condensed";
                display: flex;
                flex-direction: column;
                margin: 20px 0;
                padding: 12px;
                .title {
                    font-size: 18px;
                    color: rgba(0, 0, 0, 0.6);
                }
                .points,
                .cash {
                    display: flex;
                    justify-content: space-between;
                    font-family: "Prompt";
                    align-items: center;
                    margin: 20px 0;
                    p {
                        white-space: nowrap;
                        font-weight: 500;
                        font-size: 18px;
                        display: flex;
                        align-items: center;
                    }
                    span.q,
                    span.ca {
                        font-weight: 500;
                        font-size: 20px;
                    }
                }
            }
            .exchange {
                position: relative;
                .icon-bottom {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    background-color: #fff;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    left: calc(50% - 20px);
                    bottom: -30px;
                }
                .points {
                    p {
                        img {
                            width: 20px;
                            height: 20px;
                            margin-right: 8px;
                        }
                    }
                }
                .cost {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    p {
                        font-size: 18px;
                        color: rgba(0, 0, 0, 0.6);
                    }
                    span.co {
                        font-weight: 600;
                        color: rgba(0, 0, 0, 0.6);
                    }
                }
            }
        }
    }
    .redeem-points-confirm {
        .exchange {
            &:after {
                content: "";
                bottom: -12px;
                position: absolute;
                width: calc(100% - 24px);
                height: 1px;
                background-color: rgba($color: #ffa700, $alpha: 0.15);
            }
        }
    }
    .redeem-points {
        .exchange,
        .receive {
            background-color: #fff;
            box-shadow: 0 3px 30px rgba($color: #000000, $alpha: 0.1);
        }
        .receive {
            .value {
                input[type="range"] {
                    width: calc(100% - 40px);
                    margin: 6px auto;
                    display: block;
                    position: relative;
                    background-color: transparent;
                    -webkit-appearance: none;
                    &::before,
                    &::after {
                        line-height: 6px;
                        font-family: "Config Condensed";
                        font-weight: 600;
                        font-size: 16px;
                        position: absolute;
                    }
                    &::before {
                        content: "Min";
                        left: -24px;
                    }
                    &::after {
                        content: "Max";
                        right: -26px;
                        color: #ffbc35;
                    }
                    &:focus {
                        outline: none;
                    }
                    &::-webkit-slider-runnable-track {
                        background: rgba(255, 188, 53, 0.6);
                        border: 1px solid rgba(0, 0, 0, 0.1);
                        border-radius: 25px;
                        width: 100%;
                        height: 8px;
                        cursor: pointer;
                    }
                    &::-webkit-slider-thumb {
                        margin-top: -7px;
                        width: 20px;
                        height: 20px;
                        background: #ffbc35;
                        border: 1px solid rgba(0, 0, 0, 0.5);
                        border-radius: 50px;
                        cursor: pointer;
                        -webkit-appearance: none;
                    }
                    &:focus::-webkit-slider-runnable-track {
                        background: #ffd072;
                    }
                    &::-moz-range-track {
                        background: rgba(255, 188, 53, 0.6);
                        border: 1px solid rgba(0, 0, 0, 0.1);
                        border-radius: 25px;
                        width: 100%;
                        height: 8px;
                        cursor: pointer;
                    }
                    &::-moz-range-thumb {
                        width: 20px;
                        height: 20px;
                        background: #ffbc35;
                        border: 1px solid rgba(0, 0, 0, 0.5);
                        border-radius: 50px;
                        cursor: pointer;
                    }
                    &::-ms-track {
                        background: transparent;
                        border-color: transparent;
                        border-width: 6px 0;
                        color: transparent;
                        width: 100%;
                        height: 8px;
                        cursor: pointer;
                    }
                    &::-ms-fill-lower {
                        background: #f7a500;
                        border: 1px solid rgba(0, 0, 0, 0.1);
                        border-radius: 50px;
                    }
                    &::-ms-fill-upper {
                        background: rgba(255, 188, 53, 0.6);
                        border: 1px solid rgba(0, 0, 0, 0.1);
                        border-radius: 50px;
                    }
                    &::-ms-thumb {
                        width: 20px;
                        height: 20px;
                        background: #ffbc35;
                        border: 1px solid rgba(0, 0, 0, 0.5);
                        border-radius: 50px;
                        cursor: pointer;
                        margin-top: 0px;
                    }
                    &:focus::-ms-fill-lower {
                        background: rgba(255, 188, 53, 0.6);
                    }
                    &:focus::-ms-fill-upper {
                        background: #ffd072;
                    }
                }
                @supports (-ms-ime-align: auto) {
                    input[type="range"] {
                        margin: 0;
                    }
                }
            }
        }
    }
    .gift-card {
        font-family: "Prompt";
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .content-bar {
            padding: 46px 16px;
            .head {
                font-weight: 500;
            }
            .under {
                font-weight: 300;
            }
            input {
                background: #dddddd;
                border: 0.5px solid rgba($color: #8f8e8e, $alpha: 0.7);
                border-radius: 5px;
                height: 28px;
                width: 230px;
                margin-top: 14px;
                padding: 2px 8px;
                font-family: "Prompt";
            }
        }
    }
    .bag {
        font-family: "Config Condensed";
        .bottom-bar {
            padding: 0 16px;
        }
        .otheropts {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            padding: 0 16px;
            border-bottom: 1px solid rgba($color: #707070, $alpha: 0.3);
            span {
                font-weight: 500;
                font-size: 18px;
                padding: 12px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                img {
                    width: 18px;
                    height: 18px;
                }
            }
        }
        .cart {
            font-family: "Prompt";
            .item {
                display: flex;
                padding: 12px 16px;
                border-bottom: 1px solid rgba($color: #707070, $alpha: 0.3);
                .outer {
                    display: flex;
                    align-items: center;
                    .img-wrapper {
                        width: 110px;
                        height: 110px;
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
                .remove {
                    cursor: pointer;
                    margin-left: 8px;
                }
                .details {
                    display: flex;
                    flex-direction: column;
                    padding-left: 8px;
                    .item-title {
                        font-weight: 500;
                        font-size: 14px;
                    }
                    .price {
                        font-weight: 500;
                        font-size: 14px;
                    }
                    .quantity-show {
                        font-size: 14px;
                        color: #2c2d33c9;
                        margin-top: 8px;
                    }
                    .colour {
                        font-size: 14px;
                        color: #2c2d33c9;
                        display: flex;
                        align-items: center;
                        .color {
                            margin-left: 8px;
                        }
                    }
                    .number-input {
                        margin-top: 8px;
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
        }
    }
    .flow {
        background-color: #fff;
        overflow-y: scroll;
        overflow-x: hidden;
        top: 0;
        bottom: 0;
        width: 100%;
        padding: 8px 0;
        box-sizing: border-box;
        transition: 0.2s;
        transform: translateX(100%);
        position: absolute;
        /* width */
        &::-webkit-scrollbar {
            width: 8px;
        }
        /* Track */
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: rgba($color: #f0a210, $alpha: 0.3);
        }
        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: rgba($color: #f0a210, $alpha: 0.5);
        }
        &.active-tab {
            transform: translateX(0);
        }
        .topbar {
            font-family: "Config Condensed";
            padding: 0 16px 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid rgba($color: #707070, $alpha: 0.3);
            position: relative;
            .title {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                margin-left: auto;
                font-weight: 500;
                font-size: 20px;
                text-transform: uppercase;
            }
            span.close {
                margin-left: auto;
                cursor: pointer;
                font-size: 20px;
                font-weight: 900;
            }
        }
        .bottom-bar {
            font-family: "Config Condensed";
            box-sizing: border-box;
            width: 100%;
            align-items: center;
            margin-bottom: 16px;
            height: 25px;
            line-height: 25px;
            padding-left: 16px;
            padding-right: 16px;
            .back {
                font-size: 20px;
                font-weight: 600;
                cursor: pointer;
                float: left;
                margin-left: 12px;
                position: relative;
                &::after {
                    content: url("/assets/icons/next.svg");
                    position: absolute;
                    left: -12px;
                    font-size: 26px;
                    line-height: 29px;
                    transform: rotate(180deg);
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .flow {
        margin-bottom: 70px;
    }
}

@media screen and (max-width: 400px) {
    .shoping-cart {
        width: 100% !important;
    }
}
</style>
