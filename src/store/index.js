import Vue from 'vue'
import Vuex from 'vuex'

import { actions } from "@/store/actions";
import { mutations } from "@/store/mutations";

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

const getters = {
	getGoal: (state) => (id) => {
		return state.goals.find(goal => goal.id == id)
	},

	/* Find progress as goal, either as the most recently log,
	  or as the overall percentage */
	findProgress: (state, getters) => (goal_id, percent = false) => {
		const goal = getters.getGoal(goal_id);
		const history = goal.history;
		if (!history.length || history.length == 0) {
			return percent ? "0%" : 0;
		}
		if (goal.goal_type == "total") {
			const latest = history.reduce((prev, curr) => {
				return new Date(prev.created_at) > new Date(curr.created_at) ? prev : curr;
			});
			return percent ? Math.floor((latest.value / goal.goal_value) * 100) + "%" : latest.value;
		}
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});
