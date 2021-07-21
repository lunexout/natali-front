<template>
  <div class="product-box">
    <div
      class="quickshop"
      :class="[
        {
          active: quickShopState,
        },
      ]"
    >
      <div class="top">
        <span>NEW</span>
        <img src="/assets/icons/heart-no.svg" alt="like" />
      </div>
      <div class="img-wrapper" v-if="oneProduct.products[activeColor].images">
        <img
          :src="
            'https://natali.onesoul.io' +
            oneProduct.products[activeColor].images[0]
          "
          alt="product-img"
        />
      </div>
      <div class="info">
        <p class="title">{{ oneProduct.name | truncate(40) }}</p>
        <span
          class="cat"
          :inner-html.prop="oneProduct.content | truncate(40)"
        ></span>
        <span class="price"
          >$ {{ oneProduct.products[activeColor].price }}</span
        >
      </div>
      <div class="wrapper">
        <div class="choice">
          <!-- <label for="color" v-if="oneProduct.products.length > 1">
                        <span>Colour</span>
                        <input type="text" name="color" />
                    </label> -->

          <label for="quantity">
            <span>Quantity</span>

            <div
              class="inps"
              v-if="oneProduct.products[activeColor].quantity > 0"
            >
              <!-- <select name="q1" id="quantity1">
                                    <option v-for='(t,index) in oneProduct.products[activeColor].quantity'
                                     :key='index' :value="index+1">{{index+1}}</option>
                                </select> -->
              <div class="number-input">
                <button
                  @click="removeQuantity(oneProduct)"
                  style="padding-right: 30px"
                ></button>
                {{ oneProduct.cart_quantity }}
                <!-- <input
                                        v-model='quantity'
                                        class="quantity"
                                        min="1"
                                        name="quantity"
                                        value="1"
                                        type="number"
                                    /> -->
                <button
                  @click="addQuantity(oneProduct)"
                  style="padding-left: 30px"
                  class="plus"
                ></button>
              </div>
            </div>
            <div v-else>
              <p>Product is not available at the moment</p>
            </div>
          </label>
        </div>
        <div class="buttons">
          <span
            v-if="oneProduct.products[activeColor].quantity > 0"
            class="add-to-bag"
            @click="
              () => {
                addToCart({
                  ...oneProduct.products[activeColor],
                  cart_quantity: oneProduct.cart_quantity,
                });
                quickShop();
              }
            "
            >Add to bag</span
          >
          <span class="close" @click="quickShop()">Close</span>
        </div>
      </div>
    </div>
    <div class="additional-top">
      <p class="state">NEW</p>
      <img src="/assets/icons/heart-no.svg" alt="like" />
      <!-- /assets/icons/heart-fill.svg filled one -->
    </div>
    <a
      :href="link"
      class="product-image-box"
      v-if="oneProduct.products[activeColor].images.length > 0"
    >
      <img
        :src="
          'https://natali.onesoul.io' +
          oneProduct.products[activeColor].images[0]
        "
        alt="product-img"
      />
    </a>
    <div class="product-info-box">
      <div class="colors" v-if="oneProduct.products.length > 1">
        <input type="checkbox" :value="activeColor" hidden />
        <div class="c-list">
          <Color
            :color="prod.color_url"
            @click.native="colorCheck(index)"
            :class="{
              checked: index == activeColor,
            }"
            v-for="(prod, index) of oneProduct.products"
            :key="index"
          />
          <span class="more">+ more</span>
        </div>
      </div>
      <a :href="link" class="details">
        <p class="product-name">
          {{ oneProduct.name | truncate(40) }}
        </p>
        <!-- max 60 -->
        <p
          class="info"
          :inner-html.prop="oneProduct.content | truncate(70)"
        ></p>
        <!-- max 30 -->
        <span class="product-price"
          >$ {{ oneProduct.products[activeColor].price }}</span
        >
      </a>
      <span class="quick-shop" v-if="!quickShopState" @click="quickShop()"
        >+ Quick Shop</span
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Color from "./colorBox";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

