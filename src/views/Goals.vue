<template>
	<AppLayout>
		<DashGoal v-for="goal in goals"
                :goal="goal"
                :key="goal.id"></DashGoal>
	</AppLayout>
</template>

<script>
import AppLayout from "@/views/AppLayout";
import DashGoal from "@/components/DashGoal";

export default {
	name: "Goals",
	components: {
		AppLayout,
		DashGoal
	},
	computed: {
		goals() {
			return this.$store.state.goals
		}
	}
}
</script>