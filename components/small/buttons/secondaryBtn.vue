<template>
    <div v-if="text" class="secondary-btn">{{ text }}</div>
</template>

<script>
    export default {
        name: 'SecondaryBtn',
        props: ['text'],
    }
</script>

<style lang="scss" scoped>

.secondary-btn {
    font-family: 'Config Condensed';
    cursor: pointer;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
    font-size: 18px;
    color: rgba($color: #302F31, $alpha: .75);
    &:hover {
        color: rgba($color: #302F31, $alpha: 1);
    }
}

</style>