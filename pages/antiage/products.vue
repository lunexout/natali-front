<template>
    <div class="products-page">
        <div class="filter-bar">
            <span class="fil" @click="filter($event)">Offers</span>
            <div class="inner-box">
                <div
                    class="cat-box"
                    v-for="(cat, index) of catList"
                    :key="index"
                >
                    <span
                        @click="spanActive($event, cat.name)"
                        :class="[
                            {
                                active: index == 0,
                            },
                        ]"
                        >{{ cat.name }}</span
                    >
                </div>
            </div>
        </div>
        <div class="big-filter container" v-if="false">
            <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                    <div class="sec-box">
                        <p class="sec-name">Day cream</p>
                        <span>Day cream</span>
                        <span>Night cream</span>
                        <span>Serum</span>
                        <span>Make-up removal</span>
                        <span>Peeling</span>
                        <span>Care paragraph</span>
                        <span>Sets</span>
                        <span>Bestsellers</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                    <div class="sec-box">
                        <p class="sec-name">Day cream</p>
                        <span>Day cream</span>
                        <span>Night cream</span>
                        <span>Serum</span>
                        <span>Make-up removal</span>
                        <span>Peeling</span>
                        <span>Care paragraph</span>
                        <span>Sets</span>
                        <span>Bestsellers</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                    <div class="sec-box">
                        <p class="sec-name">Day cream</p>
                        <span>Day cream</span>
                        <span>Night cream</span>
                        <span>Serum</span>
                        <span>Make-up removal</span>
                        <span>Peeling</span>
                        <p class="sec-name second">Day cream</p>
                        <span>Day cream</span>
                        <span>Night cream</span>
                        <span>Serum</span>
                        <span>Make-up removal</span>
                        <span>Peeling</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                    <div class="sec-box">
                        <p class="sec-name">Day cream</p>
                        <span>Day cream</span>
                        <span>Night cream</span>
                        <span>Serum</span>
                        <span>Make-up removal</span>
                        <span>Peeling</span>
                        <p class="sec-name second">Day cream</p>
                        <span>Day cream</span>
                        <span>Night cream</span>
                        <span>Serum</span>
                        <span>Make-up removal</span>
                        <span>Peeling</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="img-wrapper">
                        <img src="/assets/img/poster.png" alt="filterPoster" />
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="wrpr">
            <div class="product-section">
                <div class="product-list">
                    <!-- <span class="path"
                        >Day cream</span
                    > -->
                    <div class="row" style='max-width: 1400px;'>
                        <div
                            class="col-lg-4 col-md-6 col-sm-6 col-xs-12 nopadding"
                        >
                            <div class="poster p-box">
                                <img
                                    :src="'https://natali.onesoul.io' + bannerImage "
                                    alt="poster"
                                />
                                    <!-- src="/assets/img/poster.png" -->
                                
                                <div class="info">
                                    <p class="name">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                    <span class="shopnow">show now</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-4 col-md-6 col-sm-6 col-xs-12 nopadding"
                            v-for="(prod, index) in PRODUCTS"
                            :key="index"
                        >
                            <div class="p-box">
                                <!-- <div>{{prod.name}}</div> -->
                                <!-- {{prod.cart_quantity = 1}} -->
                                <ShopProduct :branch_link="`antiage`" :branch_id='31' :oneProduct="prod" />
                            </div>
                        </div>

                        <div
                            class="col-lg-4 col-md-6 col-sm-6 col-xs-12 nopadding"
                        >
                            <div class="poster p-box">
                                <img
                                    :src="'https://natali.onesoul.io' + bannerImage "
                                    alt="poster"
                                />
                                <div class="info">
                                    <p class="name">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                    <span class="shopnow">show now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="filter-section"
                    :class="[
                        {
                            active: filterState,
                        },
                    ]"
                >
                    <span class="close" @click="filterState = !filterState"
                        ><span v-if="filterState" >Close</span>
                        <span v-else>Open</span>
                        filter
                        <i v-if="filterState" style="font-style: normal"
                            >&#10005;</i
                        ></span
                    >
                    <div class="filter-box">
                        <p class="head">+ Sort by</p>
                        <ul>
                            <li @click='defaultSort'><span :class='{ active: Popular }'>Popular</span></li>
                            <li @click='lowestPriceSort' ><span :class='{ active: LowPrice }'>Lowest price</span></li>
                            <li @click='highestPriceSort'><span :class='{ active: HighPrice }'>Largest price</span></li>
                            <li @click='alphabetSortUp'><span :class='{ active: AtoZ }'>A-Z</span></li>
                            <li @click='alphabetSortDown'><span :class='{ active: ZtoA }'>Z-A</span></li>
                        </ul>
                    </div>
                    <div class="filter-box">
                        <p class="head">+ Capacity</p>
                         <div
                            class="mililiter-box"
                            v-for="(cat, index) of mililiterList"
                            :key="index"

                        >
                            <span
                            
                                @click="spanActiveML($event, cat)"
                                :class="[
                                    {
                                        active1: index == 0,
                                    },
                                ]"
                                >{{ cat.name }}</span
                            >
                        </div>
                    </div>
                    <div class="filter-box">
                        <p class="head">+ Prices from - to</p>
                        <vue-range-slider
                            :tooltip-style="{
                                background: '#e0b763',
                                borderColor: '#e0b763',
                            }"
                            :process-draggable="true"
                            :use-keyboard="true"
                            :speed="0.5"
                            :process-style="{ background: '#e0b763' }"
                            v-model="getPriceProgress"
                            :min="min"
                            :max="max"
                            :enable-cross="enableCross"
                            class="range-compo"
                        ></vue-range-slider>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ShopProduct from "../../components/small/shopProduct";

