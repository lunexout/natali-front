<template>
    <div class="beforeAfterDuo">
        <h1 class="title">Before &amp; After</h1>
        <div class="container">
            <div class="row">
                <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopadding"
                    v-for="(bA, index) of bAList"
                    :key="index"
                >
                    <BeforeAfter :data="bA" :info="true" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BeforeAfter from "../small/beforeAfter";

export default {
    name: "BeforeAfterDuo",
    components: {
        BeforeAfter,
    },
    data() {
        return {
            bAList: [
                {
                    before: "/assets/img/gallery.png",
                    after: "/assets/img/brandsImage.png",
                    title: "Lorem, ipsum.",
                    desc: "Lorem, ipsum dolor.",
                    duration: "7-8 month",
                },
                {
                    before: "/assets/img/gallery.png",
                    after: "/assets/img/brandsImage.png",
                    title: "Lorem, ipsum.",
                    desc: "Lorem, ipsum dolor.",
                    duration: "7-8 month",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.beforeAfterDuo {
    padding: 20px 0 40px;
    font-family: "Prompt";
    .title {
        text-align: center;
        font-size: 30px;
        font-weight: 500;
        margin: 40px 0 20px;
    }
}

@media screen and (max-width: 1350px) {
    .beforeAfterDuo .compare-box {
        height: 350px !important;
    }
}

@media screen and (max-width: 600px) {
    .beforeAfterDuo .compare-box {
        height: 300px !important;
    }
}

@media screen and (max-width: 500px) {
    .beforeAfterDuo .compare-box {
        height: 260px !important;
    }
}
</style>