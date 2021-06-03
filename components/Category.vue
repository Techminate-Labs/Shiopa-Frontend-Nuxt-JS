<template>
  <figure class="relative">
    <h3 class="absolute bottom-8 -left-4 font-bold text-2xl text-gray-900 z-10">Category 1</h3>
    <img
      alt="Photo of the countryside with mist."
      src="/placeholders/placeholder-228-500x650.jpg"
      class="opacity-50 z-0 max-w-xs"
    />
    <figcaption class="text-xs">Photo of the countryside with mist.</figcaption>
  </figure>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Category extends Vue {

}
</script>
