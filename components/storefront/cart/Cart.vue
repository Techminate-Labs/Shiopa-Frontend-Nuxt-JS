<template>
  <div class="flex flex-col h-screen fixed w-10/12 md:w-1/2 lg:w-1/4 right-0 top-0 md:right-0 -translate-x-full bg-gray-100 z-40 p-4 overflow-y-auto overflow-x-hidden">
    <div class="mb-10">
      <div class="flex p-2" v-for="(item, index) in cart.items" :key="index">
        <div class="m-1">
          <img class="w-20" :src="'/placeholders/' + item.image" />
        </div>
        <div class="flex flex-col justify-center m-1">
          <p>{{item.name}}</p>
          <div class="flex">
            <p class="mr-1">{{item.quantity}}</p>
            <span>x</span>
            <p class="ml-1">{{item.price}}</p>
          </div>
          <a class="cursor-pointer hover:underline hover:text-red-800" @click="deleteItem(item)">Remove</a>
        </div>
      </div>
    </div>
    <div class="absolute top-0 right-0 pt-6 pr-6">
      <div @click="closeCart" class="flex flex-row flex-nowrap justify-end hover:text-red-700 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
    <div class="fixed bottom-6 flex flex-wrap mx-3">
      <button @click="closeCart">
        <NuxtLink to="/cart" class="px-6 py-2 bg-gray-900 text-white text-lg rounded mr-2 mt-2 uppercase">Cart</NuxtLink>
      </button>
      <button @click="closeCart">
        <NuxtLink @click="closeCart" to="/checkout" class="px-6 py-2 bg-gray-900 text-white text-lg rounded mt-2 uppercase">Checkout</NuxtLink>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

interface CartObject {
  items: CartItem[]
}

interface CartItem {
  product_id: number | null,
  price: string | null,
  name: string | null,
  img: string | null,
  quantity: number | null
}

@Component
export default class Cart extends Vue {

  public cart: CartObject = {
    items: []
  }

  public localData: CartItem = {
    product_id: null,
    price: null,
    name: null,
    img: null,
    quantity: null
  }

  @Emit('closeCart')
  closeCart(): void {
    console.log('closing cart')
  }

  mounted() {
    this.cart = this.$store.state.cart
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

}
</script>

<style scoped>

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