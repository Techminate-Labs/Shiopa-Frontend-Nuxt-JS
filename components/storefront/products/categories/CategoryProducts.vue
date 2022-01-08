<template>
  <section class="max-w-screen-xl mx-auto text-gray-600 body-font">
    <div class="px-10 py-10 pt-5">
      <div class="flex flex-wrap w-full mb-20">
        <DealOfTheDay />
        
      </div>
      <div class="flex flex-wrap -m-4">
        <div v-for="(categoryProduct, index) in categoryProducts" :key="index" class="relative group xl:w-1/5 md:w-1/2 m-7 w-100">
          <div class="relative">
            <img alt="ecommerce" class="h-full rounded w-full object-cover object-center transform transition duration-100 hover:scale-800" :src="'/placeholders/' + categoryProduct.image">
          </div>
          <div class="flex flex-wrap">
            <div class="mt-4">
                <h1 class="text-black text-2xl mb-1">{{categoryProduct.name}}</h1>
                <p class="mt-1 text-gray-900">${{categoryProduct.price}}</p>
            </div>
          </div>
          <div class="opacity-0 group-hover:opacity-100 duration-300 -pt-40 absolute left-0 bottom-0 right-0 z-10   ">
            <div class="flex justify-center ">
              <button class="mb-20 text-gray-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button class="mb-20 text-gray-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
            <div class=" justify-center bg-black text-center">
              <button @click="addProductToCart(categoryProduct, 1)" class="text-white pt-5 underline font-semibold">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'
import DealOfTheDay from '@/components/storefront/products/DealOftheDay.vue'

 interface Cart {
    categoryProduct_id: number | null,
    price: string | null,
    name: string | null,
    img: string | null,
    quantity: number | null
  }

  interface categoryProduct {
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

  @Component({
    components: { DealOfTheDay }
  })
  export default class categoryProducts extends Vue {

    @Prop({ required: true }) readonly categoryProducts!: categoryProduct[]
    public localData: Cart = {
    categoryProduct_id: null,
    price: null,
    name: null,
    img: null,
    quantity: null
  }
  public items!: []

    public addProductToCart(categoryProduct: categoryProduct, quantity: number): void {
    console.log('add to cart clicked')
    this.localData = {
    categoryProduct_id: categoryProduct.id,
    price: categoryProduct.price,
    name: categoryProduct.name,
    img: categoryProduct.main_image_url,
    quantity: quantity
    }
    this.$store.dispatch('addToCart', this.localData)
   }

  }
</script>

<style>

</style>
