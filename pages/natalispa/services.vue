<template>
  <div class="nataliespa-services">
    <Poster img="/assets/img/poster.png" />
    <div class="controls">
      <div class="row">
        <div
          class="col-xs-6 sect nopadding"
          @click="()=>{isNataliSpa = true; isNataliDaySpa = false;}"
        >
          <span
            class="switch-button"
            :class="[
              {
                active: isNataliSpa,
              },
            ]"
            >Natali Spa</span
          >
        </div>
        <div
          class="col-xs-6 sect nopadding"
          @click="()=> {isNataliSpa = false; isNataliDaySpa = true;}"
          
        >
          <span class="switch-button" :class="[
            {
              active: isNataliDaySpa,
            },
          ]">Natali Day Spa</span>
        </div>
      </div>
    </div>
        <BigServices :branch_id="32" />
        <!-- <div v-else>dgfsgfdgfd</div> -->
        <!-- <BigServices v-else :branch_id="29" /> -->
  </div>
</template>

<script>
import Poster from "../../components/medium/poster";
import BigServices from "../../components/big/bigServices";

export default {
  name: "NataliespaServices",
  components: {
    Poster,
    BigServices,
  },
  data() {
    return {
      isNataliSpa: true,
      isNataliDaySpa: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.controls {
  .sect {
    &:first-child .switch-button {
      text-align: right;
    }
    &:last-child .switch-button {
      text-align: left;
    }
    .switch-button {
      box-sizing: border-box;
      padding: 10px 100px;
      cursor: pointer;
      display: block;
      height: 70px;
      font-size: 30px;
      border-bottom: 2px solid gray;
      width: 100%;
      line-height: 50px;
      font-weight: 400;
      font-family: "Prompt";
      white-space: nowrap;
      transition: 0.2s;
      &:hover {
        border-bottom: 2px solid #dfaf4c;
      }
      &.active {
        border-bottom: 2px solid #dfaf4c;
      }
    }
  }
}
</style>