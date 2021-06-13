<template>
  <div>
    <Products :products="products" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Products from '@/components/storefront/products/Products.vue'

export default Vue.extend({
  components: {
    Products
  },
  async asyncData({ $http }: any) {
    const products = await $http.$get('http://localhost:8000/product')
    return { products }
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
