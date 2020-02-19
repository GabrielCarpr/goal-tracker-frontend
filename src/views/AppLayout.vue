<template>
	<div class="container">
		<keep-alive>
		<DesktopMenu></DesktopMenu>
		</keep-alive>
		<Frame>
			<slot></slot>
		</Frame>
	</div>
</template>

<style scoped>
	
</style>

<script>
import DesktopMenu from "@/components/DesktopMenu";
import Frame from "@/components/Frame";

export default {
	name: "AppLayout",
	components: {
		DesktopMenu,
		Frame
	},
	data: function() {
		return {
			isLoading: true
		}
	}
}
</script>