<template>
  <div class="w-full bg-white">
    <div v-if="cart.items.length">
      <div class="flex justify-between border-b pb-8">
        <h1 class="font-semibold text-2xl">Shopping Cart</h1>
        <h2 class="font-semibold text-2xl">Items</h2>
      </div>
      <table class="min-w-full border-collapse bg-white">
        <thead class="bg-gray-100 border-b border-gray-300">
          <tr>
            <th 
              @click="sort(column.attribute)" 
              v-for="(column, index) in columns" 
              :key="index" 
              scope="col" 
              class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {{ column }}
            </th>
            <th class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Delete
            </th>
          </tr>
        </thead>
        <tbody class="px-4">
          <tr v-for="(item, index) in cart.items" :key="index" class="border-b border-gray-300 bg-gray-50">
            <td class="p-4" data-label="Details">
              <div class="flex flex-row flex-nowrap justify-end sm:justify-start md:block">
                <img class="object-cover w-20 h-20 order-last sm:order-first ml-2 sm:mr-2 sm:ml-0 md:m-0" :src="'/placeholders/' + item.image" alt="">
                <div class="flex flex-col justify-between">
                  <span class="text-grey-800 text-xs">{{item.name}}</span>
                </div>
              </div>
            </td>
            <td data-label="Quantity" class="p-4">
              <div class="flex flex-row flex-nowrap justify-end">
                <div @click="decQTY(item)" class="p-2 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer self-center">
                  <svg class="fill-current text-gray-600 h-3 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                  </svg>
                </div>
                <input class="mx-2 border text-center w-8" type="number" :value="item.quantity" min="0">
                <div @click="incQTY(item)" class="p-2 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer self-center">
                  <svg class="fill-current text-gray-600 h-3 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                  </svg>
                </div>
              </div>
            </td>
            <td data-label="Price" class="p-4 md:w-1/4 font-semibold text-sm text-right">${{item.price}}</td>
            <td data-label="Total" class="p-4 md:w-1/4 font-semibold text-sm text-right">${{Number(item.price * item.quantity).toFixed(2)}}</td>
            <td @click="deleteItem(item)" data-label="Actions" class="p-4 hover:text-red-700 cursor-pointer md:w-1/4 font-semibold text-sm text-right">
              <div class="flex flex-row flex-nowrap justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p class="text-gray-800 text-2xl">Oh no!! There are no products yet!</p>
    </div>
    <NuxtLink to="/shop" class="flex font-semibold text-gray-800 text-sm mt-10">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
      </svg>
      <p class="self-center">Continue Shopping</p>
    </NuxtLink>
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
export default class CartTable extends Vue {

  @Prop({ required: true }) readonly cart!: cartObject
  @Prop({ required: true }) readonly columns!: cartObject

  public localData: CartItem = {
    product_id: null,
    price: null,
    name: null,
    img: null,
    quantity: null
  }

  public currentSort: string = 'id'
  public currentSortDir: string = 'asc'

  get cartTotal(): Number {
		let total = 0
		for (let i = 0; i < this.cart.items.length as boolean; i++) {
			total += parseInt(this.cart.items[i].quantity as any) * parseInt(this.cart.items[i].price as any);
		}
		return Number(total.toFixed(2));
	}

  sort(s: string): void {
    //if s == current sort, reverse
    if(s === this.currentSort) {
      this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
    }
    this.currentSort = s;
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