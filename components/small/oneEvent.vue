<template>
    <div class="one-event">
        <div class="img-box">
            <img src="/assets/img/seminarbg.png" alt="img" />
        </div>
        <div class="info-box">
            <div class="user-info">
                <div class="user">
                    <div class="img-wrapper">
                        <img src="/assets/img/rect.png" alt="user" />
                    </div>
                    <p class="username">Merab merabishvili</p>
                </div>
                <div class="date-box">
                    <span>21 Jul</span>
                </div>
            </div>
            <div class="text-content">
                <p class="seminar-title">Cosmetology</p>
                <p class="seminar-text">
                    Currently, the most popular professions in Georgian youth
                    are connected with fashion. We offer you studying in our
                    Hairdresser’s School to support your talent in this
                    comprehensive need for beauty. Our school program includes
                    the newest
                </p>
            </div>
            <div class="info">
                <span>See info</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OneEvent",
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.one-event {
    max-width: 1040px;
    display: flex;
    background: #f8f8f8;
    .info-box {
        padding: 20px 0 20px 16px;
        .text-content {
            font-family: "Prompt";
            max-width: 400px;
            margin: 8px 116px 0;
            .seminar-title {
                font-weight: 500;
                font-size: 20px;
            }
            .seminar-text {
                font-size: 14px;
                color: #707070;
            }
        }
        .info {
            padding: 0 16px;
            text-align: right;
            margin-top: 16px;
            span {
                cursor: pointer;
                text-align: right;
                font-family: "Prompt";
                font-weight: 500;
                font-size: 16px;
                color: #383838;
            }
        }
        .user-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding-left: 30px;
            box-sizing: border-box;
            .user {
                display: flex;
                align-items: center;
                .username {
                    font-family: "Prompt";
                    font-weight: 500;
                    margin-left: 16px;
                    font-size: 18px;
                }
            }
            .date-box {
                height: 50px;
                padding: 0 16px;
                span {
                    line-height: 50px;
                    font-family: "Config Condensed";
                    font-weight: 600;
                    font-size: 20px;
                }
            }
            .img-wrapper {
                height: 70px;
                width: 70px;
                border-radius: 50%;
                overflow: hidden;
            }
        }
    }
    .img-box {
        width: 400px;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}

@media screen and (max-width: 1024px) {
    .one-event {
        flex-direction: column;
        .img-box {
            width: 100% !important;
            height: 240px;
        }
    }
}

@media screen and (max-width: 600px) {
    .one-event {
        .info-box {
            padding: 20px 0 !important;
            .text-content {
                margin: 16px 33px 0 !important;
            }
        }
    }
}

@media screen and (max-width: 500px) {
    .one-event {
        .img-box {
            height: 180px !important;
        }
        .info-box {
            .text-content {
                margin: 4px 16px 0 !important;
            }
            .user-info {
                padding-left: 16px !important;
                align-items: flex-start;
                flex-direction: column;
                .date-box {
                    width: 100%;
                    text-align: right;
                    box-sizing: border-box;
                }
            }
        }
    }
}
</style>
