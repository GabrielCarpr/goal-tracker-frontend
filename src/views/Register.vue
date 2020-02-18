<template>
	<AuthLayout>
		<div class="form-group">
			<label for="name">Name</label>
			<input id="name" type="text" :disabled="isLoading" v-model="name">
		</div>
		<div class="form-group">
			<label for="email">Email</label>
			<input id="email" type="text" :disabled="isLoading" v-model="email">
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input id="password" type="password" :disabled="isLoading" v-model="password">
		</div>
		<div class="form-group">
			<label for="password_confirmation">Confirm password</label>
			<input id="password_confirmation" type="password" :disabled="isLoading" v-model="password_confirmation">
		</div>
		<div class="login-group">
			<input type="checkbox" id="permanent" checked>
			<label for="permanent">Stay signed in?</label>

			<span id="forgotten">Forgotten password?</span>
		</div>
		<div class="error" :class="{ 'error-show': $store.state.errors.auth.error }">
			&times; {{ $store.state.errors.auth.error }}
		</div>
		<button type="button" id="login" v-if="!isLoading" @click="register()">Register</button>
		<button type="button" id="login" v-else disabled style="height: 66px; width: 198px;"><span class="spinner"></span></button>
	</AuthLayout>
</template>

<style scoped>
	.error {
		color: red;
		display: block;
		opacity: 0;
		margin-bottom: 20px;
	}

	.error-show {
		opacity: 1;
	}

	.form-group {
		width: 100%;
		margin-bottom: 25px;
		text-align: left;
	}
	
	input[type='text'], input[type='password'] {
		width: CALC(100% - 30px);
		background-color: VAR(--light-grey);
		box-shadow: 0px 7px 14px rgba(14, 16, 63, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.2);
		border-radius: 5px;
		height: 25px;
		outline: 0;
		border: 0;
		margin-top: 5px;
		padding: 15px;
		font-size: 20px;
		transition: box-shadow, background-color ease 200ms;
	}

	input[type='text']:focus, input[type='password']:focus {
		box-shadow: 0px 7px 14px rgba(14, 16, 63, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.2), 0px 0px 0px 0.3rem VAR(--main-blue);
	}

	input[type='text']:disabled, input[type='password']:disabled {
		box-shadow: none;
		background-color: VAR(--dark-grey);
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
		margin-bottom: 20px;
		margin-top: -15px;
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		.login-group > label, span {
			font-size: 15px;
		}
	}

	.login-group > label {
		margin-right: auto;
		margin-left: 5px;
	}

	#forgotten {
		margin: 0;
	}

	.login-group > input {
		height: 15px;
		width: 15px;
	}

	button {
		background: VAR(--dark-blue);
		border-radius: 4px;
		font-size: 32px;
		color: VAR(--light-grey);
		padding: 15px 60px;
		border: 0;
		outline: 0;
		transition: background-color ease 300ms;
		cursor: pointer;
	}

	button:hover {
		background: VAR(--main-blue);
		transition: background-color ease 200ms;
	}

	button:disabled {
		background: #23234d;
		cursor: auto;
	}
</style>

<script>
import AuthLayout from "@/views/AuthLayout";

export default {
	name: "Register",
	components: {
		AuthLayout
	},
	data: () => {
		return {
			isLoading: false,
			email: null,
			password: null,
			name: null,
			password_confirmation: null
		}
	},
	methods: {
		register() {
			this.isLoading = true;

			this.$store
				.dispatch("register", {
					email: this.email, 
					password: this.password,
					name: this.name,
					password_confirmation: this.password_confirmation})
				.then(() => this.$router.push({name: "Dashboard"}))
				.catch(() => this.isLoading = false);
		}
	}
}
</script>