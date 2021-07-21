<template>
    <div style='max-width: 1400px; margin: 0 auto;'>
        <div v-for='(stylist,index) in StylistList' :key='stylist.id'>
            <StylistList v-if='getReverse(index+1)' :reverse="true" :stylist='stylist' />
            <StylistList v-else :stylist='stylist'/>
        </div>

    </div>
</template>

<script>
import StylistList from "../../components/medium/stylistList";

export default {
    name: "stylist",
    components: {
        StylistList,
    },
    methods: {
        getReverse(index) {
            return index % 2 == 0 ? true : false
        }
    },
    data() {
        return {
            StylistList: [
                {
                    id: 1,
                    title: 'Merab Dvalishvili1',
                    desc: 'Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. Proin',
                    quote: 'If you look at what you have in life, you`ll always have more. If you look at what you don`t have in life, you`ll never have enough',
                    quoteAuth: 'Oprah Winfrey1',
                    img: 'https://www.wallpapertip.com/wmimgs/13-132200_girl-red-hair-data-src-beauty-salon-images.jpg'
                },
                {
                    id: 2,
                    title: 'Merab Dvalishvili2',
                    desc: 'Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. Proin',
                    quote: 'If you look at what you have in life, you`ll always have more. If you look at what you don`t have in life, you`ll never have enough',
                    quoteAuth: 'Oprah Winfrey2',
                    img: 'https://www.wallpapertip.com/wmimgs/13-132200_girl-red-hair-data-src-beauty-salon-images.jpg'
                },
                {
                    id: 3,
                    title: 'Merab Dvalishvili3',
                    desc: 'Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. Proin',
                    quote: 'If you look at what you have in life, you`ll always have more. If you look at what you don`t have in life, you`ll never have enough',
                    quoteAuth: 'Oprah Winfrey3',
                    img: 'https://www.wallpapertip.com/wmimgs/13-132200_girl-red-hair-data-src-beauty-salon-images.jpg'
                },
            ]
        };
    },
};
</script>

<style lang="scss" scoped>
</style>