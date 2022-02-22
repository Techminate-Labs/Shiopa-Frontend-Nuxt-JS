<template>
	<div class="absolute z-40 w-full font-serif shadow-md bg-gray-200">
		<div class="p-6 border-gray-400 px-2 mx-auto justify-center">
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:text-left text-center">
			<div class="w-full px-4">
				<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Caption One</h2>
				<ul class="list-none">
					<li>
						<a class="text-gray-600 hover:text-gray-800">First Link</a>
					</li>
					<li>
						<a class="text-gray-600 hover:text-gray-800">Second Link</a>
					</li>
					<li>
						<a class="text-gray-600 hover:text-gray-800">Third Link</a>
					</li>
					<li>
						<a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
					</li>
				</ul>
			</div>
			<div class="w-full px-4">
				<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Caption Two</h2>
				<nav class="list-none">
				<li>
					<a class="text-gray-600 hover:text-gray-800">First Link</a>
				</li>
				<li>
					<a class="text-gray-600 hover:text-gray-800">Second Link</a>
				</li>
				<li>
					<a class="text-gray-600 hover:text-gray-800">Third Link</a>
				</li>
				<li>
					<a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
				</li>
				</nav>
			</div>
			<div class="w-full px-4">
				<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Caption Three</h2>
				<nav class="list-none">
				<li>
					<a class="text-gray-600 hover:text-gray-800">First Link</a>
				</li>
				<li>
					<a class="text-gray-600 hover:text-gray-800">Second Link</a>
				</li>
				<li>
					<a class="text-gray-600 hover:text-gray-800">Third Link</a>
				</li>
				<li>
					<a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
				</li>
				</nav>
			</div>
			<div class="w-full px-4">
				<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Caption Four</h2>
				<nav class="list-none">
				<li>
					<a class="text-gray-600 hover:text-gray-800">First Link</a>
				</li>
				<li>
					<a class="text-gray-600 hover:text-gray-800">Second Link</a>
				</li>
				<li>
					<a class="text-gray-600 hover:text-gray-800">Third Link</a>
				</li>
				<li>
					<a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
				</li>
				</nav>
			</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class DropdownMenu extends Vue {}
</script>
