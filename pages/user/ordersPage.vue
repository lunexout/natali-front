<template>
    <Orders />
</template>

<script>
// import { mapActions, mapGetters } from "vuex";

import Orders from "../../components/user/orders";

export default {
    name: "ordersPage",
    components: {
        Orders,
    },
    data() {
        return {
            //
        };
    },
};
</script>

<style lang="scss" scoped>
</style>