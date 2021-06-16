<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-5 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div v-for="(product, index) in products" :key="index" class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="relative ">
                <a :href="'/products/' + product.id" class="absolute inset-0 z-10 bg-white  opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                  <div class="relative ">
                      <a class="block relative h-70 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="'/placeholders/' + product.image">
                      </a>
                      <div class="flex flex-wrap">
                          <div class="mt-4">
                              <h1 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{product.name}}</h1>
                              <button class="text-gray-900">Add to Cart</button>
                          </div>
                          <span class="text-gray-400  inline-flex items-center  ml-auto leading-none text-sm pr-3 py-1 ">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                              </svg>
                          </span>
                        </div>
                    </div>
                </a>
                <a href="#" class="relative">
                  <div class="">
                      <a class="block relative h-70 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="'/placeholders/' + product.image">
                      </a>
                      <div class="flex flex-wrap">
                        <div class="mt-4">
                            <h1 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{product.name}}</h1>
                            <p class="mt-1 text-gray-900">${{product.price}}</p>
                        </div>
                        <span class="text-gray-400  inline-flex items-center  ml-auto leading-none text-sm pr-3 py-1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Slider extends Vue{

  @Prop({ required: true }) readonly products!: object[]

}
</script>

<style>

</style>