import Vue from 'vue'
import Vuex from 'vuex'

import { actions } from "@/store/actions";
import { mutations } from "@/store/mutations";
import { getters } from "@/store/getters";

Vue.use(Vuex)

const state = {
	goals: [],
	isLoading: true,
	user: {
		email: "",
		name: "",
		authenticated: false
	},
	errors: {
		auth: {}
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});
