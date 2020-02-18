import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from "@/api/AuthService";
import ApiService, { GoalService } from "@/api/api.service";
import router from "@/router";

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
  }
}

const mutations = {
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
  }
}

const actions = {
  // Login action: sends request and deals with authentication
  login(context, credentials) {
    context.commit("setAuthErrors", {});
    return new Promise((resolve, reject) => {
      ApiService.post("auth/login", credentials)
        .then((response) => {
          context.commit("setAuth", {
            xsrf: response.data.xsrf, email: response.data.email, name: response.data.name
          });
          resolve(response);
        })
        .catch(({ response }) => {
          context.commit("setAuthErrors", response.data);
          reject(response);
        });
    });
  },

  register(context, credentials) {
    context.commit("setAuthErrors", {});

    return new Promise((resolve, reject) => {
      ApiService.post("auth/register", credentials)
        .then(({ data }) => {
          context.commit("setAuth", {
            xsrf: data.xsrf, email: data.email, name: data.name
          });
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit("setAuthErrors", response.data);
          reject(response);
        });
    });
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
          })
          .catch(() => {
            context.commit("purgeAuth");
            router.push({name: "Login"});
          });
      }    
    } else {
      context.commit("purgeAuth");
      router.push({name: "Login"});
    }
  },

  // Loads all goals
  getAllGoals(context) {
    GoalService.getAll()
      .then(({ data }) => {
        context.commit("setGoals", data);
      });
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
