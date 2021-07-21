<template>
    <div class="nataliespa-services">
        <Poster img="/assets/img/poster.png" />
        <BigServices :branch_id="30" />
    </div>
</template>

<script>
import Poster from "../../components/medium/poster";
import BigServices from "../../components/big/bigServices";

export default {
    name: "Services",
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