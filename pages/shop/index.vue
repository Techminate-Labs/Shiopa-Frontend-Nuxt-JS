<template>
   <div>
      <Slider :sliders="sliders" />
      <div class="max-w-screen-xl mx-auto">
        <Filters />
        <Products :products="products" />
      </div>
   </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Slider from '@/components/storefront/products/Slider.vue'
import Filters from '@/components/storefront/products/Filters.vue'
import Products from '@/components/storefront/products/Products.vue'

export default Vue.extend({
  head: {
    titleTemplate: `Shop - %s`,
  },
  data(){
    return{
      title: '',
    }
  },
  components:{
    Slider,
    Filters,
    Products
  },
  async asyncData({ $http }: any) {
    const sliders = await $http.$get('http://localhost:8000/slider')
    const products = await $http.$get('https://shopia-backend.herokuapp.com/api/v1/all-products/')
    
    return { sliders, products }
  }
})
</script>

<style>

</style>
