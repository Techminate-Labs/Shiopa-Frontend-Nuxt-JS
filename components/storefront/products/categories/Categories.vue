<template>
	<div class="relative mx-auto xl:px-12 my-10 grid gap-4 grids-col-1 sm:grid-cols-2 lg:grid-cols-3">
		<div 
			v-for="(category, i) in categories" :key="i"
			class="relative mx-auto">
			<div class="z-10 pt-6">
				<img
					:src="'/placeholders/' + category.image_url"
					:alt="category.image_alt"
					class="float-right"
					/>
			</div>
			<!-- <div class="z-0 -bottom-6 block w-full bg-gray-100 h-40"></div> -->
			<div class="absolute z-10 float-left mx-4 bottom-4">
				<h3 class="font-semibold text-2xl">{{category.name}}</h3>
				<span class="font-medium text-sm hover:underline cursor-pointer">Shop Now</span>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		name: 'Categories',
		data() {
			return {
			categories: []
			}
		},
		async fetch() {
			this.categories = await fetch('http://localhost:8000/category')
			.then(res => res.json())
			.catch(err => console.log(err))
		},
		computed: {
			// columns (): object[] {
			//   let columns: object[] = []
			//   let mid = Math.ceil(this.categories.length / this.cols)
			//   for (let col = 0; col < this.cols; col++) {
			//     columns.push(this.categories.slice(col * mid, col * mid + mid))
			//   }
			//   return columns
			// }
		}
	})
</script>
