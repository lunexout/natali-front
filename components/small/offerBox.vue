<template>
    <div class="offer-box">
        <div class="img-section">
            <div class="info">
                <span class="info-title">HAIRCUT SPA</span>
                <span class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscingvt elit. 
                    Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscingvt elit. 
                    Aenean commodo ligula eget dolor. Aenean massa. </span>
                <span class="price">$150</span>
            </div>
            <img src="/assets/img/offertst.png" alt="img">
        </div>
        <div class="bottom">
            <div class="head-title">
                <span class="title">HAIRCUT SPA</span>
                <span class="offer">1+1</span>
            </div>
            <div class="bottom-buttons">
                <a href="#" class="book">Book</a> OR <a href="#" class="buy">Buy</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'offerBox',
        props: ['oneOffer']
    }
</script>

<style lang="scss" scoped>
    .offer-box {
        display: flex;
        flex-direction: column;
        border-radius: 13px;
        box-sizing: border-box;
        padding: 24px 34px;
        width: 360px;
        height: 540px;
        background-color: #fff;
        box-shadow: 0 15px 25px rgba($color: #000, $alpha: 0.16);
        &:hover {
            .img-section {
                .info {
                    opacity: 1;
                }
            }
        }
        .img-section {
            font-family: "Prompt";
            width: 100%;
            height: 360px;
            position: relative;
            overflow: hidden;
            transition: 0.2s;
            border-radius: 6px;
            .info {
                transition: 0.2s;
                opacity: 0;
                box-sizing: border-box;
                border-radius: 6px;
                border: 1px solid rgba($color: #F7B01E, $alpha: 0.4);
                background-color: #fff;
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                bottom: 0;
                top: 0;
                right: 0;
                padding: 10px 14px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                span {
                    display: block;
                    text-align: center;
                    &.info-title {
                        font-size: 20px;
                        font-weight: 500;
                    }
                    &.desc {
                        font-size: 14px;
                        font-weight: 300;
                        margin-top: 10px;
                        margin-bottom: 20px;
                    }
                    &.price {
                        font-size: 24px;
                        font-weight: 600;
                    }
                }
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .bottom {
            font-family: "Config Condensed";
            .head-title {
                display: flex;
                justify-content: space-between;
                margin: 20px 0 30px;
                .title {
                    font-size: 28px;
                    font-weight: 500;
                    color: #E0B763;
                }
                .offer {
                    font-size: 28px;
                }
            }
            .bottom-buttons {
                font-weight: 600;
                font-size: 19px;
                display: flex;
                justify-content: space-between;
                line-height: 34px;
                a {
                    transition: 0.2s;
                    border: 1px solid #FFA200;
                    border-radius: 6px;
                    text-decoration: none;
                    width: 120px;
                    height: 34px;
                    line-height: 34px;
                    color: #000;
                    display: block;
                    text-align: center;
                    &:hover {
                        background-color: rgba($color: #FFA200, $alpha: 0.4);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1920px) {
        .offer-box {
            padding: 15px 20px !important;
            width: 300px !important;
            height: 450px !important;
            .head-title {
                .title, .offer{
                    font-size: 24px !important;
                }
            }
            .bottom .bottom-buttons a {
                width: 104px !important;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .offer-box {
            width: 300px !important;
            height: 450px !important;
            padding: 20px 18px !important;
            .head-title {
                .title, .offer{
                    font-size: 24px !important;
                }
            }
            .bottom .bottom-buttons a {
                width: 104px !important;
            }
        }
    }

    @media screen and (max-width: 425px) {
        .offer-box {
            padding: 15px 20px !important;
            width: 260px !important;
            height: 399px !important;
            .head-title {
                .title, .offer{
                    font-size: 24px !important;
                }
            }
            .bottom .bottom-buttons a {
                width: 90px !important;
            }
        }
    }
</style>