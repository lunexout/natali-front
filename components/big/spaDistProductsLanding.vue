<template>
    <div class="spa-dist-landing">
        <div class="container">
            <p class="title">PRODUCTS</p>
            <div class="categories">
                <router-link to="/" class="cat">Hair cut</router-link>
                <router-link to="/" class="cat">Hair cut</router-link>
                <router-link to="/" class="cat">Hair cut</router-link>
                <router-link to="/" class="cat">Hair cut</router-link>
                <router-link to="/" class="cat">Hair cut</router-link>
            </div>
        </div>
        <div class="list">
            <div class="container">
                <div class="row">
                    <div
                        class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                        v-for="(el, index) in [1, 2]"
                        :key="index"
                    >
                        <OneProductSpaDist />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 nopadding">
                        <div class="product-list-poster">
                            <img
                                src="/assets/img/distposter.png"
                                alt="poster"
                            />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <OneProductSpaDist />
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom container">
            <router-link to="/shop" class="shop-now">SHOP NOW</router-link>
        </div>
    </div>
</template>

<script>
import OneProductSpaDist from "../small/oneProductSpaDist";

export default {
    name: "SpaDistPoductsLanding",
    components: {
        OneProductSpaDist,
    },
};
</script>

<style lang="scss" scoped>
.spa-dist-landing {
    font-family: "Prompt";
    .title {
        margin: 40px 0 20px;
        text-align: center;
        font-weight: 400;
        font-size: 22px;
    }
    .categories {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 70%;
        margin: 0 auto;
        .cat {
            display: block;
            color: #000;
            text-decoration: none;
            width: 110px;
            text-align: center;
            margin: 0 10px 10px;
        }
    }
    .list {
        padding-top: 40px;
        .spa-dist-product {
            margin: 0 auto;
        }
        .product-list-poster {
            width: 100%;
            height: 100%;
            padding: 40px;
            box-sizing: border-box;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .bottom {
        margin-top: 30px;
        justify-content: flex-end;
        display: flex;
        padding: 0 30px;
        .shop-now {
            position: relative;
            line-height: 45px;
            font-weight: 500;
            text-decoration: none;
            color: #000;
            font-size: 18px;
            &::after {
                content: url("/assets/icons/next.svg");
                position: absolute;
                right: -16px;
                font-size: 26px;
                line-height: 44px;
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    .categories {
        max-width: 100% !important;
    }
}
</style>