<template>
    <div class="become-distributor">
        <Media v-if="getAllMedia" :oneMedia="getAllMedia[0]" />
        <!--  -->
        <FormPosterAcademy />
        <!-- Consulting -->
        <FormPosterAcademyCenter />
        <BrandsSlider title="Brands" :brandList="getAllBrands" />
        <OfferSlider />
        <PressSlider :newsList="getAllPress" branch="spa" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Media from "../../components/medium/media";
import FormPosterAcademy from "../../components/big/formPosterAcademy";
import FormPosterAcademyCenter from "../../components/big/formPosterAcademyCenter";
import BrandsSlider from "../../components/medium/brandsSlider";
import PressSlider from "../../components/medium/pressSlider";
import OfferSlider from "../../components/medium/offersSlider";

export default {
    name: "BecomeDist",
    components: {
        Media,
        FormPosterAcademy,
        FormPosterAcademyCenter,
        BrandsSlider,
        PressSlider,
        OfferSlider,
    },
    data() {
        return {
            //
        };
    },
    computed: {
        ...mapGetters("Press", ["getAllPress"]),
        ...mapGetters("General", ["getAllMedia"]),
        ...mapGetters("Brands", ["getAllBrands"]),
    },
    methods: {
        ...mapActions("Press", ["receiveAllPress"]),
        ...mapActions("General", ["receiveAllMedia"]),
        ...mapActions("Brands", ["receiveAllBrands"]),
    },
    mounted() {
        this.receiveAllPress(0);
        this.receiveAllMedia(0);
        this.receiveAllBrands(0);
    },
};
</script>

<style lang="scss" scoped>
</style>