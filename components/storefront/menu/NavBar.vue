<template>
  <div class="relative bg-gray-100 shadow-md">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <ul class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
       <li class="ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block"><NuxtLink to="/">Home</NuxtLink></li>
       <li class="ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block"><NuxtLink to="/shop">Shop</NuxtLink></li>
       <li class="ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block"><NuxtLink to="/shop">Journal</NuxtLink></li>
    </ul>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <NuxtLink to="/" class="mr-2 font-bold text-3xl order-2 md:order-first self-center">Shiopa</NuxtLink>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <ul class="self-center flex flex-nowrap order-1 text-gray-800">
        <li class="relative z-10 inline-block ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block" @click="dropdownOpen = !dropdownOpen"><NuxtLink to="/">Elements</NuxtLink>
        
        </li>
          <li class="relative z-10 inline-block ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block"><NuxtLink to="/shop">Pages</NuxtLink></li>
          <li class="ml-4 md:ml-8 self-center order-last">
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
  <!---dropDown--->
        <div v-show="dropdownOpen" @click="dropdownOpen = false" class="absolute mt-20 fixed inset-0 h-full z-40 w-5/6 mx-auto font-serif shadow-md" >
          <div class="bg-gray-100 border-gray-400 px-2 mx-auto justify-center">
            <div class="flex flex-wrap md:text-left text-center ">
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Caption One</h2>
                <ul class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </ul>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Caption Two</h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Caption Three</h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Caption Four</h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <!---End dropDown--->
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
    data() {
    return {
      open: false,
      dropdownOpen: false,
      categories: []
    }
  }
 
  public cart: Cart = {
    items: []
  }
  @Emit('openCard')
  OpenCard(): void {}
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
