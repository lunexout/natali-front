<template>
    <div class="wwcf">
        <div class="container">
            <h1 class="title-h">Where We Come From</h1>
        </div>
        <div class="cont">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div class="img-wrapper">
                        <img
                            src="/assets/img/poster.png"
                            alt="wherewecomefrom"
                        />
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="text-wrapper">
                        <p class="p-w">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis, eos! Eligendi impedit reprehenderit
                            esse inventore sequi dicta neque recusandae
                            laudantium!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" v-if="getQuote">
            <Quote :text="getQuote[0].body" :author="getQuote[0].title" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Quote from "../small/quote";

export default {
    name: "WhereWeComeFrom",
    props: ["branchId"],
    components: {
        Quote
    },
    data() {
        return {};
    },
    methods: {
        ...mapActions("Forms", ["receiveQuotes"])
    },
    computed: {
        ...mapGetters("Forms", ["getQuote"])
    },
    mounted() {
        this.receiveQuotes(this.branchId);
    }
};
</script>

<style lang="scss" scoped>
.wwcf {
    .title-h {
        font-family: "Prompt";
        font-size: 32px;
        font-weight: 500;
        margin-top: 60px;
    }
    .img-wrapper {
        height: 500px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .text-wrapper {
        .p-w {
            max-width: 480px;
            font-family: "Prompt";
            font-weight: 300;
        }
    }
}

@media screen and (max-width: 1200px) {
    .wwcf {
        .img-wrapper {
            height: 440px !important;
        }
    }
}

@media screen and (max-width: 1024px) {
    .wwcf {
        .text-wrapper {
            text-align: center;
            .p-w {
                margin: 0 auto;
            }
        }
        .img-wrapper {
            height: 400px !important;
        }
    }
}

@media screen and (max-width: 600px) {
    .wwcf {
        .img-wrapper {
            height: 270px !important;
        }
    }
}

@media screen and (max-width: 400px) {
    .wwcf {
        .title-h {
            font-size: 25px;
        }
        .img-wrapper {
            height: 220px !important;
        }
    }
}
</style>
