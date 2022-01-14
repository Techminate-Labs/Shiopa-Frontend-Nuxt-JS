<template>
	<div class="mt-16 mb-20">
		<CartSingle :cart="cart" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import CartSingle from '@/components/storefront/cart/CartSingle.vue'

export default Vue.extend({
	data() {
		return{
			title: '',
			cart: {
				items: []
			}
		}
	},
	components:{
		CartSingle,
	},
	mounted() {
		this.cart = this.$store.state.cart
	}
})
</script>
