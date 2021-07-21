<template>
    <div class="spa-concept-landing">
        <Media v-if="getAllMedia" :oneMedia="getAllMedia[0]" />
        <NewsSlider :news="getAllNews" branch="dist" />
        <BrandsSlider title="Brands" :brandList="getAllBrands" />
        <!--  -->
        <UpcomingSeminars v-if="getAllSeminars" :data="getAllSeminars" />
        <SpaDistProductsLanding />
        <GallerySlider />
        <PressSlider :newsList="getAllPress" branch="spa" />
        <!--  -->
        <TestimonialsSlider branchId="0" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Media from "../../components/medium/media";
import BrandsSlider from "../../components/medium/brandsSlider";
import SpaDistProductsLanding from "../../components/big/spaDistProductsLanding";
import PressSlider from "../../components/medium/pressSlider";
import NewsSlider from "../../components/medium/newsSlider";
import UpcomingSeminars from "../../components/medium/upcomingSeminar";
import GallerySlider from "../../components/medium/gallerySlider";
import TestimonialsSlider from "../../components/medium/testimonialsSlider";

export default {
    name: "DistributionLanding",
    components: {
        Media,
        BrandsSlider,
        SpaDistProductsLanding,
        PressSlider,
        NewsSlider,
        UpcomingSeminars,
        GallerySlider,
        TestimonialsSlider,
    },
    data() {
        return {
            //
        };
    },
    computed: {
        ...mapGetters("News", ["getAllNews"]),
        ...mapGetters("Press", ["getAllPress"]),
        ...mapGetters("General", ["getAllMedia"]),
        ...mapGetters("Brands", ["getAllBrands"]),
        ...mapGetters("Academy", ["getAllSeminars"]),
    },
    methods: {
        ...mapActions("News", ["receiveAllNews"]),
        ...mapActions("Press", ["receiveAllPress"]),
        ...mapActions("General", ["receiveAllMedia"]),
        ...mapActions("Brands", ["receiveAllBrands"]),
        ...mapActions("Academy", ["receiveAllSeminars"]),
    },
    mounted() {
        this.receiveAllPress(0);
        this.receiveAllNews(0);
        this.receiveAllMedia(0);
        this.receiveAllBrands(0);
        this.receiveAllSeminars();
    },
};
</script>

<style lang="scss" scoped>
</style>
