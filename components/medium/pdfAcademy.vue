<template>
    <div class="pdf-academy">
        <div class="container">
            <div class="row">
                <div
                    class="col-sm-6 col-xs-12"
                    :class="{
                        'col-lg-4': grid == 'x3',
                        'col-md-4': grid == 'x3',
                        'col-lg-6': grid == 'x2',
                        'col-md-6': grid == 'x2',
                    }"
                    v-for="(el, index) in [1, 2, 3]"
                    :key="index"
                >
                    <div
                        class="pdf-academy-box"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        :data-aos-delay="(index + 1) * 100"
                    >
                        <div class="img-wrapper">
                            <img src="/assets/img/pdf-img.png" alt="img" />
                        </div>
                        <div class="info-wrapper">
                            <p class="pdf-title">Cosmetology</p>
                            <p class="pdf-desc">
                                Currently, the most popular professions in
                                Georgian youth are connected with fashion.
                            </p>
                            <span class="pdf-button">
                                <img
                                    src="/assets/icons/file_pdf.svg"
                                    alt="icon"
                                />
                                DOWNLOAD PDF
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PDFAcademy",
    props: {
        grid: {
            type: String,
            default: "x3",
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.pdf-academy {
    padding: 50px 0;
    &-box {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        .info-wrapper {
            border-bottom: 1px solid #ffac00;
            border-left: 1px solid #ffac00;
            border-right: 1px solid #ffac00;
            font-family: "Prompt";
            text-align: center;
            padding: 20px;
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
                font-family: "Config Condensed";
                font-size: 16px;
                width: 174px;
                height: 36px;
                border-radius: 5px;
                margin: 16px auto 6px;
                font-weight: 500;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                color: #000;
                box-sizing: border-box;
                border: 1px solid #edb136;
                img {
                    height: 16px;
                    margin: 0 10px 0 0;
                }
            }
        }
        .img-wrapper {
            width: 100%;
            height: 280px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

@media screen and (max-width: 450px) {
    .pdf-academy {
        &-box {
            .img-wrapper {
                height: 200px !important;
            }
        }
    }
}
</style>