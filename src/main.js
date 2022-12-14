import "./assets/css/global.less";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8888/api/";
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.$echarts = window.echarts;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
