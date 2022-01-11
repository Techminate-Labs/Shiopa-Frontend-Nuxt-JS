<template>
	<li class="flex cursor-pointer order-first">
		<button @click="$emit('showMobileMenu')" class="inline-block md:hidden" aria-label="Menu icon">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'MobileMenuIcon',
})
</script>