import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";
import Axios from 'axios'
import eventHub from './../../../event/eventhub'
export default {
    name: "ProductsPage",
    components: { ShopProduct, VueRangeSlider },
    data() {
        return {
            bannerImage: "",
            getPriceProgress: [0, 250],
            filterState: true,
            activeSectionName: "",
            drybar: false,
            daycream: false,
            ml0: true,
            ml30: false,
            ml40: false,
            ml50: false,
            ml150: false,
            ml200: false,
            Popular: true,
            LowPrice: false,
            HighPrice: false,
            AtoZ: false,
            ZtoA: false,
            catList: [
                {
                    name: "Day cream",
                },
                {
                    name: "Night cream",
                },
                {
                    name: "Serum",
                },
                {
                    name: "Eye Cream",
                },
                {
                    name: "Make-up removal",
                },
                {
                    name: "Make-up removal",
                },
                {
                    name: "Serum",
                },
                {
                    name: "Serum",
                },
            ],
            mililiterList:[ 
                { ml: 0, name: 'All' },
                { ml: 30, name: '30ml' },
                { ml: 40, name: '40ml' },
                { ml: 50, name: '50ml' },
                { ml: 150, name: '150ml' },
                { ml: 200, name: '200ml' }
             ],
            PRODUCTS: [ ],
            COPYOFPRODUCTS: []
        };
    },
    watch: {
        getPriceProgress: function() {
            this.findWichSortIsSelected(this.getML)
        }
        // drybar: function() {
            
        //     Axios.get(
        //         `https://natali.onesoul.io/api/user/products`
        //         // 'http://localhost:3001/getproducts'
        //     ).then(r => {
        //         // console.log(r.data.data[0]);
        //         this.PRODUCTS = r.data.data.filter(item => item.name == 'KVARCI TEST');
        //         this.COPYOFPRODUCTS = r.data.data.filter(item => item.name == 'KVARCI TEST');
        //     })
        // },
        // daycream: function() {
            
        //     Axios.get(
        //         `https://natali.onesoul.io/api/user/products`
        //         // 'http://localhost:3001/getproducts'
        //     ).then(r => {
        //         // console.log(r.data.data[0]);
        //         this.PRODUCTS = r.data.data.filter(item => item.name == 'Facial Cream');
        //         this.COPYOFPRODUCTS = r.data.data.filter(item => item.name == 'Facial Cream');
        //     })
        // }
    },
    methods: {
        filter(event) {
            event.target.parentNode.classList.toggle("active");
        },
        spanActive(event, name) {
            event.target.parentNode.parentNode
                .querySelectorAll(".cat-box span")
                .forEach((elem) => {
                    elem.classList.remove("active");
                });
            event.target.classList.toggle("active");
            this.activeSectionName = name;
            this.daycream = true;
        },
        spanActiveML(event, cat) {
            this.setML(cat.ml)
            event.target.parentNode.parentNode
                .querySelectorAll(".mililiter-box span")
                .forEach((elem) => {
                    elem.classList.remove("active1");
                });
            event.target.classList.toggle("active1");
            this.activeSectionName = cat.name;
        },

        ...mapActions("Products", ["receiveAllProducts", "changeML"]),

        lowestPriceSort() {
            eventHub.$emit('lowestPriceSort', this.PRODUCTS, this.getML)
        },
        highestPriceSort() {
            eventHub.$emit('highestPriceSort', this.PRODUCTS, this.getML)
        },
        alphabetSortUp() {
            eventHub.$emit('alphabetSortUp', this.PRODUCTS , this.getML)
        },
        alphabetSortDown() {
            eventHub.$emit('alphabetSortDown', this.PRODUCTS ,this.getML);
        },
        progressBarSort(){
            eventHub.$emit('progressBarSort', this.PRODUCTS, this.getML);
        },
        defaultSort() {
            eventHub.$emit('defaultSort', this.PRODUCTS, this.getML);
        },
        findWichSortIsSelected(value) {
                if(this.Popular == true) {eventHub.$emit('defaultSort', this.PRODUCTS, value)}
                else if (this.LowPrice == true){eventHub.$emit('lowestPriceSort',this.PRODUCTS, value)}
                else if (this.HighPrice == true){eventHub.$emit('highestPriceSort',this.PRODUCTS, value)}
                else if (this.AtoZ == true){eventHub.$emit('alphabetSortUp',this.PRODUCTS,value)}
                else if (this.ZtoA == true){eventHub.$emit('alphabetSortDown',this.PRODUCTS,value)}
        },
        setML(arg) {
            this.changeML(arg)
            this.findWichSortIsSelected(arg);
        },
    },
    computed: {
        ...mapGetters("Products", ["getAllProducts"]),
        ...mapGetters("Products", ["getML"]),
    },
    mounted() {
        // this.receiveAllProducts(0);
        Axios.get(
                `https://natali.onesoul.io/api/user/merges/${30}`
            ).then(r => {
                this.PRODUCTS = r.data.data.products.map(item =>  ({ ...item, cart_quantity: 1 }))
                this.COPYOFPRODUCTS = r.data.data.products.map(item =>  ({ ...item, cart_quantity: 1 }))

            })
        Axios.get(`https://natali.onesoul.io/api/user/banner/all`).then(res => {
            this.bannerImage = res.data.image
        })
        this.setML(0)
        // this.setMl(0)
        eventHub.$on('lowestPriceSort', (PRODUCTS,val) => {
            PRODUCTS = this.COPYOFPRODUCTS;
            PRODUCTS.sort((a,b) => {return parseFloat(a.products[0].price) - parseFloat(b.products[0].price)} )
             this.PRODUCTS = this.COPYOFPRODUCTS.filter(item => {return item.products[0].price > parseInt(this.getPriceProgress.toString().split(',')[0]) && item.products[0].price < parseInt(this.getPriceProgress.toString().split(',')[1])} )
            if(!val == 0){
                    this.PRODUCTS = this.PRODUCTS.filter(item => item.products[0].features.length > 0)
                    this.PRODUCTS = this.PRODUCTS.filter(item => +item.products[0].features[0].value <= val)
            }
            // if(!val == 0){
            //     this.PRODUCTS = FILTRED.filter(item => item.ml == val)
            //     console.log(FILTRED);
            //     }else{this.PRODUCTS = FILTRED}

            this.Popular = false,
            this.LowPrice = true,
            this.HighPrice = false,
            this.AtoZ = false,
            this.ZtoA = false

        })

            // active classes

        eventHub.$on('highestPriceSort', (PRODUCTS,val) => {
            PRODUCTS = this.COPYOFPRODUCTS;
            PRODUCTS.sort((a,b) => {return parseFloat(b.products[0].price) - parseFloat(a.products[0].price)})
            this.PRODUCTS =  this.COPYOFPRODUCTS.filter(item => {return item.products[0].price > parseInt(this.getPriceProgress.toString().split(',')[0]) && item.products[0].price < parseInt(this.getPriceProgress.toString().split(',')[1])});
            if(!val == 0){
                    this.PRODUCTS = this.PRODUCTS.filter(item => item.products[0].features.length > 0)
                    this.PRODUCTS = this.PRODUCTS.filter(item => +item.products[0].features[0].value <= val)
            }
            // active classes
            this.Popular = false,
            this.LowPrice = false,
            this.HighPrice = true,
            this.AtoZ = false,
            this.ZtoA = false
        })
        eventHub.$on('alphabetSortUp', (PRODUCTS, val) => {
            PRODUCTS = this.COPYOFPRODUCTS;
            let SORTEDPRODUCTS = PRODUCTS.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
            SORTEDPRODUCTS =  this.COPYOFPRODUCTS.filter(item => {return item.products[0].price > parseInt(this.getPriceProgress.toString().split(',')[0]) && item.products[0].price < parseInt(this.getPriceProgress.toString().split(',')[1])});

             this.PRODUCTS = SORTEDPRODUCTS;
             if(!val == 0){
                    this.PRODUCTS = this.PRODUCTS.filter(item => item.products[0].features.length > 0)
                    this.PRODUCTS = this.PRODUCTS.filter(item => +item.products[0].features[0].value <= val)
            }
            // active classes
            this.Popular = false,
            this.LowPrice = false,
            this.HighPrice = false,
            this.AtoZ = true,
            this.ZtoA = false
        })
        eventHub.$on('alphabetSortDown', (PRODUCTS,val) => {
            PRODUCTS = this.COPYOFPRODUCTS;
            let SORTEDPRODUCTS = PRODUCTS.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
            SORTEDPRODUCTS =  this.COPYOFPRODUCTS.filter(item => {return item.products[0].price > parseInt(this.getPriceProgress.toString().split(',')[0]) && item.products[0].price < parseInt(this.getPriceProgress.toString().split(',')[1])});
            this.PRODUCTS = SORTEDPRODUCTS.reverse();
            if(!val == 0){
                    this.PRODUCTS = this.PRODUCTS.filter(item => item.products[0].features.length > 0)
                    this.PRODUCTS = this.PRODUCTS.filter(item => +item.products[0].features[0].value <= val)
            }
            // active classes
            this.Popular = false,
            this.LowPrice = false,
            this.HighPrice = false,
            this.AtoZ = false,
            this.ZtoA = true
        })
        eventHub.$on('progressBarSort', (PRODUCTS, val) => {
            this.PRODUCTS = this.COPYOFPRODUCTS.filter(item => item.products[0].price < parseInt(this.getPriceProgress.toString().split(',')[1]))
        })
        eventHub.$on('defaultSort', (PRODUCTS, val) => {
            
            this.PRODUCTS = this.COPYOFPRODUCTS;
            this.PRODUCTS =  this.COPYOFPRODUCTS.filter(item => {return item.products[0].price > parseInt(this.getPriceProgress.toString().split(',')[0]) && item.products[0].price < parseInt(this.getPriceProgress.toString().split(',')[1])});
            if(!val == 0){
                    this.PRODUCTS = this.PRODUCTS.filter(item => item.products[0].features.length > 0)
                    this.PRODUCTS = this.PRODUCTS.filter(item => +item.products[0].features[0].value <= val)
            }
            // active classes
            this.Popular = true,
            this.LowPrice = false,
            this.HighPrice = false,
            this.AtoZ = false,
            this.ZtoA = false        
        })
    },
    created: function () {
        this.activeSectionName = this.catList[0].name;
        this.min = 0;
        this.max = 250;
        this.enableCross = false;
    },
    
};
</script>

