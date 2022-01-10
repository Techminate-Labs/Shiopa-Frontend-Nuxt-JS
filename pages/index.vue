<template>
  <div>
    <Slider :sliders="sliders" />
    <div class="container mx-auto">
      <DealOfTheDay />
      <Categories :categories="categories" class="mt-8 mb-20" />
      <h2>Category 1</h2>
      <CategoryProducts :categoryProducts="firstCategory" class="mb-20" />
      <div class="mb-20">
        <!-- <SingleCategories :homeCategories="homeCategories" /> -->
      </div>
      <div class="mb-20">
        <!-- Temporarily deactivating until we find a transparent product image -->
        <!-- <CategoryDining :categoryDinings="categoryDinings" /> -->
      </div>
      <div class="mb-20">
        <!-- <Hotproducts :hotProducts="hotProducts" /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Slider from '@/components/storefront/products/Slider.vue'
import Categories from '@/components/storefront/products/categories/Categories.vue'
import CategoryProducts from '@/components/storefront/products/categories/CategoryProducts.vue'
import DealOfTheDay from '@/components/storefront/products/DealOftheDay.vue'

export default Vue.extend({
  components: {
    Categories,
    Slider,
    CategoryProducts,
    DealOfTheDay
  },
  data() {
    return {
      sliders: [] as Array<any>,
      categories: [] as Array<any>,
      firstCategory: [] as Array<any>,
    }
  },
  async asyncData({ $http }: any) {
    const sliders = await $http.$get('http://localhost:8000/sliders')
    const categories = await $http.$get('http://localhost:8000/categories')
    const firstCategory = await $http.$get('http://localhost:8000/products?category_id=1')

    return { sliders, categories, firstCategory }
  }
})
</script>
