<template>
  <div class="container mx-auto xl:px-16 my-16">
    <div v-if="products.length > 0">
      <h2 class="text-center mb-8 text-3xl">Products</h2>
      <div class="flex flex-row flex-wrap justify-center md:justify-start">
        <div v-for="product in products" :key="product.id" class="max-w-max md:w-1/2 lg:w-1/3 xl:w-1/4 block relative">
          <a :href="'/products/' + product.id">
            <img
              :src="'/placeholders/' + product.image"
            />
            <p>{{product.name}}</p>
            <p class="text-xl text-gray-900">${{product.price}}</p>
          </a>
        </div>
      </div>
    </div>
    <div v-else class="h-96 px-4 flex justify-center">
      <p class="font-bold text-4xl self-center">Oh no ! There are no products !</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Products extends Vue {

  @Prop({ required: true }) readonly products!: Object
  
}
</script>