<style lang="scss" scoped>
.mililiter-box {
    margin-left: 20px;
}
.wrpr {
    border-top: 1px solid lightgrey;
}
.active1 {
    color: #E0B763;
}
.product-section {
    font-family: "Prompt";
    display: flex;
    padding: 0 0 12px;
    max-width: 1400px;
    margin: 0 auto;
    .product-list {
        width: 100%;
        padding: 12px 12px 0;
        box-sizing: border-box;
        .path {
            padding: 0 0 0 8px;
            margin-bottom: 10px;
            display: block;
        }
        .p-box {
            position: relative;
            padding: 16px 0;
            box-sizing: border-box;
            width: 312px;
            margin: 0 auto;
        }
        .poster {
            height: 500px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .info {
                padding: 0 24px;
                box-sizing: border-box;
                color: #fff;
                position: absolute;
                top: 50%;
                width: 100%;
                .name {
                    font-size: 20px;
                    margin-bottom: 16px;
                    font-family: "Playfair Display";
                }
                .shopnow {
                    position: relative;
                    cursor: pointer;
                    &::after {
                        content: "";
                        position: absolute;
                        background-color: #fff;
                        width: 100%;
                        height: 2px;
                        bottom: 0;
                        left: 0;
                        right: 0;
                    }
                }
            }
        }
    }
    .filter-section {
        width: 30px;
        padding: 12px 16px 12px 0;
        box-sizing: border-box;
        border-left: 1px solid lightgray;
        transition: 0.3s;
        &.active {
            width: 320px;
            padding: 12px 16px 12px 32px;
            .filter-box {
                display: block;
            }
            .close {
                transform-origin: 100% center;
                transform: translateX(0) rotate(0);
            }
        }
        .filter-box {
            margin-bottom: 8px;
            display: none;
            .head {
                white-space: nowrap;
                font-weight: 500;
                font-size: 20px;
                margin-bottom: 8px;
            }
            .range-compo {
                margin-top: 40px;
            }
            ul {
                padding: 0 0 0 20px;
                list-style: none;
                li {
                    span {
                        cursor: pointer;
                        &.active {
                            color: #e0b763;
                        }
                    }
                }
            }
        }
        .close {
            margin: 0 auto;
            text-align: center;
            padding-bottom: 8px;
            cursor: pointer;
            white-space: nowrap;
            display: block;
            color: #e0b763;
            transform-origin: 100% center;
            transform: translateX(-89%) rotate(-90deg);
            width: 160px;
            font-size: 20px;
        }
    }
}

