<template>
	<div>
		<DesktopMenu></DesktopMenu>
		<Frame>
			<slot></slot>
		</Frame>
	</div>
</template>

<script>
import DesktopMenu from "@/components/DesktopMenu";
import Frame from "@/components/Frame";

export default {
	name: "AppLayout",
	components: {
		DesktopMenu,
		Frame
	}
}
</script>