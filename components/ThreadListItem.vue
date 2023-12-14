<template>
	<div class="forum-thread-list-item">
		<div class="flex justify-between">
			<div class="flex flex-col justify-center grow" style="padding: 18px 12px">
				<div style="font-size: 16px">
					<RouterLink class="forum-thread-list-item__link" :to="threadLink">{{
						threadName
					}}</RouterLink>
				</div>
				<div
					class="flex"
					style="font-size: 13px; opacity: 0.5; margin-top: 5px"
				>
					<div>{{ replies }}</div>
				</div>
			</div>
			<div class="flex">
				<div
					class="flex items-center"
					style="padding: 18px 12px; min-width: 220px"
				>
					<img
						width="35px"
						height="35px"
						style="border-radius: 50%; margin-right: 10px"
						src=""
					/>
					<div>
						<div style="font-size: 14px">adsdasasd</div>
						<div style="font-size: 12px">3 minuty temu</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		threadLink: {
			type: String,
			default: "",
		},
		threadName: {
			type: String,
			default: "",
		},
		replies: {
			type: String,
			default: "",
		},
	},
};
</script>

<style>
.forum-thread-list-item {
	background-color: #121318;
	padding: 0 22px;
	border-bottom: 1px solid rgba(128, 128, 128, 0.1);
}

.forum-thread-list-item:last-child {
	border-bottom: none;
}

.forum-thread-list-item__link {
	color: white;
	text-decoration: none;
	display: inline-block;
}
</style>
