<template>
    <div class="products-page">
        <div class="filter-bar">
            <span class="fil" @click="filter($event)">Offers</span>
            <div class="inner-box">
                <div
                    class="cat-box"
                    v-for="(cat, index) of catList"
                    :key="index"
                >
                    <span
                        @click="spanActive($event, cat.name)"
                        :class="[
                            {
                                active: index == 0,
                            },
                        ]"
                        >{{ cat.name }}</span
                    >
                </div>
            </div>
        </div>
        <div class="big-filter container" v-if="false">
            <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                    <div class="sec-box">
                        <p class="sec-title">Day cream</p>
                        <span>Day cream</span>
                        <span>Night cream</span>
                        <span>Serum</span>
                        <span>Make-up removal</span>
                        <span>Peeling</span>
                        <span>Care paragraph</span>
                        <span>Sets</span>
                        <span>Bestsellers</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                    <div class="sec-box">
                        <p class="sec-title">Day cream</p>
                        <span>Day cream</span>
                        <span>Night cream</span>
                        <span>Serum</span>
                        <span>Make-up removal</span>
                        <span>Peeling</span>
                        <span>Care paragraph</span>
                        <span>Sets</span>
                        <span>Bestsellers</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                    <div class="sec-box">
                        <p class="sec-title">Day cream</p>
                        <span>Day cream</span>
                        <span>Night cream</span>
                        <span>Serum</span>
                        <span>Make-up removal</span>
                        <span>Peeling</span>
                        <p class="sec-title second">Day cream</p>
                        <span>Day cream</span>
                        <span>Night cream</span>
                        <span>Serum</span>
                        <span>Make-up removal</span>
                        <span>Peeling</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                    <div class="sec-box">
                        <p class="sec-title">Day cream</p>
                        <span>Day cream</span>
                        <span>Night cream</span>
                        <span>Serum</span>
                        <span>Make-up removal</span>
                        <span>Peeling</span>
                        <p class="sec-title second">Day cream</p>
                        <span>Day cream</span>
                        <span>Night cream</span>
                        <span>Serum</span>
                        <span>Make-up removal</span>
                        <span>Peeling</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="img-wrapper">
                        <img src="/assets/img/poster.png" alt="filterPoster" />
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="wrpr">
            <div class="product-section">
                <div class="product-list">
                    <span class="path"
                        >Day cream / Night cream / Serum / Sets</span
                    >
                    <div class="row">
                        <div
                            class="col-lg-4 col-md-6 col-sm-6 col-xs-12 nopadding"
                        >
                            <div class="poster p-box">
                                <img
                                    src="/assets/img/poster.png"
                                    alt="poster"
                                />
                                <div class="info">
                                    <p class="title">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                    <span class="shopnow">show now</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-4 col-md-6 col-sm-6 col-xs-12 nopadding"
                            v-for="(prod, index) in getAllProducts"
                            :key="index"
                        >
                            <div class="p-box">
                                <ShopProduct :oneProduct="prod" />
                            </div>
                        </div>
                        <div
                            class="col-lg-4 col-md-6 col-sm-6 col-xs-12 nopadding"
                        >
                            <div class="poster p-box">
                                <img
                                    src="/assets/img/poster.png"
                                    alt="poster"
                                />
                                <div class="info">
                                    <p class="title">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                    <span class="shopnow">show now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="filter-section"
                    :class="[
                        {
                            active: filterState,
                        },
                    ]"
                >
                    <span class="close" @click="filterState = !filterState"
                        ><span v-if="filterState">Close</span>
                        <span v-else>Open</span>
                        filter
                        <i v-if="filterState" style="font-style: normal"
                            >&#10005;</i
                        ></span
                    >
                    <div class="filter-box">
                        <p class="head">+ Sort by</p>
                        <ul>
                            <li><span class="active">Popular</span></li>
                            <li><span>Lowest price</span></li>
                            <li><span>Largest price</span></li>
                            <li><span>A-Z</span></li>
                            <li><span>Z-A</span></li>
                        </ul>
                    </div>
                    <div class="filter-box">
                        <p class="head">+ Capacity</p>
                        <ul>
                            <li><span class="active">30 ml</span></li>
                            <li><span>40 ml</span></li>
                            <li><span>50 ml</span></li>
                            <li><span>150 ml</span></li>
                            <li><span>200 ml</span></li>
                        </ul>
                    </div>
                    <div class="filter-box">
                        <p class="head">+ Prices from - to</p>
                        <vue-range-slider
                            :tooltip-style="{
                                background: '#e0b763',
                                borderColor: '#e0b763',
                            }"
                            :process-draggable="true"
                            :use-keyboard="true"
                            :speed="0.1"
                            :process-style="{ background: '#e0b763' }"
                            v-model="value"
                            :min="min"
                            :max="max"
                            :enable-cross="enableCross"
                            class="range-compo"
                        ></vue-range-slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ShopProduct from "../../components/small/shopProduct";

import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";

export default {
    name: "ProductsPage",
    components: { ShopProduct, VueRangeSlider },
    data() {
        return {
            value: [0, 100],
            filterState: true,
            activeSectionName: "",
            catList: [
                {
                    name: "Day cream",
                },
                {
                    name: "Night cream",
                },
                {
                    name: "Serum",
                },
                {
                    name: "Eye Cream",
                },
                {
                    name: "Make-up removal",
                },
                {
                    name: "Make-up removal",
                },
                {
                    name: "Serum",
                },
                {
                    name: "Serum",
                },
            ],
        };
    },
    methods: {
        filter(event) {
            event.target.parentNode.classList.toggle("active");
        },
        spanActive(event, name) {
            event.target.parentNode.parentNode
                .querySelectorAll(".cat-box span")
                .forEach((elem) => {
                    elem.classList.remove("active");
                });
            event.target.classList.toggle("active");
            this.activeSectionName = name;
        },

        ...mapActions("Products", ["receiveAllProducts"]),
    },
    computed: {
        ...mapGetters("Products", ["getAllProducts"]),
    },
    mounted() {
        this.receiveAllProducts(0);
    },
    created: function () {
        this.activeSectionName = this.catList[0].name;
        this.min = 0;
        this.max = 250;
        this.enableCross = false;
    },
};
</script>

