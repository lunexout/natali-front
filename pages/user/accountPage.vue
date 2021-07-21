<template>
    <Account />
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Account from "../../components/user/account";

export default {
    name: "accountPage",
    components: {
        Account,
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