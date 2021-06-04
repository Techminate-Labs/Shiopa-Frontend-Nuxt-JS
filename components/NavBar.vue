<template>
  <div class="bg-gray-100 py-3 px-4 z-40">
    <div class="container mx-auto flex flex-row flex-nowrap justify-between">
      <NuxtLink to="/" class="mr-2 font-bold text-3xl">Shiopa</NuxtLink>
      <ul class="self-center">
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class NavBar extends Vue {

}
</script>
