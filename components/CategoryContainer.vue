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
	$forum: &;
	&--collapsed {
		#{$forum}__collapse-button {
			transform: rotate(90deg);
			transform-origin: center center;
		}
		#{$forum}__link,
		#{$forum}__icon {
			color: rgba(169, 169, 169, 0.5);
		}
		.categories {
			display: none;
		}
	}
	&__name {
		padding: 16px 24px;
		.heading {
			margin: 0;
			font-size: 18px;
			font-weight: 500;
			line-height: 1.3;
			letter-spacing: -0.02em;
		}
	}
	&__icon {
		margin-right: 10px;
		display: flex;
		align-items: center;
	}
	&__collapse-button {
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 18px;
		width: 20px;
		height: 20px;
		cursor: pointer;
		opacity: 0.2;
		transition: 0.3s transform linear, 0.3s opacity linear;
		&:hover {
			opacity: 1;
		}
	}
	&__link {
		color: rgb(169, 169, 169);
		text-decoration: none;
	}
}

.categories {
	border-radius: 4px;
	overflow: hidden;
	.category {
		&__link {
			color: white;
			text-decoration: none;
			display: inline-block;
		}

		&:nth-child(odd) {
			background-color: #121318;
		}
		&:nth-child(even) {
			background-color: #101115;
		}
		&__name {
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
		&__description {
			color: #b6b6b6;
			font-size: 14px;
			// padding: 5px 0;
		}
		&__main {
			display: flex;
			justify-content: space-between;
		}
		&__image-container {
			padding: 0 12px;
		}
		&__stats {
			font-size: 13px;
			padding: 0 12px;
			color: white;
		}
		&__newestResponse {
			font-size: 14px;
			line-height: 1.4;
			padding: 0 12px;
			> div:nth-child(1) {
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
			&_image {
				object-fit: cover;
			}
			&_topic {
				overflow: hidden;
				text-overflow: ellipsis;
				max-width: 196px;
				white-space: nowrap;
			}
			&_author {
				font-size: 13px;
			}
		}
	}
}

.subcategories {
	font-size: 13px;
	.subcategory {
		// width: 33.333%;
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
			// padding: 5px;
			transition: 0.3s opacity linear;
			text-decoration: none;
			position: relative;
			&::before {
				content: "-";
				margin-right: 5px;
				// display: inline-block;
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
