import Vue from 'vue'
import App from './App.vue'
import router from "./router";

require("./global.css");

Vue.config.productionTip = false

let state = {
  isLoading: true,
  transitionName: null
}

let watch = {
  "$route" (to, from) {
    if (to.name == "New goal") {
      this.transitionName = "fade";
    } else if (from.name == "New goal") {
      this.transitionName = "fade";
    } else {
      this.transitionName = null;
    }
  }
}
 
new Vue({
  router,
  data: state,
  watch: watch,
  render: h => h(App),
}).$mount('#app')

