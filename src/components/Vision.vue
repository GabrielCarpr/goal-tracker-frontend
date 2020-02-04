<template>
	<div class="vision-card">
		<div class="vision-img"></div>
		<span class="vision-tag">Money</span>
		<span class="goal-name">Goal name</span>
	</div>
</template>

<script>
export default {
	name: "Vision"
}
</script>

<style scoped>
	.vision-card {
		width: 290px;
		height: 320px;
		border-radius: 10px;
		background: VAR(--main-blue);
		color: VAR(--light-grey);
		padding-bottom: 5px;
		font-size: 20px;
		line-height: 23px;
		text-align: center;
		display: inline-flex;
		justify-content: space-between;
		flex-direction: column;
		position: relative;
	}

	.vision-img {
		width: 100%;
		height: 290px;
		background: VAR(--mid-grey);
		box-shadow: 0px 7px 14px rgba(14, 16, 63, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
	}

	.vision-tag {
		position: absolute;
		font-size: 16px;
		color: VAR(--light-grey);
		padding: 4px;
		background-color: VAR(--main-blue);
		line-height: 16px;
		border-radius: 4px;
		right: 6px;
		bottom: 42px;
	}
</style>