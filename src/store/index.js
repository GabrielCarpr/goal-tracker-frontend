import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  goals: [
    {
      id: 1,
      name: "Goal 1",
      category_id: 1,
      metric: "pounds",
      due: "2020-02-14",
      description: "This is my first goal",
      dashboard: true,
      goal_value: 1500,
      goal_type: "total",
      time_period: "month",
      created_at: "2020-02-07T14:30+0000",
      history: [
        {
          log_id: "1",
          date: "2020-03-10 11:30+0000",
          value: 1000
        },
        {
          log_id: "2",
          date: "2020-02-09 10:52+0000",
          value: 900
        },
        {
          log_id: "3",
          date: "2020-02-10 11:00+0000",
          value: 1100
        }
      ]
    }
  ],
  isLoading: true,
  user: {
    email: "gabriel.carpreau@gmail.com"
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
  mutations: {
  },
  actions: {

  },
  modules: {
  }
})
