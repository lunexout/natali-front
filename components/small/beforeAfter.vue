<template>
    <div class="compare-box" :class="{ lm: info == false }">
        <TwentyTwenty
            :before="`${getDomain}${data.before}`"
            :after="`${getDomain}${data.after}`"
        />
        <div class="info-box" v-if="info">
            <span class="title">{{ data.title }}</span>
            <span class="desc">{{ data.desc }}</span>
            <span class="duration">{{ data.duration }}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "BeforeAfter",
    props: ["data", "info"],
    computed: {
        ...mapGetters("Menus", ["getDomain"]),
    },
};
</script>

<style lang="scss" scoped>
.twentytwenty-container {
    height: 100% !important;
    z-index: 100 !important;
}

.compare-box {
    box-sizing: border-box;
    height: 400px;
    width: 100%;
    padding: 0 10px;
    margin-bottom: 60px;
    position: relative;
    &.lm {
        margin-bottom: 10px;
    }
    .info-box {
        font-family: "Config Condensed";
        z-index: 101;
        padding: 16px 8px;
        position: relative;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-100px);
        background-color: #fff;
        min-width: 260px;
        width: calc(100% - 100px);
        min-height: 100px;
        text-align: center;
        display: flex;
        flex-direction: column;
        .title {
            margin: 0;
            font-weight: 600;
            color: #212529;
            font-size: 26px;
        }
        .desc {
            color: #343a40;
            margin-bottom: 8px;
            font-size: 20px;
        }
        .duration {
            font-weight: 500;
            color: #212529;
            font-size: 22px;
        }
    }
}

@media screen and (max-width: 425px) {
    .compare-box {
        height: 200px !important;
        .info-box {
            transform: translateX(-50%) translateY(-60px) !important;
        }
    }
}
</style>