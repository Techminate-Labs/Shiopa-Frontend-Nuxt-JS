<template>
  <div class="container mx-auto xl:px-16 my-16">
  <h2 class="text-center mb-8 text-3xl">Categories</h2>
    <div class="flex flex-row flex-wrap justify-center md:justify-start">
      <div v-for="(category, index) in categories" :key="index" class="max-w-max md:w-1/2 lg:w-1/3 xl:w-1/4">
        <a :href="'/categories/' + category.id" class="block relative">
          <img
            :src="'/placeholders/' + category.image"
            class="z-0"
          />
          <h3 class="absolute bottom-4 left-4 text-white text-2xl">{{category.name}}</h3>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'Categories',
  data() {
    return {
      categories: []
    }
  },
  async fetch() {
    this.categories = await fetch(
      'http://localhost:8000/category'
    ).then(res => res.json()).catch(err => console.log(err))
  },
  computed: {}
})
</script>
