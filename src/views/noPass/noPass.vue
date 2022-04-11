<template>
  <div class="showCard">
    <div class="content">
      <img src="~assets/images/noPassIcon.png" alt="" />
      <li class="first">申报未通过，请重新申报或联系管理员。</li>

      <div class="outButton">
        <button @click="upDate">更新</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";
import { Picker } from "vant";
import { Dialog } from "vant";
import { DatetimePicker } from "vant";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(DatetimePicker);
import { Area } from "vant";

Vue.use(Area);
Vue.use(Picker);
Vue.use(Popup);
export default {
  mounted() {
    this.getYMDHMS();
    Toast.clear();
  },
  data() {
    return {
      time: "",
    };
  },
  methods: {
    getYMDHMS() {
      const that = this;
      setInterval(function () {
        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let date = time.getDate();
        let hours = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();

        if (month < 10) {
          month = "0" + month;
        }
        if (date < 10) {
          date = "0" + date;
        }
        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minute < 10) {
          minute = "0" + minute;
        }
        if (second < 10) {
          second = "0" + second;
        }
        that.time =
          year +
          "-" +
          month +
          "-" +
          date +
          " " +
          hours +
          ":" +
          minute +
          ":" +
          second;
      }, 1000);
    },
    upDate() {
      this.$router.push({
        name: "form",
        query: {
          isAll: 1,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./noPass";
</style>