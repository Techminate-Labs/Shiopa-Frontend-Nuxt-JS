<template>
  <div>
    <Products :products="products"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ params, $http }: any) {
    const allProducts = await $http.$get(`http://localhost:8000/product`)
    const category_id = Number(params.id);
    const products = allProducts.filter((product: any) => product.category_id == category_id)
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
