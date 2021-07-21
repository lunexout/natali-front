<template>
    <div class="solarium-services">
        <Poster img="/assets/img/poster.png" />
        <BigServices :branch_id='35' />
    </div>
</template>

<script>
import Poster from "../../components/medium/poster"
import BigServices from "../../components/big/bigServices";

export default {
    name: "SolariumServices",
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