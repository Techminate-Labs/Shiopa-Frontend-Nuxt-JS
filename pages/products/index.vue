<template>
  <div>
    <NavBar />
    <Products :products="products" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      products: []
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
