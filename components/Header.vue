<template>
	<header class="header">
		<nav class="header__navigation">
			<div class="container mx-auto flex items-center">
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

<style>
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
	background-color: #260f64;
	position: relative;
}

.header__background {
	width: 100%;
	height: 100%;
	position: absolute;
	background-repeat: no-repeat;
}

.header__top {
	color: white;
	padding-top: 20px;
	padding-bottom: 20px;
	position: relative;
}

.header__middle {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 175px;
	position: relative;
}

.header__navigation {
	height: 80px;
	line-height: 80px;
	padding: 0;
}

.header__navigation .list {
	margin: 0;
	list-style: none;
	white-space: nowrap;
}

.header__navigation .list .list-child {
	font-size: 14px;
	perspective-origin: top center;
}

.header__navigation .list .list-child .sublist {
	padding: 0;
	display: flex;
	list-style: none;
	font-size: 13px;
	flex-flow: column;
	line-height: 20px;
	position: relative;
	z-index: 999;
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
}


.header__navigation .list .list-child .sublist::after {
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

.header__navigation .list .list-child .sublist .sublist-child {
	display: flex;
	align-items: center;
}

.header__navigation .list .list-child .sublist .sublist-child a {
	padding: 20px;
	display: block;
	width: 100%;
}

.header__navigation .list .list-child .sublist .sublist-child .sublist-child__link {
	text-decoration: none;
	color: white;
	opacity: 0.6;
	transition: opacity 0.3s ease-in-out;
}

.header__navigation .list .list-child .sublist .sublist-child .sublist-child__link svg {
	margin-right: 5px;
}

.header__navigation .list .list-child .sublist .sublist-child .sublist-child__link svg path {
	fill: rgb(255, 255, 255);
}

.header__navigation .list .list-child .sublist .sublist-child:hover .sublist-child__link,
.header__navigation .list .list-child .sublist .sublist-child .sublist-child__link.router-link-active {
	opacity: 1;
}

.header__navigation .list .list-child .sublist .sublist-child:hover .sublist-child__link svg path,
.header__navigation .list .list-child .sublist .sublist-child .sublist-child__link.router-link-active svg path {
	fill: rgb(255, 255, 255);
}

.header__navigation .list .list-child.hovered .sublist {
	opacity: 1;
	visibility: visible;
	transform: perspective(500px) scale(1) rotate3d(1, 0, 0, 0deg);
	transform: translateY(0);
}

.header__navigation .list .list-child.hovered .sublist::after {
	width: 100%;
	opacity: 0.666;
	transition: width 0.6s cubic-bezier(1, 0, 0.5, 1.1),
	opacity 0.6s cubic-bezier(1, 0, 0.5, 1.1);
}

.header__navigation .list .list-child .list-child__link {
	color: white;
	opacity: 0.7;
	transition: opacity 0.3s ease-in-out;
	display: inline-block;
	padding: 0px 25px;
	text-decoration: none;
	position: relative;
}

.header__navigation .list .list-child .list-child__link svg {
	margin-right: 4px;
}

.header__navigation .list .list-child .list-child__link svg path {
	fill: white;
}

.header__navigation .list .list-child .list-child__link:after {
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

.header__navigation .list .list-child .list-child__link span:nth-of-type(1) {
	font-weight: 400;
	position: absolute;
	height: 0px;
}

.header__navigation .list .list-child .list-child__link span:nth-of-type(2) {
	font-weight: 600;
	opacity: 0;
}

.header__navigation .list .list-child .list-child__link.router-link-active span:nth-of-type(1) {
	font-weight: 600;
}

.header__navigation .list .list-child .list-child__link:hover {
	opacity: 1;
}

.header__navigation .list .list-child .list-child__link:hover svg path {
	fill: white;
}

.header__navigation .list .list-child.hovered .list-child__link {
	opacity: 1;
}

.header__navigation .list .list-child.hovered .list-child__link:after {
	transform: scaleX(1);
}

.header__navigation .list:not(.hovered) .list-child__link.router-link-active {
	opacity: 1;
}

.header__navigation .list:not(.hovered) .list-child__link.router-link-active:after {
	transform: scaleX(1);
}

.header__navigation .list:not(.hovered) .list-child__link.router-link-active svg path {
	fill: white;
}
</style>
