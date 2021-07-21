<template>
    <div class="nataliespa">
        <Poster img="/assets/img/poster.png" />
        <NewsSlider :news="getAllNews" branch="nataliespa" />
        <PosterVideo
            img="/assets/img/poster.png"
            :data="{ tag: 'nataligroup', title: 'nataligroup' }"
            videoLink="https://www.youtube.com/watch?v=Mysshd3GyDI"
        />
        <ServicesSliderSwitch />
        <OffersSlider />
        <ProductSlider :products="getAllProducts" />
        <BrandsSlider title="Brands" :brandList="getAllBrands" />
        <PressSlider :newsList="getAllPress" branch="natalispa" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Poster from "../../components/medium/poster";
import NewsSlider from "../../components/medium/newsSlider";
import PosterVideo from "../../components/medium/posterVideo";
import ServicesSliderSwitch from "../../components/medium/servicesSliderSwitch";
import OffersSlider from "../../components/medium/offersSlider";
import ProductSlider from "../../components/medium/productSlider";
import BrandsSlider from "../../components/medium/brandsSlider";
import PressSlider from "../../components/medium/pressSlider";

export default {
    name: "NataliespaLanding",
    components: {
        Poster,
        NewsSlider,
        PosterVideo,
        ServicesSliderSwitch,
        OffersSlider,
        ProductSlider,
        BrandsSlider,
        PressSlider
    },
    data() {
        return {
            //
        };
    },
    methods: {
        ...mapActions("Press", ["receiveAllPress"]),
        ...mapActions("News", ["receiveAllNews"]),
        ...mapActions("Brands", ["receiveAllBrands"]),
        ...mapActions("Products", ["receiveAllProducts"])
    },
    computed: {
        ...mapGetters("Press", ["getAllPress"]),
        ...mapGetters("News", ["getAllNews"]),
        ...mapGetters("Brands", ["getAllBrands"]),
        ...mapGetters("Products", ["getAllProducts"])
    },
    mounted() {
        this.receiveAllPress(0);
        this.receiveAllNews(0);
        this.receiveAllBrands(0);
        this.receiveAllProducts(0);
    }
};
</script>

<style lang="scss" scoped></style>
