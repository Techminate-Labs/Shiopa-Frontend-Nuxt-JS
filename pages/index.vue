<template>
	<div>
		<Slider :sliders="sliders" />
		<div class="container mx-auto">
			<BannerTop class="mt-8 mb-20" />

			<h2>Featured Products</h2>
			<HomeItems :products="featuredItems" class="mb-20" />
			
			<h2>Latest Products</h2>
			<HomeItems :products="latestItems" class="mb-20" />

			<BannerMiddle class="mb-20" />
			
			<BestItem class="mt-8 mb-20" />
			
			<h2>Category</h2>
			<HomeItems :products="latestItems" class="mb-20" />
			
			<h2>Popular Products</h2>
			<HomeItems :products="popularItems" class="mb-20" />
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
	async asyncData({ $axios }: any) {
		const sliders = await $axios.$get('/api/sliderImages')
		const latestItems = await $axios.$get('/api/latestItems')
		const popularItems = await $axios.$get('/api/popularItems')
		const featuredItems = await $axios.$get('/api/featuredItems')

		return { sliders, latestItems, popularItems, featuredItems }
	}
})
</script>
