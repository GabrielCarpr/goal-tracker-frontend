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
      due: "2020-02-14T11:00+0000",
      description: "This is my first goal",
      dashboard: true,
      goal_value: 1500,
      goal_type: "total",
      time_period: "month",
      created_at: "2020-02-07T14:30+0000",
      history: [
        {
          date: "2020-02-10T11:30+0000",
          value: 1000
        },
        {
          date: "2020-02-09T10:52+0000",
          value: 900
        },
        {
          date: "2020-02-10T11:00+0000",
          value: 1100
        }
      ]
    }
  ],
  isLoading: true
}

export default new Vuex.Store({
  state,
  mutations: {
  },
  actions: {

  },
  modules: {
  }
})
