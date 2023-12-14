<script setup>
    const { data } = await useAsyncData('category', () => {
		const route = useRoute();

		const categorySlug = route.params.category;
		const categoryPage = route.params.categoryPage * 1;
		const threadSlug = route.params.thread;

		const category = {
			id: 1, link: '/administracja,1', name: 'Administracja', description: 'asddaf',
			subcategories: [
				{ id: 1, link: '/zoo,1', name: 'Aaa', description: 'dsadsads', },
			],
		};

		const threads = [
			{ id: 1, name: 'test', link: '/administracja/test,1', replies: 121 },
			{ id: 1, name: 'dasdsaads', link: '/administracja/dasdsaads,1', replies: 32 },
		];
		const countOfThreads = 111;

		return {
			categorySlug, categoryPage, threadSlug, countOfThreads, category, threads,
		};
	});

	const { categorySlug, categoryPage, threadSlug, countOfThreads, category, threads } = data._value;
</script>

<template>
	<div>
		<div class="container mx-auto" style="padding: 0 15px">
			<div class="flex justify-between">
				<div class="grow">
					<Heading :name="category.name" :description="category.description"></Heading>

					<CategoryContainer :category="category" :subcategories="category.subcategories" style="margin-bottom: 20px">
						<li v-for="(subcategory, subcategories_index) in category.subcategories" :key="subcategories_index" class="category" style="overflow: hidden">
							<div class="flex">
								<div class="category__main grow" style="margin: 24px 12px">
									<div class="flex">
										<div style="display: flex">
											<div class="flex items-center category__image-container">
												<img loading="lazy" width="40px" height="40px" src="" />
											</div>
										</div>
										<div>
											<h3 class="category__name" style="margin-bottom: 10px">
												<RouterLink class="category__link" to="/" >{{ subcategory.name }}</RouterLink>
											</h3>
											<div class="category__description">{{ subcategory.description }}</div>
										</div>
									</div>
									<div class="flex flex-col justify-center text-right category__stats"></div>
								</div>
							</div>
						</li>
					</CategoryContainer>

					<Threads>
						<Pagination
							:base="'/'"
							:current-page="categoryPage"
							:pages="Math.ceil(countOfThreads / 10)"
						/>

						<ThreadListItem
							v-for="(thread, thread_index) in threads"
							:key="thread_index"
							:thread-link="thread.link"
							:thread-name="thread.name"
							:replies="`${thread.replies} odpowiedzi`"
						/>

						<Pagination
							base="/"
							:current-page="categoryPage"
							:pages="Math.ceil(countOfThreads / 10)"
						/>
					</Threads>
				</div>
			</div>
		</div>
	</div>
</template>
