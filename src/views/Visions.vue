<template>
	<AppLayout>
		<div class="visions-holder">
			<Vision></Vision>
			<Vision></Vision>
			<Vision></Vision>
			<Vision></Vision>
			<Vision></Vision>
			<Vision></Vision>
			<Vision></Vision>

		</div>
	</AppLayout>
</template>

<script>
import AppLayout from "@/views/AppLayout";
import Vision from "@/components/Vision";

export default {
	name: "Visions",
	components: {
		AppLayout,
		Vision
	}
}
</script>
