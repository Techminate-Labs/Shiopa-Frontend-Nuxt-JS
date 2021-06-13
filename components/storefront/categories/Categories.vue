<template>
  <div class="container mx-auto xl:px-16 my-16">
    <div class="flex flex-row flex-wrap justify-center md:justify-start">
      <div v-for="(category, index) in categories" :key="index" class="max-w-max mb-32 md:w-1/2">
        <a :href="'/categories/' + category.id" class="block relative">
          <div v-if="Math.random() > 0.3" class="relative flex justify-end">
            <img
              :src="'/placeholders/' + category.image"
              class="z-10 relative w-3/4"
            />
            <div class="z-0 bottom-6 right-6 block absolute w-9/12 bg-gray-100 h-4/6"></div>
            <h3 class="z-10 absolute bottom-12 font-bold left-6 text-4xl hover:underline">{{category.name}}</h3>
          </div>
          <div v-else class="relative">
            <img
              :src="'/placeholders/' + category.image"
              class="z-10 relative w-3/4 "
            />
            <div class="z-0 bottom-6 left-6 block absolute w-9/12 bg-gray-100 h-4/6"></div>
            <h3 class="z-10 absolute bottom-12 font-bold right-6 text-4xl hover:underline">{{category.name}}</h3>
          </div>

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
