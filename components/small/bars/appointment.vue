<template>
  <div class="appointment">
    <div class="flow main-flow" data-flow="0">
      <span class="flow-title">Appointment</span>
      <div class="main-flow-list main-flow-services">
        <img src="/assets/icons/services.svg" alt="icon" />
        <!-- icon should be changed -->
        <span>Services</span>
      </div>
      <div class="main-flow-list main-flow-employee">
        <img src="/assets/icons/users.svg" alt="icon" />
        <span>Employee</span>
      </div>
      <div class="main-flow-list main-flow-datentime">
        <img src="/assets/icons/calendar.svg" alt="icon" />
        <span>Date and time</span>
      </div>
      <BookInBars @click.native="setFlow(1)" text="Book" />
      <SecondaryBtn text="+ Sign up more" />
    </div>
    <div class="flow general-flow" data-flow="1">
      <div class="content-bar">
        <div class="top-bar">
          <span class="back" @click="setFlow(0)">Back</span>
        </div>
        <div class="slider-section">
          <swiper ref="mySwiper" :options="swiperOptions">
            <div class="swiper-pagination" slot="pagination"></div>
            <swiper-slide v-for="(slide, index) of getServices" :key="index">
              <div class="slide-box" @click="addServiceToSelected(slide)">
                <div class="img-wrapper">
                  <img
                    :src="'http://natali.onesoul.io' + slide.image"
                    alt="img"
                  />
                </div>
                <div class="title" style="font-size: 12px">
                  {{ slide.name.substring(0, 10) }} ...
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="s-listing">
          <div class="categories">
            <span
              class="cat"
              v-for="(cat, index) of getGroups"
              :key="index"
              @click="spanActive($event, cat)"
              :class="[
                {
                  active: index == 0,
                },
              ]"
            >
              {{ cat.name }}
            </span>
          </div>
          <div
            class="listing"
            style="height: 300px; overflow-y: scroll;"
          >
            <div
              class="s-item"
              style="cursor: pointer;"
              v-for="(service, index) in getServices"
              :key="index"
             @click="addServiceToSelected(service)"

            >
              <div class="img-wrapper">
                <img
                  :src="'http://natali.onesoul.io' + service.image"
                  alt="img"
                />
              </div>
              <div class="oth">
                <div class="details">
                  <span class="title" style="font-size: 15px"
                    >{{ service.name.substring(0, 15) }}...</span
                  >
                  <span class="time">{{service.created_at}}</span>
                </div>
                <div class="price">
                  <span
                    >${{
                      service.discount_price
                        ? service.discount_price
                        : service.price
                    }}</span
                  >
                </div>
              </div>
            </div>
          </div>
            <h2>Selected Services: {{getSelectedServices.length}}</h2>

        </div>
        <div class="selection">

          <div
            class="item-selection"
            v-for="(selected,index) in getSelectedServices"
            :key="index"
          >
            <div style="display:flex; justify-content: center; align-items: center;padding: 10px;">
              <img :src="'http://natali.onesoul.io' + selected.image" alt="img" />
              <div style="margin-left: 10px;" @click='deleteService(selected)'>X</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-bar">
        <div class="total">
          <p>Total:</p>
          <span class="price">$ {{getTotalOfSelected}}</span>
        </div>
        <span class="next" @click="setFlow(2)">Next</span>
      </div>
    </div>
    <div class="flow address-flow" data-flow="2">
      <div class="top-part">
        <div class="top-bar">
          <span class="back" @click="setFlow(1)">Back</span>
        </div>
        <div class="content-bar">
          <div class="stylist-groups">
            <span
            class="address"
            v-for="(stylist, index) in getActiveStylists"
            :key="index"
            @click="spanActiveStylist($event, stylist)"

            >{{stylist.name}}</span>
          </div>
        </div>
      </div>
      <div class="bottom-bar">
        <span class="next" @click="setFlow(3)">Next</span>
      </div>
    </div>
    <div class="flow stylist-flow" data-flow="3">
      <div class="top-part">
        <div class="top-bar">
          <span class="back" @click="setFlow(2)">Back</span>
          <!-- <span class="next" @click="setFlow(4)">Skip</span> -->
        </div>
        <div class="content-bar">
          <!-- <div class="cat-bar" >
                        <span
                        v-for="(cat, index) of getGroups"
                        :key="index"
                            @click="spanActiveGroups($event, cat)"
                            :class="[
                                {
                                    active3: index == 0,
                                },
                            ]"
                            >{{ cat.name }}</span
                        >
                    </div> -->

          <!-- <div class="cat-bar">
            <span class="cat active">Stylist</span>
            <span class="cat">Top Stylist</span>
            <span class="cat">Art Director</span>
          </div> -->
          <div v-if='getSelectedServices.length > 0' class="sty-list">
            <div v-if='getSelectedServices[0].type == "GROUP"'>
              <div class="sty-one" 
              v-for="(oneGroup, index) of getSelectedServices[0].styles"
              :key="index"
            >
            <!-- <ServiceBox :oneService="service" /> -->
            
              <div class="img-out">
                <div class="img-wrapper">
                  <img :src="'http://natali.onesoul.io' + getSelectedServices[0].image" alt="stylist" />
                </div>
              </div>
              <div class="details">
                <p class="name">{{ oneGroup.styleGroup.name }}</p>
                <div class="times">
                  <!-- <div class="line" v-for="index in [1, 2, 3]" :key="index"> -->
                    <label :for="`n` + index">
                      <input v-model='service_radio_input' :value='getSelectedServices[0].styles[index]' type="radio" name="test" :id="`n` + index" />
                      <span class="size">{{ getSelectedServices[0].styles[index].styleGroup.style.name }}</span>
                      <span class="time"> {{  getSelectedServices[0].styles[index].styleGroup.style.time}}min</span>
                      <span class="price">$ {{ getSelectedServices[0].styles[index].styleGroup.style.price}}</span>
                    </label>
                  </div>
                <!-- </div>  -->
               </div>
            </div>
            </div>
            <div v-else>
              <div class="sty-one">
               <div class="img-out">
                <div class="img-wrapper">
                  <img :src="'http://natali.onesoul.io' + getSelectedServices[0].image" alt="stylist" />
                </div>
              </div>
              <div class="details">
                <div class="times">
                    <label :for="`n` + index">
                      <h3>{{ getSelectedServices[0].name }}</h3>
                      <span class="price" style="font-size: 20px; font-weight: bold;">$
                        {{ getSelectedServices[0].discount_price ? getSelectedServices[0].discount_price : getSelectedServices[0].price }}</span>
                    </label>
                  </div>
               </div>
             </div>
            </div>
          </div>
          <!-- <div v-if='getSelectedServices.length > 0 && getSelectedServices[0].type == "NORMAL"' class="sty-list">
             <div class="sty-one">
               <div class="img-out">
                <div class="img-wrapper">
                  <img :src="'http://natali.onesoul.io' + getSelectedServices[0].image" alt="stylist" />
                </div>
              </div>
              <div class="details">
                <div class="times">
                    <label :for="`n` + index">
                      <h3>{{ getSelectedServices[0].name }}</h3>
                      <p>{{ getSelectedServices[0].translations[0].content.substring(1, 100) }} ... </p>
                      <span class="price">${{ oneService.discount_price ? oneService.discount_price : oneService.price }}</span>
                    </label>
                  </div>
               </div>
             </div>
          </div> -->
        </div>
      </div>
      <div class="bottom-bar">
        <span class="next" @click="setFlow(4)">Next</span>
      </div>
    </div>
    <div class="flow datetime-flow" data-flow="4">
      <div class="top-part">
        <div class="top-bar">
          <span class="back" @click="setFlow(3)">Back</span>
        </div>
        <div class="content-bar">
          <DatePicker
            :attributes="attributes"
            mode="date"
            v-model="date"
            @dayclick="onDayClick"
            title-position="left"
            color="yellow"
            trim-weeks
            is-expanded
          />
          <p class="available">Available</p>
          <div class="available-list">
            <span class="time-box active">11:30</span>
            <span class="time-box">11:30</span>
            <span class="time-box">11:30</span>
            <span class="time-box">11:30</span>
            <span class="time-box">11:30</span>
            <span class="time-box">11:30</span>
          </div>
          <!-- <BookInBars text="Waiting list" /> -->
        </div>
      </div>
      <div class="bottom-bar">
        <span class="next" @click="setFlow(5)">Next</span>
      </div>
    </div>
    <div class="flow review-flow-1" data-flow="5">
      <div class="top-bar">
        <span class="back" @click="setFlow(4)">Back</span>
      </div>
      <div class="content-box">
        <span class="in-d">In 3 days</span>
        <p class="cons">Consultation with Shania blabuli</p>
        <ReviewBox />
        <SecondaryBtn
          text="+ Add more services"
          style="margin-bottom: 0; margin-top: 30px"
        />
        <BookInBars
          @click.native="setFlow(6)"
          text="Pay Now"
          style="margin: 12px auto 20px; max-width: 100%"
        />
      </div>
    </div>
    <div class="flow review-flow-2" data-flow="6">
      <div class="top-bar">
        <span class="back" @click="setFlow(5)">Back</span>
      </div>
      <div class="content-box">
        <span class="in-d">In 3 days</span>
      </div>
      <div class="slider-wrap">
        <swiper ref="mySwiper1" :options="swiperOptions1">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper-slide v-for="(slide, index) of slideList" :key="index">
            <div class="f-slide-box">
              <div class="img-sec">
                <div class="img-wrapper">
                  <img src="/assets/img/poster.png" alt="img" />
                </div>
              </div>
              <div class="details">
                <p>July 2, 2020 11:00 PM</p>
                <p>67 Merab Kostava Street</p>
                <p>+995 574 574 545</p>
              </div>
              <div class="edit-sec">
                <span class="edit">Edit</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="content-box">
        <ReviewBox />
        <SecondaryBtn
          text="+ Sign up more"
          style="margin-bottom: 0; margin-top: 30px"
        />
        <BookInBars
          text="Confirm Now"
          style="margin: 12px auto 20px; max-width: 100%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BookInBars from "../buttons/bookInBars";
