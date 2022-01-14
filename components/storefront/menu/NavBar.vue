<template>
	<div class="sticky top-0 z-40 bg-gray-100 shadow-md">
		<div class="container mx-auto py-4 flex flex-row justify-between">
			<LeftLinks />
			<Logo />
			<RightLinks 
				@showMobileMenu="$emit('showMobileMenu')"
				@showCart="$emit('showCart')" 
				@toggleDropdown="toggleDropdown"
				/>
		</div>
		<!-- <FiltersMenu 
			v-show="open" /> -->
		<DropdownMenu
			v-show="isDropdownOpen" 
			@click="closeDropdown" />
	</div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

// components
import Logo from '@/components/storefront/Logo.vue'
import LeftLinks from '@/components/storefront/menu/links/LeftLinks.vue'
import RightLinks from '@/components/storefront/menu/links/RightLinks.vue'
import DropdownMenu from '@/components/storefront/menu/DropdownMenu.vue'
import FiltersMenu from '@/components/storefront/menu/FiltersMenu.vue'

// types
import { Cart } from '@/types/cart/Cart'

@Component({
	components: { 
		LeftLinks, 
		Logo, 
		RightLinks,
		DropdownMenu,
		FiltersMenu
	}
})
export default class NavBar extends Vue {
	data() {
		return {
			categories: []
		}
	}

	public cart: Cart = {
		items: []
	}
	public open: Boolean = false
	public isDropdownOpen: Boolean = false
	public categories: Array<any> = []

	@Emit('openCard')
	OpenCard(): void {}

	@Emit('showMobileMenu')
	showMobileMenu(): void {}

	@Emit('toggleDropdown')
	toggleDropdown(): void {
		this.isDropdownOpen = !this.isDropdownOpen
	}
	closeDropdown(): void {
		this.isDropdownOpen = false
	}

	@Emit('showCart')
	showCart(): void {}
}
</script>
