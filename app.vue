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

<style>
.layout--forum {
	background-color: hsl(230, 17%, 7%);
	color: white;
	font-family: "Poppins";
}
</style>
