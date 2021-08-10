<template>
  <div>
    <Slider :sliders="sliders" />
    <div class="max-w-screen-xl mx-auto">
      <Categories />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Categories from '@/components/storefront/products/categories/Categories.vue'
import Slider from '@/components/storefront/products/Slider.vue'

export default Vue.extend({
  components: {
    Categories,
    Slider
  },
  async asyncData({ $http }: any) {
    const sliders = await $http.$get('http://localhost:8000/slider')
    return { sliders }
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

