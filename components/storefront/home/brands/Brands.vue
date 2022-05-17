<template>
	<section id="brands" class="text-gray-600 body-font">
		<ul class="flex flex-wrap border border-gray-200 p-4 justify-around items-center">
			<li v-for="(brand, index) in brands" :key="index" class="max-w-sm">
				<img class="h-50 p-4" :src="brand.image"/>
			</li>
		</ul>
	</section>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default Vue.extend({
	name: 'Brands',
    data() {
        return {
            brands: [] as any
        }
    },
	async fetch() {
        this.brands = await fetch('http://127.0.0.1:8000/api/brandLogoImages')
            .then(res => res.json())
            .catch(err => console.log(err))
    }
})
</script>
