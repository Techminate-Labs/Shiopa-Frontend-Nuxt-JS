<template>
	<div class="relative my-10 grid gap-4 grids-col-1 sm:grid-cols-2 lg:grid-cols-3">
		<div 
			v-for="(banner, i) in banners" :key="i"
			class="relative">
			<div class="z-10 pt-6">
				<img
					:src="banner.image"
					class="w-full"
					/>
			</div>
			<div class="absolute z-10 float-left mx-4 bottom-4">
				<h3 class="font-semibold text-2xl">{{banner.title}}</h3>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'BannerTop',
	data() {
		return {
			banners: [] as any
		}
	},
	async fetch() {
		this.banners = await fetch('http://127.0.0.1:8000/api/bannerTopImages')
			.then(res => res.json())
			.catch(err => console.log(err))
	}
})
</script>
