<template>
    <div v-if="text" class="book-in-bars">{{ text }}</div>
</template>

<script>
    export default {
        name: 'BookInBars',
        props: ['text']
    }
</script>

<style lang="scss" scoped>

.book-in-bars {
    cursor: pointer;
    font-family: 'Config Condensed';
    font-weight: 600;
    background: rgba($color: #F0A210, $alpha: .75);
    border: 1px solid #cfac67d3;
    height: 40px;
    max-width: 200px;
    color: #2D2C29;
    margin: 20px auto;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
    font-size: 22px;
}

</style>