<template>
    <div class="financial-aid">
        <Media v-if="getAllMedia" :oneMedia="getAllMedia[0]" />
        <div class="pdf-academy-poster">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 nopadding">
                    <div class="img-wrapper">
                        <img src="/assets/img/pdf.png" alt="img" />
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding">
                    <div class="info-wrapper">
                        <div class="info-inner">
                            <p class="pdf-title">Grants and scholarships</p>
                            <p class="pdf-desc">
                                Currently, the most popular professions in
                                Georgian youth are connected with fashion. We
                                offer you studying in our Hairdresser’s School
                                to support your talent in this
                            </p>
                            <span class="pdf-button"> Find out more </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row center-xs" style="padding: 80px 0">
            <div
                class="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                v-for="(program, index) in programList"
                :key="index"
            >
                <div class="program-box">
                    <div class="img-wrapper">
                        <img :src="program.img" alt="programm" />
                    </div>
                    <div class="info-wrapper">
                        <p class="program-title">
                            {{ program.title | truncate(20, ".") }}
                        </p>
                        <p class="desc">{{ program.desc | truncate(150) }}</p>
                        <a href="#" class="donate">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-poster-academy">
            <div class="img-box">
                <img src="/assets/img/formPoster.png" alt="img" />
            </div>
            <div class="box">
                <h1>Financial Aid FAQs</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vel maiores sapiente at voluptatum excepturi dolor hic quis
                    nesciunt cumque nulla?
                </p>
                <div class="seef">See F.A.Q</div>
            </div>
        </div>
        <div class="row center-xs" style="padding: 80px 0">
            <div
                class="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                v-for="(job, index) of jobList"
                :key="index"
            >
                <div class="job-box">
                    <div class="img-wrapper">
                        <img :src="job.img" alt="img" />
                    </div>
                    <div class="info-wrapper">
                        <p class="head">{{ job.title }}</p>
                        <p class="desc">
                            {{ job.desc | truncate(190) }}
                        </p>
                    </div>
                    <div class="details-wrapper">
                        <span class="see">See details</span>
                        <a href="#" class="apply">Apply now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Media from "../../components/medium/media";

export default {
    name: "Financial",
    components: {
        Media,
    },
    data() {
        return {
            programList: [
                {
                    img: "/assets/img/charity.png",
                    title: "Volunteer programasds",
                    desc:
                        "Currently, the most popular professions in Georgian youth are connected with fashion. We offer you sasd asdasd asdasd asdd asdsad asdasd asd asdasd ss",
                },
                {
                    img: "/assets/img/charity.png",
                    title: "Volunteer program",
                    desc:
                        "Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our",
                },
                {
                    img: "/assets/img/charity.png",
                    title: "Volunteer program",
                    desc:
                        "Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our",
                },
                {
                    img: "/assets/img/charity.png",
                    title: "Volunteer program",
                    desc:
                        "Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our",
                },
            ],
            jobList: [
                {
                    img: "/assets/img/poster.png",
                    title: "Skincare",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolore autem est quod nobis voluptatum am?",
                },
                {
                    img: "/assets/img/poster.png",
                    title: "Skincare",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolore autem est quod nobis voluptatum accusantium, obcaecati totam voluptas corrupti eius repellendus dignissimos quasi quam?",
                },
                {
                    img: "/assets/img/poster.png",
                    title: "Skincare",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolore autem est quod noccusantium, obcaecati totam voluptas corrupti eius repellendus dignissimos quasi quam?",
                },
                {
                    img: "/assets/img/poster.png",
                    title: "Skincare",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolore autem est quod nobis voluptatum ",
                },
                {
                    img: "/assets/img/poster.png",
                    title: "Skincare",
                    desc: "Lorem ipsum dolor sit am?",
                },
            ],
        };
    },
    computed: {
        ...mapGetters("General", ["getAllMedia"]),
    },
    methods: {
        ...mapActions("General", ["receiveAllMedia"]),
    },
    mounted() {
        this.receiveAllMedia(0);
    },
};
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
        font-family: "Prompt";
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
            font-family: "Config Condensed";
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
            background-color: #edb136;
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

