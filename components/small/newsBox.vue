<template>
    <router-link
        class="uupp"
        :to="{ name: `single news ${branch}`, params: { id: news.id } }"
    >
        <div class="news-box">
            <!-- onclick function -->
            <div class="img-box">
                <img :src="news.images[0]" alt="img" />
            </div>
            <div class="info-box">
                <span class="label">{{ news.title | truncate(10) }}</span>
                <p class="text">{{ news.sub_title | truncate(70) }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "NewsBox",
    props: ["news", "branch"],
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["getDomain"]),
    },
    methods: {},
    mounted() {
        console.log(this.news);
    },
};
</script>

<style lang="scss" scoped>
.uupp {
    text-decoration: none;
}
.news-box {
    cursor: pointer;
    color: #000;
    background-color: #fff;
    width: 360px;
    height: 540px;
    box-sizing: border-box;
    box-shadow: 0 5px 15px rgba($color: #000000, $alpha: 0.1);
    margin: 10px;
    .img-box {
        height: 360px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .info-box {
        width: 100%;
        box-sizing: border-box;
        padding: 30px 40px;
        font-family: "Prompt";
        text-decoration: none;
        .label {
            color: rgba($color: #2d2c29, $alpha: 0.8);
            font-weight: 500;
            font-size: 18px;
        }
        .text {
            font-size: 20px;
        }
    }
}

@media screen and (max-width: 1920px) {
    .news-box {
        width: 300px !important;
        height: 450px !important;
        .img-box {
            height: 310px !important;
        }
        .info-box {
            padding: 15px 22px !important;
            .label {
                font-size: 16px !important;
            }
            .text {
                font-size: 18px !important;
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .news-box {
        width: 260px !important;
        height: 399px !important;
        .img-box {
            height: 280px !important;
        }
        .info-box {
            padding: 10px 16px !important;
            .label {
                font-size: 15px !important;
            }
            .text {
                font-size: 16px !important;
            }
        }
    }
}
</style>