<template>
    <div class="pdf-academy-poster">
        <div class="row" :class="[ reverse ? 'reverse' : '' ]">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 nopadding">
                <div class="img-wrapper">
                    <img src="/assets/img/pdf.png" alt="img">
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding">
                <div class="info-wrapper">
                    <div class="info-inner">
                        <p class="pdf-title">Cosmetology</p>
                        <p class="pdf-desc">Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our Hairdresser’s School to support your talent in this</p>
                        <span class="pdf-button">
                            <img src="/assets/icons/file_pdf.svg" alt="icon">
                            DOWNLOAD PDF
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PDFAcademyPoster',
        props: ['reverse'],
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

.pdf-academy-poster {
    max-width: 1920px;
    margin: 0 auto;
    padding: 50px 0;
    .reverse {
        .info-wrapper {
            left: calc(100% - 280px);
            text-align: right;
            .pdf-button {
                margin-left: auto;
            }
        }
    }
    .info-wrapper {
        margin: 0;
        background-color: #fff;
        font-family: 'Prompt';
        padding: 34px 64px;
        box-sizing: border-box;
        position: relative;
        width: 500px;
        left: -200px;
        top: 50%;
        transform: translateY(-50%);
        .pdf-title {
            font-size: 22px;
            font-weight: 500;
        }
        .pdf-desc {
            color: #707070;
            font-size: 16px;
        }
        .pdf-button {
            cursor: pointer;
            display: block;
            font-family: 'Config Condensed';
            font-size: 16px;
            width: 174px;
            height: 36px;
            border-radius: 5px;
            margin: 16px 0 6px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: #000;
            box-sizing: border-box;
            border: 1px solid #EDB136;
            img {
                height: 16px;
                margin: 0 10px 0 0;
            }
        }
    }
    .img-wrapper {
        width: 100%;
        height: 500px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

@media screen and (max-width: 1350px) {
    .pdf-academy-poster {
        .img-wrapper {
            height: 440px !important;
        }
    }
}

@media screen and (max-width: 1024px) {
    .pdf-academy-poster {
        .img-wrapper {
            height: 360px !important;
        }
        .reverse {
            .info-wrapper {
                text-align: left !important;
                .pdf-button {
                    margin-left: unset !important;
                }
            }
        }
        .info-wrapper {
            transform: unset !important;
            left: unset !important;
            right: unset !important;
            top: unset !important;
            margin: 0 auto !important;
            width: 100% !important;
            max-width: 720px !important;
        }
    }
}

@media screen and (max-width: 768px) {
    .pdf-academy-poster {
        padding: 0 !important;
    }
}

@media screen and (max-width: 550px) {
    .pdf-academy-poster {
        .img-wrapper {
            height: 280px !important;
        }
        .info-wrapper {
            padding: 16px 32px !important;   
        }
    }
}

@media screen and (max-width: 550px) {
    .pdf-academy-poster {
        .img-wrapper {
            height: 180px !important;
        }
        .info-wrapper {
            padding: 16px 20px !important;
        }
    }
}

</style>