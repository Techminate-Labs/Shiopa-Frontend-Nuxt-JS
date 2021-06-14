<template>
   <div>
      <Slider/>
      <FilterComponent/>
      <ProductComponent/>
   </div>
</template>

<script>
 import Slider from '@/components/storefront/shops/Slider'
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
 }
</script>

<style>

</style>
