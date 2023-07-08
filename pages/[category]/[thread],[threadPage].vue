<script setup>
    const { data } = await useAsyncData('thread', () => {
		const route = useRoute();

		const categorySlug = route.params.category;
		const threadSlug = route.params.thread;
		const threadPage = route.params.threadPage * 1;

		const posts = [
			{ id: 1, link: '/xxx', category: { id: 'test', link: '/sad', name: 'asdf' }, author: { name: 'dae' }, slug: 'test', name: 'test', title: 'test', description: 'test' },
		];
		const countOfPosts = 2323;

		return {
			categorySlug, threadSlug, threadPage, countOfPosts, posts,
		};
    });

	const { categorySlug, threadSlug, threadPage, countOfPosts, posts, } = data._value;
</script>

<template>
	<div class="container mx-auto" style="padding: 0px 15px">
		<div class="flex justify-between">
			<div class="grow">
				<Heading name="adsadads"></Heading>

				<Pagination
					class="pagination-container"
					base="/"
					:current-page="threadPage"
					:pages="Math.ceil(countOfPosts / 10)"
				/>

				<Post
					v-for="(post, post_index) in posts"
					:key="post_index"
					:post="post"
					:highlight="true"
				/>

				<Pagination
					class="pagination-container"
					base="/"
					:current-page="threadPage"
					:pages="Math.ceil(countOfPosts / 10)"
				/>
			</div>
		</div>
	</div>
</template>

<style>
.pagination-container {
	border-radius: 4px;
	background-color: #1c1d25;
	margin-bottom: 20px;
}
</style>
