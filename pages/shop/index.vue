<template>
   <div>
      <Slider :sliders="sliders" />
      <Filters />
      <div class="max-w-screen-xl mx-auto mt-16 mb-20">
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
  async asyncData({ $axios }: any) {
    const sliders = await $axios.$get('http://localhost:8080/sliders')
    const products = await $axios.$get('http://localhost:8080/products')
    return { sliders, products }
  }
})
</script>

<style>

</style>
