<template>
	<AppLayout>
		<DashGoal goal="Goal 1"
				progress="125/150"
				metric="Poops"
				:date="new Date()"></DashGoal>
		<DashGoal goal="Goal 1"
				progress="125/150"
				metric="Poops"
				:date="new Date()"></DashGoal>
		<DashGoal goal="Goal 1"
				progress="125/150"
				metric="Poops"
				:date="new Date()"></DashGoal>
		<DashGoal goal="Goal 1"
				progress="125/150"
				metric="Poops"
				:date="new Date()"></DashGoal>
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
	}
}
</script>