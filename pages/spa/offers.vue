<template>
    <div class="spa-offers">
        <PosterAdditional
            img="/assets/img/poster.png"
            :data="{
                title: 'Lorem ipsum dolor sit amet consectetuer adipsicunvt',
                buttonText: 'BOOK NOW',
            }"
        />
        <ProductOfferSlider />
        <PosterAdditional
            img="/assets/img/poster.png"
            :data="{
                title: 'Lorem ipsum dolor sit amet consectetuer adipsicunvt',
                text:
                    'Lorem ipsum dolor sit amet consectetuer adipsicunvt Lorem ipsum dolor sit amet consectuer adipsicun torem ipsum dolor i met consectetuer adunvt Lorem ipsum dolor sit amet consectetuer adipsicunvt',
                buttonText: 'BOOK NOW',
                goldColor: true,
            }"
        />
    </div>
</template>

<script>
import PosterAdditional from "../../components/medium/posterAdditional";
import ProductOfferSlider from "../../components/medium/productOfferSlider";

export default {
    name: "spaOffers",
    components: {
        PosterAdditional,
        ProductOfferSlider,
    },
};
</script>

<style lang="scss" scoped>
</style>