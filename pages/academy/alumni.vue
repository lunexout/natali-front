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
    name: "alumni",
    data(){
        return {
                        StylistList: [
                {
                    id: 1,
                    title: 'Merab Dvalishvili1',
                    desc: 'Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. Proin',
                    quote: 'If you look at what you have in life, you`ll always have more. If you look at what you don`t have in life, you`ll never have enough',
                    quoteAuth: 'Oprah Winfrey1',
                    img: 'https://lionessebeautybar.org/wp-content/uploads/2016/09/shutterstock_391326496.jpg'
                },
                {
                    id: 2,
                    title: 'Merab Dvalishvili2',
                    desc: 'Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. Proin',
                    quote: 'If you look at what you have in life, you`ll always have more. If you look at what you don`t have in life, you`ll never have enough',
                    quoteAuth: 'Oprah Winfrey2',
                    img: 'https://lionessebeautybar.org/wp-content/uploads/2016/09/shutterstock_391326496.jpg'
                },
                {
                    id: 3,
                    title: 'Merab Dvalishvili3',
                    desc: 'Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. Proin',
                    quote: 'If you look at what you have in life, you`ll always have more. If you look at what you don`t have in life, you`ll never have enough',
                    quoteAuth: 'Oprah Winfrey3',
                    img: 'https://lionessebeautybar.org/wp-content/uploads/2016/09/shutterstock_391326496.jpg'
                },
            ]
        }
    },
        methods: {
        getReverse(index) {
            return index % 2 == 0 ? true : false
        }
    },
    components: {
        StylistList,
    },
};
</script>

<style lang="scss" scoped>
</style>