import SecondaryBtn from "../buttons/secondaryBtn";
import ReviewBox from "./appointmentReviewBox";

import DatePicker from "v-calendar/lib/components/date-picker.umd";
import { mapActions, mapGetters } from "vuex";
import ServiceBox from '../serviceBox.vue';

export default {
  name: "Appointment",
  components: {
    BookInBars,
    SecondaryBtn,
    ReviewBox,
    DatePicker,
    ServiceBox,
  },
  data() {
    return {
      date: new Date(),
      service_radio_input: null,
      chosenDate: null,
      attributes: [
        {
          dot: true,
          dates: [
            new Date(2020, 10, 1),
            new Date(2020, 10, 10),
            new Date(2020, 10, 22),
          ],
        },
      ],
      slideList: [
        {
          img: "/assets/img/poster.png",
          title: "Cosmetology",
        },
        {
          img: "/assets/img/poster.png",
          title: "Cosmetology",
        },
        {
          img: "/assets/img/poster.png",
          title: "Cosmetology",
        },
        {
          img: "/assets/img/poster.png",
          title: "Cosmetology",
        },
      ],
      swiperOptions: {
        slidesPerView: 2,

        freeMode: true,

        breakpoints: {
          0: {
            slidesPerView: 2,
          },
          360: {
            slidesPerView: 2.5,
          },
        },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperOptions1: {
        slidesPerView: 1,

        spaceBetween: 20,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  methods: {
    spanActive(event, name) {
            event.target.parentNode.parentNode
                .querySelectorAll(".categories span")
                .forEach((elem) => {
                    elem.classList.remove("active");
                });
            event.target.classList.toggle("active");
            this.filterServices(name.id)
        },
        // spanActiveGroups(event,cat ) {
        //   event.target.parentNode.parentNode
        //         .querySelectorAll(".cat-bar span")
        //         .forEach((elem) => {
        //             elem.classList.remove("active3");
        //         });
        //     event.target.classList.toggle("active3");
        //     this.filterServices(cat.id)
        // },
    onDayClick(day) {
      this.chosenDate = day;
      // console.log(day);
    },
    restartTabs(set) {
      let flows = document
        .querySelector(".appointment")
        .querySelectorAll(".flow");
      flows.forEach((flow) => flow.classList.remove("active-tab"));
      if (set != undefined) {
        if (set >= flows.length) {
          set = 0;
        }
        flows.forEach((flow) =>
          flow.getAttribute("data-flow") == set
            ? flow.classList.add("active-tab")
            : 0
        );
      }
    },
    setFlow(index) {
      this.restartTabs(index);
      if(index == 2) {
        if(this.getSelectedServices.length > 0) {
          this.getOneServiceInfo(this.getSelectedServices[0])
        }
      }
      if(index == 4) {
        console.log(this.service_radio_input)
      }
      if(index == 5) {
        console.log(this.date)
      }
    },
    spanActiveStylist(event, cat) {
      event.target.parentNode.parentNode
        .querySelectorAll(".stylist-groups span")
        .forEach((elem) => {
          elem.classList.remove("active1");
        });
      event.target.classList.toggle("active1");
      this.selectStylist(cat);
    },
    ...mapActions("Services", ["getAllServicesByBranchId", "filterServices" , 'addServiceToSelected', "getOneServiceInfo", "deleteService", "selectStylist"]),
  },
  computed: {
    ...mapGetters("Services", ["getServices", "getGroups", "getSelectedServices", "getTotalOfSelected", "getActiveStylists"]),
  },
  mounted() {
    this.getAllServicesByBranchId(0);
    this.restartTabs(0);
  },
};
</script>

<style lang="scss" scoped>
.active1 {
  background-color: #f5f5f5 !important;
}
.active3 {
  background-color: red;
}
.appointment {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 360px;
  height: 100%;
  transform: translateX(100%);
  transition: 0.3s;
  display: block;
  background-color: #fff;
  font-family: "Config Condensed";
  box-shadow: none;
  z-index: 99998;
  box-sizing: border-box;
  &.active {
    transform: translateX(0%);
    box-shadow: 0 15px 100px rgba(0, 0, 0, 0.15);
  }
  .review-flow,
  .review-flow-1,
  .review-flow-2 {
    padding: 8px 0 !important;
  }
  .review-flow-1,
  .review-flow-2 {
    .content-box {
      padding: 0 28px;
      font-family: "Config Condensed";
      .in-d {
        color: #434343;
        font-size: 18px;
        margin-top: 30px;
        display: block;
      }
    }
  }
  .review-flow-1 {
    .content-box {
      font-family: "Config Condensed";
      .cons {
        font-family: "Prompt";
        font-size: 18px;
        color: #2d2c29;
        font-weight: 500;
        margin-top: 10px;
      }
    }
  }
  .review-flow-2 {
    .slider-wrap {
      padding: 0 8px;
      margin-bottom: 30px;
      .f-slide-box {
        display: flex;
        justify-content: space-between;
        background: #f2f2f2;
        border-radius: 9px;
        overflow: hidden;
        padding: 8px 0 8px 12px;
        .img-sec {
          .img-wrapper {
            border-radius: 9px;
            overflow: hidden;
            width: 92px;
            height: 92px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
        .details {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 0 12px;
          max-width: 100%;
          width: 100%;
          p {
            color: #434343;
            font-size: 15px;
          }
        }
        .edit-sec {
          padding: 0 10px 0 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-left: 1px solid lightgray;
          cursor: pointer;
          .edit {
            font-weight: 500;
            color: #434343;
          }
        }
      }
    }
  }
  .datetime-flow {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px 0 !important;
    font-family: "Config Condensed";
    .content-bar {
      padding-left: 16px;
      padding-right: 16px;
      .vc-container {
        border: none;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        margin: 30px 0;
      }
      .available {
        font-weight: 500;
        font-size: 22px;
        margin-bottom: 16px;
      }
      .available-list {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 32px;
        .time-box {
          cursor: pointer;
          display: block;
          margin-right: 10px;
          margin-bottom: 10px;
          width: 56px;
          height: 30px;
          font-size: 20px;
          text-align: center;
          padding: 2px 0;
          box-sizing: border-box;
          border-radius: 5px;
          &.active,
          &:hover {
            background-color: rgba($color: #ffb120, $alpha: 0.45);
          }
        }
      }
    }
  }
  .stylist-flow {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Config Condensed";
    padding: 8px 0 !important;
    .content-bar {
      padding-left: 16px;
      padding-right: 16px;
      .cat-bar {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px -16px 30px;
        box-shadow: 0 12px 10px rgba($color: #000000, $alpha: 0.05);
        .cat {
          font-size: 18px;
          color: #434343;
          display: block;
          font-weight: 500;
          padding: 14px;
          box-sizing: border-box;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          &.active,
          &:hover {
            border-bottom-color: rgba($color: #ffb120, $alpha: 0.75);
          }
        }
      }
      .sty-list {
        .sty-one {
          display: flex;
          margin: 0 auto 24px;
          width: 280px;
          padding: 8px 12px;
          box-sizing: border-box;
          box-shadow: 0 15px 24px rgba(0, 0, 0, 0.05);
          background: #fff;
          border-radius: 8px;
          .img-out {
            .img-wrapper {
              border-radius: 8px;
              overflow: hidden;
              width: 100px;
              height: 150px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
          .details {
            margin: 0 auto;
            width: 145px;
            .name {
              font-weight: 500;
              font-size: 18px;
              display: flex;
              height: 50px;
              align-items: center;
              justify-content: center;
              padding: 16px 0;
              box-sizing: border-box;
            }
            .times {
              .line {
                &:not(:last-child) {
                  margin-bottom: 12px;
                }
                label {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  // input[type="radio"] {
                  // }
                  .size {
                    font-weight: 600;
                    font-size: 16px;
                  }
                  .time {
                    font-size: 16px;
                  }
                  .price {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .address-flow {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px 0 !important;
    .content-bar {
      font-family: "Config Condensed";
      .address {
        cursor: pointer;
        display: block;
        background-color: #fff;
        box-shadow: 0 2px 12px rgba($color: #000000, $alpha: 0);
        padding: 16px 32px;
        font-weight: 500;
        transition: 0.1s;
        &:hover,
        &.selected {
          background-color: #f5f5f5;
          box-shadow: 0 2px 12px rgba($color: #000000, $alpha: 0.05);
        }
      }
    }
  }
  .general-flow {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px 0 !important;
    .top-bar {
      font-family: "Config Condensed";
      height: 40px;
      line-height: 40px;
      span.back {
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        float: left;
        margin-left: 12px;
        position: relative;
        &::after {
          content: url("/assets/icons/next.svg");
          position: absolute;
          left: -12px;
          font-size: 26px;
          line-height: 44px;
          transform: rotate(180deg);
        }
      }
    }
    .bottom-bar {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-family: "Config Condensed";
      align-items: center;
      margin-bottom: 16px;
      .total {
        display: flex;
        align-items: center;
        p {
          margin-right: 5px;
          font-weight: 600;
          font-size: 20px;
        }
        .price {
          font-family: "Prompt";
          font-weight: 500;
          line-height: 20px;
        }
      }
      .next {
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        margin-right: 12px;
        position: relative;
        &::after {
          content: url("/assets/icons/next.svg");
          position: absolute;
          right: -12px;
          font-size: 26px;
          line-height: 26px;
        }
      }
    }
    .content-bar {
      font-family: "Config Condensed";
      .slider-section {
        padding-left: 16px;
        padding-right: 16px;
        .slide-box {
          margin: 0 auto;
          width: 120px;
          padding: 10px;
          box-sizing: border-box;
          border-radius: 10px;
          cursor: pointer;
          border: 1px solid rgba($color: #e0b763, $alpha: 0.65);
          background: #fff;
          transition: 0.1s;
          &:hover {
            background: #fff0d5;
            border-color: rgba($color: #e0b763, $alpha: 0.5);
          }
          .img-wrapper {
            width: 100%;
            height: 74px;
            border-radius: 8px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .title {
            font-size: 18px;
            text-align: center;
            font-weight: 500;
            padding: 4px 8px 0;
          }
        }
      }
      .s-listing {
        padding-left: 16px;
        padding-right: 16px;
        .categories {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          padding: 20px 0 4px;
          span.cat {
            cursor: pointer;
            font-weight: 500;
            font-size: 18px;
            margin-bottom: 6px;
            &.active {
              color: #d7b980;
            }
          }
        }
        .listing {
          display: flex;
          flex-direction: column;
          padding: 12px 0;
          .s-item {
            display: flex;
            background-color: #f5f5f5;
            border-radius: 10px;
            padding: 8px 12px;
            margin-left: 12px;
            margin-bottom: 12px;
            .img-wrapper {
              width: 70px;
              height: 70px;
              position: relative;
              left: -24px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            .oth {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: calc(100% - 60px);
              .details {
                display: flex;
                flex-direction: column;
                .title {
                  font-size: 18px;
                  font-weight: 500;
                }
                .time {
                  color: #434343;
                  font-weight: 500;
                }
              }
              .price {
                span {
                  font-family: "Prompt";
                  font-weight: 500;
                }
              }
            }
          }
        }
      }
      .selection {
        display: flex;
        justify-content: flex-start;
        padding: 36px 16px;
        flex-wrap: wrap;
        .item-selection {
          cursor: pointer;
          width: 80px;
          height: 80px;
          border: 1px solid rgba($color: #ffb120, $alpha: 0.75);
          box-sizing: border-box;
          padding: 2px;
          border-radius: 4px;
          &:not(:nth-child(3n + 3)) {
            margin: 0 20px 20px 0;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 2px;
          }
        }
      }
    }
  }
  .main-flow {
    .flow-title {
      font-weight: 600;
      color: #434343;
      font-size: 32px;
      display: block;
      margin: 40px 0 50px;
      text-align: center;
    }
    .main-flow-list {
      margin-bottom: 30px;
      height: 50px;
      display: flex;
      align-items: center;
      font-weight: 500;
      &.main-flow-datentime {
        margin-bottom: 60px;
      }
      img {
        margin: 0 16px;
        width: 30px;
        height: 30px;
        object-fit: contain;
      }
      span {
        font-size: 22px;
        color: rgba($color: #434343, $alpha: 0.65);
      }
    }
  }
  .flow {
    background-color: #fff;
    overflow-y: scroll;
    overflow-x: hidden;
    top: 0;
    bottom: 0;
    width: 100%;
    padding: 8px 16px;
    box-sizing: border-box;
    transition: 0.2s;
    transform: translateX(100%);
    position: absolute;
    /* width */
    &::-webkit-scrollbar {
      width: 8px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: rgba($color: #f0a210, $alpha: 0.3);
    }
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: rgba($color: #f0a210, $alpha: 0.5);
    }
    &.active-tab {
      transform: translateX(0);
    }
    .top-bar {
      font-family: "Config Condensed";
      height: 40px;
      line-height: 40px;
      padding-left: 16px;
      padding-right: 16px;
      .next {
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        float: right;
        margin-right: 12px;
        position: relative;
        &::after {
          content: url("/assets/icons/next.svg");
          position: absolute;
          right: -12px;
          font-size: 26px;
          line-height: 40px;
        }
      }
      span.back {
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        float: left;
        margin-left: 12px;
        position: relative;
        &::after {
          content: url("/assets/icons/next.svg");
          position: absolute;
          left: -12px;
          font-size: 26px;
          line-height: 44px;
          transform: rotate(180deg);
        }
      }
    }
    .bottom-bar {
      box-sizing: border-box;
      width: 100%;
      align-items: center;
      margin-bottom: 16px;
      height: 25px;
      line-height: 25px;
      padding-left: 16px;
      padding-right: 16px;
      .next {
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        float: right;
        margin-right: 12px;
        position: relative;
        &::after {
          content: url("/assets/icons/next.svg");
          position: absolute;
          right: -12px;
          font-size: 26px;
          line-height: 25px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .flow {
    margin-bottom: 70px;
  }
}

@media screen and (max-width: 400px) {
  .appointment {
    width: 100%;
  }
}

.swiper-container {
  padding-top: 30px;
}

.swiper-pagination {
  bottom: unset !important;
  top: 5px;
  text-align: right;
}

.swiper-pagination ::v-deep .swiper-pagination-bullet {
  height: 10px;
  width: 10px;
  border-radius: 0;
  margin: 0 6px;
}

.swiper-pagination ::v-deep .swiper-pagination-bullet-active {
  background-color: #dfaf4c;
}
</style>