<template>
  <div>
    <section class="max-w-screen-xl mx-auto text-gray-600 body-font">
      <div class="px-5 pt-5">
        <div class="flex flex-wrap -m-4">
          <div v-for="(product, index) in products" :key="index" class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="relative ">
                <div class="absolute inset-0 z-10 bg-white  opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                  <div class="relative ">
                      <a :href="product.get_absolute_url" class="block relative h-70 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="product.main_image_url">
                      </a>
                      <div class="flex flex-wrap">
                          <div class="mt-4">
                            <a :href="product.get_absolute_url" class="block relative h-70 rounded overflow-hidden">
                              <h1 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{product.name}}</h1>
                            </a>
                            <button @click="addProductToCart(product, 1)" class="text-gray-900 underline font-semibold">Add to Cart</button>
                          </div>
                          <span class="text-gray-400  inline-flex items-center  ml-auto leading-none text-sm pr-3 py-1 ">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                              </svg>
                          </span>
                        </div>
                    </div>
                </div>
                <a href="#" class="relative">
                  <div class="">
                      <a class="block relative h-70 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="product.main_image_url">
                      </a>
                      <div class="flex flex-wrap">
                        <div class="mt-4">
                            <h1 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{product.name}}</h1>
                            <p class="mt-1 text-gray-900">${{product.price}}</p>
                        </div>
                        <span class="text-gray-400  inline-flex items-center  ml-auto leading-none text-sm pr-3 py-1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

interface Cart {
  product_id: number | null,
  price: string | null,
  name: string | null,
  img: string | null,
  quantity: number | null
}

interface Product {
  additional_info: string,
  available_to_purchase: boolean,
  description: string,
  discount_price: string,
  get_absolute_url: string,
  get_thumbnail: string,
  id: number,
  images: [],
  main_image_url: string,
  name: string
  price: string
  sku: string
  slug: string
}

@Component
export default class Products extends Vue{

  @Prop({ required: true }) readonly products!: Product[]
  
  public localData: Cart = {
      product_id: null,
      price: null,
      name: null,
      img: null,
      quantity: null
  }
  public items!: []

  public addProductToCart(product: Product, quantity: number): void {
    console.log('add to cart clicked')
    this.localData = {
      product_id: product.id,
      price: product.price,
      name: product.name,
      img: product.main_image_url,
      quantity: quantity
    }
    this.$store.dispatch('addToCart', this.localData)
  }

}
</script>

<style>

</style>