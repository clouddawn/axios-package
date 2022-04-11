<template>
  <div class="showCard">
    <div class="content">
      <div class="time">{{ time }}</div>

      <img src="~assets/images/pendingIcon.png" alt="" />
      <li class="first">姓名：{{ info.fullname }}</li>
      <li>单位名称：{{ info.unitname }}</li>
      <li>申报时间：{{ info.uploadtime | fnTime }}</li>
      <div class="outButton">
        <button @click="upDate">数据更新</button>
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
    this.getInfo();
  },
  data() {
    return {
      time: "",
      info: Object,
    };
  },
  filters: {
    fnTime: function (value) {
      let time = new Date(value);
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
      return (value =
        year + "-" + month + "-" + date + " " + hours + ":" + minute);
    },
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
    async getInfo() {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        overlay: true,
      });
      let res = await this.$axios.get("/client/getPassInfo");
      console.log(res);
      if (res.data.success == false) {
        Toast.clear();
        Dialog.alert({
          message: res.data.message,
        }).then(() => {});
        return;
      }
      if (res.data.success == true) {
        this.info = res.data.result;
        Toast.clear();
      }
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
@import "./checkPending";
</style>