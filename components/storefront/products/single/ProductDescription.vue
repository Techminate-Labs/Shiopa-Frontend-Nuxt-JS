<template>
  <div class="container my-8 max-w-sm p-0">
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
