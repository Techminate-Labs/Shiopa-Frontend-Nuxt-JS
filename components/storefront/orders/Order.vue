<template>
  <div id="summary" class="w-full md:w-1/2 lg:w-1/3 px-8 py-10 self-end">
    <h1 class="font-thin text-4xl border-b pb-8 text-right">Your order</h1>
    <div class="flex justify-between mt-10 mb-5" v-for="(item, index) in cart.items" :key="index">
      <div class="w-15">
        <img class="h-20" :src="item.img" alt="">
      </div>
      <span class="font-semibold text-sm">{{(item.name)}}</span>
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
            <label for="coupon" class="font-semibold inline-block  mb-3 text-sm uppercase">Coupon</label>
            <input type="text" id="Coupon" placeholder="COUPON CODE" class="p-2 text-sm w-full border border-gray-600">
        </div>
        <button class="bg-black hover:bg-gray-800 px-5 py-2 h-10 mt-8 ml-3 text-sm text-white uppercase">Apply</button>
    </div> 
    <div class="border-t mt-8">
      <div class="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>Total cost</span>
        <span>${{cartTotal}}</span>
      </div>
      <button class="bg-black font-semibold hover:bg-gray-800 py-3 text-sm text-white uppercase w-full">
        <NuxtLink :to="url">{{ checkoutButton }}</NuxtLink>
      </button>
    </div>
  </div>
</template>


<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

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

@Component
export default class Order extends Vue {

  @Prop({ required: true }) readonly cart!: cartObject
  @Prop({ required: true }) readonly checkoutButton!: string
  @Prop({ required: true }) readonly url!: string

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