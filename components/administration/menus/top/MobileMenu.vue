<template>
  <div class="z-40 relative">
    <nav class="h-screen fixed w-10/12 left-0 md:right-0 translate-x-0 -translate-x-full bg-gray-100 z-40 p-10 overflow-hidden" aria-label="Mobile navigation">
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
        <h3 class="block text-2xl">Categories</h3>
        <ul class="mb-4 ml-2">
          <li class="menu-link" @click="closeMobileMenu" v-for="(category, index) in categories" :key="index">
            <NuxtLink :to="category.get_absolute_url">{{category.name}}</NuxtLink>
          </li>
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