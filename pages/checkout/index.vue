<template>
   <div class="mx-6 max-w-screen-xl md:mx-auto">
      <CheckoutSingle :cart="cart" />
   </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CheckoutSingle from '@/components/storefront/orders/CheckoutSingle.vue'

export default Vue.extend({
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
})
</script>

<style>

</style>