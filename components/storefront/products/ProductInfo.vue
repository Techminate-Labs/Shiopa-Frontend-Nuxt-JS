<template>
  <div class="flex flex-row flex-wrap container max-w-max px-4 my-10 md:mx-auto">
    <figure class="max-w-max relative block md:mr-4">
      <img
        alt="Photo of the countryside with mist."
        :src="'/placeholders/' + product.image"
        class="z-0 md:max-w-xs"
      />
    </figure>
    <div class="max-w-sm md:ml-4">
      <h1>{{product.name}}</h1>
      <p>${{product.price}}</p>
      <p class="text-justify">{{product.additional_info}}</p>
      <div><button class="px-3 py-2 bg-gray-900 text-white rounded">ADD TO CART</button></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ProductInfo extends Vue {

  @Prop({ required: true }) readonly product!: Object

}
</script>
