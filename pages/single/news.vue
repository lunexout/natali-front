<template>
    <div class="single-news">
        <PostPressNews :oneData="getOneNews" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PostPressNews from "../../components/big/postPressNews";

export default {
    name: "SingleNewsPage",
    data() {
        return {};
    },
    components: { PostPressNews },
    computed: {
        ...mapGetters("News", ["getOneNews"]),
    },
    methods: {
        ...mapActions("News", ["receiveOneNews"]), // problem regarding the rendering
    },
    mounted() {
        this.receiveOneNews(this.$route.params.id);
    },
};
</script>

<style lang="scss" scoped>
</style>