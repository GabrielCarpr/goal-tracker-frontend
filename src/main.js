import Vue from 'vue'
import App from './App.vue'
import router from "./router";

require("./global.css");

Vue.config.productionTip = false

let state = {
  isLoading: true
}
 
new Vue({
  router,
  data: state,
  render: h => h(App),
}).$mount('#app')

