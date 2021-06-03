<template>
<div class="flex flex-row flex-wrap container max-w-max px-4 my-10 md:mx-auto">
  <figure class="max-w-max relative block md:mr-4">
    <img
      alt="Photo of the countryside with mist."
      src="/placeholders/placeholder-658-500x500.jpg"
      class="opacity-50 z-0 md:max-w-xs"
    />
    <p class="font-bold text-2xl text-gray-800">Product 1</p>
    <p class="text-xl text-gray-900">$3.00</p>
    <figcaption class="text-xs">Photo of the countryside with mist.</figcaption>
  </figure>
  <div class="max-w-sm md:ml-4">
    <h1>White Bulb</h1>
    <p>$3.00</p>
    <p class="text-justify">Et nam soluta doloremque aut quia laboriosam facilis aut. Atque officiis maxime dolorum et aliquam magni eos voluptatibus. Quo nemo laboriosam cumque neque. Consequatur debitis possimus sed necessitatibus veritatis asperiores. Voluptatum cupiditate quia iste. Modi ut magnam atque.</p>
    <div><button class="px-3 py-2 bg-gray-900 text-white rounded">ADD TO CART</button></div>
  </div>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ProductInfo extends Vue {

}
</script>
