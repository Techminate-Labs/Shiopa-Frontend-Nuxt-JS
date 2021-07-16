<template>
  <div>
    <ProductInfo :product="product" />
    <div class="text-center">
      <h2
        @click="!isDescription ? isDescription = !isDescription : null"
        :class="isDescription ? 'font-bold' : ''" class="inline cursor-pointer max-w-min text-center text-lg ">
        Description
      </h2>
      <span>/</span>
      <h2
        @click="isDescription ? isDescription = !isDescription : null"
        :class="isDescription ? '' : 'font-bold'" class="inline cursor-pointer max-w-min text-center text-lg">
        Reviews
      </h2>
    </div>
    <hr class="max-w-sm mx-auto mt-8">
    <ProductDescription v-if="isDescription" :product="product" />
    <ProductReviews :product="product" v-if="!isDescription" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ProductInfo from '@/components/storefront/products/single/ProductInfo.vue'
import ProductDescription from '@/components/storefront/products/single/ProductDescription.vue'
import ProductReviews from '@/components/storefront/products/single/ProductReviews.vue'

export default Vue.extend({
  components: {
    ProductInfo,
    ProductDescription,
    ProductReviews
  },
  data(){
    return {
      isDescription: true
    }
  },
  async asyncData({ params, $http }: any) {
    const product = await $http.$get(`https://shopia-backend.herokuapp.com/api/v1/products/${params.category}/${params.slug}`)
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
