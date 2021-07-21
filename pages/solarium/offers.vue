<template>
    <div class="solarium-offers">
        <Poster
            img="/assets/img/poster.png"
            :data="{
                title: 'natali group',
                tag: 'natali group',
                buttonText: 'Book or buy',
            }"
        />
        <OffersSlider />
        <Poster
            img="/assets/img/poster.png"
            :data="{
                title: 'natali group',
                tag: 'natali group',
                buttonText: 'Book or buy',
            }"
        />
        <ProductOfferSlider />
    </div>
</template>

<script>
import Poster from "../../components/medium/poster";
import OffersSlider from "../../components/medium/offersSlider";
import ProductOfferSlider from "../../components/medium/productOfferSlider";

export default {
    name: "SolariumOffers",
    components: {
        Poster,
        ProductOfferSlider,
        OffersSlider,
    },
};
</script>

<style lang="scss" scoped>
</style>