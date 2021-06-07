<template>
  <div>
    <transition
      enter-active-class="transition-opacity ease-linear duration-200"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <MobileMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
    </transition>
    <NavBar @showMobileMenu="showMobileMenu = true" v-show="!showMobileMenu" />
    <Products :products="products" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      products: [],
      showMobileMenu: false
    }
  },
  async fetch() {
    this.products = await fetch(
      'http://localhost:3000/product'
    ).then(res => res.json()).catch(err => console.log(err))
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>
