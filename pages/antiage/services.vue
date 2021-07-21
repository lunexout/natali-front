<template>
    <div class="antiage-services">
        <Poster img="/assets/img/poster.png" />
        <BigServices :branch_id="31" />
    </div>
</template>

<script>
import Poster from "../../components/medium/poster"
import BigServices from "../../components/big/bigServices";

export default {
    name: "AntiageServices",
    components: {
        Poster,
        BigServices,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
</style>