<template>
	<div class="flex flex-row flex-wrap justify-center container max-w-max px-4 my-10 md:mx-auto">
		<figure class="md:max-w-max relative block md:mr-4">
			<img
				alt="Photo of the countryside with mist."
				:src="'/placeholders/' + product.image"
				class="z-0 md:max-w-xl"
			/>
		</figure>
		<div class="max-w-sm md:ml-4">
			<h1 class="text-4xl font-bold my-4">{{product.name}}</h1>
			<p class="text-2xl my-4">${{product.price}}</p>
			<hr>
			<p class="text-justify my-4">{{product.additional_info}}</p>
			<hr>
			<div class="my-4">
				<button @click="addProductToCart(1)" class="px-6 py-2 bg-gray-900 text-white text-xl rounded">ADD TO CART</button>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'

// types
import { ProductSeed } from '@/types/products/Product'
import { CartItem } from '@/types/cart/Cart'

@Component
export default class ProductInfo extends Vue {

	@Prop({ required: true }) readonly product!: ProductSeed

	public items!: []

	public addProductToCart(quantity: Number): void {
		const item: CartItem = {
			product_id: this.product.id,
			price: this.product.price,
			name: this.product.name,
			image: this.product.image,
			quantity: quantity
		}
		
		this.$accessor.cart.addToCart(item)
	}

}
</script>
