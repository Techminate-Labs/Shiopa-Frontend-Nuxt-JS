<template>
   <div>
      <CartComponents :cart="cart" />
   </div>
</template>

<script>
import CartComponents from '@/components/storefront/shops/CartComponents.vue'

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
    CartComponents,
  },
  mounted() {
    this.cart = this.$store.state.cart
    console.log(this.cart)
  }
}
</script>

<style>

</style>