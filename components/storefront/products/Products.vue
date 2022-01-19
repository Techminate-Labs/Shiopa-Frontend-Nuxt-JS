<template>
	<section class="max-w-screen-xl mx-auto text-gray-600 body-font">
		<div class="px-4 pt-5">
			<div class="flex flex-wrap -m-4">
				<div v-for="(product, index) in products" :key="index" class="lg:w-1/4 md:w-1/2 p-4 w-full">
					<div class="bg-white bg-opacity-90 duration-300">
						<NuxtLink :to="{ 
							name: 'category-slug', 
							params: { 
								category: product.category_slug, 
								slug: product.slug 
							}}"
							class="block relative h-70 rounded overflow-hidden">
							<img alt="ecommerce" class="object-cover object-center transform hover:scale-105 ease-in-out duration-200 w-full h-full block" :src="'/placeholders/' +product.image">
						</NuxtLink>
						<div class="flex flex-wrap">
							<div class="mt-4">
								<NuxtLink :to="{ 
									name: 'category-slug', 
									params: { 
										category: product.category_slug, 
										slug: product.slug 
									}}"
								class="block relative h-70 rounded overflow-hidden">
									<h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{product.name}}</h3>
									<p class="mt-1 text-gray-900">${{product.price}}</p>
								</NuxtLink>
								<button @click="addProductToCart(product, 1)" class="text-gray-900 underline font-semibold">Add to Cart</button>
							</div>
							<span class="text-gray-400 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 ">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
								</svg>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'
import { accessor } from '@/store'

// types
import { CartItem } from '@/types/cart/Cart'
import { ProductSeed } from '@/types/products/Product'

@Component
export default class Products extends Vue{

	@Prop({ required: true }) readonly products!: ProductSeed[]

	public localData: CartItem = {
		product_id: null,
		price: null,
		name: null,
		image: null,
		quantity: null
	}
	public items!: []

	public addProductToCart(product: ProductSeed, quantity: number): void {
		this.localData = {
			product_id: product.id,
			price: product.price,
			name: product.name,
			image: product.image,
			quantity: quantity
		}

		this.$accessor.cart.addToCart(this.localData)

	}

}
</script>
