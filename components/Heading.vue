<template>
	<div class="category-heading">
		<h1 class="heading" style="color: white">{{ name }}</h1>
		<p v-if="description" class="ch__description">{{ description }}</p>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: "",
		},
		description: {
			type: String,
			default: "",
		},
	},
};
</script>

<style>
.category-heading {
	padding: 26px 34px;
	background-color: #1c1d25;
	border-radius: 4px;
	margin-top: 20px;
	margin-bottom: 20px;
	.heading {
		font-size: 24px;
		font-weight: 500;
		line-height: 1.2;
		letter-spacing: -0.02em;
		margin: 0;
	}
	hr {
		margin: 15px 0;
		height: 0;
		padding: 0;
		border: 1px solid rgba(230, 230, 230, 0.08);
		border-width: 1px 0 0 0;
	}
	.ch__description {
		margin-top: 7px;
		font-size: 14px;
		line-height: 1.6;
	}
}
</style>
