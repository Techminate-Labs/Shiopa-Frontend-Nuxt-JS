<template>
  <div>
    <Slider :sliders="sliders" />
    <div class="max-w-screen-xl mx-auto mt-8 mb-20">
      <Categories :categories="categories" />
    </div>
    <div class="max-w-screen-xl mx-auto mt-1. mb-20">
      <CategoryProducts :categoryProducts="categoryProducts" />
    </div>
    <div class="max-w-screen-xl">
      <SingleCategories :homeCategories="homeCategories" />
    </div>
    <div class="max-w-screen-xl">
      <CategoryDining :categoryDinings="categoryDinings" />
    </div>
    <div class="max-w-screen-xl">
      <Hotproducts :hotProducts="hotProducts" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Categories from '@/components/storefront/products/categories/Categories.vue'
import CategoryProducts from '@/components/storefront/products/categories/CategoryProducts.vue'
import Slider from '@/components/storefront/products/Slider.vue'
import SingleCategories from '@/components/storefront/products/categories/SingleCategories.vue'
import CategoryDining from '@/components/storefront/products/categories/dining/CategoryDining.vue'
import Hotproducts from '@/components/storefront/products/categories/dining/Hotproducts.vue'
export default Vue.extend({
  components: {
    Categories,
    Slider,
    CategoryProducts,
    SingleCategories,
    CategoryDining,
    Hotproducts
  },
  async asyncData({ $http }: any) {
    const sliders = await $http.$get('http://localhost:8000/slider')
    const categories = await $http.$get('http://localhost:8000/category')
    const categoryProducts = await $http.$get('http://localhost:8000/categoryProduct')
    const homeCategories = await $http.$get('http://localhost:8000/homeCategory')
    const diningCategories = await $http.$get('http://localhost:8000/diningCategory')
    const hotProducts = await $http.$get('http://localhost:8000/hotProduct')
    return { sliders, categories, categoryProducts, homeCategories, diningCategories, hotProducts }
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

