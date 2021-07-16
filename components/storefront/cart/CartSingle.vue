<template>
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" v-for="(item, index) in cart.items" :key="index">
          <div class="flex w-2/5"> <!-- product -->
            <div class="w-20">
              <img class="h-24" :src="item.img" alt="">
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">category</span>
              <span class="text-red-500 text-xs">{{item.name}}</span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            <input class="mx-2 border text-center w-8" type="text" :value="item.quantity">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">${{item.price}}</span>
          <span class="text-center w-1/5 font-semibold text-sm">${{Number(item.price * item.quantity)}}</span>
        </div>
        <nuxt-link to="/shop" class="flex font-semibold text-gray-800 text-sm mt-10">
          <svg class="fill-current mr-2 text-gray-800 w-4" viewBox="0 0 448 512">
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
          </svg>
          Continue Shopping
        </nuxt-link>
      </div>
      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-thin text-4xl border-b pb-8">Your order</h1>
        <div class="flex justify-between mt-10 mb-5" v-for="(item, index) in cart.items" :key="index">
          <div class="w-15">
            <img class="h-20" :src="item.img" alt="">
          </div>
          <span class="font-semibold text-sm">${{Number(item.price * item.quantity)}}</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Free shipping</option>
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
         <div class="py-5 flex">
            <div>
                <label for="cupon" class="font-semibold inline-block  mb-3 text-sm uppercase">Cupon</label>
                <input type="text" id="Cupon" placeholder="Cupon code" class="p-2 text-sm w-full border border-gray-600">
            </div>
            <button class="bg-black hover:bg-gray-800 px-5 py-2 h-10 mt-8 ml-3 text-sm text-white uppercase">Apply</button>
        </div> 
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${{cartTotal}}</span>
          </div>
          <button class="bg-black font-semibold hover:bg-gray-800 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

interface cartObject {
  items: CartItem[]
}

interface CartItem {
  product_id: number,
  price: string,
  name: string,
  img: string,
  quantity: number,
}

@Component
export default class Slider extends Vue{

  @Prop({ required: true }) readonly cart!: cartObject

   get cartTotal(): number {
    let total = 0
    for (let i = 0; i < this.cart.items.length as boolean; i++) {
        total += parseInt(this.cart.items[i].quantity as any) * parseInt(this.cart.items[i].price as any);
    }
    return total

  }

}
</script>

<style>

</style>