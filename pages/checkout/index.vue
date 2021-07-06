<template>
   <div>
      <CheckoutComponent />
   </div>
</template>

<script lang="ts">
 import CheckoutComponent from '@/components/storefront/shops/CheckoutComponent.vue'
 export default {
  data(){
    return{
      title: '',
    }
  },
  components:{
    CheckoutComponent,
  },
 }
</script>

<style>

</style>