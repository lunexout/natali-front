<template>
    <div class="spa-dist-product">
        <div class="img-wrapper">
            <img src="/assets/img/dist.png" alt="img">
        </div>
        <div class="info-wrapper">
            <p class="product-name">{{ data.name }}</p>
            <p class="product-desc">{{ data.desc }}</p>
            <span class="request-btn">Request Price</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OneProductSpaDist',
        data() {
            return {
                data: {
                    name: 'Summer Vacation Fragrance Mist',
                    desc: 'are connected with fashion. We offer you studying in our'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

.spa-dist-product {
    width: 360px;
    padding: 4px 16px;
    box-sizing: border-box;
    &:hover {
        .info-wrapper .request-btn {
            opacity: 1;
        }
    }
    .img-wrapper {
        width: 100%;
        height: 300px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .info-wrapper {
        font-family: 'Config Condensed';
        .product-name {
            font-weight: 500;
            font-size: 26px;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        .product-desc {
            font-family: 'Prompt';
            color: #707070;
            margin-bottom: 10px;
        }
        .request-btn {
            opacity: 0;
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
            margin: 20px 0 10px;
        }
    }
}

@media screen and (max-width: 1024px) {
    .spa-dist-product {
        .info-wrapper .request-btn {
            opacity: 1;
        }
    }
}

@media screen and (max-width: 500px) {
    .spa-dist-product {
        width: 280px !important;
        .img-wrapper {
            height: 220px !important;
        }
        .info-wrapper {
            .product-name {
                font-size: 22px !important;
            }
            .product-desc {
                font-size: 14px !important;
            }
            .request-btn {
                height: 40px !important;
                line-height: 40px !important;
                font-size: 22px !important;
            }
        }
    }   
}

</style>