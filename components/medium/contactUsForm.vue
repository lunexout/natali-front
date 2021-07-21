<template>
    <div class="contact-us-form">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="img-wrapper">
                        <img src="/assets/img/pn.png" alt="img" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="form-wrapper">
                        <form action="#">
                            <h1>Contact Us</h1>
                            <div class="line">
                                <label for="first_name"
                                    >First name
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        v-model="formData.name"
                                    />
                                </label>
                                <label for="last_name"
                                    >Last name
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        v-model="formData.surname"
                                    />
                                </label>
                            </div>
                            <label for="email"
                                >Email
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    v-model="formData.email"
                                />
                            </label>
                            <label for="phone"
                                >Phone
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    v-model="formData.phone_number"
                                />
                            </label>
                            <label for="subject"
                                >Subject
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    v-model="formData.subject"
                                />
                            </label>
                            <label for="message"
                                >Message
                                <textarea
                                    name="message"
                                    id="message"
                                    v-model="formData.body"
                                ></textarea>
                            </label>
                            <div @click="send()" class="submit">Let's talk</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "ContactUsForm",
    props: ["branchId"],
    data() {
        return {
            formData: {
                name: "",
                surname: "",
                email: "",
                phone_number: "",
                subject: "",
                body: "",
            },
        };
    },
    methods: {
        ...mapActions("Forms", ["sendContactUs"]),
        send() {
            this.formData.branch_id = this.branchId;
            this.sendContactUs(this.formData);
        },
    },
};
</script>

<style lang="scss" scoped>
.contact-us-form {
    padding: 60px 0;
    .img-wrapper {
        height: 100%;
        width: 100%;
        max-height: 700px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .form-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        form {
            margin: 0 auto;
            width: 100%;
            font-family: "Prompt";
            h1 {
                font-family: "Config Condensed";
                font-weight: 400;
                text-transform: uppercase;
                margin: 0;
            }
            label {
                display: block;
                margin: 16px 0 0 0;
            }
            textarea {
                padding-top: 10px;
                height: 120px;
                resize: none;
            }
            input,
            textarea {
                font-family: "Config Condensed";
                font-size: 16px;
                padding-left: 16px;
                width: 100%;
                background-color: rgba($color: #c9cbcd, $alpha: 0.1);
                border: 1px solid rgba($color: #000, $alpha: 0.1);
                border-radius: 4px;
                box-sizing: border-box;
                transition: 0.2s;
                &:focus {
                    border: 1px solid rgba($color: #ffaa00, $alpha: 0.4);
                }
            }
            input {
                height: 40px;
                line-height: 40px;
            }
            .line {
                width: 100%;
                display: flex;
                label {
                    width: 100%;
                }
                label:first-child {
                    margin-right: 6px;
                }
                label:last-child {
                    margin-left: 6px;
                }
            }
            .submit {
                cursor: pointer;
                display: block;
                background-color: #ffe1a4;
                color: #000;
                text-decoration: none;
                line-height: 40px;
                text-align: center;
                margin-top: 16px;
                font-family: "Config Condensed";
                font-weight: 600;
                font-size: 18px;
                height: 40px;
                border-radius: 4px;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .img-wrapper {
        height: 300px !important;
    }
}

@media screen and (max-width: 510px) {
    .img-wrapper {
        height: 200px !important;
    }
    .form-wrapper {
        .line {
            flex-wrap: wrap;
            label {
                margin-left: 0 !important;
                margin-right: 0 !important;
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .img-wrapper {
        height: 130px !important;
    }
}
</style>