<template>
	<div class="affirmation">
		<span class="affirmation-text">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipseum.</span>
		<div class="affirmation-controls"><span class="play-button">&#9658;</span><span class="delete-button">&#128465;</span></div>
	</div>
</template>

<style scoped>
	.affirmation {
		background: VAR(--mid-grey);
		border-radius: 5px;
		margin-bottom: 45px;
		display: flex;
		justify-content: space-between;
		position: relative;
		width: 100%;
	}

	.affirmation-text {
		font-size: 20px;
		padding: 25px;
		line-height: 23px;
	}

	.affirmation-controls {
		padding: 25px;
		font-size: 40px;
		color: rgb(22, 22, 22);
		width: 60px;
		border-left: 2px solid VAR(--dark-grey);
		text-align: center;
	}

	.play-button {
		display: inline;
		cursor: pointer;
	}

	.play-button:hover {
		color: rgb(80, 80, 80);
	}

	.delete-button {
		position: absolute;
		top: 5px;
		right: 5px;
		font-size: 16px;
		color: VAR(--dark-grey);
		cursor: pointer;
	}

	.delete-button:hover {
		color: rgb(44, 44, 44);
	}
</style>

<script>
export default {
	name: "Affirmation"
}
</script>