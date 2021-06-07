<template>
  <div>
    <nav class="absolute w-full bg-gray-100 z-40 inset-0 p-10" aria-label="Mobile navigation">
    <h2 class="block text-5xl font-extrabold">Menu</h2>
    <div class="flex mt-8">
      <ul class="overflow-y-auto">
        <li class="text-2xl font-light self-center hover:text-green-700"><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
      <div class="absolute top-0 right-0 pt-6 pr-6">
        <button @click="closeMobileMenu" class="ml-1 flex items-center border-2 border-gray-200 justify-center h-10 w-10 rounded-full hover:text-red-700 hover:border-red-700">
          X
        </button>
      </div>
    </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

@Component
export default class NavBar extends Vue {

  @Emit('closeMobileMenu')
  closeMobileMenu(): void {
    console.log('closing')
  }

}
</script>