<template>
  <div class="mt-16 mb-20">
    <Filters :products="products" />
    <Products :products="products" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import Products from '@/components/storefront/products/Products.vue'
import Filters from '@/components/storefront/products/Filters.vue'

export default Vue.extend({
  components: {
    Products,
    Filters
  },
  async asyncData({ params, $http }: any) {
    const category_slug = params.category
    const products = await $http.$get(`http://localhost:8080/products?category_slug=` + category_slug)
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
