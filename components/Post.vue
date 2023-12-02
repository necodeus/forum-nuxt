<template>
	<div :class="['flex', 'post', highlight ? '' : '', 0 ? 'post--hidden' : '']">
		<div
			class="flex flex-col items-center post__author"
			style="margin-right: 10px; padding: 12px 0"
		>
			<div class="text-center" style="font-size: 18px">
				<span :style="{ fontWeight: '600', color: 'red' }">{{
					post.author.name
				}}</span>
			</div>
			<div class="group">Administrator</div>
			<div style="margin-bottom: 10px">
				<img
					style="border-radius: 50%"
					width="100px"
					height="100px"
					src="https://avatarfiles.alphacoders.com/128/128813.png"
				/>
			</div>
			<div style="font-size: 13px; color: rgb(182, 182, 182)">
				30 lat
			</div>
			<div
				style="margin-bottom: 10px; font-size: 13px; color: rgb(182, 182, 182)"
			>
				Barcin
			</div>
		</div>
		<div class="grow post__main">
			<div class="post__header">
				<table class="text-left">
					<thead>
						<tr>
							<th class="pr-4">dodano</th>
							<th v-if="post.updated_at" class="pr-4">zmodyfikowano</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="pr-4">
								16 minut temu
							</td>
							<td v-if="post.updated_at" class="pr-4">{{ post.updated_at }}</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="separator"></div>

			<div class="post__content" v-html="post.content"></div>

			<div class="separator"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			default: () => {},
		},
		highlight: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss">
.post {
	&__content {
		font-size: 14px;
		line-height: 26px;
		color: rgb(230, 230, 230);
		p {
			padding-bottom: 15px;
		}
		li {
			&:before {
				content: "- ";
			}
		}
		p + ul {
			margin-top: -15px;
		}
		p:only-child {
			padding-bottom: 0;
		}
	}
}
</style>

<style lang="scss">
.separator {
	margin: 15px 0;
	width: 100%;
	height: 0;
	border-bottom: 1px solid rgba(230, 230, 230, 0.08);
}

.post {
	margin-top: 20px;
	margin-bottom: 20px;
	&--hidden {
		opacity: 0.5;
	}
	padding: 10px;
	border: 1px solid #1c1d25;
	background-color: #121318;
	border-radius: 4px;
	.group {
		margin-bottom: 10px;
		font-size: 14px;
		color: gray;
	}
	&__author {
		padding: 0;
		background-color: #121318;
		border-radius: 4px;
		width: 250px;
		min-width: 150px;
		max-width: 250px;
	}
	&__header {
		font-size: 13px;
		color: rgb(182, 182, 182);
	}
	&__main {
		padding: 16px 24px;
		background-color: #1c1d25;
		border-radius: 4px;
		width: 100%;
	}
}
</style>
