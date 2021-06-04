<template>
  <div class="sticky z-40 w-screen bg-gray-100 py-3 px-4">
    <div class="container mx-auto flex flex-row flex-nowrap justify-between">
      <span class="mr-2 font-bold text-3xl">Shiopa</span>
      <ul class="self-center">
        <li>Page</li>
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
