<template>
   <div id="single-category">
      <div class="flex flex-col md:flex-row">
     <!-----1st part---->
       <div class="relative">
          <div class="z-10 relative">
            <img class="w-full" src="https://template.hasthemes.com/urdan/urdan/assets/images/bg/bg-1.png"/>
          </div>
          <div class="md:absolute md:top-0 z-10 w-80">
            <h6 class="text-xl text-yellow-600 mb-3">Up To 30% Off</h6>
            <h1 class="text-4xl font-extrabold mb-3 text-black tracking-wider">New Furniture</h1>
            <p class="py-2">Lorem ipsum dolor sit amet consecte adipisicing elit sed do</p>
            <button class="btnclass pt-3">Shop now</button>
          </div>
          <div class="z-0 md:absolute md:top-0 w-5/6 bg-gray-100 h-full"></div>
       </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class SingleCategory extends Vue {}
</script>
