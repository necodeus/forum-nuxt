<template>
	<div class="forum">
		<div class="flex items-center forum__name">
			<h2 class="flex grow heading">
				<div class="forum__icon"><IconsComments height="16px" /></div>
				<RouterLink
					class="forum__link"
					:to="category.link"
					>{{ category.name }}</RouterLink
				>
			</h2>
			<div class="forum__collapse-button" @click="forumCollapse($event)">
				<IconsChevronDown height="20px" />
			</div>
		</div>
		<ul class="categories">
			<slot />
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		category: {
			type: Object,
			default: () => {},
		},
	},
	methods: {
		forumCollapse(e) {
			const forums = document.querySelectorAll(".forum");
			forums.forEach(function (forum) {
				if (
					forum === e.target.parentNode.parentNode ||
					forum === e.target.parentNode.parentNode.parentNode
				) {
					forum.classList.toggle("forum--collapsed");
				}
			});
		},
	},
};
</script>

<style>
.forum {
	background-color: #0d0e12;
	border-radius: 4px;
	color: rgb(169, 169, 169);
	padding: 10px;
	border: 1px solid #1c1d25;
}

.forum .forum--collapsed .forum__collapse-button {
	transform: rotate(90deg);
	transform-origin: center center;
}

.forum .forum--collapsed .forum__link,
.forum .forum--collapsed .forum__icon {
	color: rgba(169, 169, 169, 0.5);
}

.forum .forum--collapsed .categories {
	display: none;
}

.forum__name {
	padding: 16px 24px;
}

.forum__name .heading {
	margin: 0;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.3;
	letter-spacing: -0.02em;
}

.forum__icon {
	margin-right: 10px;
	display: flex;
	align-items: center;
}

.forum__collapse-button {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	width: 20px;
	height: 20px;
	cursor: pointer;
	opacity: 0.2;
	transition: 0.3s transform linear, 0.3s opacity linear;
}

.forum__collapse-button:hover {
	opacity: 1;
}

.forum__link {
	color: rgb(169, 169, 169);
	text-decoration: none;
}

.categories {
	border-radius: 4px;
	overflow: hidden;
}

.categories .category__link {
	color: white;
	text-decoration: none;
	display: inline-block;
}

.categories .category:nth-child(odd) {
	background-color: #121318;
}

.categories .category:nth-child(even) {
	background-color: #101115;
}

.categories .category__name {
	font-weight: 400;
	line-height: 20px;
	font-size: 24px;
	font-weight: 500;
	line-height: 1.2;
	letter-spacing: -0.02em;
	margin: 0;
	line-height: 1.3;
	font-size: 16px;
}

.categories .category__description {
	color: #b6b6b6;
	font-size: 14px;
}

.categories .category__main {
	display: flex;
	justify-content: space-between;
}

.categories .category__image-container {
	padding: 0 12px;
}

.categories .category__stats {
	font-size: 13px;
	padding: 0 12px;
	color: white;
}

.categories .category__newestResponse {
	font-size: 14px;
	line-height: 1.4;
	padding: 0 12px;
}

.categories .category__newestResponse > div:nth-child(1) {
	width: 40px;
	min-width: 40px;
	max-width: 40px;
	height: 40px;
	min-height: 40px;
	max-height: 40px;
	margin-right: 10px;
	border-radius: 50%;
	overflow: hidden;
}

.categories .category__newestResponse_image {
	object-fit: cover;
}

.categories .category__newestResponse_topic {
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 196px;
	white-space: nowrap;
}

.categories .category__newestResponse_author {
	font-size: 13px;
}

.subcategories {
	font-size: 13px;
	.subcategory {
		margin-right: 10px;
		&:not(:last-child) {
			margin-bottom: 10px;
		}
		@media (max-width: 1200px) {
			width: 50%;
		}
		&__link {
			color: white;
			opacity: 0.7;
			transition: 0.3s opacity linear;
			text-decoration: none;
			position: relative;
			&::before {
				content: "-";
				margin-right: 5px;
			}
			&.newContent::after {
				content: "•";
				margin-left: 5px;
				color: hsl(250, 80%, 60%);
			}
			&:hover {
				opacity: 1;
			}
		}
	}
}
</style>
