<script setup>
    const { data: categories } = await useAsyncData('categories', () => {
		return [
			{
				id: 1, link: '/games,1', name: 'Gry',
				children: [
					{ id: 1, link: '/silkroad,1',       name: 'Silkroad Online', description: 'a', },
					{ id: 2, link: '/counter-strike,1', name: 'Counter-Strike',  description: 'b', },
					{ id: 3, link: '/minecraft,1',      name: 'Minecraft',       description: 'c', },
					{ id: 4, link: '/lineage-2,1',      name: 'Lineage II',      description: 'd', },
					{ id: 4, link: '/cabal-online,1',   name: 'Cabal Online',    description: 'e', },
					{ id: 4, link: '/metin-2,1',        name: 'Metin 2',         description: 'f', },
				],
			},
		];
	});
</script>

<template>
	<div class="container mx-auto" style="padding: 0px 15px; margin-top: 20px">
		<div class="grid">
			<CategoryContainer
				v-for="(category, category_index) in categories"
				:key="category_index"
				:category="category"
				style="margin-bottom: 20px"
			>
				<li
					v-for="(subcategory, subcategories_index) in category.children"
					:key="subcategories_index"
					class="category"
					style="overflow: hidden"
				>
					<div class="flex">
						<div class="category__main grow" style="margin: 24px 12px">
							<div class="flex">
								<div style="display: flex">
									<div class="flex items-center category__image-container">
										<img
											loading="lazy"
											width="40px"
											height="40px"
											src=""
										/>
									</div>
								</div>
								<div>
									<h3 class="category__name" style="margin-bottom: 10px">
										<RouterLink
											class="category__link"
											:to="subcategory.link"
											>{{ subcategory.name }}</RouterLink>
									</h3>
									<div class="category__description">{{ subcategory.description }}</div>
								</div>
							</div>
							<div
								class="flex flex-col justify-center text-right category__stats"
							>
								<div><b>3</b> dsadsa</div>
								<div><b>2</b> asddasads</div>
							</div>
						</div>
					</div>
				</li>
			</CategoryContainer>
		</div>
	</div>
</template>
