<template>
    <div>
        <GallerySlider />
        <GallerySlider />
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import GallerySlider from "../../components/medium/gallerySlider";

export default {
    name: "spaProjects",
    components: {
        GallerySlider,
    },
    computed: {
        // ...mapGetters("Brands", ["getAllBrands"]),
    },
    methods: {
        // ...mapActions("Brands", ["receiveAllBrands"]),
    },
    mounted() {
        // this.receiveAllBrands(0);
    },
};
</script>

<style lang="scss" scoped>
</style>