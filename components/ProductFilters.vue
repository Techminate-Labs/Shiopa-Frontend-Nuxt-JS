<template>
  <div class="bg-gray-200">
    <ul class="flex flex-row flex-wrap mx-2 py-3 justify-center">
      <li class="mr-4 whitespace-nowrap">All<span class="text-xs align-top">123</span></li>
      <li class="mr-4 whitespace-nowrap">Filter 1<span class="text-xs align-top">3</span></li>
      <li class="mr-4 whitespace-nowrap">Filter 2<span class="text-xs align-top">53</span></li>
      <li class="mr-4 whitespace-nowrap">Filter 3<span class="text-xs align-top">2</span></li>
      <li class="mr-4 whitespace-nowrap">Filter 4<span class="text-xs align-top">59</span></li>
      <li class="mr-4 whitespace-nowrap">Filter 5<span class="text-xs align-top">0</span></li>
      <li class="whitespace-nowrap">Filter 6<span class="text-xs align-top">4</span></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class NavBar extends Vue {

}
</script>
