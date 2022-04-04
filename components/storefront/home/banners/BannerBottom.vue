<template>
	<section id="category-dining" class="py-10">
		<!-----1st part---->
		<div class="relative h-full px-5 col flex flex-col flex-grow">
			<img class="w-full" src="https://template.hasthemes.com/urdan/urdan/assets/images/bg/bg-1.png"/>
			<div class="absolute ml-10 mt-10 pt-10">
				<h1 class="text-4xl font-extrabold mb-3 text-black tracking-wider">New Dining Chair Set</h1>
				<h6 class="text-xl text-yellow-600 mb-3">Up To 30% Off</h6>
				<button class="btnclass">Shop now</button>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class CategoryDining extends Vue {}
</script>
