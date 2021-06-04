<template>
  <div class="container md:mx-auto flex justify-center h-screen">
    <h1 class="text-4xl self-center">Category</h1>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface SingleCategory {
  id: number
  parent_id: number
  name: string
  slug: string
  image: string
}

export default Vue.extend({
  name: 'Categories',
  data() {
    return {
    }
  },
  computed: {}
})
</script>
