<template>
   <div>
      <CartComponents />
   </div>
</template>

<script lang="ts">
 import CartComponents from '@/components/storefront/shops/CartComponents.vue'
 export default {
  data(){
    return{
      title: '',
    }
  },
  components:{
    CartComponents,
  },
 }
</script>

<style>

</style>