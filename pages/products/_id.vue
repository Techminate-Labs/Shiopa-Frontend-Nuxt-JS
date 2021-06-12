<template>
  <div>
    <ProductInfo :product="product" />
    <ProductDescription :product="product" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
