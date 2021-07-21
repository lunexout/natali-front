<template>
    <div class="wellness">
        <Media v-if="getAllMedia" :oneMedia="getAllMedia[0]" />
        <NewsSlider :news="getAllNews" branch="wellness" />
        <Media v-if="getAllMedia" :oneMedia="getAllMedia[1]" />
        <ServicesSlider />
        <OffersSlider />
        <ProductSlider :branch_link='`wellness`' :branch_id='30' :products="getAllProducts" />
        <BeforeAfterDuo />
        <PressSlider :newsList="getAllPress" branch="antiage" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Media from "../../components/medium/media";
import NewsSlider from "../../components/medium/newsSlider";
import ServicesSlider from "../../components/medium/servicesSlider";
import OffersSlider from "../../components/medium/offersSlider";
import ProductSlider from "../../components/medium/productSlider";
import BeforeAfterDuo from "../../components/big/beforeAfterDuo";
import PressSlider from "../../components/medium/pressSlider";

export default {
    name: "WellnessLanding",
    components: {
        Media,
        NewsSlider,
        ServicesSlider,
        OffersSlider,
        ProductSlider,
        BeforeAfterDuo,
        PressSlider,
    },
    computed: {
        ...mapGetters("News", ["getAllNews"]),
        ...mapGetters("Press", ["getAllPress"]),
        ...mapGetters("Products", ["getAllProducts"]),
        ...mapGetters("General", ["getAllMedia"]),
    },
    methods: {
        ...mapActions("News", ["receiveAllNews"]),
        ...mapActions("Press", ["receiveAllPress"]),
        ...mapActions("Products", ["receiveAllProducts"]),
        ...mapActions("General", ["receiveAllMedia"]),
    },
    mounted() {
        this.receiveAllPress(0);
        this.receiveAllNews(0);
        this.receiveAllProducts(30);
        this.receiveAllMedia(0);
    },
};
</script>

<style lang="scss" scoped>
</style>