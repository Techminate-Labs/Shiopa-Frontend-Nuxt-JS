<template>
  <div class="flex flex-row flex-nowrap bg-gray-100 py-3 px-8 justify-between">
    <span class="mr-2 font-bold text-3xl">Shiopa</span>
    <ul class="self-center">
      <li>Page</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class NavBar extends Vue {

}
</script>
