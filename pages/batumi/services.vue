<template>
    <div class="batumi-services">
        <Poster img="/assets/img/poster.png" />
        <BigServices :branch_id='0'/>
    </div>
</template>

<script>
import Poster from "../../components/medium/poster"
import BigServices from "../../components/big/bigServices";

export default {
    name: "BatumiServices",
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