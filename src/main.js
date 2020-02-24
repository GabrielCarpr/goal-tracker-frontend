import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import "@/mixins/global";
import ApiService from "./api/api.service";
import { ValidationProvider, ValidationObserver } from 'vee-validate';

require("./global.css");
require("./validation.js");

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);


/* Creates v-init directive which allows you to set an initial value to a component */
Vue.directive('init', {
	bind: function(el, binding, vnode) {
		vnode.context[binding.arg] = binding.value;
	}
});

Vue.config.productionTip = false

ApiService.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

