<template>
  <div class="container mx-auto my-10">
    <h2 class="max-w-max mx-auto mb-2 text-lg font-bold">Description / Reviews</h2>
    <p class="text-justify">{{product.description}}</p>
  </div>
</template>
<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ProductDescription extends Vue {

  @Prop({ required: true }) readonly product!: Object

}
</script>
