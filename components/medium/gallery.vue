<template>
    <div class="gallery">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div class="filter-box">
                        <div class="head">
                            <p class="title">FILTER</p>
                        </div>
                        <ul>
                            <li>VIDEOS</li>
                            <li>YEARS</li>
                            <li>DEVICES</li>
                        </ul>
                    </div>
                </div>
                <div v-for="i in [1,2,3,4,5]" :key="i" class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div class="img-box">
                        <img src="/assets/img/onenews.png" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Gallery',
        // props: ['list'].
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

.gallery {
    padding: 60px 0;
    .img-box {
        height: 380px;
        width: 315px;
        margin: 0 auto;
        // padding: 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .filter-box {
        height: 400px;
        width: 380px;
        margin: 0 auto;
        background-color: #FAFAFA;
        font-family: 'Config Condensed';
        .head {
            box-sizing: border-box;
            border-bottom: 2px solid #fff;
            width: 100%;
            height: 70px;
            padding: 0 0 0 30px;
            .title {
                line-height: 70px;
                font-size: 25px;
                font-weight: bold;
            }
        }
        ul {
            padding: 30px 0 0 50px;
            display: flex;
            flex-direction: column;
            li {
                display: inline-block;
                list-style-type: none;
                font-weight: 400;
                cursor: pointer;
                font-size: 25px;
                position: relative;
                margin-bottom: 16px;
                &::before {
                    content: '+';
                    position: absolute;
                    left: -30px;
                    bottom: -8px;
                    font-size: 40px;
                }
            }
        }
    }
}

@media screen and (max-width: 1600px) {
    .img-box, .filter-box {
        height: 380px !important;
        width: 290px !important;
    }
}

@media screen and (max-width: 1350px) {
    .img-box, .filter-box {
        height: 370px !important;
        width: 265px !important;
    }
}

@media screen and (max-width: 1200px) {
    .img-box, .filter-box {
        height: 370px !important;
        width: 300px !important;
    }
}

@media screen and (max-width: 1024px) {
    .img-box, .filter-box {
        height: 370px !important;
        width: 340px !important;
    }
}

@media screen and (max-width: 500px) {
    .img-box, .filter-box {
        height: 380px !important;
        width: 280px !important;
    }
}

</style>