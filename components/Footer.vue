<template>
	<footer class="footer">
		<div class="container mx-auto footer_navigation">
			<ul class="flex footer__links">
				<li>
					<RouterLink to="/information/privacy-policy,1">Polityka prywatności</RouterLink
					>
				</li>
				<li>
					<RouterLink to="/contact">Kontakt</RouterLink>
				</li>
				<li>
					<a href="https://admin.localhost:3000/">ACP</a>
				</li>
			</ul>
		</div>
		<div class="container mx-auto footer__copyrights">
			<div>Copyright &copy; 2022 - NECODEO &reg;</div>
		</div>
	</footer>
</template>

<style>
.footer {
	color: var(--footer-text-color);
	border-top: 1px solid var(--footer-border-top-color);
	&__links {
		padding: 0 25px;
		&::before {
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			height: 60px;
			background-color: var(--footer-background);
		}
		a {
			position: relative;
			font-size: 14px;
			text-decoration: none;
			color: inherit;
			line-height: 60px;
			opacity: 0.5;
			transition: 0.3s opacity linear;
			padding: 0 20px;
			margin-left: -20px;
			&:hover {
				opacity: 1;
			}
		}
	}
	&__copyrights {
		padding-left: 25px;
		padding-right: 25px;
		font-size: 13px;
		opacity: 0.5;
		padding-top: 10px;
		padding-bottom: 10px;
	}
}
</style>