@media screen and (max-width: 1024px) {
    .product-section {
        flex-direction: column-reverse;
        .filter-section {
            border: none;
            margin: 0 auto;
            padding: 12px 16px 12px 16px;
            width: 320px;
            &.active {
                .filter-box {
                    display: block;
                }
            }
            .close {
                transform-origin: 100% center;
                transform: translateX(0) rotate(0);
            }
        }
    }
}

.big-filter {
    .sec-box {
        font-family: "Prompt";
        display: flex;
        flex-direction: column;
        .sec-name {
            padding: 8px 0;
            font-weight: 400;
            &.second {
                margin-top: 10px;
            }
        }
        span {
            font-weight: 300;
            padding: 6px 0;
        }
    }
    .img-wrapper {
        height: 100%;
        width: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.filter-bar {
    transition: 0.4s;
    padding: 0 16px;
    height: 100px;
    border-bottom: 2px solid rgba($color: #707070, $alpha: 0.3);
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    .fil {
        display: flex;
        width: 140px;
        height: 80px;
        border: 1px solid #e0b763;
        margin: auto 0;
        justify-content: center;
        align-items: center;
        color: #e0b763;
        font-weight: 500;
        font-family: "Prompt";
        text-align: center;
        font-size: 20px;
    }
    .inner-box {
        height: 100%;
        max-width: 1100px;
        // margin: 0 auto;
        width: 80%;
        display: flex;
        justify-content: center;
        .cat-box {
            height: 100%;
            cursor: pointer;
            margin: 0 auto;
            span {
                position: relative;
                bottom: -2px;
                box-sizing: border-box;
                white-space: nowrap;
                font-family: "Prompt";
                color: #424242;
                height: 100%;
                width: 100%;
                line-height: 100px;
                display: block;
                border-bottom: 2px solid transparent;
                &.active {
                    color: #e0b763;
                    border-bottom-color: #e0b763;
                }
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .big-filter {
        .img-wrapper {
            // height: 240px;
            display: none;
        }
    }
}

@media screen and (max-width: 1100px) {
    .filter-bar {
        overflow: hidden !important;
        height: 50px !important;
        display: block;
        &.active {
            height: unset !important;
        }
        .fil {
            display: block;
            height: 50px;
            line-height: 50px;
            cursor: pointer;
            border: none;
            margin: 0 auto;
            border-bottom: 1px solid #e0b763;
            width: 100%;
        }
        .inner-box {
            flex-direction: column !important;
            justify-content: flex-start !important;
            .cat-box {
                height: 50px !important;
                margin: unset !important;
                span {
                    border-bottom: unset !important;
                    line-height: 50px !important;
                }
            }
        }
    }
}

@media screen and (max-width: 400px) {
    .p-box {
        width: 100% !important;
    }
}
</style>