<style lang="scss" scoped>
.wrpr {
    border-top: 1px solid lightgrey;
}
.product-section {
    font-family: "Prompt";
    display: flex;
    padding: 0 0 12px;
    max-width: 1200px;
    margin: 0 auto;
    .product-list {
        width: 100%;
        padding: 12px 12px 0;
        box-sizing: border-box;
        .path {
            padding: 0 0 0 8px;
            margin-bottom: 10px;
            display: block;
        }
        .p-box {
            position: relative;
            padding: 16px 0;
            box-sizing: border-box;
            width: 312px;
            margin: 0 auto;
        }
        .poster {
            height: 500px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .info {
                padding: 0 24px;
                box-sizing: border-box;
                color: #fff;
                position: absolute;
                top: 50%;
                width: 100%;
                .title {
                    font-size: 20px;
                    margin-bottom: 16px;
                    font-family: "Playfair Display";
                }
                .shopnow {
                    position: relative;
                    cursor: pointer;
                    &::after {
                        content: "";
                        position: absolute;
                        background-color: #fff;
                        width: 100%;
                        height: 2px;
                        bottom: 0;
                        left: 0;
                        right: 0;
                    }
                }
            }
        }
    }
    .filter-section {
        width: 30px;
        padding: 12px 16px 12px 0;
        box-sizing: border-box;
        border-left: 1px solid lightgray;
        transition: 0.3s;
        &.active {
            width: 320px;
            padding: 12px 16px 12px 32px;
            .filter-box {
                display: block;
            }
            .close {
                transform-origin: 100% center;
                transform: translateX(0) rotate(0);
            }
        }
        .filter-box {
            margin-bottom: 8px;
            display: none;
            .head {
                white-space: nowrap;
                font-weight: 500;
                font-size: 20px;
                margin-bottom: 8px;
            }
            .range-compo {
                margin-top: 40px;
            }
            ul {
                padding: 0 0 0 20px;
                list-style: none;
                li {
                    span {
                        cursor: pointer;
                        &.active {
                            color: #e0b763;
                        }
                    }
                }
            }
        }
        .close {
            margin: 0 auto;
            text-align: center;
            padding-bottom: 8px;
            cursor: pointer;
            white-space: nowrap;
            display: block;
            color: #e0b763;
            transform-origin: 100% center;
            transform: translateX(-89%) rotate(-90deg);
            width: 160px;
            font-size: 20px;
        }
    }
}

@media screen and (max-width: 1024px) {
    .product-section {
        flex-direction: column-reverse;
        .filter-section {
            border: none;
            margin: 0 auto;
            padding: 12px 16px 12px 16px;
            width: 320px;
            &.active {
                .filter-box {
                    display: block;
                }
            }
            .close {
                transform-origin: 100% center;
                transform: translateX(0) rotate(0);
            }
        }
    }
}

.big-filter {
    .sec-box {
        font-family: "Prompt";
        display: flex;
        flex-direction: column;
        .sec-title {
            padding: 8px 0;
            font-weight: 400;
            &.second {
                margin-top: 10px;
            }
        }
        span {
            font-weight: 300;
            padding: 6px 0;
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

.filter-bar {
    transition: 0.4s;
    padding: 0 16px;
    height: 100px;
    border-bottom: 2px solid rgba($color: #707070, $alpha: 0.3);
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    .fil {
        display: flex;
        width: 140px;
        height: 80px;
        border: 1px solid #e0b763;
        margin: auto 0;
        justify-content: center;
        align-items: center;
        color: #e0b763;
        font-weight: 500;
        font-family: "Prompt";
        text-align: center;
        font-size: 20px;
    }
    .inner-box {
        height: 100%;
        max-width: 1100px;
        // margin: 0 auto;
        width: 80%;
        display: flex;
        justify-content: center;
        .cat-box {
            height: 100%;
            cursor: pointer;
            margin: 0 auto;
            span {
                position: relative;
                bottom: -2px;
                box-sizing: border-box;
                white-space: nowrap;
                font-family: "Prompt";
                color: #424242;
                height: 100%;
                width: 100%;
                line-height: 100px;
                display: block;
                border-bottom: 2px solid transparent;
                &.active {
                    color: #e0b763;
                    border-bottom-color: #e0b763;
                }
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .big-filter {
        .img-wrapper {
            // height: 240px;
            display: none;
        }
    }
}

@media screen and (max-width: 1100px) {
    .filter-bar {
        overflow: hidden !important;
        height: 50px !important;
        display: block;
        &.active {
            height: unset !important;
        }
        .fil {
            display: block;
            height: 50px;
            line-height: 50px;
            cursor: pointer;
            border: none;
            margin: 0 auto;
            border-bottom: 1px solid #e0b763;
            width: 100%;
        }
        .inner-box {
            flex-direction: column !important;
            justify-content: flex-start !important;
            .cat-box {
                height: 50px !important;
                margin: unset !important;
                span {
                    border-bottom: unset !important;
                    line-height: 50px !important;
                }
            }
        }
    }
}

@media screen and (max-width: 400px) {
    .p-box {
        width: 100% !important;
    }
}
</style>