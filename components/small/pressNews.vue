<template>
    <router-link :to="link" class="block-wrapper">
        <div class="row" :class="{ reverse: reverse == true }">
            <div class="col-sm-7 col-xs-12 nopadding">
                <div class="img-wrapper">
                    <img :src="data.images[0]" alt="img" />
                </div>
            </div>
            <div class="col-sm-5 col-xs-12 nopadding">
                <div class="text-wrapper">
                    <div class="text-inner">
                        <h2 class="title">{{ data.title }}</h2>
                        <p class="text">{{ data.content | truncate(350) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "PressNews",
    props: {
        reverse: {
            type: Boolean,
        },
        link: {
            default: "/",
        },
        data: {
            type: Object,
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.block-wrapper {
    width: 100%;
    display: block;
    margin: 40px 0;
    text-decoration: none;
    color: #000;
    .img-wrapper {
        display: flex;
        justify-content: flex-end;
        img {
            max-height: 500px;
            object-fit: cover;
            width: 100%;
            max-width: 1120px;
        }
    }
    .reverse {
        .img-wrapper {
            display: flex;
            justify-content: flex-start;
        }
        .text-wrapper {
            padding: 10px 40px 30px 20px;
        }
        .text-inner {
            .title {
                text-align: right;
                margin-left: auto;
            }
            .text {
                text-align: right;
            }
        }
    }
    .text-wrapper {
        padding: 10px 20px 30px 40px;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
        .text-inner {
            margin: 0 auto;
            .title {
                font-family: "Playfair Display";
                font-weight: bold;
                font-style: italic;
                max-width: 280px;
                font-size: 30px;
            }
            .text {
                font-family: "Prompt";
                font-weight: 300;
                max-width: 500px;
                font-size: 16px;
            }
        }
    }
}

@media screen and (min-width: 1900px) {
    .block-wrapper {
        .img-wrapper {
            img {
                max-height: 600px !important;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .block-wrapper {
        .img-wrapper {
            img {
                max-height: 440px !important;
            }
        }
        .text-wrapper,
        .reverse .text-wrapper {
            padding-bottom: 45px;
        }
        .reverse {
            .text-wrapper {
                padding-right: 20px;
                padding-left: 40px;
            }
            .text-inner {
                .title {
                    text-align: left;
                    margin-left: unset;
                }
                .text {
                    text-align: left;
                }
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .block-wrapper {
        .img-wrapper {
            img {
                max-height: 260px !important;
            }
        }
        .text-wrapper {
            padding: 10px 20px 30px 20px !important;
            .title {
                font-size: 26px !important;
            }
            .text {
                font-size: 14px !important;
            }
        }
    }
}
</style>