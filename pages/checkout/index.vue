<template>
   <div class="max-w-screen-xl mx-auto mt-16 mb-20">
      <div class="px-4">
        <CheckoutSingle :cart="cart" />
      </div>
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