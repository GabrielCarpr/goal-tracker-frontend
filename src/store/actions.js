import router from "@/router";
import { GoalService, HistoryService } from "@/api/api.service";
import ApiService from "@/api/api.service";
import AuthService from "@/api/AuthService";

export const actions = {
	/*
	* Auth
	*/

	// Login action: sends request and deals with authentication
	async login(context, credentials) {
		context.commit("setAuthErrors", {});

		const { data } = await ApiService.post("auth/login", credentials)
			.catch(({ response }) => {
				context.commit("setAuthErrors", response.data);
				return response.data;
			});

		context.commit("setAuth", {
			xsrf: data.xsrf, email: data.email, name: data.name
		});
		router.push({name: "Dashboard"});
		await context.dispatch("getAllGoals");
	},

	async register(context, credentials) {
		context.commit("setAuthErrors", {});

		const { data } = await ApiService.post("auth/register", credentials)
			.catch(({ response }) => {
				const errors = [response.data.email, response.data.name, response.data.password];
				context.commit("setAuthErrors", errors);
				return response.data;
			});

		context.commit("setAuth", {
			xsrf: data.xsrf, email: data.email, name: data.name
		});
		router.push({name: "Dashboard"});
		await context.dispatch("getAllGoals");
	},

	// Logout action: clears all auth data and redirects to login
	logout(context) {
		context.commit("purgeAuth");
		router.push("/login");
	},

	// Checks whether authenticated and gets user details if necessary
	validate(context) {
		const xsrf = AuthService.getXsrf();

		if (xsrf && !context.state.user.authenticated) {
			ApiService.setHeader();

			return ApiService.get("/users")
				.then(({ data }) => {
					let newData = data;
					newData.xsrf = AuthService.getXsrf();
					context.commit("setAuth", newData);
				})
				.catch(() => {
					context.commit("purgeAuth");
				});
		} else if (xsrf && context.state.user.authenticated) {
			return
		} else {
			context.commit("purgeAuth");
		}
	},

	/*
	* Goals
	*/

	// Loads all goals (for use at initial application load)
	async getAllGoals(context) {
		const { data } = await GoalService.getAll();
		context.commit("setGoals", data);
		return context.commit("stopLoading", 500);
	},

	// Adds a single goal
	addGoal(context, payload) {
		return GoalService.create(payload)
			.then(({ data }) => {
				context.commit("addGoal", data)
				return data;
			});
	},

	// Overwrites any fields in a goal from the payload
	updateGoal(context, { id, payload }) {
		return GoalService.update(id, payload)
			.then(({ data }) => {
				context.commit("updateGoal", data)
				return data;
			});
	},

	/* 
	* History
	*/

	// Inserts a new log into a goal
	addLog(context, { goal_id, value }) {
		context.commit("addLog", {goal_id: goal_id, value: value});

		return HistoryService.create(goal_id, value)
			.then(({ data }) => {
				context.commit("updatePendingLog", data);
				return data;
			});
	},

	// Updates a goal's log
	updateLog(context, { id, value }) {
		return HistoryService.update(id, value)
			.then(({ data }) => {
				context.commit("updateLog", data);
				return data;
			});
	}
}
