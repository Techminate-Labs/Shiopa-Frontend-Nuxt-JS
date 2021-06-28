<template>
  <div>
    <FilterComponent :products="products" />
    <ProductComponent :products="products"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ProductComponent from '@/components/storefront/shops/ProductComponent.vue'
import FilterComponent from '@/components/storefront/shops/FilterComponent.vue'

export default Vue.extend({
  components: {
    ProductComponent,
    FilterComponent
  },
  async asyncData({ params, $http }: any) {
    const category_slug = params.category
    const category = await $http.$get(`https://shopia-backend.herokuapp.com/api/v1/products/` + category_slug)
    const products = category.products
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
