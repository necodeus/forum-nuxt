<template>
	<div>
		<Header />
		<Breadcrumbs :breadcrumbs="[
			{ link: '/', name: 'Forum' },
			{ link: '/test,1', name: 'Test' },
		]" />
		<NuxtPage />
		<Footer />
	</div>
</template>

<script>
export default {
	head() {
		return {
			bodyAttrs: {
				class: "layout--forum",
			},
		};
	},
};
</script>

<style>
.layout--forum {
	background-color: hsl(230, 17%, 7%);
	color: white;
	font-family: "Poppins";

	--footer-border-top-color: #1c1d25;
	--footer-background: #121318;
	--footer-text-color: white;

	--navigation-background: #260f64;

	--navigation-link-color: white;

	--search-background: #0f1015;
	--search-text-color: white;
	--search-button-background: #14151c;
	--search-button-text-color: white;

	--breadcrumbs-background: rgb(32, 10, 91);
	--breadcrumbs-text-color: rgb(240, 240, 240);
}
</style>
