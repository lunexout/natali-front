<template>
    <div class="programs">
        <div class="container">
            <div class="categories">
                <div class="cat">
                    <span class="active">All classes</span>
                    <span>Professional programs</span>
                    <span>Certification programs</span>
                    <span>Non-formal education</span>
                </div>
                <div class="sub">
                    <span class="active">Hair care</span>
                    <span>Nail care</span>
                    <span>Visage and correction</span>
                    <span>Skin care</span>
                    <span>Administracion</span>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" v-for="(item, index) in [1,2,3,4,5]" :key="index">
                    <div class="program-box">
                        <div class="img-wrapper">
                            <img src="/assets/img/poster.png" alt="img">
                        </div>
                        <div class="info-wrapper">
                            <p class="program-title">STANDART STYLIST PROGRAMS</p>
                            <p class="desc">Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our Hairdresser’s School to support your talent in this comprehensive need for beauty.</p> <!-- truncate(250) -->
                            <div class="buttons">
                                <div class="left">
                                    <a href="#" class="pdf">
                                        <img src="/assets/icons/file_pdf.svg" alt="icon">
                                        DOWNLOAD PDF
                                    </a>
                                    <a href="#" class="pdf">
                                        <img src="/assets/icons/file_pdf.svg" alt="icon">
                                        DOWNLOAD PDF
                                    </a>
                                    <a href="#" class="details">See details</a>
                                </div>
                                <div class="right">
                                    <a href="#" class="book">BOOK PROGRAMM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Programs',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

.programs {
    .categories {
        .cat, .sub {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            span {
                cursor: pointer;
                display: inline-block;
                font-family: 'Config Condensed';
                font-weight: 500;
                font-size: 20px;
                height: 40px;
                line-height: 40px;
                padding: 0 24px;
                margin: 8px 16px 16px;
                border-radius: 6px;
                box-sizing: border-box;
                white-space: nowrap;
                position: relative;
            }
        }
        .cat {
            padding-top: 30px;
            border-bottom: 1px solid rgba($color: #707070, $alpha: .1);
            span:not(:last-child):after {
                content: '';
                position: absolute;
                background: rgba($color: #707070, $alpha: .1);
                top: 0;
                right: -16px;
                height: 100%;
                width: 1px;
            }
            span.active {
                background: #FAE395;
                border: 1px solid #DFAF4C;
            }
            span:not(.active):hover {
                background: rgba($color: #FAE395, $alpha: .7);
            }
        }
        .sub {
            padding-top: 8px;
            span.active {
                background: rgba($color: #FAE395, $alpha: .3);
                border: 1px solid rgba($color: #DFAF4C, $alpha: .3);
            }
            span:not(.active):hover {
                background: rgba($color: #fae29538, $alpha: .3);
            }
        }
    }
    .program-box {
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #CFAD67;
        border-radius: 18px;
        overflow: hidden;
        margin: 30px auto;
        box-shadow: 0 0 30px rgba($color: #000000, $alpha: .05);
        width: 450px;
        min-height: 450px;
        .info-wrapper {
            padding: 26px 40px;
            .program-title {
                font-family: 'Config Condensed';
                font-weight: 500;
                font-size: 20px;
            }
            .desc {
                font-family: 'Prompt';
                font-weight: 300;
                font-size: 14px;
                margin-top: 6px;
                min-height: 100px;
            }
            .buttons {
                margin-top: 30px;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                .pdf, .book, .details {
                    font-family: 'Config Condensed';
                    font-size: 16px;
                    width: 174px;
                    height: 36px;
                    border-radius: 5px;
                    margin: 6px 0;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    color: #000;
                    box-sizing: border-box;
                    img {
                        height: 16px;
                        margin: 0 10px 0 0;
                    }
                }
                .pdf, .book {
                    border: 1px solid #EDB136;
                }
                .book {
                    background-color: #F3D678;
                }
            }
        }
        .img-wrapper {
            height: 170px;
            width: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

@media screen and (max-width: 1600px) {
    .program-box {
        width: 390px !important;
        .info-wrapper {
            padding: 24px 18px !important;
        }
    }
}

@media screen and (max-width: 1350px) {
    .program-box {
        width: 350px !important;
        .info-wrapper {
            padding: 24px 18px !important;
            .buttons {
                flex-direction: column !important;
                align-items: center !important;
                .book {
                    margin-top: 0 !important;
                }
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .program-box {
        width: 400px !important;
        .info-wrapper {
            padding: 24px 32px !important;
        }
    }
}

@media screen and (max-width: 600px) {
    .program-box {
        width: 340px !important;
        .info-wrapper {
            padding: 16px 20px !important;
        }
    }
}

@media screen and (max-width: 425px) {
    .program-box {
        width: 280px !important;
        .info-wrapper {
            padding: 20px 14px !important;
        }
    }
}

</style>