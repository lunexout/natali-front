<template>
    <div class="antiage-beforeafter">
        <Media v-if="getAllMedia" :oneMedia="getAllMedia[0]" />
        <BeforeAfterTrio v-if="getOneBeforeAfter" :data="getOneBeforeAfter" />
        <!-- may be some text -->
        <BeforeAfterTrio v-if="getOneBeforeAfter" :data="getOneBeforeAfter" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Media from "../../components/medium/media";
import BeforeAfterTrio from "../../components/big/beforeAfterTrio";

export default {
    name: "AntiageBeforeAfter",
    components: {
        Media,
        BeforeAfterTrio,
    },
    computed: {
        ...mapGetters("General", ["getAllMedia"]),
        ...mapGetters("General", ["getOneBeforeAfter"]),
    },
    methods: {
        ...mapActions("General", ["receiveAllMedia"]),
        ...mapActions("General", ["receiveOneBeforeAfter"]),
    },
    mounted() {
        this.receiveAllMedia(0);
        this.receiveOneBeforeAfter(5);
    },
};
</script>

<style lang="scss" scoped>
</style>