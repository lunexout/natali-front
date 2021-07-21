<template>
    <div class="wellness-salon">
        <Poster img="/assets/img/poster.png" :data="posterData" />
        <OfferSlider />
        <Poster img="/assets/img/poster.png" />
        <ServicesSlider />
        <GallerySlider />
        <PressSlider />
    </div>
</template>

<script>
import Poster from "../../components/medium/poster";
import OfferSlider from "../../components/medium/offersSlider";
import ServicesSlider from "../../components/medium/servicesSlider";
import GallerySlider from "../../components/medium/gallerySlider";
import PressSlider from "../../components/medium/pressSlider";

export default {
    name: "Salon",
    components: {
        Poster,
        OfferSlider,
        ServicesSlider,
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