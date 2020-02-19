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
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
