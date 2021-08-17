<template>
   <div class="md:max-w-screen-xl md:mx-auto">
      <div class="px-4">
        <CartSingle :cart="cart" />
      </div>
   </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CartSingle from '@/components/storefront/cart/CartSingle.vue'

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
    CartSingle,
  },
  mounted() {
    this.cart = this.$store.state.cart
    console.log(this.cart)
  }
})
</script>

<style>

</style>