<template>
	<li class="ml-4 md:ml-8 self-center order-last">
		<div @click="showCart" class="relative cursor-pointer" aria-label="Cart icon">
			<CartIcon />
			<div class="absolute -bottom-1 -right-1">
				<span 
					class="block text-center text-white text-sm h-5 w-5 px-2 min-w-max bg-gray-800 font-mono rounded-full">
					{{ cartLength }}
				</span>
			</div>
		</div>
	</li>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

// components
import CartIcon from '@/assets/icons/CartIcon.vue'

@Component({ components: { CartIcon } })
export default class CartMenu extends Vue {
	@Prop({ required: true }) readonly cartLength: Number
}
</script>
