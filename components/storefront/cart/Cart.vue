<template>
  <div class="flex flex-col h-screen fixed w-10/12 md:w-1/2 lg:w-1/4 right-0 top-0 md:right-0 translate-x-0 -translate-x-full bg-gray-100 z-40 p-10 overflow-y-auto overflow-x-hidden">
    <div class="flex p-2" v-for="(item, index) in cart.items" :key="index">
      <div class="m-1">
        <img class="w-20" :src="item.img" />
      </div>
      <div class="flex flex-col justify-center m-1">
        <p>{{item.name}}</p>
        <div class="flex">
          <p class="mr-1">{{item.quantity}}</p>
          <span>x</span>
          <p class="ml-1">{{item.price}}</p>
        </div>
        <a class="cursor-pointer hover:underline hover:text-red-800" @click="deleteItem(item)">Delete</a>
      </div>
    </div>
    <div class="absolute top-0 right-0 pt-6 pr-6">
      <button @click="closeCart" class="ml-1 flex items-center border-2 border-gray-200 justify-center h-10 w-10 rounded-full hover:text-red-700 hover:border-red-700">
        X
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
    console.log(this.cart)
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

</style>