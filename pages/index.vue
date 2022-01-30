<template>
	<div>
		<Slider :sliders="sliders" />
		<div class="container mx-auto">
			
			<Categories :categories="categories" class="mt-8 mb-20" />
            <DealOfTheDay />
			<CategoryProducts :categoryProducts="firstCategory" class="mb-20" />
			<SingleCategories class="mt-8 mb-20" />
			<ModernCategories class="mt-8 mb-20" />
			<CategoryDining class="mb-20" />
			<h2>Category 2</h2>
			<CategoryProducts :categoryProducts="secondCategory" class="mb-20" />
			<h2>Product Images</h2>
			<ImageCategories class="mb-20" />
			<h2>Latest Products</h2>
			<CategoryProducts :categoryProducts="latestProducts" class="mb-20" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

// components
import Slider from '@/components/storefront/products/Slider.vue'
import Categories from '@/components/storefront/products/categories/Categories.vue'
import SingleCategories from '@/components/storefront/products/categories/SingleCategories.vue'
import ModernCategories from '@/components/storefront/products/categories/ModernCategories.vue'
import CategoryDining from '@/components/storefront/products/categories//dining/CategoryDining.vue'
import ImageCategories from '@/components/storefront/products/categories/ImageCategories.vue'
import CategoryProducts from '@/components/storefront/products/categories/CategoryProducts.vue'
import DealOfTheDay from '@/components/storefront/products/DealOftheDay.vue'

export default Vue.extend({
	components: {
		Categories,
		SingleCategories,
		Slider,
		ModernCategories,
		CategoryDining,
		ImageCategories,
		CategoryProducts,
		DealOfTheDay
	},
	data() {
		return {
			sliders: [] as Array<any>,
			categories: [] as Array<any>,
			firstCategory: [] as Array<any>,
			secondCategory: [] as Array<any>,
			latestProducts: [] as Array<any>,
		}
	},
	async asyncData({ $axios }: any) {
		const sliders = await $axios.$get('http://localhost:8080/sliders')
		const categories = await $axios.$get('http://localhost:8080/categories')
		const firstCategory = await $axios.$get('http://localhost:8080/products?category_id=1')
		const secondCategory = await $axios.$get('http://localhost:8080/products?category_id=2')
		const latestProducts = await $axios.$get('http://localhost:8080/products?section=latest')

		return { sliders, categories, firstCategory, secondCategory, latestProducts }
	}
})
</script>
