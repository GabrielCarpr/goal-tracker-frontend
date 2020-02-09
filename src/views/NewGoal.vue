<template>
	<div class="container">
		<DesktopMenu />
		<div class="form-column">
			<h1>New goal</h1>
			<span class="subheading">What do you want to achieve?</span>
			<div class="section">
				<div class="step"><span>1</span></div>
				<input type="text" class="input" placeholder="Goal name">
				<textarea class="input" placeholder="Goal description"></textarea>
			</div>

			<div class="section">
				<div class="step"><span>2</span></div>
				<input type="text" class="input" placeholder="Goal measured by...">
				<input type="number" class="input" placeholder="Goal value">
				<input type="date" class="input" placeholder="Goal date">
				<div class="row">
					<div class="col">
						<select class="input">
							<option disabled selected>Time period</option>
							<option value="log">Log</option>
							<option value="day">Day</option>
							<option value="week">Week</option>
							<option value="month">Month</option>
							<option value="year">Year</option>
						</select>
					</div>
					<div class="col">
						<label class="switch" id="lower-better" style="margin-right: 20px; margin-top: -20px;">
							<input type="checkbox"><span></span>
						</label>
						<label for="lower-better">Lower better?</label>
					</div>
				</div>
				<button type="button" class="btn btn-blue" style="align-self: center;">Create goal</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.container {
		width: CALC(100% - 250px);
		margin: 0 0 0 auto;
	}

	.form-column {
		margin-top: 55px;
		width: 500px;
		height: auto;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		margin-bottom: 45px;
	}

	.subheading {
		font-size: 24px;
		font-weight: 100;
		color: VAR(--off-black);
		text-align: center;
		margin-bottom: 65px;
	}

	.section {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-bottom: 110px;
		align-items: stretch;
		box-sizing: border-box;
	}

	.step {
		border-bottom: 2px solid VAR(--dark-grey);
		padding-bottom: 10px;
		margin-bottom: 45px;
		display: flex;
		justify-content: flex-start;
	}

	.step > span {
		color: VAR(--light-grey);
		font-size: 24px;
		text-align: center;
		height: 35px;
		width: 35px;
		background-color: VAR(--main-blue-highlight);
		border-radius: 50%;
		font-weight: 600;
		box-sizing: border-box;
		padding-top: 2px;
	}

	.input::-webkit-outer-spin-button,
	.input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.input[type=number] {
		-moz-appearance: textfield;
	}

	.row {
		display: flex;
	}

	.col {
		box-sizing: border-box;
		width: 50%;
	}
</style>

<script>
import DesktopMenu from "@/components/DesktopMenu";

export default {
	name: "NewGoal",
	components: {
		DesktopMenu
	}
}
</script>