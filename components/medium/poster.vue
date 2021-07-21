<template>
    <div class="poster">
        <img :src="img" alt="poster" />
        <div class="data" v-if="data">
            <p class="title">{{ data.title | truncate(50) }}</p>
            <p class="tag" :inner-html.prop="data.tag | truncate(80)"></p>
            <router-link to="/" class="button" v-if="data.buttonText">{{
                data.buttonText
            }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Poster",
    props: ["img", "data"],
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.poster {
    width: 100%;
    height: 600px;
    position: relative;
    .data {
        position: absolute;
        color: #fff;
        bottom: 80px;
        left: 100px;
        font-family: "Prompt";
        .tag {
            font-weight: 400;
            font-size: 24px;
            padding-bottom: 16px;
        }
        .title {
            font-weight: 600;
            font-size: 30px;
            padding-bottom: 4px;
        }
        .button {
            padding: 0 24px;
            display: inline-block;
            font-family: "Config Condensed";
            color: #fff;
            text-decoration: none;
            background-color: #e0b763;
            font-weight: 600;
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            text-transform: uppercase;
            border-radius: 10px;
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

@media screen and (max-width: 1500px) {
    .poster {
        height: 500px !important;
    }
}

@media screen and (max-width: 1024px) {
    .poster {
        height: 400px !important;
    }
    .data {
        bottom: 38px !important;
        left: 60px !important;
    }
}

@media screen and (max-width: 700px) {
    .poster {
        height: 300px !important;
    }
}

@media screen and (max-width: 500px) {
    .poster {
        height: 260px !important;
    }
    .data {
        bottom: 26px !important;
        left: 36px !important;
        .tag {
            font-size: 18px !important;
        }
        .title {
            font-size: 24px !important;
        }
    }
}
</style>