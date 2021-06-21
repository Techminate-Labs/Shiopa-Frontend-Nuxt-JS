<template>
  <div class="container mx-auto my-8 max-w-max">
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
