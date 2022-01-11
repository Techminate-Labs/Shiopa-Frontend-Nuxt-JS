<template>
	<div class="flex flex-wrap w-full my-16">
		<div class="flex flex-wrap w-full mb-6">
			<h2 class="text-2xl text-black font-bold uppercase mr-3 self-center mb-0">Deal Of The Day</h2>
			<p class="bg-yellow-600 rounded-full text-white text-md text-center px-4 py-1 self-center">Ends on: 2021/8/30</p>
		</div>
		<div class="w-full inline-flex justify-items-end float-left">
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