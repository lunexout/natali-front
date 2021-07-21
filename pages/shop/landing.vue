<template>
    <div class="shop">
        <!-- <div class="filter-bar">
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
        </div> -->
        <NewsSlider :news="getAllNews" branch="shop"/>
        <Poster
            img="/assets/img/poster.png"
            :data="{ tag: 'nataligroup', title: 'nataligroup' }"
        />
        <ProductSlider :products="getAllProducts" />
        <Poster
            img="/assets/img/poster.png"
            :data="{ tag: 'nataligroup', title: 'nataligroup' }"
        />
        <p
            style="
                font-family: 'Prompt';
                text-align: center;
                margin: 24px 0 0;
                font-size: 26px;
            "
        >
            TOP SELLERS
        </p>
        <ImagesSlider :slides="slides" dots="bullets" />
        <Poster
            img="/assets/img/poster.png"
            :data="{ tag: 'nataligroup', title: 'nataligroup' }"
        />
        <PressSlider />
        <ProductOfferSliderLanding />
    </div>
</template>

<script>
import NewsSlider from "../../components/medium/newsSlider";
import Poster from "../../components/medium/poster";
import ProductSlider from "../../components/medium/productSlider";
import ImagesSlider from "../../components/small/imagesSlider";
import PressSlider from "../../components/medium/pressSlider";
import ProductOfferSliderLanding from "../../components/medium/productOfferSliderLanding";
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "Shop",
    components: {
        NewsSlider,
        Poster,
        ProductSlider,
        ImagesSlider,
        PressSlider,
        ProductOfferSliderLanding,
    },
    data() {
        return {
            slides: [
                "/assets/img/pn.png",
                "/assets/img/pressnews.png",
                "/assets/img/pn.png",
                "/assets/img/pressnews.png",
                "/assets/img/pn.png",
                "/assets/img/pressnews.png",
            ],
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
        ...mapActions("Products", ["receiveAllProducts"]),
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
        ...mapActions("News", ["receiveAllNews"]),

    },
    computed: {
        ...mapGetters("Products", ["getAllProducts"]),
        ...mapGetters("News", ["getAllNews"]),

    },
    created: function () {
        this.activeSectionName = this.catList[0].name;
    },
    mounted() {
        this.receiveAllProducts(0);
        this.receiveAllNews(0);

    },
};
</script>

<style lang="scss" scoped>
.filter-bar {
    transition: 0.4s;
    padding: 0 16px;
    height: 100px;
    border-bottom: 2px solid rgba($color: #707070, $alpha: 0.3);
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    &.active {
        height: unset !important;
    }
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
</style>