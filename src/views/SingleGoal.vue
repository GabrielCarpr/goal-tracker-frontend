<template>
	<AppLayout>
		<div class="section">
			<div class="info-panel">
			
			</div>
			<div class="graph">
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
		</div>
	</AppLayout>
</template>

<script>
import AppLayout from "@/views/AppLayout";
import Vision from "@/components/Vision";
import Affirmation from "@/components/Affirmation";

export default {
	name: "SingleGoal",
	components: {
		Affirmation,
		Vision,
		AppLayout
	}
}
</script>

<style scoped>
	h2 {
		font-size: 28px;
		display: block;
		text-align: left;
	}

	.section {
		padding: 50px 0 75px 0;
		border-bottom: 1px solid VAR(--dark-grey);
	}
</style>