<template>
    <div
        class="color"
        :style="`background-image: url(${getDomain}${color}); background-size: contain;`"
    ></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Color",
    props: ["color"],
    data() {
        return {};
    },
    computed: {
        ...mapGetters("Menus", ["getDomain"]),
    },
};
</script>

<style lang="scss" scoped>
.color {
    cursor: pointer;
    margin: 2px 3px;
    height: 26px;
    width: 26px;
    box-sizing: border-box;
    &.checked {
        border: 1px solid #000;
    }
}
</style>