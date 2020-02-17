import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from "@/api/AuthService";
import ApiService from "@/api/api.service";

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
    state.user.email = payload.user.email;
    state.user.name = payload.user.name;
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
    state.errors.auth = {...state.errors.auth, errors};
  }
}

const actions = {
  login(context, credentials) {
    return new Promise((resolve) => {
      ApiService.post("auth/login", credentials)
        .then((response) => {
          console.log("THEN: " + response)
          context.commit("setAuth", {xsrf: credentials.xsrf, user: {email: response.email, name: response.name}});
          resolve(response);
        })
        .catch(({ response }) => {
          console.log("CATCH: " + response.data.error);
          context.commit("setAuthErrors", response.data.error);
        });
    });
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
