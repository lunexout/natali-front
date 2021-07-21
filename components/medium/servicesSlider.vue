<template>
    <div class="service-slider container">
        <div class="head">
            <h1>Services</h1>
            <div class="categories">
                <a
                    href="#"
                    class="cat"
                    v-for="(oneGroup, index) of dataT.serviceGroups"
                    :key="index"
                    @click.prevent="getKey(oneGroup)"
                    >{{ oneGroup.name }}</a
                >
            </div>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide
                v-for="(oneService, index) of selectedService"
                :key="index"
            >
                <ServiceBox :oneService="oneService" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import ServiceBox from "../small/serviceBox";

export default {
    name: "ServicesSlider",
    components: {
        ServiceBox,
    },
    props: {
        data: Object,
    },
    data() {
        return {
            dataT: {
                allServices: [
                    {
                        key: 1,
                        image: "/assets/img/services.png",
                        kind: "single",
                        name_en: "test1 en",
                        name_ge: "test1 ge",
                        name_ru: "test1 ru",
                        desc_en: "slkdjflsdjkflksdjf;lsddjfj en",
                        desc_ge:
                            "slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                        desc_ru:
                            "sldkjflsdkjf ldsjkfl;ksdjfl;kjdsfl;kj ds;fkj dsjk ru",
                        price: "10",
                    },
                    {
                        key: 2,
                        image: "/assets/img/services.png",
                        kind: "single",
                        name_en: "test2 en",
                        name_ge: "test2 ge",
                        name_ru: "test2 ru",
                        desc_en: "slkdjflsdjkflksdjf;lsddjfj en",
                        desc_ge:
                            "slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                        desc_ru:
                            "sldkjflsdkjf ldsjkfl;ksdjfl;kjdsfl;kj ds;fkj dsjk ru",
                        price: "10",
                    },
                    {
                        key: 3,
                        image: "/assets/img/services.png",
                        kind: "single",
                        name_en: "test3 en",
                        name_ge: "test3 ge",
                        name_ru: "test3 ru",
                        desc_en: "slkdjflsdjkflksdjf;lsddjfj en",
                        desc_ge:
                            "slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                        desc_ru:
                            "sldkjflsdkjf ldsjkfl;ksdjfl;kjdsfl;kj ds;fkj dsjk ru",
                        price: "10",
                    },
                    {
                        key: 4,
                        image: "/assets/img/services.png",
                        kind: "single",
                        name_en: "test4 en",
                        name_ge: "test4 ge",
                        name_ru: "test4 ru",
                        desc_en: "slkdjflsdjkflksdjf;lsddjfj en",
                        desc_ge:
                            "slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                        desc_ru:
                            "sldkjflsdkjf ldsjkfl;ksdjfl;kjdsfl;kj ds;fkj dsjk ru",
                        price: "10",
                    },
                    {
                        key: 1,
                        image: "/assets/img/services.png",
                        kind: "multi",
                        subGroups: [
                            {
                                group: "Stylist",
                                subService: [
                                    { name: "short", time: "20", price: "20" },
                                    { name: "medium", time: "30", price: "25" },
                                    { name: "long", time: "40", price: "30" },
                                ],
                            },
                            {
                                group: "Top Stylist",
                                subService: [
                                    { name: "short", time: "22", price: "42" },
                                    {
                                        name: "medium",
                                        time: "30",
                                        price: "124",
                                    },
                                    { name: "long", time: "40", price: "1242" },
                                ],
                            },
                            {
                                group: "ART DIR",
                                subService: [
                                    {
                                        name: "short",
                                        time: "230",
                                        price: "21230",
                                    },
                                    {
                                        name: "medium",
                                        time: "230",
                                        price: "2235",
                                    },
                                    {
                                        name: "long",
                                        time: "1240",
                                        price: "3320",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        key: 5,
                        image: "/assets/img/services.png",
                        kind: "multi",
                        subGroups: [
                            {
                                group: "Stylist",
                                subService: [
                                    { name: "short", time: "20", price: "20" },
                                    { name: "medium", time: "30", price: "25" },
                                    { name: "long", time: "40", price: "30" },
                                ],
                            },
                            {
                                group: "Top Stylist",
                                subService: [
                                    { name: "short", time: "22", price: "42" },
                                    {
                                        name: "medium",
                                        time: "30",
                                        price: "124",
                                    },
                                    { name: "long", time: "40", price: "1242" },
                                ],
                            },
                            {
                                group: "ART DIR",
                                subService: [
                                    {
                                        name: "short",
                                        time: "230",
                                        price: "21230",
                                    },
                                    {
                                        name: "medium",
                                        time: "230",
                                        price: "2235",
                                    },
                                    {
                                        name: "long",
                                        time: "1240",
                                        price: "3320",
                                    },
                                ],
                            },
                        ],
                    },
                ],
                serviceGroups: [
                    { name: "Hair cut", key: 1 },
                    { name: "cosmetology", key: 2 },
                    { name: "Skin care", key: 3 },
                    { name: "Makeup", key: 4 },
                ],
                // selectedService: [],
                // activeKey: '',
            },
            selectedService: [],
            activeKey: "",
            swiperOptions: {
                autoplay: {
                    delay: 500,
                },
                slidesPerView: 3,
                breakpoints: {
                    100: {
                        slidesPerView: 1,
                    },
                    960: {
                        slidesPerView: 2,
                    },
                    1400: {
                        slidesPerView: 3,
                    },
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
        };
    },
    watch: {
        activeKey() {
            this.selectedService = this.dataT.allServices.filter((item) => {
                return item.key == this.activeKey;
            });
        },
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    mounted() {
        this.selectedService = this.dataT.allServices;
    },
    methods: {
        getKey(group) {
            this.activeKey = group.key;
        },
    },
};
</script>

<style lang="scss" scoped>
.service-slider {
    padding: 20px 0 40px;

    .head {
        text-align: center;

        h1 {
            text-transform: uppercase;
            font-family: "Prompt";
            font-size: 30px;
            font-weight: 500;
        }

        .categories {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 30px;

            .cat {
                font-size: 20px;
                display: block;
                width: 100px;
                margin: 0 20px;
                text-decoration: none;
                color: #000;
                font-family: "Config Condensed";
                text-transform: capitalize;
            }
        }
    }
}

@media screen and (max-width: 460px) {
    .head {
        h1 {
            font-size: 28px !important;
        }
    }
}

.swiper-pagination ::v-deep .swiper-pagination-bullet {
    height: 12px;
    width: 12px;
    border-radius: 0;
    margin: 0 6px;
}

.swiper-pagination ::v-deep .swiper-pagination-bullet-active {
    background-color: #dfaf4c;
}

// Swiper
.swiper-container {
    max-width: 1500px;
    // height: 480px;
    padding-bottom: 40px;
}

// #DFAF4C
.swiper-pagination {
    bottom: 0px;
}

.swiper-slide {
    .service-box {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
