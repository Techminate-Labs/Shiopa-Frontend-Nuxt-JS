<template>
   <div>
      <Login />
   </div>
</template>

<script lang="ts">
 import Login from '@/components/storefront/accounts/Login.vue'
 export default {
  data(){
    return{
      title: '',
    }
  },
  components:{
    Login,
  },
  
 }
</script>

<style>

</style>