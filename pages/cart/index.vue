<template>
	<div class="mt-16 mb-20">
		<CartSingle :cart="$accessor.cart.cart" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

// components
import CartSingle from '@/components/storefront/cart/CartSingle.vue'

export default Vue.extend({
	components:{
		CartSingle,
	}
})
</script>
