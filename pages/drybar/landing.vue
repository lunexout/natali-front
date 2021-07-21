<template>
    <div class="drybar">
        <!-- filter -->
        <NewsSlider :news="getAllNews" branch="drybar" />
        <PosterVideo
            img="/assets/img/poster.png"
            :data="{ tag: 'nataligroup', title: 'nataligroup' }"
            videoLink="https://www.youtube.com/watch?v=Mysshd3GyDI"
        />
        <ProductSlider :branch_id="29" :branch_link="`drybar`" :products="getAllProducts" />
        <PosterVideo
            img="/assets/img/poster.png"
            :data="{ tag: 'nataligroup', title: 'nataligroup' }"
            videoLink="https://www.youtube.com/watch?v=Mysshd3GyDI"
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
        <PosterVideo
            img="/assets/img/poster.png"
            :data="{ tag: 'nataligroup', title: 'nataligroup' }"
            videoLink="https://www.youtube.com/watch?v=Mysshd3GyDI"
        />
        <PressSlider />
        <ProductOfferSliderLanding />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import NewsSlider from "../../components/medium/newsSlider";
import PosterVideo from "../../components/medium/posterVideo";
import ProductSlider from "../../components/medium/productSlider";
import ImagesSlider from "../../components/small/imagesSlider";
import PressSlider from "../../components/medium/pressSlider";
import ProductOfferSliderLanding from "../../components/medium/productOfferSliderLanding";

export default {
    name: "Drybar",
    components: {
        NewsSlider,
        PosterVideo,
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
        };
    },
    computed: {
        ...mapGetters("News", ["getAllNews"]),
        ...mapGetters("Press", ["getAllPress"]),
        ...mapGetters("Products", ["getAllProducts"]),
    },
    methods: {
        ...mapActions("News", ["receiveAllNews"]),
        ...mapActions("Press", ["receiveAllPress"]),
        ...mapActions("Products", ["receiveAllProducts"]),
    },
    mounted() {
        this.receiveAllNews(0);
        this.receiveAllProducts(29);
        this.receiveAllPress(0);
    },
};
</script>

<style lang="scss" scoped>
</style>