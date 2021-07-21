<template>
    <div class="dist-offers">
        <Poster
            img="/assets/img/poster.png"
            :data="{
                title: 'natali group',
                tag: 'natali group',
                buttonText: 'Book or buy',
            }"
        />
        <ProductOfferSlider />
        <Poster
            img="/assets/img/poster.png"
            :data="{
                title: 'natali group',
                tag: 'natali group',
                buttonText: 'Book or buy',
            }"
        />
    </div>
</template>

<script>
import Poster from "../../components/medium/poster";
import ProductOfferSlider from "../../components/medium/productOfferSlider";

export default {
    name: "OffersPage",
    components: {
        Poster,
        ProductOfferSlider,
    },
};
</script>

<style lang="scss" scoped>
</style>