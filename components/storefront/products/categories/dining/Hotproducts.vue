<template>
  <section class="max-w-screen-xl mx-auto text-gray-600 body-font">
    <div class="px-10 py-10 pt-5">
      <div class="flex flex-wrap -m-4">
        <div v-for="(hotProduct, index) in hotProducts" :key="index" class="xl:w-1/4 md:w-1/2 p-4 w-full">
            <div class="relative ">
              <div class="absolute inset-0 z-10 opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                <div class="pt-10">
                    <div class="mt-10 pt-10">
                        <div class="mb-14 pb-10 text-center">
                          <button class="bg-white text-gray-600 ">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                          </button>
                          <button class="bg-white text-gray-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                        </div> 
                        <div class="mt-15 justify-center bg-black text-center">
                          <button @click="addProductToCart(hotProduct, 1)" class="text-white pt-5 underline font-semibold">Add to Cart</button>
                        </div>
                      </div>
                  </div>
              </div>
              <a href="#" class="relative">
                <div class="">
                  <div class="overflow-hidden block relative cursor-pointer capitalize">
                    <img alt="ecommerce" class="h-full rounded w-full object-cover object-center mb-6" :src="'/placeholders/' + hotProduct.image">
                     <div class="absolute p-3 flex flex-col">
                      <span class="font-semibold capitalize text-red-600" >- 10</span>
                    </div> 
                  </div>
                    <div class="flex flex-wrap">
                      <div class="mt-4">
                          <h1 class="text-black text-2xl mb-1">{{hotProduct.name}}</h1>
                          <p class="mt-1 text-gray-900">${{hotProduct.price}}</p>
                      </div>
                    </div>
                </div>
              </a>
            </div>
          </div>
      </div>
    </div>
    <!----new part--->
     <div class="container px-20 py-24 mx-auto ">
        <div class="flex flex-wrap border border-gray-200 px-8 py-5 items-center">
          <div class="p-4 sm:w-1/5 w-1/2">
            <img class="h-50 " src="https://template.hasthemes.com/urdan/urdan/assets/images/brand-logo/brand-logo-1.png"/>
          </div>
          <div class="p-4 sm:w-1/5 w-1/2">
            <img class="h-50" src="https://template.hasthemes.com/urdan/urdan/assets/images/brand-logo/brand-logo-2.png"/>
          </div>
          <div class="p-4 sm:w-1/5 w-1/2">
           <img class="h-50" src="https://template.hasthemes.com/urdan/urdan/assets/images/brand-logo/brand-logo-3.png"/>
          </div>
          <div class="p-4 sm:w-1/5 w-1/2">
            <img class="h-50" src="https://template.hasthemes.com/urdan/urdan/assets/images/brand-logo/brand-logo-4.png"/>
          </div>
          <div class="p-4 sm:w-1/5 w-1/2">
            <img class="h-50" src="https://template.hasthemes.com/urdan/urdan/assets/images/brand-logo/brand-logo-5.png"/>
          </div>
        </div>
     </div>
  </section>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

 interface Cart {
    hotProduct_id: number | null,
    price: string | null,
    name: string | null,
    img: string | null,
    image: string | null,
    quantity: number | null
  }

  interface hotProduct {
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
  export default class hotProducts extends Vue{

    @Prop({ required: true }) readonly hotProducts!: hotProduct[]
    public localData: Cart = {
    hotProduct_id: null,
    price: null,
    name: null,
    img: null,
    image: null,
    quantity: null
  }
  public items!: []

    public addProductToCart(hotProduct: hotProduct, quantity: number): void {
    console.log('add to cart clicked')
    this.localData = {
    hotProduct_id: hotProduct.id,
    price: hotProduct.price,
    name: hotProduct.name,
    img: hotProduct.main_image_url,
    image: hotProduct.main_image_url,
    quantity: quantity
    }
    this.$store.dispatch('addToCart', this.localData)
   }

  }
</script>

<style>

</style>
