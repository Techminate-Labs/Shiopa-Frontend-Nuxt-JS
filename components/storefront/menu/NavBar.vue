<template>
  <div class="bg-gray-100 py-3 px-4 z-40">
    <nav class="block container mx-auto flex flex-row flex-nowrap justify-between" aria-label="Desktop navigation">
      <NuxtLink to="/" class="mr-2 font-bold text-3xl">Shiopa</NuxtLink>
      <ul class="self-center flex flex-nowrap">
        <li class="ml-4 self-center hidden md:block"><NuxtLink to="/products">Products</NuxtLink></li>
        <li class="ml-4 self-center hidden md:block"><NuxtLink to="/categories">Categories</NuxtLink></li>
        <li class="ml-4 self-center">
          <button @click="showMobileMenu" class="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

@Component
export default class NavBar extends Vue {

  @Emit('showMobileMenu')
  showMobileMenu() {}

}
</script>
