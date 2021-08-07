<template>
  <div class="bg-white h-12 py-auto px-4 fixed flex z-30 shadow-md w-full">
    <nav class="block container mx-auto flex flex-row flex-nowrap justify-between" aria-label="Desktop navigation">
      <NuxtLink to="/" class="mr-2 font-bold text-2xl order-2 md:order-first self-center">Administration panel</NuxtLink>
      <ul class="self-center flex flex-nowrap order-1 text-gray-800">
        <li class="ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block"><NuxtLink to="/">View site</NuxtLink></li>
        <li class="ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block"><NuxtLink to="/shop">View Shop</NuxtLink></li>
        <li class="ml-4 md:ml-8 self-center text-lg uppercase text-gray-700 hidden md:block">Notifications</li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

@Component
export default class NavBar extends Vue {}
</script>
