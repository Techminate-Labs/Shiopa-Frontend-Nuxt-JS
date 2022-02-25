<template>
   <div class="max-w-screen-xl mx-auto mt-16 mb-20">
      <div class="px-4">
        <CheckoutSingle :cart="$accessor.cart.cart" />
      </div>
   </div>
</template>

<script lang="ts">
import Vue from 'vue'

// components
import CheckoutSingle from '@/components/storefront/orders/CheckoutSingle.vue'

export default Vue.extend({
  components:{
    CheckoutSingle,
  }
})
</script>

<style>

</style>