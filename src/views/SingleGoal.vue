<template>
	<AppLayout>
		<transition name="fade">
		<LogModal v-if="logModalShow" @close="this.hideLogModal"/>
		</transition>
		<div class="section row">
			<div class="info-panel">
				<span class="info-row"><span>Due date: </span>22/02/2020</span>
				<span class="info-row"><span>Progress: </span>67%</span>
				<span class="info-row"><span>Goal: </span>Goal description</span>
				<span class="info-row"><span>Category: </span><div class="badge badge-blue">Money</div></span>
				<span class="info-row"><span>Display on dashboard: </span>
					<label class="switch"><input type="checkbox"><span></span></label>
				</span>
				<button class="btn btn-blue btn-block" id="new-log" @click="showLogModal">Add new log</button>
			</div>
			<div class="graph-container">
				<div class="graph">
				</div>
			</div>
		</div>

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

		<div class="section">
			<h2>History</h2>
			<HistoryItem></HistoryItem>
			<HistoryItem />
		</div>
	</AppLayout>
</template>

<script>
import AppLayout from "@/views/AppLayout";
import Vision from "@/components/Vision";
import Affirmation from "@/components/Affirmation";
import HistoryItem from "@/components/HistoryItem";
import LogModal from "@/components/LogModal";

export default {
	name: "SingleGoal",
	components: {
		Affirmation,
		Vision,
		AppLayout,
		HistoryItem,
		LogModal
	},
	data: () => {
		return {
			logModalShow: false
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
		}
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
		width: 40%;
		display: inline-flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.info-row {
		display: flex;
		width: 100%;
		margin-bottom: 10px;
	}

	.info-row > span {
		width: 40%;
		margin-right: 30px;
		font-weight: 600;
	}

	.graph-container {
		width: 60%;
		padding: 0 40px;
		height: 400px;
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

	#new-log {
		margin-top: auto;
		margin-bottom: 30px;
	}
</style>