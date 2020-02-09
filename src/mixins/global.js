import Vue from 'vue';

Vue.mixin({
	methods: {
		findProgress(goal) {
			const history = goal.history;
			if (goal.goal_type == "total") {
				let latest = history.reduce((prev, curr) => {
					return new Date(prev.date) < new Date(curr.date) ? curr : prev;
				});
				return latest.value;
			}
		}
	}
})
