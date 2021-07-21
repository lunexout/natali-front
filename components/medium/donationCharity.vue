<template>
    <div class="donation-charity">
        <div class="img-box">
            <img src="/assets/img/charity.png" alt="img" />
        </div>
        <div class="info-box">
            <p class="title">Charity</p>
            <p class="desc">
                Currently, the most popular professions in Georgian youth are
                connected with fashion. We offer you studying in our
                Hairdresser’s School to support your talent in this
                comprehensive
            </p>
            <!-- truncate(200) -->
            <div class="box" v-if="!onlyText">
                <input
                    min="1"
                    step="1.0"
                    max="100000"
                    class="inp"
                    type="number"
                />
                <!-- $ sign problem -->
                <a class="submit">Give now</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DonationCharity",
    props: ["onlyText"],
};
</script>

<style lang="scss" scoped>
.donation-charity {
    position: relative;
    .info-box {
        background-color: #fff;
        position: absolute;
        width: 550px;
        box-sizing: border-box;
        padding: 30px 40px;
        min-height: 200px;
        bottom: 10%;
        right: 0;
        font-family: "Prompt";
        .title {
            font-weight: 500;
            font-size: 22px;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
        .desc {
            font-size: 18px;
        }
        .box {
            display: flex;
            margin: auto 0;
            padding: 20px 0;
            .inp {
                box-sizing: border-box;
                background-color: rgba($color: #859fb0, $alpha: 0.1);
                border: 1px solid #ffad05;
                height: 50px;
                width: 300px;
                font-weight: 600;
                font-size: 20px;
                padding: 0 14px;
                border-top-left-radius: 12px;
                border-bottom-left-radius: 12px;
                &:focus {
                    outline: none;
                }
            }
            .submit {
                font-family: "Config Condensed";
                font-weight: 600;
                text-align: center;
                font-size: 18px;
                line-height: 50px;
                height: 50px;
                width: 90px;
                border-top-right-radius: 12px;
                border-bottom-right-radius: 12px;
                background-color: #ffad05;
                white-space: nowrap;
            }
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