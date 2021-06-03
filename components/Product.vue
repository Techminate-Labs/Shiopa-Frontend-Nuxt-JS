<template>
  <figure class="max-w-max relative block m-auto">
    <img
      alt="Photo of the countryside with mist."
      src="/placeholders/placeholder-658-500x650.jpg"
      class="opacity-50 z-0 max-w-xs"
    />
    <p class="font-bold text-2xl text-gray-800">Product 1</p>
    <p class="text-xl text-gray-900">$3.00</p>
    <figcaption class="text-xs">Photo of the countryside with mist.</figcaption>
  </figure>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Hero extends Vue {

}
</script>
