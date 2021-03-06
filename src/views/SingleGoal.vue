<template>
	<AppLayout>
		<transition name="fade">
		<LogModal v-if="logModalShow" 
				@close="this.hideLogModal" 
				@emitLog="addLog" 
				:metric="thisGoal.metric" 
				:name="thisGoal.name" />
		</transition>

		<transition name="fade">
			<UpdateLogModal v-if="updateModalShow" 
							:metric="thisGoal.metric" 
							:name="thisGoal.name" 
							@close="hideUpdateModal" 
							@emitLog="updateLog"
							:value_original="selHistory.value"
							:id="selHistory.id"
							@delete="deleteLog" />
		</transition>

		<div class="section row">
			<div class="info-panel">
				<span class="info-row"><span>Due date: </span>{{ dueDate }}</span>
				<span class="info-row"><span>Goal: </span>{{ thisGoal.goal_value }} {{ thisGoal.metric }}</span>
				<span class="info-row"><span>Progress: </span>{{ progress }}</span>
				<span class="info-row"><span>Description: </span>{{ thisGoal.description }}</span>
				<span class="info-row"><span>Goal type: </span>{{ thisGoal.goal_type|capitalize }}</span>
				<span class="info-row"><span>Category: </span><div class="badge badge-blue">Money</div></span>
				<span class="info-row"><span>Display on dashboard: </span>
					<label class="switch">
						<input type="checkbox" :checked="dashboard" @change="dashboard = $event.target.checked"><span></span>
					</label>
				</span>
				<div class="bottom-btn" style="width: 100%;">
					<button class="btn btn-blue btn-block" id="new-log" @click="showLogModal">Add new log</button>
				</div>
			</div>
			<div class="graph-container">
				<canvas class="graph"></canvas>
			</div>
		</div>

		<!--
		<div class="section">
			<h2>Vision</h2>
			<div class="visions-holder">
				<Vision></Vision>
				<Vision></Vision>
				<Vision></Vision>
				<Vision></Vision>
			</div>
		</div>

		<div class="section">
			<h2>Affirmations</h2>
			<div class="visions-holder">
				<Affirmation></Affirmation>
				<Affirmation></Affirmation>
				<Affirmation></Affirmation>
				<Affirmation></Affirmation>
				<Affirmation></Affirmation>
			</div>
		</div>
		-->

		<div class="section">
			<h2>History</h2>
			<HistoryItem v-for="hist in sortedHistory"
						:key="hist.id"
						:history="hist" 
						@click.native="showUpdateModal(hist.value, hist.id)" />

			<button class="btn btn-blue" @click="deleteGoal">Delete goal</button>
		</div>
	</AppLayout>
</template>

<script>
import AppLayout from "@/views/AppLayout";
//import Vision from "@/components/Vision";
//import Affirmation from "@/components/Affirmation";
import HistoryItem from "@/components/HistoryItem";
import LogModal from "@/components/LogModal";
import UpdateLogModal from "@/components/UpdateLogModal";

export default {
	name: "SingleGoal",
	components: {
		AppLayout,
		HistoryItem,
		LogModal,
		UpdateLogModal
	},
	data: () => {
		return {
			logModalShow: false,
			updateModalShow: false,
			selHistory: {
				value: null,
				id: null
			}
		}
	},
	methods: {
		showLogModal() {
			this.logModalShow = true;
			document.getElementsByTagName("body")[0].classList.add("noscroll");
		},
		hideLogModal() {
			this.logModalShow = false;
			document.getElementsByTagName("body")[0].classList.remove("noscroll");
		},
		showUpdateModal(value, id) {
			this.updateModalShow = true;
			this.selHistory.value = value;
			this.selHistory.id = id;
			document.getElementsByTagName("body")[0].classList.add("noscroll");
		},
		hideUpdateModal() {
			this.updateModalShow = false;
			this.selHistory.value = null;
			this.selHistory.id = null;
			document.getElementsByTagName("body")[0].classList.remove("noscroll");
		},
		updateGoal() {
			this.$store.dispatch("updateGoal", {id: this.goalId, payload: this.thisGoal});
		},
		addLog(value) {
			this.$store.dispatch("addLog", {goal_id: this.goalId, value: value});
			this.hideLogModal();
		},
		updateLog(value, id) {
			this.$store.dispatch("updateLog", {id: id, value: value});
			this.hideUpdateModal();
			this.selHistory.id = null;
			this.selHistory.value = null;
		},
		deleteLog() {
			this.$store.dispatch("deleteLog", {
				goal_id: this.goalId, 
				history_id: this.selHistory.id
			});
			this.hideUpdateModal();
			this.selHistory.id = null;
			this.selHistory.value = null;
		},
		deleteGoal() {
			this.$router.push({name: "Dashboard"});
			this.$destroy();
			this.$store.dispatch("deleteGoal", this.goalId);
		}
	},
	computed: {
		goalId() {
			return this.$route.params.goal_id;
		},
		goalIndex() {
			return this.$store.state.goals.findIndex(i => i.id == this.goalId);
		},
		thisGoal() {
			return this.$store.getters.getGoal(this.goalId);
		},
		dueDate() {
			return this.convertDate(this.thisGoal.due);
		},
		progress() {
			return this.$store.getters.findProgress(this.goalId, true);
		},
		sortedHistory() {
			let temphist = [...this.thisGoal.history];
			temphist = temphist.sort((a, b) => new Date(a.date) > new Date(b.date) ? 1 : -1);
			return temphist;
		},
		dashboard: {
			set(value) {
				this.$store.dispatch("updateGoal", {
					id: this.goalId,
					payload: {dashboard: value}
				});
			},
			get() {
				return this.thisGoal.dashboard;
			}
		}
	},
	mounted: function() {
		this.createGraph(".graph", this.goalId, this.thisGoal.metric, 
						this.thisGoal.created_at, this.thisGoal.due,
						this.thisGoal.goal_value, true);
	},
	updated: function() {
		this.createGraph(".graph", this.goalId, this.thisGoal.metric, 
						this.thisGoal.created_at, this.thisGoal.due,
						this.thisGoal.goal_value, false);
	}
}
</script>

<style scoped>
	h2 {
		font-size: 28px;
		display: block;
		text-align: left;
		margin-bottom: 40px;
		margin-top: 0;
	}

	.section {
		padding: 50px 0 75px 0;
		border-bottom: 1px solid VAR(--dark-grey);
	}

	.row {
		display: flex;
		align-items: stretch;
	}

	.info-panel {
		width: 45%;
		min-width: 300px;
		display: inline-flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.info-row {
		display: flex;
		width: 100%;
		max-width: 100%;
		
		margin-bottom: 10px;
	}

	.info-row > span {
		width: 40%;
		min-width: 40%;
		margin-right: 30px;
		font-weight: 600;
	}

	.graph-container {
		width: 55%;
		min-width: 390px;
		padding-left: 40px;
		height: 90%;
		display: inline-block;
		box-sizing: border-box;
	}

	.graph {
		border-radius: 5px;
		box-shadow: 0px 7px 14px rgba(14, 16, 63, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.2);
		height: 100%;
		width: 100%;
		background: linear-gradient(180deg, #0E103F 0%, #2B2F99 100%), #191D73;
	}

	.bottom-btn {
		margin-top: auto;
		margin-bottom: 0px;
	}
</style>