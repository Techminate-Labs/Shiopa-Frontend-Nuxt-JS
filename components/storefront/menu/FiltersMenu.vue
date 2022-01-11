<template>
	<div class="container px-25 py-10 border-2 border-gray-200 absolute w-full mt-5 bg-gray-100 border-t mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col flex-grow md:pr-10 mb-2 md:text-left text-center">
		<div class="lg:w-1/6 md:w-1/2 w-full flex-shrink-0 md:mx-0 md:mt-0 mt-10 pl-2">
			<h2 class="text-xl font-medium text-black ml-3 tracking-widest mb-3">CAPTION ONE</h2>
			<div class="px-0 pt-4 pb-2">
				<span class="block rounded-full cursor-pointer text-gray-800 hover:text-black px-2 text-xl font-medium mr-2 mb-4">Acourding</span>
				<span class="block rounded-full cursor-pointer text-gray-900 hover:text-black px-2 text-lg font-medium mr-2 mb-4">Chart</span>
				<span class="block rounded-full cursor-pointer text-gray-900 hover:text-black px-2 text-lg font-medium mr-2 mb-4">clients</span>
				<span class="block rounded-full cursor-pointer text-gray-900 hover:text-black px-2 text-lg font-medium mr-2 mb-4">Instragram</span>
			</div>
		</div>
		<div class="lg:w-1/6 md:w-1/2 w-full px-2">
			<h2 class="text-xl font-medium text-black tracking-widest ml-3 mb-3">CAPTION TWO</h2>
			<nav class="list-none px-0 pt-4 pb-2">
				<li class="p-1">
					<a class=" px-2 text-lg m mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Intrao Box</a>
				</li>
				<li class="p-1">
					<a class=" px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Progress Bar</a>
				</li>
				<li class="p-1">
					<a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Tabs</a>
				</li>
				<li class="p-1">
					<a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Testimonals</a>
				</li>
			</nav>
		</div>
		<div class="lg:w-1/6 md:w-1/2 w-full px-2">
			<h2 class="text-xl font-medium text-black tracking-widest ml-1 mb-3">CAPTION THREE</h2>
			<nav class="list-none mb-1 pt-4">
				<li class="p-1">
					<a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Button</a>
				</li>
				<li class="p-1">
					<a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Shop</a>
				</li>
				<li class="p-1">
					<a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Cart</a>
				</li>
					<li class="p-1">
					<a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Blogs</a>
				</li>
			</nav>
		</div>
		<div class="lg:w-2/6 md:w-1/2 w-full px-2">
			<h2 class="text-xl font-medium text-black ml-3 tracking-widest mb-3">CAPTION FOUR</h2>
			<nav class="list-none mb-5 pt-4">
				<li class="p-1">
					<a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">FAQ</a>
				</li>
				<li class="p-1">
					<a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Contact Us</a>
				</li>
				<li class="p-1">
					<a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">About Us</a>
				</li>
				<li class="p-1">
					<a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">404 Error</a>
				</li>
			</nav>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Prop } from 'nuxt-property-decorator'

export default class FiltersMenu extends Vue {
	@Prop({ required: true }) isDropdownOpen: Boolean

	public closeDropdown(): void {
		this.isDropdownOpen = false
	}

	get checkIfDropdownIsOpen(): Boolean {
		console.log('checkIfDropdownIsOpen', this.isDropdownOpen)
		if (this.isDropdownOpen) {
			return this.isDropdownOpen
		} else {
			return false
		}
	}
}
</script>