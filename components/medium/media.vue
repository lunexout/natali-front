<template>
    <div>
        <PosterVideo
            v-if="oneMedia.video_link != ''"
            :img="`${oneMedia.image}`"
            :data="{
                tag: oneMedia.description,
                title: oneMedia.title,
            }"
            :videoLink="oneMedia.video_link"
        />
        <Poster
            v-else
            :img="`${oneMedia.image}`"
            :data="{
                tag: oneMedia.description,
                title: oneMedia.title,
            }"
        />
    </div>
</template>

<script>
import Poster from "../medium/poster";
import PosterVideo from "../medium/posterVideo";

export default {
    name: "Media",
    props: ["oneMedia"],
    components: {
        Poster,
        PosterVideo,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
</style>