import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import "@/mixins/global";
import ApiService from "./api/api.service";
import { ValidationProvider } from 'vee-validate';

require("./global.css");
require("./validation.js");

Vue.component("ValidationProvider", ValidationProvider);

Vue.config.productionTip = false

ApiService.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

