<template>
    <div class="form-box">
        <span class="form-title">Fill the form</span>
        <div class="form">
            <div class="row">
                <div class="col-sm-6 col-xs-12 nopadding">
                    <div class="inps">
                        <div class="inp-box">
                            <label :for="`fullname_${id}`">Full name</label>
                            <input
                                type="text"
                                :id="`fullname_${id}`"
                                name="fullname"
                                v-model="formData.full_name"
                            />
                        </div>
                        <div class="inp-box">
                            <label :for="`email_${id}`">E-mail</label>
                            <input
                                type="email"
                                :id="`email_${id}`"
                                name="email"
                                v-model="formData.email"
                            />
                        </div>
                        <div class="inp-box">
                            <label :for="`phone_${id}`">Phone number</label>
                            <input
                                type="number"
                                :id="`phone_${id}`"
                                name="phone"
                                v-model="formData.phone_number"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-12 nopadding">
                    <div class="inps right">
                        <div class="inp-box">
                            <label :for="`subject_${id}`">Subject</label>
                            <input
                                type="text"
                                :id="`subject_${id}`"
                                name="subject"
                                v-model="formData.subject"
                            />
                        </div>
                        <div class="inp-box">
                            <label :for="`message_${id}`">Your Message</label>
                            <textarea
                                name="message"
                                :id="`message_${id}`"
                                style="resize: none"
                                v-model="formData.message"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <span class="apply-btn" @click="send()">apply now</span>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "FormComponent",
    props: ["id", "branchId"],
    data() {
        return {
            formData: {
                full_name: null,
                email: null,
                phone_number: null,
                subject: null,
                message: null,
            },
        };
    },
    methods: {
        ...mapActions("Forms", ["sendFillForm"]),
        send() {
            // this.formData.branch_id = this.branchId;
            this.formData.branch_id = 0;
            this.sendFillForm(this.formData);
        },
    },
};
</script>

<style lang="scss" scoped>
.form-box {
    font-family: "Config Condensed";
    max-width: 700px;
    padding: 30px 80px 40px;
    box-sizing: border-box;
    background-color: #fff;
    .form-title {
        text-transform: uppercase;
        font-family: "Prompt";
        font-weight: 500;
        font-size: 26px;
    }
    .form {
        .inps {
            margin: 0 16px 0 0;
            &.right {
                margin: 0 0 0 16px;
            }
            .inp-box {
                display: flex;
                flex-direction: column;
                input,
                textarea {
                    background: #f9f9f9;
                    border: 1px solid rgba($color: #000, $alpha: 0.1);
                    border-radius: 4px;
                    display: block;
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0 0 0 8px;
                    font-family: "Prompt";
                    &:focus {
                        border-color: #ffe1a4;
                    }
                }
                textarea {
                    height: 110px;
                    padding-top: 8px;
                }
                input {
                    height: 36px;
                }
                label {
                    height: 26px;
                    font-weight: 500;
                    font-size: 18px;
                    margin: 8px 0 4px 0;
                }
            }
        }
        .apply-btn {
            cursor: pointer;
            font-family: "Config Condensed";
            background-color: #ffe1a4;
            height: 40px;
            width: 100%;
            line-height: 40px;
            text-align: center;
            font-weight: 500;
            border-radius: 4px;
            font-size: 18px;
            margin-top: 20px;
            text-transform: uppercase;
            display: block;
        }
    }
}

@media screen and (max-width: 768px) {
    .form-box {
        .inps {
            margin: 0 !important;
        }
    }
}

@media screen and (max-width: 470px) {
    .form-box {
        padding: 16px 20px 20px;
    }
}
</style>