<template>
  <div>
    <Slider :sliders="sliders" />
    <Categories />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Categories from '@/components/storefront/categories/Categories.vue'
import Slider from '@/components/Slider.vue'

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

