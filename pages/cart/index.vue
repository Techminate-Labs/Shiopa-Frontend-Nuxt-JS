<template>
   <div>
      <CartSingle :cart="cart" />
   </div>
</template>

<script>
import CartSingle from '@/components/storefront/cart/CartSingle.vue'

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
    CartSingle,
  },
  mounted() {
    this.cart = this.$store.state.cart
    console.log(this.cart)
  }
}
</script>

<style>

</style>