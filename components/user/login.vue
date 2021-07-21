<template>
  <div class="loginPage">
    <div class="login" v-if="!getUserToken || getUserToken == ''">
      <p class="title">
        Sign <span class="colorYellow">{{ signin ? "in" : "up" }}</span>
      </p>
      <div
        class="signup"
        v-if="!signin && (getUserToken == '' || !getUserToken)"
      >
        <!-- {{ getError }} -->
        <div class="onel">
          <label for="signup_first_name">
            First Name
            <input
              :class="{
                red: !validation.first,
              }"
              type="text"
              name="signup_first_name"
              id="signup_first_name"
              v-model="signupData.first_name"
            />
          </label>
          <label for="signup_last_name">
            Last Name
            <input
              :class="{
                red: !validation.last,
              }"
              type="text"
              name="signup_last_name"
              id="signup_last_name"
              v-model="signupData.last_name"
            />
          </label>
        </div>
        <label for="signup_email">
          E-Mail
          <input
            :class="{
              red: !validation.email,
            }"
            type="text"
            name="signup_email"
            id="signup_email"
            v-model="signupData.email"
          />
          <span class="err" v-if="!validation.email">Enter a valid E-mail</span>
        </label>
        <label for="signup_phone">
          Phone Number
          <VuePhoneNumberInput
            default-country-code="GE"
            color="#ffce6b"
            :class="{
              red: !validation.phone,
            }"
            name="signup_phone"
            id="signup_phone"
            v-model="notFormatted"
            @update="phoneNumberInput"
          />
        </label>
        <label for="signup_pass">
          Password
          <input
            :class="{
              red: !validation.password,
            }"
            type="password"
            name="signup_pass"
            id="signup_pass"
            v-model="signupData.password"
          />
          <span class="err" v-if="!validation.password"
            >Password length min. 8 characters</span
          >
        </label>
        <label for="signup_date">
          Birthday
          <DatePicker v-model="signupData.birthday" mode="date" is24hr>
            <template v-slot="{ inputValue, inputEvents }">
              <input
                :value="inputValue"
                v-on="inputEvents"
                :class="{
                  red: !validation.birthday,
                }"
              />
            </template>
          </DatePicker>
        </label>
        <div class="warn-box" v-if="getError.length">
          This is warn smth is wrong
        </div>
        <button
          class="submit"
          style="outline: none; border: none"
          @click="regIn()"
        >
          Register
        </button>
      </div>
      <div
        class="signin"
        v-if="signin && (getUserToken == '' || !getUserToken)"
      >
        <label for="signin_email">
          E-Mail
          <input
            :class="{
              red: !signinCheck.email,
            }"
            @keypress="validateSignIn()"
            type="text"
            name="signin_email"
            id="signin_email"
            v-model="loginData.email"
          />
        </label>
        <label for="signin_pass">
          Password
          <input
            :class="{
              red: !signinCheck.password,
            }"
            @keypress="validateSignIn()"
            type="password"
            name="signin_pass"
            id="signin_pass"
            v-model="loginData.password"
          />
        </label>
        <div class="warn-box" v-if="getError.length">
          This is warn smth is wrong {{ getError }}
        </div>
        <!-- :class="{ disabled: !signInState }" -->
        <button
          class="submit"
          style="outline: none; border: none"
          @click="logIn()"
        >
          Login
        </button>
      </div>
      <div class="footer">
        <p v-if="signin">
          Not registered yet ?
          <span class="colorYellow" @click="switchSign()">Sign Up</span>
        </p>
        <p v-else>
          Already have an account ?
          <span class="colorYellow" @click="switchSign()">Sign In</span>
        </p>
      </div>
    </div>
    <div class="logged" v-else>
      <div class="profile-box" v-if="getLoggedinUser">
        <p>Hello, {{ getLoggedinUser.name }}</p>
        <!-- <span @click="logOut()">Log Out</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import DatePicker from "v-calendar/lib/components/date-picker.umd";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

