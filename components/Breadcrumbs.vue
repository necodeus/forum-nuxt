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

<style>
.breadcrumbs {
	background-color: rgb(32, 10, 91);
}

.breadcrumbs .breadcrumbs-items {
	list-style: none;
	font-size: 13px;
	font-weight: 400;
	padding-left: 25px;
	padding-right: 25px;
}

.breadcrumbs .breadcrumbs-items .breadcrumbs-item {
	line-height: 40px;
	display: inline-block;
}

.breadcrumbs .breadcrumbs-items .breadcrumbs-item a {
	display: inline-block;
	text-decoration: none;
	color: rgb(240, 240, 240);
	opacity: 0.7;
	transition: opacity 0.15s ease-in-out;
}

.breadcrumbs .breadcrumbs-items .breadcrumbs-item a:hover,
.breadcrumbs .breadcrumbs-items .breadcrumbs-item a:focus {
	opacity: 1;
}

.breadcrumbs .breadcrumbs-items .breadcrumbs-item:not(:first-child)::before {
	color: rgb(240, 240, 240);
	content: ">";
	padding-left: 5px;
	padding-right: 5px;
}
</style>
