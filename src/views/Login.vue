<template>
	<AuthLayout>
		<div class="form-group">
			<label for="email">Email</label>
			<input id="email" type="text">
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input id="password" type="password">
		</div>
		<div class="login-group">
			<input type="checkbox" id="permanent" checked>
			<label for="permanent">Stay signed in?</label>

			<span id="forgotten">Forgotten password?</span>
		</div>
		<button type="button" id="login">Login</button>
	</AuthLayout>
</template>

<style scoped>
	.form-group {
		width: 100%;
		margin-bottom: 25px;
		text-align: left;
	}
	
	input[type='text'], input[type='password'] {
		width: 100%;
		background-color: VAR(--light-grey);
		box-shadow: 0px 7px 14px rgba(14, 16, 63, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.2);
		border-radius: 5px;
		height: 40px;
		outline: none;
		border: 0;
	}

	label {
		font-size: 18px;
		color: VAR(--light-grey);
		margin-bottom: 15px;
	}

	.login-group {
		font-size: 18px;
		color: VAR(--light-grey);
		display: flex;
		justify-content: space-between;
		margin-bottom: 50px;
	}

	button {
		background: VAR(--dark-blue);
		border-radius: 4px;
		font-size: 32px;
		color: VAR(--light-grey);
		padding: 15px 60px;
		border: 0;
		outline: 0;
	}
</style>

<script>
import AuthLayout from "@/views/AuthLayout";

export default {
	name: "Login",
	components: {
		AuthLayout
	}
}
</script>