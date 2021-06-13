<template>
  <div>
    <ProductInfo :product="product" />
    <ProductDescription :product="product" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ProductInfo from '@/components/storefront/products/ProductInfo.vue'
import ProductDescription from '@/components/storefront/products/ProductDescription.vue'

export default Vue.extend({
  components: {
    ProductInfo,
    ProductDescription
  },
  async asyncData({ params, $http }: any) {
    const product = await $http.$get(`http://localhost:8000/product/${params.id}`)
    return { product }
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>
