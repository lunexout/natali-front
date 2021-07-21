<template>
    <div class="account">
        <div class="top-bar">
            <span :class="{ active: section == 0 }" @click="section = 0"
                >My details</span
            >
            <span :class="{ active: section == 1 }" @click="section = 1"
                >Address book</span
            >
            <span :class="{ active: section == 2 }" @click="section = 2"
                >Payment methods</span
            >
        </div>
        <div class="content">
            <div class="details" v-if="section == 0">
                <div class="onel">
                    <label for="first_name_details">
                        First Name
                        <input
                            type="text"
                            name="first_name_details"
                            id="first_name_details"
                            :value="getLoggedinUser ? getLoggedinUser.name : ''"
                        />
                    </label>
                    <label for="last_name_details">
                        Last Name
                        <input
                            type="text"
                            name="last_name_details"
                            id="last_name_details"
                            :value="
                                getLoggedinUser ? getLoggedinUser.family : ''
                            "
                        />
                    </label>
                </div>
                <label for="email_details">
                    E-Mail
                    <input
                        type="text"
                        name="email_details"
                        id="email_details"
                        :value="getLoggedinUser ? getLoggedinUser.email : ''"
                    />
                </label>
                <label for="phone_details">
                    Phone Number
                    <VuePhoneNumberInput
                        default-country-code="GE"
                        color="#ffce6b"
                        name="phone_details"
                        id="phone_details"
                        v-model="notFormatted"
                        @update="phoneNumberInput"
                    />
                </label>
                <a class="submit">Save Changes</a>
            </div>
            <div class="address-book" v-if="section == 1">
                <div class="inner">
                    <InfoBox variation="1" />
                    <span class="addnew">+ Add new address</span>
                </div>
            </div>
            <div class="payment-methods" v-if="section == 2">
                <div class="inner">
                    <InfoBox variation="2" />
                    <span class="addnew">+ Add new payment</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

import InfoBox from "./small/infobox.vue";

export default {
    name: "AccountPage",
    components: {
        InfoBox,
        VuePhoneNumberInput,
    },
    data() {
        return {
            section: 0,
            phNumber: false,
            formattedN: "",
            notFormatted: "",
        };
    },
    methods: {
        phoneNumberInput(data) {
            this.phNumber = data.isValid;
            if (this.phNumber) {
                this.formattedN = data.formattedNumber;
            }
        },
    },
    computed: {
        ...mapGetters("User", ["getLoggedinUser"]),
    },
};
</script>

<style lang="scss" scoped>
.account {
    padding-bottom: 40px;
    max-width: 700px;
    .top-bar {
        box-shadow: 0 3px 12px -12px grey;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        span {
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 12px;
            box-sizing: border-box;
            cursor: pointer;
            font-weight: 500;
            border-bottom: 2px solid transparent;
            &.active,
            &:hover {
                border-bottom: 2px solid #f7bf51b7;
            }
        }
    }
    .content {
        .details {
            padding: 0 30px;
        }
        .address-book,
        .payment-methods {
            .inner {
                max-width: 420px;
                margin: 0 auto;
                padding: 0 18px;
                .addnew {
                    display: inline-block;
                    margin-top: 8px;
                    font-weight: 500;
                    border: 1px solid #f7bf51b7;
                    cursor: pointer;
                    padding: 6px 24px;
                    border-radius: 6px;
                }
            }
        }
    }
    .onel {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        label:first-child {
            margin-right: 10px;
        }
        label:last-child {
            margin-left: 10px;
        }
    }
    label {
        width: 100%;
        display: block;
        margin: 16px 0 0 0;
    }
    .vue-phone-number-input {
        margin-top: 4px;
    }
    input {
        font-family: "Config Condensed";
        font-size: 16px;
        padding-left: 16px;
        width: 100%;
        // background-color: rgba($color: #c9cbcd, $alpha: 0.1);
        border: 1px solid rgba($color: #000, $alpha: 0.1);
        border-radius: 4px;
        box-sizing: border-box;
        transition: 0.2s;
        margin-top: 4px;
        height: 40px;
        line-height: 40px;
        &.red {
            border: 1px solid rgba($color: rgb(255, 0, 0), $alpha: 0.6);
        }
        &:focus {
            border: 1px solid rgba($color: #ffaa00, $alpha: 0.4);
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
        margin: 24px auto 0;
        font-family: "Config Condensed";
        font-weight: 500;
        font-size: 18px;
        height: 40px;
        border-radius: 4px;
        width: 200px;
        text-transform: uppercase;
        &.disabled {
            opacity: 0.5;
            cursor: default;
        }
    }
}

@media screen and (max-width: 768px) {
    .account {
        max-width: 100% !important;
    }
}

@media screen and (max-width: 425px) {
    .onel {
        flex-wrap: wrap;
        label {
            margin-right: 0 !important;
            margin-left: 0 !important;
        }
    }
    .top-bar {
        span {
            font-size: 14px !important;
        }
    }
}
</style>