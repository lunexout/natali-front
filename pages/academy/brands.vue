<template>
    <div class="brands">
        <BrandsSlider title="Partners" :brandList="getAllBrands" />
        <GallerySlider />
        <div class="t-box container">
            <h3 class="title">Summer Vacation Fragrance Mist</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                eos impedit ea facere tempora recusandae reiciendis dignissimos
                voluptate, dolorum sapiente fugit sed minus! Voluptatem delectus
                soluta sint, excepturi cupiditate nam?
            </p>
            <span class="readmore">Read more</span>
        </div>
        <GallerySlider />
        <div class="t-box container">
            <h3 class="title">Summer Vacation Fragrance Mist</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                eos impedit ea facere tempora recusandae reiciendis dignissimos
                voluptate, dolorum sapiente fugit sed minus! Voluptatem delectus
                soluta sint, excepturi cupiditate nam?
            </p>
            <span class="readmore">Read more</span>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import BrandsSlider from "../../components/medium/brandsSlider";
import GallerySlider from "../../components/medium/gallerySlider";

export default {
    name: "spaPartners",
    components: {
        BrandsSlider,
        GallerySlider,
    },
    data() {
        return {
            //
        };
    },
    computed: {
        ...mapGetters("Brands", ["getAllBrands"]),
    },
    methods: {
        ...mapActions("Brands", ["receiveAllBrands"]),
    },
    mounted() {
        this.receiveAllBrands(0);
    },
};
</script>

<style lang="scss" scoped>
.t-box {
    font-family: "Config Condensed";
    padding-bottom: 60px;
    .title {
        margin: 12px 0 12px;
        font-size: 28px;
        font-weight: 400;
    }
    p {
        max-width: 620px;
        font-size: 18px;
        margin-bottom: 12px;
    }
    .readmore {
        cursor: pointer;
        font-size: 20px;
        font-weight: 300;
    }
}
</style>