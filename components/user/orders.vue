<template>
    <div class="orders">
        <div class="top-bar">
            <span :class="{ active: section == 0 }" @click="section = 0"
                >Past orders</span
            >
        </div>
        <div class="content">
            <div class="order" v-for="(order, index) of [1, 2]" :key="index">
                <p class="order-number">Order #12345</p>
                <swiper
                    ref="orderSlider"
                    :options="swiperOptions"
                    style="padding: 14px 0"
                >
                    <swiper-slide
                        v-for="(prod, prodindex) of [1, 2, 3, 4]"
                        :key="prodindex"
                    >
                        <div class="order-box">
                            <img src="/assets/img/Clip.png" alt="order" />
                            <p class="order-title">Lorem ipsum dolor sit.</p>
                            <span class="order-desc"
                                >Lorem ipsum dolor sit amet consectetur.</span
                            >
                            <span class="price">$80</span>
                        </div>
                    </swiper-slide>
                    <div
                        class="swiper-button-prev"
                        slot="button-prev"
                        style="left: -8px"
                    ></div>
                    <div
                        class="swiper-button-next"
                        slot="button-next"
                        style="right: -8px"
                    ></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "orders",
    data() {
        return {
            section: 0,
            swiperOptions: {
                // loop: true,

                slidesPerView: 2.5,

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    535: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 1.5,
                    },
                    1075: {
                        slidesPerView: 2,
                    },
                    1250: {
                        slidesPerView: 2.5,
                    },
                },

                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.orders {
    .top-bar {
        box-shadow: 0 3px 12px -12px grey;
        height: 50px;
        display: flex;
        // justify-content: space-around;
        align-items: center;
        span {
            margin: 0 20px;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 12px;
            box-sizing: border-box;
            cursor: pointer;
            font-weight: 500;
            border-bottom: 2px solid transparent;
            &.active,
            &:hover {
                border-bottom: 2px solid #f7bf51b7;
            }
        }
    }
    .content {
        .order {
            background-color: rgba(211, 211, 211, 0.452);
            padding: 20px;
            margin: 20px;
            box-sizing: border-box;
            .order-box {
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    max-width: 200px;
                    height: 200px;
                    object-fit: cover;
                }
                .order-title {
                    text-transform: uppercase;
                    display: block;
                    font-weight: 500;
                    text-transform: uppercase;
                    font-size: 17px;
                    padding-top: 8px;
                }
                .order-desc {
                    color: rgba(0, 0, 0, 0.7);
                    padding: 0 8px;
                    text-align: center;
                }
                .price {
                    padding-top: 8px;
                    display: block;
                    font-weight: 500;
                    font-size: 18px;
                }
            }
        }
    }
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 19px;
    font-weight: bold;
    color: #000;
}
</style>