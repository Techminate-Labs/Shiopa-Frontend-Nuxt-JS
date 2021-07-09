<template>
  <div class="flex flex-row flex-wrap justify-center container max-w-max px-4 my-10 md:mx-auto">
    <figure class="md:max-w-max relative block md:mr-4">
      <img
        alt="Photo of the countryside with mist."
        :src="product.main_image_url"
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
import { Prop, Vue, Component, namespace } from 'nuxt-property-decorator'
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
export default class ProductInfo extends Vue {

  @Prop({ required: true }) readonly product!: Product

  public localData: Cart = {
      product_id: null,
      price: null,
      name: null,
      img: null,
      quantity: null
  }
  public items!: []

  public addProductToCart(quantity: number): void {
    console.log('add to cart clicked')
    console.log(this.product) 
    this.localData = {
      product_id: this.product.id,
      price: this.product.price,
      name: this.product.name,
      img: this.product.main_image_url,
      quantity: quantity
    }
    this.$store.dispatch('addToCart', this.localData)
  }

}
</script>
