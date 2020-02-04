<template>
	<div id="auth">
		<div id="form">
			<h1>{{ this.$route.name }}</h1>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "AuthLayout"
}
</script>

<style scoped>
	#auth {
		height: 100vh;
		width: 100vw;
		background: radial-gradient(50% 50% at 50% 50%, #2B2F99 0%, #191D73 100%), #191D73;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#form {
		width: 500px;
		height: auto;
		margin: 0 20px;
	}

	h1 {
		color: VAR(--light-grey);
		font-size: 64px;
		margin-bottom: 25px;
		text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
	}
</style>