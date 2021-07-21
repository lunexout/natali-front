<template>
    <div class="faq">
        <div class="container">
            <h1 class="title">F.A.Q</h1>
            <div class="questions">
                <div class="question">
                    <span class="head"
                        >Currently, the most popular professions in Georgian
                        youth</span
                    >
                    <p class="answer">
                        Currently, the most popular professions in Georgian
                        youth are connected with fashion. We offer you studying
                        in our Hairdresser’s School to support your talent in
                        this comprehensive need for beauty. Our school program
                        includes the newest knowledge of technologies in this
                        field.School educational plan includes basic education
                        programs for multifunctional
                    </p>
                </div>
                <div class="question">
                    <span class="head"
                        >Currently, the most popular professions in Georgian
                        youth</span
                    >
                    <p class="answer">
                        Currently, the most popular professions in Georgian
                        youth are connected with fashion. We offer you studying
                        in our Hairdresser’s School to support your talent in
                        this comprehensive need for beauty. Our school program
                        includes the newest knowledge of technologies in this
                        field.School educational plan includes basic education
                        programs for multifunctional
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "FAQ",
    data() {
        return {};
    },
    methods: {
        ...mapActions("General", ["receiveFaqs"])
    },
    computed: {
        ...mapGetters("General", ["getFaqs"])
    },
    mounted() {
        this.receiveFaqs(0);
        console.log("asdasdasd", this.getFaqs);
    }
};
</script>

<style lang="scss" scoped>
.faq {
    background: #fafafa;
    font-family: "Prompt";
    padding: 60px 10px 100px;
    .title {
        color: #cfad67;
        font-weight: 600;
        font-size: 32px;
    }
    .questions {
        padding-left: 50px;
        .question {
            margin: 40px 0;
            .head {
                display: block;
                margin-bottom: 20px;
                color: #403f3f;
                font-size: 26px;
                font-weight: 600;
                position: relative;
                &::before {
                    content: "?";
                    font-family: "Prompt";
                    font-size: 30px;
                    color: #403f3f;
                    position: absolute;
                    left: -35px;
                    top: -6px;
                }
            }
            .answer {
                color: #b37902;
                font-size: 24px;
                font-weight: 300;
            }
        }
    }
}

@media screen and (max-width: 500px) {
    .question {
        .head {
            font-size: 22px !important;
        }
        .answer {
            font-size: 20px !important;
        }
    }
}
</style>
