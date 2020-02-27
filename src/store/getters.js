export const getters = {
	getGoal: (state) => (id) => {
		return state.goals.find(goal => goal.id == id)
	},

	/* Find progress as goal, either as the most recently log,
	  or as the overall percentage */
	findProgress: (state, getters) => (goal_id, percent = false) => {
		const goal = getters.getGoal(goal_id);
		const history = goal.history;
		if (!history.length || history.length == 0) {
			return percent ? "0%" : 0;
		}
		if (goal.goal_type == "total") {
			const latest = history.reduce((prev, curr) => {
				return new Date(prev.created_at) > new Date(curr.created_at) ? prev : curr;
			});
			return percent ? Math.floor((latest.value / goal.goal_value) * 100) + "%" : latest.value;
		}
	},

	/* Formats the history data from a goal into the form
	* that can be used by chart.js. Also sorts and finds the highest
	* value from each day */
	getHistoryData: (state, getters) => (goal_id) => {
		const goal = getters.getGoal(goal_id);
		const history = goal.history;

		let data = history.map(log => {
			let point = {};
			point.x = new Date(log.created_at);
			point.y = log.value;
			
			return point;
		});

		// Reduces duplicates and takes the higher value
		data = Object.values(data.reduce((acc, { x, y }) => {
			x = x.toDateString(); 
			acc[x] = acc[x] || { x: x, y: 0 };
			acc[x].y = y > acc[x].y ? y : acc[x].y;
			return acc;
		}, {}));

		data = data.map(log => {
			log.x = new Date(log.x);
			return log;
		});

		data = data.sort((a, b) => {
			return a.x.getTime() - b.x.getTime()
		});

		return data;
	}
}