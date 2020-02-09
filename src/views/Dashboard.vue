<template>
    <AppLayout>
        <DashGoal v-for="goal in dashgoals"
                :goal="goal"
                :key="goal.id"></DashGoal>
    </AppLayout>
</template>

<script>
import DashGoal from "@/components/DashGoal";
import AppLayout from "@/views/AppLayout";

export default {
    name: "Dashboard",
    components: {
        DashGoal,
        AppLayout
    },
    computed: {
        dashgoals() {
            return this.$store.state.goals.filter(goal => goal.dashboard)
        }
    }
}
</script>