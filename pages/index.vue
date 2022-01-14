<template>
  <div>
    <Slider :sliders="sliders" />
    <div class="container mx-auto">
      <DealOfTheDay />
      <Categories :categories="categories" class="mt-8 mb-20" />

      <h2>Category 1</h2>
      <CategoryProducts :categoryProducts="firstCategory" class="mb-20" />
      <h2>Category 2</h2>
      <CategoryProducts :categoryProducts="secondCategory" class="mb-20" />
      <h2>Latest Products</h2>
      <CategoryProducts :categoryProducts="latestProducts" class="mb-20" />
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
      secondCategory: [] as Array<any>,
      latestProducts: [] as Array<any>,
    }
  },
  async asyncData({ $http }: any) {
    const sliders = await $http.$get('http://localhost:8080/sliders')
    const categories = await $http.$get('http://localhost:8080/categories')
    const firstCategory = await $http.$get('http://localhost:8080/products?category_id=1')
    const secondCategory = await $http.$get('http://localhost:8080/products?category_id=2')
    const latestProducts = await $http.$get('http://localhost:8080/products?section=latest')

    return { sliders, categories, firstCategory, secondCategory, latestProducts }
  }
})
</script>
