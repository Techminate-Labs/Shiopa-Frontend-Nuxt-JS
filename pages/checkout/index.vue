<template>
   <div>
      <CheckoutSingle :cart="cart" />
   </div>
</template>

<script lang="ts">
 import CheckoutSingle from '@/components/storefront/orders/CheckoutSingle.vue'

 export default {
  data() {
    return{
      title: '',
      cart: {
        items: []
      }
    }
  },
  components:{
    CheckoutSingle,
  },
  mounted() {
    this.cart = this.$store.state.cart
    console.log(this.cart)
  }
 }
</script>

<style>

</style>