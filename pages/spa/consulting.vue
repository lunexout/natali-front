<template>
    <div class="spa-consulting">
        <PosterAdditional
            img="/assets/img/poster.png"
            :data="{
                title: 'natali group',
                text: 'natali group',
            }"
        />
        <GallerySlider :galleryList="galleryList" />
        <ServiceSpaConcept />
    </div>
</template>

<script>
import PosterAdditional from "../../components/medium/posterAdditional";
import GallerySlider from "../../components/medium/gallerySlider";
import ServiceSpaConcept from "../../components/big/serviceSpaConcept";

export default {
    name: "Consulting",
    components: {
        PosterAdditional,
        GallerySlider,
        ServiceSpaConcept,
    },
    data() {
        return {
            galleryList: [
                {
                    title: "Nataligroup 1",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: true,
                    videoLink: "https://youtu.be/DE5AOOvFr7w",
                },
                {
                    title: "Nataligroup 2",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: false,
                    videoLink: "",
                },
                {
                    title: "Nataligroup 3",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: true,
                    videoLink: "https://youtu.be/DE5AOOvFr7w",
                },
                {
                    title: "Nataligroup 4",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: false,
                    videoLink: "",
                },
                {
                    title: "Nataligroup 5",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: true,
                    videoLink: "https://youtu.be/DE5AOOvFr7w",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
</style>