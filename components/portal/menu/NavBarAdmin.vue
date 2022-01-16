<template>
	<div class="relative z-40 bg-gray-100 shadow-md">
		<div class="container mx-auto py-4 flex flex-row justify-center space-x-8">
			<Logo />
			<span class="self-center font-bold text-lg">Open Source E-Commerce Solution</span>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

// components
import Logo from '@/components/storefront/Logo.vue'

@Component({
	components: {
		Logo
	}
})
export default class NavBarAdmin extends Vue {}
</script>
