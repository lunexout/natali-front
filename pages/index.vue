<template>
    <div class="index-layout">
        <Header />

        <router-view></router-view>

        <Footer />
    </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";

export default {
    name: "Index",
    components: {
        Header,
        Footer,
    },
};
</script>

<style lang="scss" scoped>
</style>