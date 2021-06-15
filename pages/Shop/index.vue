<template>
   <div>
      <Slider :sliders="sliders" />
      <FilterComponent />
      <ProductComponent />
   </div>
</template>

<script lang="ts">
 import Slider from '@/components/Slider.vue'
 import FilterComponent from '@/components/storefront/shops/FilterComponent'
 import ProductComponent from '@/components/storefront/shops/ProductComponent'
 export default {
  data(){
    return{
      title:'',

    }
  },
  components:{
    Slider,
    FilterComponent,
    ProductComponent
  },
  async asyncData({ $http }: any) {
    const sliders = await $http.$get('http://localhost:8000/slider')
    return { sliders }
  }
 }
</script>

<style>

</style>
