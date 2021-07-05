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
        <button @click="addProductToCart(product.id, 1)" class="px-6 py-2 bg-gray-900 text-white text-xl rounded">ADD TO CART</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Prop, Vue, Component, namespace } from 'nuxt-property-decorator'
const cart = namespace('cart')

@Component
export default class ProductInfo extends Vue {

  @Prop({ required: true }) readonly product!: object

  public localData: object = {}
  public items!: []

  public addProductToCart(product_id: number, quantity: number): void {
    console.log('add to cart clicked')
    this.localData = {
      id: 0,
      product_id: product_id,
      quantity: quantity
    }
    this.$accessor.addToCart(this.localData as any[])
    console.log(this.$store.state.cart)
  }

}
</script>
