<template>
    <div class="single-press">
        <PostPressNews :oneData="getOnePress" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PostPressNews from "../../components/big/postPressNews";

export default {
    name: "SinglePressPage",
    data() {
        return {};
    },
    components: { PostPressNews },
    computed: {
        ...mapGetters("Press", ["getOnePress"]),
    },
    methods: {
        ...mapActions("Press", ["receiveOnePress"]), // problem regarding the rendering
    },
    mounted() {
        this.receiveOnePress(this.$route.params.id);
    },
};
</script>

<style lang="scss" scoped>
</style>