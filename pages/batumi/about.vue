<template>
    <div class="gen-about">
        <Poster img="/assets/img/poster.png" />
        <WhereWeComeFrom :branchId="0" />
        <OurStory />
        <RewardsSlider :branchId="0" />
    </div>
</template>

<script>
import Poster from "../../components/medium/poster";
import WhereWeComeFrom from "../../components/medium/whereWeComeFrom";
import OurStory from "../../components/medium/ourStory";
import RewardsSlider from "../../components/medium/rewardsSlider";

export default {
    name: "About",
    components: {
        Poster,
        WhereWeComeFrom,
        OurStory,
        RewardsSlider,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.gen-about {
    padding-bottom: 200px;
}
</style>