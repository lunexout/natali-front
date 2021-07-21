<template>
    <div class="antiage-salon">
        <Poster img="/assets/img/poster.png" :data="posterData" />
        <OfferSlider />
        <Poster img="/assets/img/poster.png" />
        <ServicesSliderSwitch />
        <GallerySlider />
        <PressSlider />
    </div>
</template>

<script>
import Poster from "../../components/medium/poster";
import OfferSlider from "../../components/medium/offersSlider";
import ServicesSliderSwitch from "../../components/medium/servicesSliderSwitch";
import GallerySlider from "../../components/medium/gallerySlider";
import PressSlider from "../../components/medium/pressSlider";

export default {
    name: "Salon",
    components: {
        Poster,
        OfferSlider,
        ServicesSliderSwitch,
        GallerySlider,
        PressSlider,
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
};
</script>

<style lang="scss" scoped>
</style>