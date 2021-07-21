<template>
    <div class="franchize">
        <div class="container">
            <h1 class="title-upper">Franchize</h1>
        </div>
        <div class="img-box">
            <img src="/assets/img/franchize.png" alt="img">
        </div>
        <div class="info-box">
            <p class="title">Summer Vacation Fragrance Mist</p>
            <p class="desc">Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. P</p> <!-- truncate(200) -->
            <a href="#" class="learn-more">learn more</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Franchize'
    }
</script>

<style lang="scss" scoped>

.franchize {
    position: relative;
    .title-upper {
        margin-top: 60px;
        margin-bottom: 20px;
        font-size: 30px;
        font-family: 'Prompt';
        font-weight: 500;
        text-transform: uppercase;
    }
    .info-box {
        background-color: #fff;
        position: absolute;
        width: 550px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 30px 40px;
        height: 300px;
        bottom: 10%;
        right: 0;
        font-family: 'Prompt';
        .title {
            font-weight: 500;
            font-size: 22px;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
        .desc {
            font-size: 18px;
        }
        .learn-more {
            width: 220px;
            font-size: 22px;
            font-family: 'Config Condensed';
            font-weight: 600;
            display: block;
            margin: 8px 0;
            height: 50px;
            text-decoration: none;
            color: #000;
            line-height: 50px;
            text-align: center;
            border-radius: 10px;
            border: 1px solid #707070;
        }
    }
    .img-box {
        width: 70%;
        height: 500px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

@media screen and (min-width: 1400px) {
    .img-box {
        width: 80% !important;
        height: 600px !important;
    }
}

@media screen and (max-width: 1024px) {
    .img-box {
        width: 80% !important;
    }
}

@media screen and (max-width: 768px) {
    .img-box {
        width: 100% !important;
        height: 440px !important;
    }
    .info-box {
        box-sizing: border-box;
    }
}

@media screen and (max-width: 580px) {
    .info-box {
        width: 100% !important;
        padding: 18px 16px !important;
        height: unset !important;
        min-height: 200px !important;
        .title {
            font-size: 20px !important;
        }
        .desc {
            font-size: 16px !important;
        }
        .box {
            display: flex;
            margin: auto 0;
            padding: 20px 0 10px !important;
            .inp {
                width: calc(100% - 90px) !important;
            }
            .submit {
                height: 50px;
                width: 90px;
            }
        }
    }
}

</style>