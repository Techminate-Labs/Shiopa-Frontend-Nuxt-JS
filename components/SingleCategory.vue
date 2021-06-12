<template>
  <div class="container md:mx-auto ">
    <div v-for="(product, index) in selectedProducts" :key="index">
        {{product.name}}
        test
    </div>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SingleCategory extends Vue{

  @Prop({ required: true }) readonly selectedProducts!: Object

}
</script>
