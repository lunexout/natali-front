<template>
    <div class="poster">
        <img :src="img" alt="poster" />
        <div class="data" v-if="data">
            <p
                class="title"
                :class="[
                    {
                        pb: !data.text,
                    },
                ]"
            >
                {{ data.title | truncate(51) }}
            </p>
            <p class="tag" v-if="data.text">{{ data.text | truncate(80) }}</p>
            <a
                :href="data.link"
                class="button"
                :class="[
                    {
                        golden: data.goldColor,
                    },
                ]"
                v-if="data.buttonText"
                >Learn more</a
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "PosterAdditional",
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
            &.pb {
                padding-bottom: 40px;
            }
        }
        .button {
            padding: 0 24px;
            display: inline-block;
            font-family: "Config Condensed";
            text-decoration: none;
            color: #000;
            background-color: #fff;
            font-weight: 600;
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            text-transform: uppercase;
            border-radius: 10px;
            &.golden {
                background-color: #e0b763;
                color: #fff;
            }
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
    .data {
        .title {
            font-size: 24px !important;
        }
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
            font-size: 16px !important;
        }
        .title {
            font-size: 19px !important;
        }
    }
}
</style>