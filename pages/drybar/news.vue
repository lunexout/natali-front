<template>
    <div class="gen-news">
        <PressNews
            :reverse="(index + 1) % 2 == 0"
            :link="'/drybar/news/' + news.id"
            :data="news"
            v-for="(news, index) in getAllNews"
            :key="index"
        />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PressNews from "../../components/small/pressNews";

export default {
    name: "News",
    components: {
        PressNews,
    },
    computed: {
        ...mapGetters("News", ["getAllNews"]),
    },
    methods: {
        ...mapActions("News", ["receiveAllNews"]),
    },
    mounted() {
        this.receiveAllNews(0);
    },
};
</script>

<style lang="scss" scoped>
</style>