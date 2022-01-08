<template>
  <section class="max-w-screen-xl mx-auto text-gray-600 body-font">
    <div class="px-10 py-10 pt-5">
      <DealOfTheDay />
      <div class="flex flex-wrap">
        <div 
          v-for="(categoryProduct, index) in categoryProducts" :key="index"
          class="relative group w-full sm:w-1/2 md:w-1/2 xl:w-1/5 m-7">
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
    </div>
  </section>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'
import DealOfTheDay from '@/components/storefront/products/DealOftheDay.vue'
import Heart from '@/assets/icons/Heart.vue'
import Eye from '@/assets/icons/Eye.vue'

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
    components: { DealOfTheDay, Heart, Eye }
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
