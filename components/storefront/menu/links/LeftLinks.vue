<template>
	<ul class="flex flex-wrap items-center text-base">
		<li
			class="mr-4 self-center text-lg uppercase text-gray-700 hidden md:block">
				<NuxtLink to="/">Home</NuxtLink>
		</li>
		<li
			class="mr-4 self-center text-lg uppercase text-gray-700 hidden md:block">
				<NuxtLink to="/shop">Shop</NuxtLink>
		</li>
		<li
			class="mr-4 self-center text-lg uppercase text-gray-700 hidden md:block">
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
