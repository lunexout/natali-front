<template>
    <div class="antiage">
        <Media v-if="getAllMedia" :oneMedia="getAllMedia[0]" />
        <NewsSlider :news="getAllNews" branch="antiage" />
        <Media v-if="getAllMedia" :oneMedia="getAllMedia[1]" />
        <ServicesSlider />
        <OffersSlider />
        <ProductSlider :branch_id='31' :branch_link="`antiage`" :products="getAllProducts" />
        <BeforeAfterDuo />
        <PressSlider :newsList="getAllPress" branch="antiage" />
        <GallerySlider />
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
import GallerySlider from "../../components/medium/gallerySlider";

export default {
    name: "AntiageLanding",
    components: {
        Media,
        NewsSlider,
        ServicesSlider,
        OffersSlider,
        ProductSlider,
        BeforeAfterDuo,
        PressSlider,
        GallerySlider,
    },
    computed: {
        ...mapGetters("News", ["getAllNews"]),
        ...mapGetters("Press", ["getAllPress"]),
        ...mapGetters("Products", ["getAllProducts"]),
        ...mapGetters("General", ["getAllMedia"]),

        ...mapGetters("General", ["getOneBeforeAfter"]),
    },
    methods: {
        ...mapActions("News", ["receiveAllNews"]),
        ...mapActions("Press", ["receiveAllPress"]),
        ...mapActions("Products", ["receiveAllProducts"]),
        ...mapActions("General", ["receiveAllMedia"]),

        ...mapActions("General", ["receiveOneBeforeAfter"]),
    },
    mounted() {
        this.receiveAllPress(0);
        this.receiveAllNews(0);
        this.receiveAllProducts(31);
        this.receiveAllMedia(0);

        this.receiveOneBeforeAfter(5);
    },
};
</script>

<style lang="scss" scoped>
</style>