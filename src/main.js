import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/reset.css";
import Vant from "vant";
import "vant/lib/index.css";
// import axios from "axios";
import bridge from "./utils/bridge.js";
import api from "./api/index";
import {Toast} from "vant";

Vue.use(Vant);
Vue.prototype.$bridge = bridge;
Vue.prototype.$api = api;
Vue.config.productionTip = false;

// Vue.prototype.$axios = axios;
// axios.defaults.withCredentials = true;

Toast.setDefaultOptions("loading", {
	duration: 200000,
});

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0); //切换路由之后滚动条始终在最顶部
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");