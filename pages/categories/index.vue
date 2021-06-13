<template>
  <div>
    <Categories />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Categories from '@/components/storefront/categories/Categories.vue'

export default Vue.extend({
  components: {
    Categories
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