export default {
  name: "Login",
  components: {
    DatePicker,
    VuePhoneNumberInput,
  },
  data() {
    return {
      formattedN: "",
      notFormatted: "",
      phNumber: false,
      signin: true,
      signUpState: false,
      signInState: false,
      validation: {
        first: true,
        last: true,
        phone: true,
        email: true,
        password: true,
        birthday: true,
      },
      signinCheck: {
        email: true,
        password: true,
      },
      signupData: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        birthday: "",
      },
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("User", ["register"]),
    ...mapActions("User", ["login"]),
    ...mapActions("User", ["logout"]),
    phoneNumberInput(data) {
      this.phNumber = data.isValid;
      if (this.phNumber) {
        this.formattedN = data.formattedNumber;
      }
    },
    switchSign() {
      this.signin = !this.signin;
    },
    regIn() {
      this.validateSignUp();
      if (this.signUpState) {
        this.signupvalTrue();

        this.signupData.phone = this.formattedN;

        this.register(this.signupData);
      }
    },
    validateSignUp() {
      this.signupvalTrue();
      if (
        this.validateEmail(this.signupData.email) &&
        this.validatePassword(this.signupData.password) &&
        this.signupData.first_name.length > 1 &&
        this.signupData.last_name.length > 1 &&
        this.phNumber
      ) {
        this.signUpState = true;
      } else {
        if (this.signupData.first_name.length <= 1) {
          this.validation.first = false;
        }
        if (this.signupData.last_name.length <= 1) {
          this.validation.last = false;
        }
        if (!this.validateEmail(this.signupData.email)) {
          this.validation.email = false;
        }
        if (!this.validatePassword(this.signupData.password)) {
          this.validation.password = false;
        }
        if (this.phNumber) {
          this.validation.phone = false;
        }
        if (this.signupData.birthday.length <= 1) {
          this.validation.birthday = false;
        }

        this.signUpState = false;
      }
    },
    logIn() {
      this.validateSignIn();
      if (this.signInState) {
        this.signinvalTrue();
        this.login(this.loginData);
        // setTimeout(() => {
        //     this.$router.go(); // refreshing
        // }, 1000);
      }
    },
    validateSignIn() {
      this.signinvalTrue();
      if (
        this.validateEmail(this.loginData.email) &&
        this.validatePassword(this.loginData.password)
      ) {
        this.signInState = true;
      } else {
        if (!this.validateEmail(this.loginData.email)) {
          this.signinCheck.email = false;
        }
        if (!this.validatePassword(this.loginData.password)) {
          this.signinCheck.password = false;
        }

        this.signInState = false;
      }
    },
    logOut() {
      this.signin = true;
      this.logout();
    },
    validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validatePassword(pass) {
      if (pass.length >= 8) {
        return true;
      } else {
        return false;
      }
    },
    signupvalTrue() {
      this.validation.email = true;
      this.validation.password = true;
      this.validation.first = true;
      this.validation.last = true;
      this.validation.phone = true;
    },
    signinvalTrue() {
      this.signinCheck.email = true;
      this.signinCheck.password = true;
    },
  },
  computed: {
    ...mapGetters("User", ["getUserToken"]),
    ...mapGetters("User", ["getLoggedinUser"]),
    ...mapGetters("User", ["getError", "getAlertState"]),
  },
  mounted() {
    if (this.getUserToken != "" && this.getUserToken) {
      this.$router.push({ name: "userIndex" });
    }
  },
  watch: {
    getAlertState(newValue, oldValue) {
      if (this.getAlertState.error == true) {
        Swal.fire({
          title: this.getAlertState.item_name,
          text: this.getAlertState.msg,
          icon: "error",
          denyButtonText: `OK`,
        });
      } else if (this.getAlertState.error == false) {
        Swal.fire({
          title: this.getAlertState.item_name,
          text: this.getAlertState.msg,
          icon: "success",
          denyButtonText: `OK`,
        });
        window.location.reload();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loginPage {
  font-family: "Config Condensed";
  .warn-box {
    background-color: rgba($color: rgb(255, 0, 0), $alpha: 0.5);
    color: #fff;
    width: 100%;
    padding: 16px 8px;
    box-sizing: border-box;
    margin-top: 12px;
    border-radius: 3px;
  }
}
.logged {
  .profile-box {
    width: 300px;
    height: 300px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 26px;
    span {
      cursor: pointer;
    }
  }
}
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 8px 60px;
  .title {
    font-size: 30px;
    margin-bottom: 4px;
    font-weight: 300;
  }
  .colorYellow {
    color: #ffaa00;
  }
  .footer {
    p {
      margin-top: 30px;
      span {
        cursor: pointer;
      }
    }
  }
  .signup,
  .signin {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .birthday {
      margin-top: 8px;
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
    margin-top: 24px;
    margin-left: 8px;
    margin-right: 8px;
    font-family: "Config Condensed";
    font-weight: 500;
    font-size: 18px;
    height: 40px;
    border-radius: 4px;
    width: 100%;
    text-transform: uppercase;
    &.disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
}

@media screen and (max-width: 500px) {
  .onel {
    flex-direction: column;
    label:first-child {
      margin-right: 0 !important;
    }
    label:last-child {
      margin-left: 0 !important;
    }
  }
}
</style>
