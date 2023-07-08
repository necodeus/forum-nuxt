<template>
	<header class="header">
		<nav class="header__navigation">
			<div class="container mx-auto flex items-center">
				<!-- <div
					class="flex list-child"
					style="margin: 0px 24px"
					@mouseover="delayedActivation($event)"
					@mouseleave="delayedDeactivation($event)"
				>
					<RouterLink to="/" class="flex align-center" style="color: rgb(59,254,191);">
						<Logo height="35px" />
					</RouterLink>
				</div> -->

				<div class="flex items-center" style="margin: 0 24px">
					<Search />
				</div>

				<div class="flex justify-between grow">
					<ul class="flex list">
						<li
							class="list-child"
							@mouseover="delayedActivation($event)"
							@mouseleave="delayedDeactivation($event)"
						>
							<RouterLink class="list-child__link" to="/activity">
								<span>Aktywność</span><span>Aktywność</span>
							</RouterLink>
						</li>

						<li
							class="list-child"
							@mouseover="delayedActivation($event)"
							@mouseleave="delayedDeactivation($event)"
						>
							<RouterLink class="list-child__link" to="/users">
								<span>Użytkownicy</span><span>Użytkownicy</span>
							</RouterLink>
						</li>


						<li
							class="list-child"
							@mouseover="delayedActivation($event)"
							@mouseleave="delayedDeactivation($event)"
						>
							<RouterLink class="list-child__link" to="/contact">
								<span>Kontakt</span><span>Kontakt</span>
							</RouterLink>
						</li>

						<li
							class="list-child"
							@mouseover="delayedActivation($event)"
							@mouseleave="delayedDeactivation($event)"
						>
							<a href="#" class="list-child__link">
								<span>Więcej</span><span>Więcej</span>
							</a>
							<!-- <RouterLink class="list-child__link" to="/information">Informacje</RouterLink> -->
							<ul class="sublist">
								<li class="sublist-child">
									<RouterLink class="sublist-child__link" to="/information/privacy-policy,1">Polityka prywatności</RouterLink>
								</li>
								<li class="sublist-child">
									<RouterLink class="sublist-child__link" to="/information/faq,1">FAQ</RouterLink>
								</li>
							</ul>
						</li>

					</ul>

					<ul class="flex list">
						<li
							class="list-child"
							@mouseover="delayedActivation($event)"
							@mouseleave="delayedDeactivation($event)"
						>
							<RouterLink class="list-child__link" to="#">
								<span>Logowanie</span><span>Logowanie</span>
							</RouterLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	methods: {
		delayedActivation(element) {
			const item = element.target.parentNode;
			const list = element.target.parentNode.parentNode;

			clearTimeout(item.dataset.timeoutId);
			item.dataset.timeoutId = setTimeout(function () {
				if (item.tagName === "LI" && item.className === "list-child") {
					item.classList.add("hovered");
					list.classList.add("hovered");
				}
			}, 20);
		},
		delayedDeactivation(element) {
			const item = element.target;
			const list = element.target.parentNode;

			clearTimeout(item.dataset.timeoutId);
			item.dataset.timeoutId = setTimeout(function () {
				if (item.tagName === "LI") {
					item.classList.remove("hovered");
					list.classList.remove("hovered");
				}
			}, 20);
		},
	},
};
</script>

<style lang="scss">
.header__logo {
	width: 333.333px;
	height: 100px;
	background-image: url("/images/logo.png");
	background-size: cover;
}

.header__user-link {
	color: white;
	text-decoration: none;
}

.header__user + .header__user-options {
	visibility: hidden;
}

.header__user:hover + .header__user-options,
.header__user-options:hover {
	visibility: visible;
}

.header {
	background-color: var(--navigation-background);
	position: relative;

	&__background {
		width: 100%;
		height: 100%;
		position: absolute;
		background-repeat: no-repeat;
		background-image: url("/images/header.png");
	}

	&__top {
		color: white;
		padding-top: 20px;
		padding-bottom: 20px;
		position: relative;
	}

	&__middle {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 175px;
		position: relative;
	}

	&__navigation {
		height: 80px;
		line-height: 80px;
		padding: 0;

		.list {
			margin: 0;
			list-style: none;
			white-space: nowrap;
			$list: &;

			.list-child {
				font-size: 14px;
				perspective-origin: top center;
				.sublist {
					padding: 0;
					display: flex;
					list-style: none;
					font-size: 13px;
					flex-flow: column;
					line-height: 20px;
					position: relative;
					z-index: 999;

					// background-color: #0e0f13;
					// border: 1px solid #0a0433;

					background-color: #0d0e12;
					border: 1px solid #1c1d25;

					position: absolute;
					border-bottom-left-radius: 4px;
					border-bottom-right-radius: 4px;
					border-top-width: 0px;

					opacity: 0;
					visibility: hidden;

					transform: perspective(500px) scale(1.5) rotate3d(1, 0, 0, 60deg);
					transform: translateY(0);
					transform-style: preserve-3d;

					transition: opacity 0.15s ease-in-out, transform 0.3s ease-in-out;

					&::after {
						content: "";
						position: absolute;
						top: -2px;
						bottom: 0;
						right: 0;
						left: 0;
						width: 50%;
						height: 2px;
						background-color: #6347eb;
						opacity: 0;
					}

					.sublist-child {
						display: flex;
						align-items: center;
						a {
							padding: 20px;
							display: block;
							width: 100%;
						}

						.sublist-child__link {
							text-decoration: none;

							color: white;
							opacity: 0.6;
							transition: opacity 0.3s ease-in-out;

							svg {
								margin-right: 5px;

								path {
									fill: rgb(255, 255, 255);
								}
							}
						}

						&:hover .sublist-child__link,
						.sublist-child__link.router-link-active {
							opacity: 1;
							svg path {
								fill: rgb(255, 255, 255);
							}
						}
					}
				}

				&.hovered { // to nie
					.sublist {
						opacity: 1;
						visibility: visible;
						transform: perspective(500px) scale(1) rotate3d(1, 0, 0, 0deg);
						transform: translateY(0);
						&::after {
							width: 100%;
							opacity: 0.666;
							transition: width 0.6s cubic-bezier(1, 0, 0.5, 1.1),
								opacity 0.6s cubic-bezier(1, 0, 0.5, 1.1);
						}
					}
				}

				.list-child__link {
					color: var(--navigation-link-color);
					opacity: 0.7;
					transition: opacity 0.3s ease-in-out;
					display: inline-block;

					padding: 0px 25px;
					text-decoration: none;
					position: relative;
					svg {
						margin-right: 4px;
						path {
							fill: white;
						}
					}

					&:after {
						content: "";
						background: hsl(250, 80%, 60%);
						width: 100%;
						height: 2px;
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
						transform: scaleX(0);
						transition: transform 0.3s;
						border-radius: 2px;
						z-index: 1000;
					}
				}

				.list-child__link span:nth-of-type(1) {
					font-weight: 400;
					position: absolute;
					height: 0px;
				}

				.list-child__link span:nth-of-type(2) {
					font-weight: 600;
					opacity: 0;
				}

				.list-child__link.router-link-active span:nth-of-type(1) {
					font-weight: 600;
				}

				.list-child__link:hover {
					opacity: 1;
					svg path {
						fill: white;
					}
				}

				&.hovered .list-child__link {
					opacity: 1;
					&:after {
						transform: scaleX(1);
					}
				}
			}

			&:not(.hovered) .list-child__link.router-link-active {
				opacity: 1;
				&:after {
					transform: scaleX(1);
				}
				svg path {
					fill: white;
				}
			}
		}
	}
}
</style>
