<template>
	<div>
		<Slider :sliders="sliders" />
		<div class="container mx-auto">
			<Categories :categories="categories" class="mt-8 mb-20" />
            <DealOfTheDay />
			<CategoryProducts :categoryProducts="firstCategory" class="mb-20" />
			<SingleCategory class="mb-20" />
			<ModernCategory class="mt-8 mb-20" />
			<CategoryDining class="mb-20" />
			<h2>Category 2</h2>
			<CategoryProducts :categoryProducts="secondCategory" class="mb-20" />
			<h2>Our Brands</h2>
			<Brands class="mb-20" />
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
import CategoryDining from '@/components/storefront/products/categories/dining/CategoryDining.vue'
import ModernCategory from '@/components/storefront/products/categories/ModernCategory.vue'
import SingleCategory from '@/components/storefront/products/categories/SingleCategory.vue'
import Brands from '~/components/storefront/products/categories/Brands.vue'
import CategoryProducts from '@/components/storefront/products/categories/CategoryProducts.vue'
import DealOfTheDay from '@/components/storefront/products/DealOftheDay.vue'

export default Vue.extend({
	components: {
		Categories,
		SingleCategory,
		Slider,
		ModernCategory,
		CategoryDining,
		Brands,
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
		const sliders = await $axios.$get('http://127.0.0.1:8000/api/sliderImages')
		const firstCategory = await $axios.$get('http://127.0.0.1:8000/api/featuredItems')
		const secondCategory = await $axios.$get('http://127.0.0.1:8000/api/featuredItems')
		const latestProducts = await $axios.$get('http://127.0.0.1:8000/api/latestItems')

		return { sliders,  firstCategory, secondCategory, latestProducts }
	}
})
</script>
