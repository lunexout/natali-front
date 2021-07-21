<template>
    <div class="spa-concept-landing">
        <Media v-if="getAllMedia" :oneMedia="getAllMedia[0]" />
        <SpaDistProductsLanding />
        <BrandsSlider title="Brands" :brandList="getAllBrands" />
        <ProjectsSlider :projectsList="projectsList" />
        <Franchize />
        <PressSlider :newsList="getAllPress" branch="spa" />
        <NewsSlider :news="getAllNews" branch="spa" />
        <Media v-if="getAllMedia" :oneMedia="getAllMedia[0]" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Media from "../../components/medium/media";
import BrandsSlider from "../../components/medium/brandsSlider";
import SpaDistProductsLanding from "../../components/big/spaDistProductsLanding";
import ProjectsSlider from "../../components/medium/projectsSlider";
import Franchize from "../../components/medium/franchize";
import PressSlider from "../../components/medium/pressSlider";
import NewsSlider from "../../components/medium/newsSlider";

export default {
    name: "Landing",
    components: {
        Media,
        BrandsSlider,
        SpaDistProductsLanding,
        ProjectsSlider,
        Franchize,
        PressSlider,
        NewsSlider,
    },
    data() {
        return {
            projectsList: [
                {
                    title: "Lorem ipsum dolor 1",
                    capt: "que arcu vehicula ipsum",
                    desc:
                        "Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam nfacilisis tincidunt posuere a massa.",
                    img: "/assets/img/servicesp.png",
                    duration: "7-8 month",
                },
                {
                    title: "Lorem ipsum dolor 2",
                    capt: "que arcu vehicula ipsum",
                    desc:
                        "Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. Proin accumsan elit ut ipsum venenatis lacinia. Praesent libero tellus, lobortis malesuada ala facilisis tincidunt posuere a massa.",
                    img: "/assets/img/servicesp.png",
                    duration: "7-8 month",
                },
                {
                    title: "Lorem ipsum dolor 3",
                    capt: "que arcu vehicula ipsum",
                    desc:
                        "Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. Proin accumsan elit ut ipsum venenatis lacinia. Praesent libero tellus, lobortis malesuada aliquet sit amet, malesuada a libero. Nulla facilisi. Nunc sed risus aliquam, rutrum urna sed, convallis augue. Duis vulputate libero in consequat elementum. Fusce et eros at urna facilisis tincidunt posuere a massa.",
                    img: "/assets/img/servicesp.png",
                    duration: "7-8 month",
                },
                {
                    title: "Lorem ipsum dolor 4",
                    capt: "que arcu vehicula ipsum",
                    desc:
                        "Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. Proin accumsan elit ut ipsum venenatis lacinia. Praesent libero tellus, lobortis malesuada aliquet sit amet, malesuada a libero. Nulla facilisi. Nunc sed risus aliquam, rutrum urna sed, convallis augue. Duis vulputate libero in consequat elementum. Fusce et eros at urna facilisis tincidunt posuere a massa.",
                    img: "/assets/img/servicesp.png",
                    duration: "7-8 month",
                },
            ],
        };
    },
    computed: {
        ...mapGetters("News", ["getAllNews"]),
        ...mapGetters("Press", ["getAllPress"]),
        // ...mapGetters("Products", ["getAllProducts"]),
        ...mapGetters("General", ["getAllMedia"]),
        ...mapGetters("Brands", ["getAllBrands"]),
    },
    methods: {
        ...mapActions("News", ["receiveAllNews"]),
        ...mapActions("Press", ["receiveAllPress"]),
        // ...mapActions("Products", ["receiveAllProducts"]),
        ...mapActions("General", ["receiveAllMedia"]),
        ...mapActions("Brands", ["receiveAllBrands"]),
    },
    mounted() {
        this.receiveAllPress(0);
        this.receiveAllNews(0);
        // this.receiveAllProducts(0);
        this.receiveAllMedia(0);
        this.receiveAllBrands(0);
    },
};
</script>

<style lang="scss" scoped>
</style>
