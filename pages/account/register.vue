<template>
   <div>
      <Register />
   </div>
</template>

<script lang="ts">
 import Register from '@/components/storefront/accounts/Register.vue'
 export default {
  data(){
    return{
      title: '',
    }
  },
  components:{
    Register,
  },
  
 }
</script>

<style>

</style>