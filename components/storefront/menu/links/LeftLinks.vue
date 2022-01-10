<template>
	<ul class="flex flex-wrap items-center text-base md:ml-auto">
		<li
			class="mr-4 md:mr-8 self-center text-lg uppercase text-gray-700 hidden md:block">
				<NuxtLink to="/">Home</NuxtLink>
		</li>
		<li
			class="mr-4 md:mr-8 self-center text-lg uppercase text-gray-700 hidden md:block">
				<NuxtLink to="/shop">Shop</NuxtLink>
		</li>
		<li
			class="mr-4 md:mr-8 self-center text-lg uppercase text-gray-700 hidden md:block">
				<NuxtLink to="/blog">Blog</NuxtLink>
		</li>
	</ul>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'LeftLinks',
})
</script>
