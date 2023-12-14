<template>
	<div tabindex="0" class="flex search">
		<input class="search__input" placeholder="Wyszukaj..." value="" />
		<div class="search__icon" @click="searchFocus($event)">
			<IconsSearch />
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		searchFocus(e) {
			if (!e.target.previousElementSibling) {
				return;
			}
			e.target.previousElementSibling.focus();
		},
	},
};
</script>

<style>
.search {
	padding-right: 40px;
	border-radius: 4px;
	overflow: hidden;
	font-size: 14px;
	width: 240px;
	position: relative;
}

.search__input {
	border: 0;
	outline: none;
	height: 40px;
	line-height: 40px;
	color: white;
	width: 200px;
	padding-left: 15px;
	padding-right: 15px;
	position: relative;
	transition: width 0.3s ease-in-out, padding 0.6s ease-in-out;
	background-color: #0f1015;
}

.search::before {
	content: "";
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 40px;
	opacity: 0.05;
	display: block;
}

.search__icon {
	width: 40px;
	height: 40px;

	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	top: 0;
	right: 0;

	color: white;
	background-color: #14151c;
}

.search__icon path {
	transform: scale(0.4);
	transform-origin: center;
}
</style>
