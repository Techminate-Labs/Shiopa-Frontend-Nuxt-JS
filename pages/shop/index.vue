<template>
   <div>
      <Slider :sliders="sliders" />
      <Filters />
      <Products :products="products" />
   </div>
</template>

<script lang="ts">
 import Slider from '@/components/storefront/products/Slider.vue'
 import Filters from '@/components/storefront/products/Filters.vue'
 import Products from '@/components/storefront/products/Products.vue'
 export default {
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
 }
</script>

<style>

</style>
