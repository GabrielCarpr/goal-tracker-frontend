<template>
	<AppLayout>
		<Affirmation></Affirmation>
		<Affirmation></Affirmation>
		<Affirmation></Affirmation>
		<Affirmation></Affirmation>
		<Affirmation></Affirmation>
		<Affirmation></Affirmation>
	</AppLayout>
</template>

<script>
import AppLayout from "@/views/AppLayout";
import Affirmation from "@/components/Affirmation";

export default {
	name: "Affirmations",
	components: {
		Affirmation,
		AppLayout
	}
}
</script>