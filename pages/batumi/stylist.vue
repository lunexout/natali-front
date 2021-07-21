<template>
    <div>
        <StylistList />
        <StylistList :reverse="true" />
        <StylistList />
    </div>
</template>

<script>
import StylistList from "../../components/medium/stylistList";

export default {
    name: "stylist",
    components: {
        StylistList,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
</style>