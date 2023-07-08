<template>
	<div class="breadcrumbs">
		<div class="container mx-auto flex">
			<ul class="breadcrumbs-items">
				<li
					v-for="(item, index) in breadcrumbs"
					:key="index"
					class="breadcrumbs-item"
				>
					<RouterLink :to="item.link">{{item.name}}</RouterLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		breadcrumbs: {
			type: Array,
			default: () => [],
		}
	},
}
</script>

<style lang="scss">
.breadcrumbs {
	background-color: var(--breadcrumbs-background);
	.breadcrumbs-items {
		list-style: none;
		font-size: 13px;
		font-weight: 400;
		padding-left: 25px;
		padding-right: 25px;
		.breadcrumbs-item {
			line-height: 40px;
			display: inline-block;
			a {
				display: inline-block;
				text-decoration: none;
				color: var(--breadcrumbs-text-color);
				opacity: 0.7;
				transition: opacity 0.15s ease-in-out;
				&:hover,
				&:focus {
					opacity: 1;
				}
			}
			&:not(:first-child)::before {
				color: var(--breadcrumbs-text-color);
				content: ">";
				padding-left: 5px;
				padding-right: 5px;
			}
		}
	}
}
</style>
