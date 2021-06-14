<template>
   <div>
      <Slider/>
      <FilterComponent/>
   </div>
</template>

<script>
 import Slider from '@/components/storefront/shops/Slider'
 import FilterComponent from '@/components/storefront/shops/FilterComponent'
 export default {
  data(){
    return{
      title:'',

    }
  },
  components:{
    Slider,
    FilterComponent
 
  },
 }
</script>

<style>

</style>
