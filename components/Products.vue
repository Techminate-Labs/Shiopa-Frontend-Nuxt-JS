<template>
  <div>
    <h2>Products</h2>
    <div v-for="product in products">
    
      <img
        :src="'/placeholders/' + product.image"
        class="z-0 max-w-xs"
      />
      <p>{{product.name}}</p>
      <p class="text-xl text-gray-900">${{product.price}}</p>

    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface Product {
  id: number
  category_id: number
  section: string
  name: string
  slug: string
  image: string
  price: number
  stock: number
  description: string
  additional_info: string
}

export default Vue.extend({
  name: 'Products',

  props: {
    products: {
      type: Array,
      required: true
    } as PropOptions<Product>
  },

  data () {},

  computed: {}
})
</script>
