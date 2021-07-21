<template>
    <div class="beforeAfterTrio">
        <div class="container">
            <div class="row center-xs" v-if="parsedData">
                <div
                    class="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                    v-for="(bA, index) of parsedData"
                    :key="index"
                >
                    <BeforeAfter :data="bA" :info="false" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BeforeAfter from "../small/beforeAfter";

export default {
    name: "BeforeAfterTrio",
    components: {
        BeforeAfter,
    },
    props: ["data"],
    data() {
        return {
            parsedData: null,
            bAList: [
                {
                    before: "/assets/img/gallery.png",
                    after: "/assets/img/brandsImage.png",
                },
                {
                    before: "/assets/img/gallery.png",
                    after: "/assets/img/brandsImage.png",
                },
                {
                    before: "/assets/img/gallery.png",
                    after: "/assets/img/brandsImage.png",
                },
            ],
        };
    },
    mounted() {
        if (this.data.type == "3") {
            this.parsedData = [
                {
                    after: this.data.images.after1,
                    before: this.data.images.before1,
                },
                {
                    after: this.data.images.after2,
                    before: this.data.images.before2,
                },
                {
                    after: this.data.images.after3,
                    before: this.data.images.before3,
                },
            ];
        } else {
            this.parsedData = [
                {
                    after: this.data.images.after1,
                    before: this.data.images.before1,
                },
            ];
        }
    },
};
</script>

<style lang="scss" scoped>
.beforeAfterTrio {
    padding: 40px 0;
    .compare-box {
        height: 360px !important;
        margin-left: auto;
        margin-right: auto;
    }
}

@media screen and (max-width: 1600px) {
    .beforeAfterTrio .compare-box {
        height: 300px !important;
    }
}

@media screen and (max-width: 1350px) {
    .beforeAfterTrio .compare-box {
        height: 250px !important;
    }
}

@media screen and (max-width: 768px) {
    .beforeAfterTrio .compare-box {
        height: 350px !important;
    }
}

@media screen and (max-width: 600px) {
    .beforeAfterTrio .compare-box {
        height: 300px !important;
    }
}

@media screen and (max-width: 500px) {
    .beforeAfterTrio .compare-box {
        height: 260px !important;
    }
}
</style>