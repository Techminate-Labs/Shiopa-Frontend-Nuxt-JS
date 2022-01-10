<template>
	<section class="max-w-screen-xl mx-auto text-gray-600 body-font">
		<div class="grid gap-4 mb-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div 
			v-for="(categoryProduct, index) in categoryProducts" :key="index"
			class="relative group w-full">
			<div class="relative">
				<img alt="ecommerce" class="h-full rounded w-full object-cover object-center transform transition duration-100 hover:scale-800" :src="'/placeholders/' + categoryProduct.image">
				
				<div class="opacity-0 w-full group-hover:opacity-100 duration-300 absolute bottom-0 right-0 z-10">
				<div class="flex justify-end m-2">
					<button class="text-black mr-2">
					<Heart class="h-6 w-6" />
					</button>
					<button class="text-black">
					<Eye class="h-6 w-6" />
					</button>
				</div>
				<button 
					@click="addProductToCart(categoryProduct, 1)" 
					class="text-white bg-black hover:bg-gray-900 text-center py-4 font-semibold w-full">
					Add to Cart
				
				</button>
				</div>
			</div>
			<div class="flex flex-wrap">
				<div class="mt-4">
					<h1 class="text-black text-2xl mb-1">{{categoryProduct.name}}</h1>
					<p class="mt-1 text-gray-900">${{categoryProduct.price}}</p>
				</div>
			</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'
import Heart from '@/assets/icons/Heart.vue'
import Eye from '@/assets/icons/Eye.vue'
import { ProductSeed } from '@/types/products/Product'
import { Cart } from '@/types/cart/Cart'

@Component({
	components: { Heart, Eye }
})
export default class categoryProducts extends Vue {

	@Prop({ required: true }) readonly categoryProducts!: ProductSeed[]
	public localData: Cart = {
		product_id: null,
		price: null,
		name: null,
		image: null,
		quantity: null
	}
	public items!: []

	public addProductToCart(categoryProduct: ProductSeed, quantity: number): void {
		this.localData = {
			product_id: categoryProduct.id,
			price: categoryProduct.price,
			name: categoryProduct.name,
			image: categoryProduct.image,
			quantity: quantity
		}
		this.$store.dispatch('addToCart', this.localData)
	}

}
</script>
