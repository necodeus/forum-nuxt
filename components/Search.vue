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

<style lang="scss">
$search_icon_width: 40px;
$search_height: 40px;

.search {
	$search: &;

	padding-right: $search_icon_width;
	border-radius: 4px;
	overflow: hidden;
	font-size: 14px;

	width: 240px;

	position: relative;

	&__input {
		border: 0;
		outline: none;
		height: $search_height;
		line-height: $search_height;
		color: var(--search-text-color);
		width: 200px;
		padding-left: 15px;
		padding-right: 15px;
		position: relative;
		transition: width 0.3s ease-in-out, padding 0.6s ease-in-out;
		background-color: var(--search-background);
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 40px;
		opacity: 0.05;
		display: block;
	}

	&__icon {
		width: $search_icon_width;
		height: $search_height;

		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		top: 0;
		right: 0;

		color: var(--search-button-text-color);
		background-color: var(--search-button-background);

		path {
			transform: scale(0.4);
			transform-origin: center;
		}
	}
}
</style>
