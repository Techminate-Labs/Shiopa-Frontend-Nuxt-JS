<template>
  <div class="container mx-auto mt-10">
    <div class="flex flex-wrap justify-between">
      <div class="w-full md:w-1/2 bg-white">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">Items</h2>
        </div>
        <div class="flex mt-10 mb-5 px-4">
          <h3 class="font-semibold text-right text-gray-600 text-xs uppercase w-1/4">Details</h3>
          <h3 class="font-semibold text-right text-gray-600 text-xs uppercase w-1/4">Quantity</h3>
          <h3 class="font-semibold text-right text-gray-600 text-xs uppercase w-1/4">Price</h3>
          <h3 class="font-semibold text-right text-gray-600 text-xs uppercase w-1/4">Total</h3>
        </div>
        <div class="flex justify-center items-center hover:bg-gray-100 py-2 px-4 rounded-md" v-for="(item, index) in cart.items" :key="index">
          <div class="flex justify-center items-center w-1/4"> <!-- product -->
            <div class="hidden md:block pr-2 min-w-max">
              <img class="object-cover w-20 h-20" :src="item.img" alt="">
            </div>
            <div class="flex flex-col justify-between">
              <span class="text-grey-800 text-xs">{{item.name}}</span>
              <a @click="deleteItem(item)" href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs mt-4">Remove</a>
            </div>
          </div>
          <div class="flex justify-end w-1/4">
            <div @click="decQTY(item)" class="p-2 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer">
              <svg class="fill-current text-gray-600 h-3 w-3" viewBox="0 0 448 512">
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </div>
            <input class="mx-2 border text-center w-8" type="number" :value="item.quantity" min="0">
            <div @click="incQTY(item)" class="p-2 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer">
              <svg class="fill-current text-gray-600 h-3 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </div>
          </div>
          <span class="text-center w-1/4 font-semibold text-sm text-right">${{item.price}}</span>
          <span class="text-center w-1/4 font-semibold text-sm text-right">${{Number(item.price * item.quantity)}}</span>
        </div>
        <NuxtLink to="/shop" class="flex font-semibold text-gray-800 text-sm mt-10">
          <svg class="fill-current mr-2 text-gray-800 w-4" viewBox="0 0 448 512">
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
          </svg>
          Continue Shopping
        </NuxtLink>
      </div>
      <Order :cart="cart" :checkoutButton="'Go to checkout'" :url="'/checkout'"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'
import Order from '@/components/storefront/orders/Order.vue'

interface cartObject {
  items: CartItem[]
}

interface CartItem {
  product_id: number | null,
  price: string | null,
  name: string | null,
  img: string | null,
  quantity: number | null
}

@Component({
  components: {
    Order
  }
})
export default class Slider extends Vue {

  @Prop({ required: true }) readonly cart!: cartObject

  public localData: CartItem = {
    product_id: null,
    price: null,
    name: null,
    img: null,
    quantity: null
  }

  get cartTotal(): number {
    let total = 0
    for (let i = 0; i < this.cart.items.length as boolean; i++) {
        total += parseInt(this.cart.items[i].quantity as any) * parseInt(this.cart.items[i].price as any);
    }
    return total
  }

  public deleteItem(item: CartItem): void {
    this.localData = {
      product_id: item.product_id,
      price: item.price,
      name: item.name,
      img: item.img,
      quantity: item.quantity
    }
    this.$store.dispatch('removeFromCart', this.localData)
  }

  public incQTY(item: CartItem): void {
    this.localData = {
      product_id: item.product_id,
      price: item.price,
      name: item.name,
      img: item.img,
      quantity: item.quantity
    }
    this.$store.dispatch('incQTY', this.localData)
  }

  public decQTY(item: CartItem): void {
    this.localData = {
      product_id: item.product_id,
      price: item.price,
      name: item.name,
      img: item.img,
      quantity: item.quantity
    }
    this.$store.dispatch('decQTY', this.localData)
  }

}
</script>

<style>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>