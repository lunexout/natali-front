<template>
    <div class="spa-product-poster">
        <img :src="data.img" alt="img">
        <div class="info-wrapper">
            <p class="product-name">{{ data.title }}</p>
            <p class="product-desc">{{ data.desc }}</p>
            <span class="request-btn">Request Price</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SpaConceptProductPoster',
        data() {
            return {
                data: {
                    img: '/assets/img/distposter.png',
                    title: 'Summer Vacation Fragrance Mist',
                    desc: 'are connected with fashion. We offer you studying in our'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

.spa-product-poster {
    position: relative;
    width: 100%;
    height: 500px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .info-wrapper {
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        font-family: 'Config Condensed';
        .product-name {
            font-weight: 500;
            font-size: 26px;
            margin-top: 20px;
            margin-bottom: 10px;
            color: #fff;
        }
        .product-desc {
            font-family: 'Prompt';
            color: #fff;
            margin-bottom: 10px;
        }
        .request-btn {
            max-width: 400px;
            transition: 0.3s;
            cursor: pointer;
            width: 100%;
            height: 50px;
            display: block;
            font-size: 24px;
            font-weight: 500;
            background-color: #E0B763;
            border-radius: 5px;
            color: #fff;
            text-align: center;
            line-height: 50px;
            margin: 20px auto 30px;
        }
    }
}

@media screen and (max-width: 1200px) {
    .spa-product-poster {
        height: 420px !important;
    }
}

@media screen and (max-width: 915px) {
    .spa-product-poster {
        height: 300px !important;
    }
}

@media screen and (max-width: 600px) {
    .spa-product-poster {
        .info-wrapper {
            .product-name {
                font-size: 22px !important;
            }
            .product-desc {
                font-size: 14px !important;
            }
            .request-btn {
                font-size: 20px !important;
            }
        }
    }
}

</style>