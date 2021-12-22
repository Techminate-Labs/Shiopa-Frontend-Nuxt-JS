<template>
  <div class="bg-gray-100 shadow-md">
    <div class="px-4 relative z-20 md:max-w-screen-xl md:mx-auto">
      <nav class="container mx-auto h-16 flex flex-wrap p-5 flex-col md:flex-row items-center" aria-label="Desktop navigation">
        <ul class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto text-gray-800">
          <li class="ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block"><NuxtLink to="/shop">Shop</NuxtLink></li>
          <li class="ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block"><NuxtLink to="/shop">Journal</NuxtLink></li>
        </ul>
        <NuxtLink to="/" class="flex lg:order-none lg:w-1/5 text-xl uppercase font-bold items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">Shiopa</NuxtLink>
        <ul class="relative flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          <li class="text-gray-900 text-xl font-medium hover:text-yellow-600 cursor-pointer inline-block" @click="open = !open"><NuxtLink to="/">Elements</NuxtLink>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer hover:text-yellow-600" viewBox="0 0 20 20" fill="currentColor" @click="open = !open">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          </li>
          <li class="ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block"><NuxtLink to="/shop">Pages</NuxtLink></li>
          <li class="ml-4 md:ml-8 self-center">
            <div @click="showCart" class="relative cursor-pointer" aria-label="Cart icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="self-center h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <div class="absolute -bottom-1 -right-1"><span class="block text-center text-white text-sm h-5 w-5 px-2 min-w-max bg-gray-800 font-mono rounded-full">{{cartTotalLength}}</span></div>
            </div>
          </li>
          <li class="ml-8 self-center order-last">
            <div aria-label="Search icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="self-center h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </div>
          </li>
          <li class="flex cursor-pointer order-first">
            <button @click="showMobileMenu" class="inline-block md:hidden" aria-label="Menu icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <!-- filter -->
    <div class="px-16 py-4 ">
      <div v-if="open" class="container px-25 py-10 inline-block border-2 border-gray-200 absoulate w-full mt-5 bg-gray-100 border-t mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col  flex-grow md:pr-10 mb-2 md:text-left text-center">
        <div class="lg:w-1/6 md:w-1/2 w-full flex-shrink-0 md:mx-0 md:mt-0 mt-10 pl-2">
          <h2 class="text-xl font-medium text-black ml-3 tracking-widest mb-3">CAPTION ONE</h2>
          <div class="px-0 pt-4 pb-2">
            <span class="block rounded-full cursor-pointer text-gray-800 hover:text-black px-2 text-xl font-medium mr-2 mb-4">Acourding</span>
            <span class="block rounded-full cursor-pointer text-gray-800 hover:text-black text-gray-900 px-2 text-lg font-medium mr-2 mb-4">Chart</span>
            <span class="block rounded-full cursor-pointer text-gray-800 hover:text-black text-gray-900 px-2 text-lg font-medium mr-2 mb-4">clients</span>
            <span class="block rounded-full cursor-pointer text-gray-800 hover:text-black text-gray-900 px-2 text-lg font-medium mr-2 mb-4">Instragram</span>
          </div>
        </div>
        <div class="lg:w-1/6 md:w-1/2 w-full px-2">
          <h2 class="text-xl font-medium text-black tracking-widest ml-3 mb-3">CAPTION TWO</h2>
            <nav class="list-none px-0 pt-4 pb-2">
                <li class="p-1">
                  <a class=" px-2 text-lg m mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Intrao Box</a>
                </li>
                <li class="p-1">
                  <a class=" px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Progress Bar</a>
                </li>
                <li class="p-1">
                  <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Tabs</a>
                </li>
                <li class="p-1">
                  <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Testimonals</a>
                </li>
            </nav>
        </div>
         <div class="lg:w-1/6 md:w-1/2 w-full px-2">
          <h2 class="text-xl font-medium text-black tracking-widest ml-1 mb-3">CAPTION THREE</h2>
            <nav class="list-none mb-1 pt-4">
                <li class="p-1">
                  <a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Button</a>
                </li>
                <li class="p-1">
                  <a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Shop</a>
                </li>
                <li class="p-1">
                  <a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Cart</a>
                </li>
                 <li class="p-1">
                  <a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Blogs</a>
                </li>
            </nav>
        </div>
        <div class="lg:w-2/6 md:w-1/2 w-full px-2">
          <h2 class="text-xl font-medium text-black ml-3 tracking-widest mb-3">CAPTION FOUR</h2>
            <nav class="list-none mb-5 pt-4">
                <li class="p-1">
                  <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">FAQ</a>
                </li>
                <li class="p-1">
                  <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Contact Us</a>
                </li>
                <li class="p-1">
                  <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">About Us</a>
                </li>
                <li class="p-1">
                  <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">404 Error</a>
                </li>
            </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

interface Cart {
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
    for (let i = 0; i < this.cart.items.length as boolean; i++) {
        totalLength += parseInt(this.cart.items[i].quantity as any)
    }
    return totalLength

  }

}
</script>
