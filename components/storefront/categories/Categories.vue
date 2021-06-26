<template>
  <div class="container flex flex-col md:flex-row mx-auto xl:px-16 my-16">
    <div class="col flex flex-col flex-grow md:w-1/2" v-for="(column, i) in columns" :key="i">
      <div v-for="(item, j) in column" :key="j" class="max-w-max mb-32 mx-6">
        <a :href="item.get_absolute_url" class="block relative">
          <div :class="(i === 1) ? 'justify-end' : 'justify-start'" class="relative flex ">
            <img
              :src="item.image_url"
              :alt="item.image_alt"
              class="z-10 relative w-3/4 lg:w-4/6 xl:w-1/2"
            />
            <div :class="(i === 1) ? 'right-3' : 'left-3'" class="z-0 -bottom-12 block absolute lg:w-4/6 w-full bg-gray-100 h-5/6"></div>
            <h3 :class="(i === 1) ? 'left-24' : 'right-24 text-right'" class="z-10 absolute -bottom-10 font-bold left-24 text-4xl hover:underline">{{item.name}}</h3>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Categories',
  data() {
    return {
      categories: [],
      cols: 2
    }
  },
  async fetch() {
    this.categories = await fetch(
      // 'http://localhost:8000/category'
      'https://shopia-backend.herokuapp.com/api/v1/all-categories'
    ).then(res => res.json()).catch(err => console.log(err))
  },
  computed: {
    columns (): object[] {
      let columns: object[] = []
      let mid = Math.ceil(this.categories.length / this.cols)
      for (let col = 0; col < this.cols; col++) {
        columns.push(this.categories.slice(col * mid, col * mid + mid))
      }
      return columns
    }
  }
})
</script>
