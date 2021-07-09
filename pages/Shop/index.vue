<template>
   <div>
      <Slider :sliders="sliders" />
      <FilterComponent />
      <ProductComponent :products="products" />
   </div>
</template>

<script lang="ts">
 import Slider from '@/components/Slider.vue'
 import FilterComponent from '@/components/storefront/shops/FilterComponent.vue'
 import ProductComponent from '@/components/storefront/shops/ProductComponent.vue'
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
    FilterComponent,
    ProductComponent
  },
  async asyncData({ $http }: any) {
    const sliders = await $http.$get('http://localhost:8000/slider')
    // const products = await $http.$get('http://localhost:8000/product')
    const products = await $http.$get('https://shopia-backend.herokuapp.com/api/v1/all-products/')
    return { sliders, products }
  }
 }
</script>

<style>

</style>
