import router from "@/router";
import { GoalService } from "@/api/api.service";
import ApiService from "@/api/api.service";
import AuthService from "@/api/AuthService";

export const actions = {
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
	checkAuth(context) {
		if (AuthService.getXsrf()) {
			if (!context.state.user.authenticated) {
				ApiService.setHeader();

				ApiService.get("/users")
					.then(({ data }) => {
						let newData = data;
						newData.xsrf = AuthService.getXsrf();
						context.commit("setAuth", newData);
						return true;
					})
					.catch(() => {
						context.commit("purgeAuth");
						//router.push({name: "Login"});
						return false;
					});
			}
		} else {
			context.commit("purgeAuth");
			//router.push({name: "Login"});
			return false;
		}
	},

	// Loads all goals
	async getAllGoals(context) {
		const { data } = await GoalService.getAll();
		console.log(data);
		context.commit("setGoals", data);
		return context.commit("stopLoading", 500);
	}
}
