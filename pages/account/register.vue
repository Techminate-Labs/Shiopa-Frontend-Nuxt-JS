<template>
   <div>
      <RegisterComponent />
   </div>
</template>

<script lang="ts">
 import RegisterComponent from '@/components/storefront/accounts/RegisterComponent.vue'
 export default {
  data(){
    return{
      title: '',
    }
  },
  components:{
    RegisterComponent
  },
  
 }
</script>

<style>

</style>