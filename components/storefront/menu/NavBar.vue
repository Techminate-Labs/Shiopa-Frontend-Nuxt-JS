<template>
  <div class="bg-gray-100 py-5 px-4 z-40">
    <nav class="block container mx-auto flex flex-row flex-nowrap justify-between" aria-label="Desktop navigation">
      <NuxtLink to="/" class="mr-2 font-bold text-3xl order-2 md:order-first">Shiopa</NuxtLink>
      <ul class="self-center flex flex-nowrap order-1">
        <li class="ml-4 self-center hidden md:block"><NuxtLink to="/shop">Shops</NuxtLink></li>
        <li class="md:ml-4 self-center order-last">
          <div class="flex flex-col justify-center" aria-label="Cart icon">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              class="self-center h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z"
              />
              <path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
            </svg>
          </div>
        </li>
        <li class="md:ml-4 self-center order-last">
          <div class="flex flex-col justify-center" aria-label="Search icon">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              class="self-center h-6 w-6"
            >
              <path d="M19.023 16.977a35.13 35.13 0 01-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0016 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
            </svg>
          </div>
        </li>
        <li class="md:ml-4 self-center">
          <button @click="showMobileMenu" class="inline-block md:hidden w-8 h-8 text-gray-600 p-1">
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
