<template>
	<div>
		<Slider :sliders="sliders" />
		<div class="container mx-auto">
			<BannerTop :categories="categories" class="mt-8 mb-20" />
			<h2>Featured Products</h2>
			<HomeItems :products="latestProducts" class="mb-20" />
			<h2>Latest Products</h2>
			<HomeItems :products="latestProducts" class="mb-20" />
			<!-- <BannerMiddle class="mb-20" /> -->
			<BestItem class="mt-8 mb-20" />
			
			<h2>Discounted Products</h2>
			<HomeItems :products="latestProducts" class="mb-20" />
			<h2>Popular Products</h2>
			<HomeItems :products="latestProducts" class="mb-20" />
			<BannerBottom class="mb-20" />
			<h2>Our Brands</h2>
			<Brands class="mb-20" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

// components
import Slider from '@/components/storefront/products/Slider.vue'
import BannerTop from '~/components/storefront/home/banners/BannerTop.vue'
import BannerBottom from '~/components/storefront/home/banners/BannerBottom.vue'
import BestItem from '~/components/storefront/home/products/PromoItem.vue'
import BannerMiddle from '~/components/storefront/home/banners/BannerMiddle.vue'
import Brands from '~/components/storefront/home/brands/Brands.vue'
import HomeItems from '~/components/storefront/home/products/HomeItems.vue'

export default Vue.extend({
	components: {
		BannerTop,
		BannerMiddle,
		Slider,
		BestItem,
		BannerBottom,
		Brands,
		HomeItems
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
		const latestProducts = await $axios.$get('http://localhost:8080/products?section=latest')

		return { sliders, categories, latestProducts }
	}
})
</script>
