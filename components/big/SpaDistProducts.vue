<template>
    <div class="spa-dist-products">
        <div class="filter-bar">
            <span class="fil" @click="filter($event)">Filter</span>
            <div class="inner-box">
                <div
                    class="cat-box"
                    v-for="(cat, index) of catList"
                    :key="index"
                >
                    <span @click="spanActive($event)">{{ cat.name }}</span>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="container">
                <div class="row">
                    <div
                        class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                        v-for="(el, index) in [1, 2]"
                        :key="index"
                    >
                        <OneProductSpaDist />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 nopadding">
                        <div class="product-list-poster">
                            <img
                                src="/assets/img/distposter.png"
                                alt="poster"
                            />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <OneProductSpaDist />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 nopadding">
                    <SpaConceptProductPoster />
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div
                        class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                        v-for="(el, index) in [1, 2]"
                        :key="index + _uid"
                    >
                        <!-- dublicate key error -->
                        <OneProductSpaDist />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OneProductSpaDist from "../small/oneProductSpaDist";
import SpaConceptProductPoster from "../medium/spaConceptProductPoster";

export default {
    name: "SpaDistProducts",
    components: {
        OneProductSpaDist,
        SpaConceptProductPoster,
    },
    data() {
        return {
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
        spanActive(event) {
            event.target.parentNode.parentNode
                .querySelectorAll(".cat-box span")
                .forEach((elem) => {
                    elem.classList.remove("active");
                });
            event.target.classList.toggle("active");
        },
    },
};
</script>

<style lang="scss" scoped>
.spa-dist-products {
    padding-bottom: 60px;
    .filter-bar {
        transition: 0.4s;
        padding: 0 16px;
        height: 100px;
        border-bottom: 2px solid rgba($color: #707070, $alpha: 0.3);
        box-sizing: border-box;
        &.active {
            height: unset !important;
        }
        .fil {
            color: #e0b763;
            font-weight: 500;
            font-family: "Prompt";
            text-align: center;
            display: none;
            font-size: 20px;
            height: 50px;
            line-height: 50px;
            cursor: pointer;
            border-bottom: 1px solid #e0b763;
        }
        .inner-box {
            height: 100%;
            max-width: 1100px;
            margin: 0 auto;
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
    .list {
        padding-top: 40px;
        .spa-dist-product {
            margin: 0 auto;
        }
        .product-list-poster {
            width: 100%;
            height: 100%;
            padding: 40px;
            box-sizing: border-box;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

@media screen and (max-width: 1100px) {
    .spa-dist-products {
        .filter-bar {
            overflow: hidden !important;
            height: 50px !important;
            .fil {
                display: block;
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
}

@media screen and (max-width: 1024px) {
    .product-list-poster {
        padding: 0 0 40px !important;
    }
}

@media screen and (max-width: 768px) {
    .product-list-poster {
        height: 360px !important;
        padding: 0 !important;
    }
}

@media screen and (max-width: 600px) {
    .product-list-poster {
        height: 300px !important;
    }
}

@media screen and (max-width: 450px) {
    .product-list-poster {
        height: 240px !important;
    }
}
</style>