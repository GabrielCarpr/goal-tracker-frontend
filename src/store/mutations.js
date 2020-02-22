import AuthService from "@/api/AuthService";
import Vue from 'vue';

export const mutations = {
	/* 
	* Auth 
	*/
	setAuth(state, payload) {
		state.user.authenticated = true;
		state.user.email = payload.email;
		state.user.name = payload.name;
		state.errors.auth = {};
		AuthService.setXsrf(payload.xsrf);
	},

	purgeAuth(state) {
		state.user.authenticated = false;
		state.user.email = "";
		state.user.name = "";
		state.errors.auth = {};
		AuthService.destroyXsrf();
	},

	setAuthErrors(state, errors) {
		state.errors.auth = errors;
	},

	/* 
	* Goals 
	*/
	setGoals(state, payload) {
		state.goals = payload;
	},

	addGoal(state, payload) {
		state.goals.push(payload);
	},

	updateGoal(state, data) {
		let index = state.goals.findIndex(el => el.id === data.id);
		Vue.set(state.goals, index, {...state.goals[index], ...data});
	},

	/* 
	* History 
	*/

	/* Adds a new log to state */
	addLog(state, { goal_id, value }) {
		let goal_index = state.goals.findIndex(el => el.id == goal_id);
		let current_history = [...state.goals[goal_index].history];
		current_history.push({value: value, id: null, created_at: new Date().toISOString()});

		Vue.set(state.goals, goal_index, Object.assign(state.goals[goal_index], {history: current_history}));
	},

	/* 
	* Misc 
	*/
	stopLoading(state, time) {
		setTimeout(() => {
			state.isLoading = false;
		}, time);
	},
}