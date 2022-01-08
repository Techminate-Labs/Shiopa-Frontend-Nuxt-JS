<template>
	<div class="lg:w-1/2 flex flex-wrap w-full mb-20">
		<div class="flex flex-wrap w-full mb-6">
			<h2 class="text-2xl text-black font-bold uppercase mr-3">Deal Of The Day</h2>
			<div class="bg-yellow-600 rounded-full flex text-white">
				<p class="text-xl text-center mx-4">Ends on: 2021/8/30</p>
			</div>
		</div>
		<div class="w-full inline-flex justify-items-end float-left lg:ml-0">
			<button class="svg-btn">
				<ArrowLeft />
			</button>
			<button class="svg-btn">
				<ArrowRight />
			</button>        
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ArrowLeft from '@/assets/icons/ArrowLeft.vue'
import ArrowRight from '@/assets/icons/ArrowRight.vue'

@Component({
	components: { ArrowLeft, ArrowRight }
})
export default class DealOfTheDay extends Vue {}
</script>