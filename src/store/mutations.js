import AuthService from "@/api/AuthService";

export const mutations = {
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

	setGoals(state, payload) {
		state.goals = payload;
	},

	stopLoading(state, time) {
		setTimeout(() => {
			state.isLoading = false;
		}, time);
	},

	addGoal(state, payload) {
		state.goals.push(payload);
	},

	updateGoal(state, data) {
		let index = state.goals.findIndex(el => el.id === data.id);
		state.goals[index] = {...state.goals[index], ...data};
	}
}