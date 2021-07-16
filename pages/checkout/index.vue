<template>
   <div>
      <Checkout />
   </div>
</template>

<script lang="ts">
 import Checkout from '@/components/storefront/orders/Checkout.vue'
 export default {
  data(){
    return{
      title: '',
    }
  },
  components:{
    Checkout,
  },
 }
</script>

<style>

</style>