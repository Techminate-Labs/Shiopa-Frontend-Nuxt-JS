<template>
  <div class="relative z-40">
    <nav class="h-screen fixed w-10/12 left-0 md:right-0 -translate-x-full bg-gray-100 p-10 overflow-hidden" aria-label="Mobile navigation">
      <h2 class="block text-5xl font-extrabold">Menu</h2>
      <div class="flex flex-col mt-8 overflow-y-auto">
        <ul class="mb-4 ml-2">
          <li class="menu-link" @click="closeMobileMenu">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="menu-link" @click="closeMobileMenu">
            <NuxtLink to="/shop">Shop</NuxtLink>
          </li>
        </ul>
        <ul class="mb-4 ml-2">
          <li class="menu-link" @click="closeMobileMenu" v-for="(category, index) in categories" :key="index">
            <NuxtLink :to="category.slug">{{category.name}}</NuxtLink>
          </li>
        </ul>
        <div class="absolute top-0 right-0 pt-6 pr-6">
          <div @click="closeMobileMenu" class="flex flex-row flex-nowrap justify-end hover:text-red-700 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Emit } from 'nuxt-property-decorator'

@Component
export default class NavBar extends Vue {

  @Emit('closeMobileMenu')
  closeMobileMenu(): void {}
  @Prop({ required: true }) readonly categories!: object[]

}
</script>

<style scoped>
.menu-link {
  @apply text-2xl font-light self-center hover:text-green-700;
}
</style>