export default {
  name: "ShopProduct",
  props: ["oneProduct", "branch_link", "branch_id"],
  components: {
    Color,
  },
  data() {
    return {
      activeColor: 0,
      isChecked: false,
      quickShopState: false,
    };
  },
  methods: {
    ...mapActions("Cart", [
      "addToCart",
      "removeFromCart",
      "addQuantity",
      "removeQuantity",
      "detailItemShow",
    ]),
    colorCheck(index) {
      this.activeColor = index;
    },
    quickShop() {
      this.quickShopState = !this.quickShopState;
    },

    getElementID(prod) {
      alert(prod.id);
    },
    checkItem(item) {
      if (!this.isChecked) {
        this.isChecked = !this.isChecked;
        this.addToCart(item);
      } else {
        this.isChecked = !this.isChecked;
        this.removeFromCart(item);
      }
    },
  },
  computed: {
    link() {
      let l =
        `/${this.branch_link}/products/` +
        this.oneProduct.id +
        "/" +
        this.branch_id;
      return l;
    },
    ...mapGetters("Cart", ["getCartItems", "getAlertState"]),
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
        if (this.getAlertState.deleting) {
          Swal.fire({
            title: this.getAlertState.item_name,
            text: this.getAlertState.msg,
            icon: "success",
            denyButtonText: `OK`,
            timer: 500,
          });
        } else {
          Swal.fire({
            title: this.getAlertState.item_name,
            text: this.getAlertState.msg,
            icon: "success",
            denyButtonText: `OK`,
            timer: 2000,
          });
        }
      } else {
        Swal.fire({
          title: this.getAlertState.item_name,
          text: this.getAlertState.msg,
          icon: "info",
          denyButtonText: `OK`,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product-box {
  display: flex;
  flex-direction: column;
  font-family: "Config Condensed";
  width: 260px;
  height: 450px;
  margin: 10px auto;
  position: relative;
  // cursor: pointer;
  .quickshop {
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 50%;
    right: 0;
    bottom: 0;
    width: 260px;
    height: 100%;
    transform: translateX(-50%);
    background-color: #fff;
    z-index: 10;
    display: none;
    &.active {
      display: block;
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      height: 24px;
      span {
        color: #e0b763;
        font-weight: 500;
        font-size: 14px;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
    .img-wrapper {
      width: 100%;
      height: 170px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .info {
      text-align: center;
      padding: 12px 12px 0;
      .title {
        display: block;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 17px;
      }
      .cat {
        display: block;
        color: gray;
        font-weight: 300;
      }
      .price {
        display: block;
        font-weight: 500;
        font-size: 18px;
      }
    }
    .wrapper {
      padding: 0 30px;
      .choice {
        label {
          display: block;
          display: block;
          padding: 4px 0;
          span {
            display: block;
            padding-left: 12px;
            color: #000000a3;
            font-size: 15px;
            margin-bottom: 2px;
          }
          input {
            display: block;
            width: 100%;
            border: none;
            background: #d3d3d363;
            height: 30px;
            padding-left: 12px;
            box-sizing: border-box;
          }
        }
      }
      .buttons {
        span {
          display: block;
          cursor: pointer;
          &.add-to-bag {
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #e0b763;
            color: #fff;
            border-radius: 4px;
            margin-top: 5px;
          }
          &.close {
            margin-top: 4px;
            text-align: center;
            color: gray;
          }
        }
      }
    }
  }
  .additional-top {
    position: relative;
    top: 0;
    width: 100%;
    z-index: 9;
    text-align: center;
    img {
      float: right;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    p {
      padding-left: 20px;
      display: inline-block;
      width: 100px;
      margin: 0 auto;
      font-family: "Prompt";
      font-size: 16px;
      font-weight: 500;
      color: #e0b763;
    }
  }
  &:hover .product-info-box .quick-shop {
    opacity: 1;
  }
  .product-image-box {
    padding: 20px 20px 0;
    position: relative;
    img {
      width: 100%;
      height: 220px;
      object-fit: cover;
    }
  }
  .product-info-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    position: relative;
    .details {
      text-decoration: none;
      color: #000;
      margin-top: 2px;
      display: flex;
      flex-direction: column;
      .product-name {
        font-family: "Config Condensed";
        font-size: 18px;
        font-weight: 500;
        display: inline-block;
        text-transform: uppercase;
      }
      .info {
        font-family: "Prompt";
        font-weight: 300;
        font-size: 14px;
        color: #2c2d33;
      }
      .product-price {
        font-family: "Prompt";
        font-weight: 500;
        font-size: 20px;
        margin-top: 4px;
      }
    }
    .colors {
      height: 30px;
      width: 100%;
      padding: 0 26px;
      box-sizing: border-box;
      .c-list {
        height: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .more {
          white-space: nowrap;
          font-size: 14px;
          margin-left: 4px;
        }
      }
    }

    .quick-shop {
      cursor: pointer;
      margin-top: 10px;
      box-sizing: border-box;
      transition: 0.4s;
      opacity: 0;
      font-weight: normal;
      text-decoration: none;
      background-color: #e0b763;
      line-height: 48px;
      text-align: center;
      font-size: 20px;
      bottom: 20px;
      width: 100%;
      height: 48px;
      border-radius: 5px;
      color: #fff;
    }
  }
}
.number-input {
  margin-top: 8px;
  background-color: #dddddd;
  display: inline-flex;
  width: 120px;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    background: none;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &,
  & * {
    box-sizing: border-box;
  }
  & button {
    outline: none;
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin: 0;
    position: relative;
  }
  & button:before,
  & button:after {
    display: inline-block;
    position: absolute;
    content: "";
    width: 14px;
    height: 1px;
    background-color: #212121;
    transform: translate(-50%, -50%);
  }
  & button.plus:after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  & input[type="number"] {
    font-family: sans-serif;
    width: 70px;
    border: none;
    font-size: 16px;
    height: 20px;
    font-weight: bold;
    text-align: center;
  }
}
</style>