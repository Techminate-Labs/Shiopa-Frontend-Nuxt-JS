<template>
	<a
		class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      	<NuxtLink
	  	to="/"
		class="mr-2 font-bold text-3xl order-2 md:order-first self-center">
			Shiopa
		</NuxtLink>
    </a>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Logo',
})
</script>
