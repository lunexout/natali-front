<template>
    <div class="drybar-press">
        <PressNews
            :reverse="(index + 1) % 2 == 0"
            :link="'/drybar/press/' + news.id"
            :data="news"
            v-for="(news, index) in getAllPress"
            :key="index"
        />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PressNews from "../../components/small/pressNews";
import eventHub from './../../../event/eventhub'
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
        eventHub.$on('hello', () => {
            alert('clicked')
        })
</script>

<style lang="scss" scoped>
</style>