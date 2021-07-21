<template>
    <div class="product">
        <SingleProduct :oneProduct="getMergeWithProduct" />
        <ProductSlider title="related products" :products="getAllProducts" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import SingleProduct from "../../components/big/singleProduct";
import ProductSlider from "../../components/medium/productSlider";

export default {
    name: "Product",
    components: {
        SingleProduct,
        ProductSlider,
    },
    data() {
        return {
            // oneTime: true,
        };
    },
    // watch: {
    //     getOneProduct() {
    //         this.receiveOneProduct(
    //             this.$route.params.id,
    //             this.$route.params.branchId
    //         );
    //         this.receiveAllProducts(0);
    //     },
    // },
    methods: {
        ...mapActions("Products", ["receiveMergeWithProduct"]),
        ...mapActions("Products", ["receiveAllProducts"]),
    },
    computed: {
        ...mapGetters("Products", ["getMergeWithProduct"]),
        ...mapGetters("Products", ["getAllProducts"]),
    },
    mounted() {
        this.receiveMergeWithProduct(
            this.$route.params.id,
            this.$route.params.branchId
        );
        this.receiveAllProducts(0);
    },
    // updated() {
    //     if (this.oneTime) {
    //         this.receiveOneProduct(
    //             this.$route.params.id,
    //             this.$route.params.branchId
    //         );
    //         this.receiveAllProducts(0);
    //         this.oneTime = false;
    //     }
    // },
    // beforeDestroy() {
    //     alert("working");
    // },
};
</script>

<style lang="scss" scoped>
</style>