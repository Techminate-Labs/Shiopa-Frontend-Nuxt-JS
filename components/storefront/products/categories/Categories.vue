<template>
  <div class="relative flex flex-col md:flex-row mx-auto xl:px-12 my-10">
    <div class="col flex flex-col flex-grow p-4 lg:w-3/6" v-for="(column, i) in columns" :key="i">
      <div v-for="(item, j) in column" :key="j" class="max-w-max mx-1">
          <div  class="relative mx-auto col flex flex-col flex-grow">
            <div class="z-10 pt-6 absoulate">
            <img
              :src="'/placeholders/' +  item.image_url"
              :alt="item.image_alt"
              class="float-right  w-5/6 "
            />
            </div>
            <div  class="z-0 -bottom-6 block absolute lg:w-30 w-full bg-gray-100 h-40"></div>
            <div class="absolute z-10 float-left ml-2 -bottom-3 ">
              <p  class="font-medium left-24 text-base hover:underline">{{item.slug}}</p>
              <h3  class="font-semibold  text-2xl hover:underline">{{item.name}}</h3>
              <span class="font-medium  text-sm hover:underline cursor-pointer">shop Now</span>
            </div>
          </div>
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
      cols: 3
    }
  },
  async fetch() {
    this.categories = await fetch('http://localhost:8000/category')
      .then(res => res.json())
      .catch(err => console.log(err))
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