.program-box {
    position: relative;
    margin: 0 auto 140px;
    width: 400px;
    height: 260px;
    text-align: center;
    .info-wrapper {
        bottom: 0;
        background-color: #fff;
        width: calc(100% - 60px);
        border: 2px solid #dfaf4c;
        left: 50%;
        height: 250px;
        transform: translateX(-50%) translateY(50%);
        position: absolute;
        font-family: "Prompt";
        padding: 20px;
        box-sizing: border-box;
        .program-title {
            font-weight: 500;
            font-size: 26px;
            margin-bottom: 6px;
            white-space: nowrap;
        }
        .desc {
            height: 100px;
            font-weight: 300;
            font-size: 16px;
        }
        .donate {
            font-family: "Config Condensed";
            font-weight: 600;
            text-transform: uppercase;
            text-decoration: none;
            color: #000;
            width: 120px;
            white-space: nowrap;
            margin: 25px auto 0;
            font-size: 15px;
            height: 36px;
            line-height: 36px;
            display: block;
            border-radius: 7px;
            background: #ffd683;
        }
    }
    .img-wrapper {
        height: 100%;
        width: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

@media screen and (max-width: 1350px) {
    .program-box {
        width: 360px !important;
        .info-wrapper {
            width: calc(100% - 20px) !important;
        }
    }
}

@media screen and (max-width: 1110px) {
    .program-box {
        width: 340px !important;
        .info-wrapper {
            width: calc(100% - 20px) !important;
            .program-title {
                font-size: 24px !important;
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .program-box {
        width: 300px !important;
        .info-wrapper {
            width: calc(100% - 8px) !important;
            .program-title {
                font-size: 22px !important;
            }
            .desc {
                font-size: 14px !important;
            }
        }
    }
}

.job-box {
    margin: 10px auto;
    width: 400px;
    height: 450px;
    background-color: #fff;
    border: 1px solid #ffaa00;
    box-sizing: border-box;
    .details-wrapper {
        font-family: "Config Condensed";
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 32px;
        .see {
            font-weight: 600;
            cursor: pointer;
        }
        .apply {
            text-decoration: none;
            color: #000;
            display: block;
            height: 36px;
            border-radius: 10px;
            background: rgba($color: #ffaa00, $alpha: 0.5);
            line-height: 36px;
            width: 100px;
            text-align: center;
            font-weight: 600;
            font-size: 16px;
            &:hover {
                background: rgba($color: #ffaa00, $alpha: 0.7);
            }
        }
    }
    .info-wrapper {
        font-family: "Prompt";
        padding: 16px 24px;
        .head {
            font-weight: 500;
            font-size: 24px;
        }
        .desc {
            color: #6e6e6e;
            font-size: 16px;
            height: 120px;
        }
    }
    .img-wrapper {
        width: 100%;
        height: 180px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

@media screen and (max-width: 1600px) {
    .job-box {
        width: 360px !important;
        height: 500px !important;
        .info-wrapper {
            .desc {
                height: 168px !important;
            }
        }
    }
}

// @media screen and (max-width: 1200px) {
//     .job-box {
//         width: 400px !important;
//         height: 500px !important;
//         .info-wrapper {
//             .desc {
//                 height: 120px !important;
//             }
//         }
//     }
// }

@media screen and (max-width: 1088px) {
    .job-box {
        width: 340px !important;
        height: 484px !important;
        padding: 16px !important;
        .info-wrapper {
            .desc {
                height: 168px !important;
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .job-box {
        width: 300px !important;
        height: 450px !important;
        .info-wrapper {
            .head {
                font-size: 22px !important;
            }
            .desc {
                height: 130px !important;
                font-size: 14px !important;
            }
        }
    }
}

.form-poster-academy {
    position: relative;
    .img-box {
        height: 500px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .box {
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translateY(-50%);
        background-color: rgba(255, 255, 255, 0.726);
        max-width: 500px;
        padding: 24px;
        box-sizing: border-box;
        font-family: "Prompt";
        h1 {
            margin: 0 0 12px;
            font-weight: 400;
        }
        p {
            margin: 0 0 12px;
        }
        .seef {
            float: right;
            margin: 0;
            background-color: #ffaa00;
            cursor: pointer;
            width: 115px;
            text-align: center;
            padding: 6px;
            box-sizing: border-box;
            border-radius: 4px;
        }
    }
}

@media screen and (max-width: 825px) {
    .box {
        left: 6% !important;
    }
}

@media screen and (max-width: 768px) {
    .img-box {
        height: 360px !important;
    }
    .box {
        left: unset !important;
        position: relative !important;
        transform: unset !important;
    }
}

@media screen and (max-width: 500px) {
    .img-box {
        height: 220px !important;
    }
}

@media screen and (max-width: 425px) {
    .img-box {
        height: 180px !important;
    }
}

@media screen and (min-width: 1500px) {
    .img-box {
        height: 600px !important;
    }
}
</style>