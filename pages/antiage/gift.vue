<template>
    <div class="gen-gift">
        <GiftCard :branchId="0" />
    </div>
</template>

<script>
import GiftCard from "../../components/medium/giftCard";

export default {
    name: "Gift",
    components: {
        GiftCard,
    },
};
</script>

<style lang="scss" scoped>
.gen-gift {
    padding-bottom: 80px;
}
</style>