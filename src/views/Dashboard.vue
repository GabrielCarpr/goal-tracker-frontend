<template>
    <div>
    <DashGoal goal="Goal 1"
            progress="122/130"
            metric="poops"
            :date="new Date()"></DashGoal>
    
    <DashGoal goal="Goal 2"
            progress="£50,000/£100,000"
            metric="net worth"
            :date="new Date()"></DashGoal>
    </div>
</template>

<script>
import DashGoal from "@/components/DashGoal";

export default {
    name: "Dashboard",
    components: {
        DashGoal
    }
}
</script>