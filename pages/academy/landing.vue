<template>
    <div class="academy-landing">
        <Media v-if="getAllMedia" :oneMedia="getAllMedia[0]" />
        <WhatWeDo />
        <ProgramsAcademy />
        <!-- Grants and scholarships -->
        <Catalogue />
        <DonationCharity />
        <PressSlider :newsList="getAllPress" branch="spa" />
        <GallerySlider />
        <TestimonialsSlider branchId="0" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Media from "../../components/medium/media";
import PressSlider from "../../components/medium/pressSlider";
import GallerySlider from "../../components/medium/gallerySlider";
import TestimonialsSlider from "../../components/medium/testimonialsSlider";

import WhatWeDo from "../../components/big/whatWeDo";
import ProgramsAcademy from "../../components/medium/programsAcademy";
import Catalogue from "../../components/medium/catalogue";
import DonationCharity from "../../components/medium/donationCharity";

export default {
    name: "AcademyLanding",
    components: {
        Media,
        PressSlider,
        GallerySlider,
        TestimonialsSlider,
        WhatWeDo,
        ProgramsAcademy,
        Catalogue,
        DonationCharity,
    },
    data() {
        return {
            //
        };
    },
    computed: {
        ...mapGetters("Press", ["getAllPress"]),
        ...mapGetters("General", ["getAllMedia"]),
    },
    methods: {
        ...mapActions("Press", ["receiveAllPress"]),
        ...mapActions("General", ["receiveAllMedia"]),
    },
    mounted() {
        this.receiveAllPress(0);
        this.receiveAllMedia(0);
    },
};
</script>

<style lang="scss" scoped>
</style>
