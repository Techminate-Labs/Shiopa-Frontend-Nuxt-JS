<template>
  <div class="py-6 bg-gray-100 px-3 lg:px-32 text-lg flex flex-col md:flex-row justify-evenly">
    <div class="flex flex-col">
      <div>
        <h4 class="italic">Subscribe to our newsletter</h4>
        <form class="my-3 flex">
          <div class="flex flex-col">
            <label for="email">Enter your email</label>
            <input type="email" name="email" class="px-3 py-2 mt-1 h-12 border-2 border-gray-300 focus:border-gray-800 rounded" placeholder="example@mail.com">
          </div>
          <button class="px-6 border-2 border-gray-300 rounded h-12 self-end bg-white hover:bg-gray-900 hover:text-white">Subscribe</button>
        </form>
      </div>
      <div class="mt-4">
        <p>© 2017 Maison. All rights reserved</p>
      </div>
    </div>
    <div class="flex flex-wrap justify-between md:justify-evenly">
      <div class="mx-4 flex-grow w-full md:w-auto md:flex-grow-0">
        <h5 class="mt-4 text-2xl">Menu</h5>
        <ul>
          <li><nuxt-link to="/shop">Shop</nuxt-link></Nuxt></li>
        </ul>
      </div>
      <div class="mx-4 flex-grow w-full md:w-auto md:flex-grow-0">
        <h5 class="mt-4 text-2xl">Categories</h5>
        <ul v-for="(category, index) in categories" :key="index">
          <li><NuxtLink :to="category.get_absolute_url">{{category.name}}</NuxtLink></li>
        </ul>
      </div>
      <div class="mx-4 flex-grow w-full md:w-auto md:flex-grow-0">
        <h5 class="mt-4 text-2xl">Follow us</h5>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Pinterest</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {

  @Prop({ required: true }) readonly categories!: object[]

}
</script>
