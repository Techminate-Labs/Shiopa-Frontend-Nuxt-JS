<template>
  <div class="bg-gray-100 py-5 px-4 z-40">
    <nav class="block container mx-auto flex flex-row flex-nowrap justify-between" aria-label="Desktop navigation">
      <NuxtLink to="/" class="mr-2 font-bold text-3xl order-2 md:order-first">Shiopa</NuxtLink>
      <ul class="self-center flex flex-nowrap order-1 text-gray-800">
        <li class="ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block"><NuxtLink to="/shop">Shop</NuxtLink></li>
        <li class="ml-4 md:ml-8 self-center order-last">
          <div @click="showCart" class="relative cursor-pointer" aria-label="Cart icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="self-center h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <div class="absolute -bottom-2 -right-2"><span class="block text-center text-white h-6 w-6 px-2 min-w-max bg-gray-800 font-mono rounded-full">{{cartTotalLength}}</span></div>
          </div>
        </li>
        <li class="ml-4 md:ml-8 self-center order-last">
          <div aria-label="Search icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="self-center h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          </div>
        </li>
        <li class="self-center cursor-pointer">
          <button @click="showMobileMenu" class="inline-block md:hidden p-1" aria-label="Menu icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

interface Cart {
  items: CartItem[]
}

interface CartItem {
  product_id: number,
  quantity: number
}

@Component
export default class NavBar extends Vue {


  public cart: Cart = {
    items: []
  }

  @Emit('showMobileMenu')
  showMobileMenu(): void {}

  @Emit('showCart')
  showCart(): void {}

  mounted() {
    this.$store.commit('initialiseStore')
    this.cart = this.$store.state.cart
  }

  get cartTotalLength(): number {
    let totalLength = 0
    if (this.cart.items.length) {
      for (let i = 0; i < this.cart.items.length as boolean; i++) {
          totalLength += parseInt(this.cart.items[i].quantity as any)
      }
    }
    return totalLength

  }

}
</script>
