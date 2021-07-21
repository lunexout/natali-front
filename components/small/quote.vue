<template>
    <div class="quote-box">
        <p class="quote" v-html="text"></p>
        <p v-if="author" class="author">{{ author }}</p>
    </div>
</template>

<script>
export default {
    name: "Quote",
    props: ["text", "author"],
};
</script>

<style lang="scss" scoped>
.quote-box {
    padding: 50px 20px 40px;
    .author {
        text-align: center;
        margin-top: 20px;
        font-family: "Prompt";
        font-weight: 300;
    }
    .quote {
        text-align: center;
        display: block;
        margin: 0 auto;
        font-family: "Playfair Display";
        font-weight: 600;
        font-size: 25px;
        max-width: 500px;
        position: relative;
        &::before,
        &::after {
            position: absolute;
            font-weight: 600;
            font-size: 30px;
            font-family: monospace;
            letter-spacing: -4px;
        }
        &::before {
            content: "<<";
            top: 0;
            left: -40px;
        }
        &::after {
            content: ">>";
            bottom: 0;
            right: -40px;
        }
    }
}

@media screen and (max-width: 650px) {
    .quote {
        padding: 0 12px;
        box-sizing: border-box;
        &::before {
            left: -16px !important;
        }
        &::after {
            right: -16px !important;
        }
    }
}
</style>