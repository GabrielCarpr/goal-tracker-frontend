<template>
	<div class="modal-overlay" @click="this.close">
		<div class="log-modal" @click.stop>
			<div class="log-header">{{ name }} <span class="log-close" @click="this.close">&times;</span></div>
			<input autofocus class="log-input" type="number" v-model="value" v-init:value="value_original">
			<span class="log-metric">{{ metric }}</span>
			<span class="button-row">
				<button type="button" class="btn log-submit" @click="emitValue">Save log</button>
				<button type="button" class="btn log-del" @click="emitDelete">Del</button>
			</span>
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
		},
		name: {
			type: String,
			required: true
		},
		value_original: {
			type: Number,
			required: true
		},
		id: {
			type: Number,
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
			this.$emit("emitLog", this.value, this.id);
		},
		emitDelete() {
			this.$emit("delete");
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

	.button-row {
		width: 100%;
		height: 50px;
	}

	.btn {
		outline: none;
		border: none;
		cursor: pointer;
		text-align: center;
		color: VAR(--light-grey);
		font-size: 23px;
		transition: background-color ease-in-out 200ms;
	}

	.log-submit {
		background-color: VAR(--main-blue);
		width: 70%;
		height: 100%;
		border-radius: 0 0 0 5px;
	}

	.log-submit:hover {
		background-color: VAR(--dark-blue);
	}

	.log-del {
		background-color: #B40F0F;
		width: 30%;
		height: 100%;
		border-radius: 0 0 5px 0;
	}

	.log-del:hover {
		background-color: rgb(119, 13, 13);
	}
</style>