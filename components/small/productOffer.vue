<template>
  <div class="product-offer-box">
    <div class="info-wrapper">
      <div class="img-wrapper">
        <img src="/assets/img/testp.png" alt="img" />
      </div>
      <div class="info">
        <p class="title">{{ oneOffer.item.name }}</p>
        <!-- <p class="desc">{{oneOffer.item.content}}</p> -->
        <span class="offer">{{ oneOffer.discount_percent }}%</span>
      </div>
    </div>
    <div class="tick-block">
      <label for="tick" class="tick" @click="checkItem">
        <input
          type="checkbox"
          :id="oneOffer.id + oneOffer.item.name"
          :value="oneOffer.id"
          hidden
        />
        <img
          v-if="!isChecked"
          :src="nonChecked"
          alt="tick"
          @click="saveOfferToArray(oneOffer)"
        />
        <img
          v-else
          :src="checked"
          @click="delteOfferFromArray(oneOffer)"
          alt="tick"
        />
      </label>
    </div>
  </div>
</template>

<script>
import nonChecked from "./../../assets/images/noncheck.svg";
import checked from "./../../assets/images/checked.svg";
import { mapActions, mapGetters } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

export default {
  name: "ProductOffer",
  props: ["oneOffer"],
  data() {
    return {
      nonChecked: nonChecked,
      checked: checked,
      isChecked: false,
    };
  },

  methods: {
    ...mapActions("Cart", ["saveOfferToArray", "delteOfferFromArray"]),
    checkItem() {
      this.oneOffer.checked = !this.oneOffer.checked;
      this.isChecked = !this.isChecked;
    },
  },
  mounted() {
    this.oneOffer.checked = false;
  },
  computed: {
      ...mapGetters("Cart", ["getAlertState"])
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
      } else if(this.getAlertState.error == false) {
        Swal.fire({
            title: this.getAlertState.item_name, 
            text: this.getAlertState.msg, 
            icon: "success",
            denyButtonText: `OK`,
        });
      }else {
        Swal.fire({
            title: this.getAlertState.item_name, 
            text: this.getAlertState.msg, 
            icon: "info",
            denyButtonText: `OK`,
        });
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.product-offer-box {
  margin: 10px 10px 50px;
  position: relative;
  width: 400px;
  height: 440px;
  &:hover .info-wrapper .info {
    opacity: 1;
  }
  .info-wrapper {
    width: 100%;
    height: 100%;
    .img-wrapper {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .info {
      opacity: 0;
      transition: 0.3s;
      padding: 30px;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid #f7a72e;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-family: "Prompt";
      .title {
        font-weight: 500;
        font-size: 22px;
        margin-bottom: 12px;
      }
      .desc {
        font-weight: 300;
        font-size: 16px;
        color: #2c2d33;
      }
      .offer {
        margin-top: 20px;
        font-weight: 500;
        font-size: 35px;
      }
    }
  }
  .tick-block {
    background-color: #fff;
    position: absolute;
    width: 160px;
    height: 90px;
    left: calc(50% - 80px);
    bottom: -45px;
    display: flex;
    justify-content: center;
    align-items: center;
    .tick {
      cursor: pointer;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    //     img {
    //         background: #95A5A6;
    //         width: 100%;
    //         height: 100%;
    //         border-radius: 50%;
    //         padding: 8px;
    //         box-sizing: border-box;
    //     }
    //     input:checked ~ img {
    //         background: #2ECC71;
    //     }
    // }
  }
}
.checkedInput {
  input:checked ~ img {
    background: #2ecc71;
  }
}

@media screen and (max-width: 1920px) {
  .product-offer-box:not(.langing) {
    width: 350px !important;
    height: 420px !important;
  }
}

@media screen and (max-width: 1200px) {
  .product-offer-box {
    width: 350px !important;
    height: 400px !important;
  }
}

@media screen and (max-width: 1024px) {
  .product-offer-box {
    width: 320px !important;
    height: 360px !important;
    .info-wrapper {
      .info {
        .title {
          font-size: 20px !important;
        }
        .desc {
          font-size: 14px !important;
        }
        .offer {
          margin-top: 12px !important;
          font-size: 28px !important;
        }
      }
    }
  }
  .product-offer-box:not(.landing) {
    width: 320px !important;
    height: 360px !important;
  }
}

@media screen and (max-width: 600px) {
  .swiper-slide .product-offer-box {
    width: 280px !important;
    height: 340px !important;
  }
}
</style>