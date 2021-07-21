<template>
    <div class="solarium">
        <NewsSlider :news="getAllNews" branch="solarium" />
        <Poster img="/assets/img/poster.png" :data="posterData" />
        <ServicesSlider />
        <OfferSlider />
        <ProductSlider :branch_link='`solarium`' :branch_id='35' :products="getAllProducts" />
        <PressSlider :newsList="getAllPress" branch="solarium" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PressSlider from "../../components/medium/pressSlider";
import ProductSlider from "../../components/medium/productSlider";
import ServicesSlider from "../../components/medium/servicesSlider";
import OfferSlider from "../../components/medium/offersSlider";
import Poster from "../../components/medium/poster";
import NewsSlider from "../../components/medium/newsSlider";

export default {
    name: "SolariumLanding",
    components: {
        PressSlider,
        ProductSlider,
        ServicesSlider,
        OfferSlider,
        Poster,
        NewsSlider,
    },
    data() {
        return {
            posterData: {
                title: "natali group",
                tag: "natali group",
                buttonText: "Book or buy",
            },
        };
    },
    computed: {
        ...mapGetters("News", ["getAllNews"]),
        ...mapGetters("Press", ["getAllPress"]),
        ...mapGetters("General", ["getAllMedia"]),
        ...mapGetters("Products", ["getAllProducts"]),
    },
    methods: {
        ...mapActions("News", ["receiveAllNews"]),
        ...mapActions("Press", ["receiveAllPress"]),
        ...mapActions("General", ["receiveAllMedia"]),
        ...mapActions("Products", ["receiveAllProducts"]),
    },
    mounted() {
        this.receiveAllPress(0);
        this.receiveAllNews(0);
        this.receiveAllMedia(0);
        this.receiveAllProducts(35);
    },
};
</script>

<style lang="scss" scoped>
</style>