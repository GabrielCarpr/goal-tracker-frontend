<template>
	<div class="modal-overlay" @click="close">
			<div class="modal" @click.stop>
				<slot></slot>
				<div class="modal__footer">
					<button v-if="handler" @click="handler(emitSubmit)" class="btn btn-blue">{{ button }}</button>
					<button v-else @click="emitSubmit" class="btn btn-blue">{{ button }}</button>
				</div>
			</div>
	</div>
</template>

<script>
export default {
	name: "Modal",
	methods: {
		emitSubmit() {
			this.$emit("submit")
		},
		close() {
			this.$emit("close")
		}
	},
	props: {
		button: {
			type: String,
			default: 'Save'
		},
		handler: {
			type: Function,
			required: false
		}
	}
}
</script>

<style lang="scss" scoped>
.modal {
	width: 40vw;
	background: white;
	border-radius: 5px;
	min-width: 500px;
	padding: 30px;
}
</style>