<template>
    <div class="nataliespa-press">
        <PressNews
            :reverse="(index + 1) % 2 == 0"
            :link="'/nataliespa/press/' + news.id"
            :data="news"
            v-for="(news, index) in getAllPress"
            :key="index"
        />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PressNews from "../../components/small/pressNews";

export default {
    name: "Press",
    components: {
        PressNews,
    },
    computed: {
        ...mapGetters("Press", ["getAllPress"]),
    },
    methods: {
        ...mapActions("Press", ["receiveAllPress"]),
    },
    mounted() {
        this.receiveAllPress(0);
    },
};
</script>

<style lang="scss" scoped>
</style>