<template>
	<div class="modal-overlay" @click="this.close">
		<div class="log-modal" @click.stop>
			<div class="log-header">Goal name <span class="log-close" @click="this.close">&times;</span></div>
			<input autofocus class="log-input" type="number" v-model="value"><span class="log-metric">{{ metric }}</span>
			<button type="button" class="log-submit" @click="emitValue">Save log</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "LogModal",
	props: {
		metric: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			value: null
		}
	},
	methods: {
		close() {
			this.$emit("close");
		},
		emitValue() {
			this.$emit("emitLog", this.value);
		}
	}
}
</script>

<style scoped>
	.log-modal {
		width: 315px;
		display: flex;
		flex-direction: column;
		height: auto;
		border-radius: 5px;
		z-index: 21;
	}

	.log-header {
		color: VAR(--light-grey);
		background: VAR(--main-blue);
		font-size: 18px;
		padding: 5px 10px;
		text-align: center;
		border-radius: 5px 5px 0 0;
	}

	.log-close {
		float: right;
		cursor: pointer;
	}

	.log-input {
		height: 65px;
		background-color: VAR(--mid-grey);
		font-size: 36px;
		color: VAR(--off-black);
		outline: none;
		border: none;
		text-align: center;
		padding: 10px;
		caret-color: VAR(--main-blue-highlight);
		box-sizing: border-box;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type=number] {
		-moz-appearance: textfield;
	}

	.log-metric {
		position: relative;
		top: -40px;
		height: 0;
		pointer-events: none;
		font-size: 14px;
		font-weight: 400;
		color: #616161;
		padding-right: 10px;
		text-align: right;
	}

	.log-submit {
		color: VAR(--light-grey);
		background-color: VAR(--main-blue);
		font-size: 23px;
		width: 100%;
		height: 50px;
		text-align: center;
		border-radius: 0 0 5px 5px;
		outline: none;
		border: none;
		cursor: pointer;
		transition: background-color ease-in-out 200ms;
	}

	.log-submit:hover {
		background-color: VAR(--dark-blue);
	}
</style>