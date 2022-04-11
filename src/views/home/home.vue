<template>
  <div class="home">
    <img src="~assets/images/homeBg.png" alt="" class="bg" />
    <ul>
      <li @click="showToast">
        <img src="~assets/images/qiyeIcon.png" alt="" />
        <div class="word">企业版</div>
      </li>
      <li @click="getCard">
        <img src="~assets/images/allIcon.png" alt="" />
        <div class="word">通用版</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";
import qs from "qs";
import { Dialog } from "vant";
import { Toast } from "vant";
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Popup);
export default {
  mounted() {
    this.login();
  },

  data() {
    return {
      show: false,
      sel: 0,
    };
  },
  methods: {
    showToast() {
      this.$toast("功能建设中");
    },
    async login() {
      if (this.$route.query.code) {
        // Toast.loading({
        //   message: "加载中...",
        //   forbidClick: true,
        //   overlay: true,
        // });
        // let params = qs.stringify({
        //   code: this.$route.query.code,
        // });
        let params = {
          code: this.$route.query.code,
        };
        // let res = await this.$axios.post("/userLogin", params);
        let res = await this.$api.home.login(params);
        // this.$api.home.login
        console.log(res);
        // console.log(this.$api.home.login());
        // .then((res) => {
        //   console.log(res);
        // });

        // console.log(this.$api.home.login);
        if (res.data.success == false) {
          Toast.clear();
          Dialog.alert({
            message: res.data.message,
          }).then(() => {});
          return;
        }
        if (res.data.success == true) {
       
          Toast.clear();
          // await this.getuserInfo();
        }
      }
    },
    async getuserInfo() {
      let res = await this.$axios.post("/client/getUserInfo");
      console.log(res);
      if (res.data.success == false) {
        Toast.clear();
        Dialog.alert({
          message: res.data.message,
        }).then(() => {});
        return;
      }
      if (res.data.success == true) {
        sessionStorage.setItem("name", res.data.result.certName);
        sessionStorage.setItem("phone", res.data.result.mobile);
        sessionStorage.setItem("certNo", res.data.result.certNo);
        if (res.data.result.sex && res.data.result.sex == true) {
          sessionStorage.setItem("sex", "男");
        }
        if (res.data.result.sex && res.data.result.sex == false) {
          sessionStorage.setItem("sex", "女");
        }

        if (res.data.result.certNoType == 1) {
          sessionStorage.setItem("certNoType", "身份证");
        }
        if (res.data.result.certNoType == 2) {
          sessionStorage.setItem("certNoType", "护照");
        }
        if (res.data.result.certNoType == 3) {
          sessionStorage.setItem("certNoType", "港澳通行证");
        }
        if (res.data.result.certNoType == 4) {
          sessionStorage.setItem("certNoType", "台胞证");
        }
        Toast.clear();
      }
    },
    async getCard() {
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
        if (!res.data.result) {
          this.$router.push("form");
        }
        if (res.data.result && res.data.result.checkstate == 0) {
          this.$router.push({
            name: "checkPending",
            query: {},
          });
        }
        if (res.data.result && res.data.result.checkstate == 1) {
          this.$router.push({
            name: "pass",
            query: {},
          });
        }
        if (res.data.result && res.data.result.checkstate == 2) {
          this.$router.push({
            name: "noPass",
          });
        }
        if (res.data.result) {
          let nowTime = new Date().getTime();
          let oldTime = res.data.result.uploadtime;
          if ((nowTime - oldTime) / (1000 * 60 * 60 * 24) > 7) {
            this.$router.push({
              name: "overdue",
            });
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./home";
</style>