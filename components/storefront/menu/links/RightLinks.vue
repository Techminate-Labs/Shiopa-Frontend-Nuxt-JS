<template>
	<ul class="self-center flex flex-nowrap order-1 text-gray-800">
		<li
			class="mr-4 relative z-10 self-center text-lg uppercase text-gray-700 hidden md:block" 
			@click="$emit('toggleDropdown')">
			<NuxtLink to="/">Large Dropdown Menu</NuxtLink>
		</li>
		<li 
			class="mr-4 relative z-10 self-center text-lg uppercase text-gray-700 hidden md:block">
			<NuxtLink to="/shop">Pages</NuxtLink>
		</li>
		<!-- <CartMenuIcon :cartLength="cartTotalLength" /> -->
		<CartMenuIcon @showCart="$emit('showCart')" :cartLength="$store.getters.cartTotalLength" />
		<SearchMenuIcon />
		<MobileMenuIcon @showMobileMenu="$emit('showMobileMenu')" />
	</ul>
</template>
<script lang="ts">
import Vue from 'vue'

// components
import CartMenuIcon from '~/components/storefront/menu/actions/CartMenuIcon.vue'
import SearchMenuIcon from '~/components/storefront/menu/actions/SearchMenuIcon.vue'
import MobileMenuIcon from '~/components/storefront/menu/actions/MobileMenuIcon.vue'

export default Vue.extend({
	name: 'RightLinks',
	components: {
		CartMenuIcon, 
		SearchMenuIcon, 
		MobileMenuIcon 
	}
})
</script>
