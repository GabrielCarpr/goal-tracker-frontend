<template>
	<Modal @submit="createGoal" @close="close">
		<span class="subheading">What do you want to achieve?</span>
		<div class="section">
			<div class="step"><span>1</span></div>
			<input type="text" class="input" placeholder="Goal name" v-model="goal.name">
			<textarea class="input" placeholder="Goal description" v-model="goal.description"></textarea>
		</div>

		<div class="section">
			<div class="step"><span>2</span></div>
			<input type="text" class="input" placeholder="Goal measured by..." v-model="goal.metric">
			<input type="number" class="input" placeholder="Goal value" v-model="goal.goal_value">
			<input type="date" class="input" placeholder="Goal date" v-model="goal.due">
			<select class="input" v-model="goal.type">
				<option disabled selected>Goal type</option>
				<option value="total">Total</option>
				<option value="average">Average</option>
			</select>
			<select class="input" v-if="goal.type == 'average'" v-model="goal.time_period">
				<option disabled selected>Time period</option>
				<option value="log">Log</option>
				<option value="day">Day</option>
				<option value="week">Week</option>
				<option value="month">Month</option>
				<option value="year">Year</option>
			</select>
		</div>
	</Modal>
</template>

<style scoped>

	.form-column {
		margin-top: 55px;
		width: 450px;
		height: auto;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		margin-bottom: 45px;
	}

	.subheading {
		font-size: 24px;
		font-weight: 100;
		color: VAR(--off-black);
		text-align: center;
		margin-bottom: 65px;
	}

	.section {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-bottom: 50px;
		align-items: stretch;
		box-sizing: border-box;
	}

	.step {
		border-bottom: 2px solid VAR(--dark-grey);
		padding-bottom: 10px;
		margin-bottom: 45px;
		display: flex;
		justify-content: flex-start;
	}

	.step > span {
		color: VAR(--light-grey);
		font-size: 24px;
		text-align: center;
		height: 35px;
		width: 35px;
		background-color: VAR(--main-blue-highlight);
		border-radius: 50%;
		font-weight: 600;
		box-sizing: border-box;
		padding-top: 2px;
	}

	.input::-webkit-outer-spin-button,
	.input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.input[type=number] {
		-moz-appearance: textfield;
	}

	.row {
		display: flex;
	}

	.col {
		box-sizing: border-box;
		width: 50%;
	}
</style>

<script>
import Modal from "@/components/Modal";

export default {
	name: "NewGoal",
	components: {
		Modal
	},
	data() {
		return {
			goal: {
				name: null,
				description: null,
				metric: null,
				goal_value: null,
				due: null,
				time_period: "Time period",
				type: "Goal type"
			},
			error: null,
			due_date: {
				d: 1,
				m: 1,
				y: 1970
			}
		}
	},
	methods: {
		createGoal() {
			this._due_date = this.goal.due;
			this.goal.due = this._due_date;
			this.$store.dispatch("addGoal", this.goal)
				.then((data) => {
					this.stopBodyScroll(false);
					this.$router.push({name: "SingleGoal", params: {goal_id: data.id}})
				})
				.catch(error => {
					this.error = error.response.data.error;
				});
		},
		close() {
			this.$emit("close");
		}
	},
	computed: {
		_due_date: {
			get() {
				let {d, m, y} = this.due_date;
				return `${y}-${m}-${d}`;
			},
			set(newVal) {
				let [y, m, d] = newVal.split('-');
				this.due_date = {y, m, d};
			}
		}
	}
}
</script>