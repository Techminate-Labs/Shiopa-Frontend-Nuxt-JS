<template>
   <div class="px-5 py-5">
      <div class="flex ">
     <!-----1st part---->
       <div  class="relative lg:w-4/5 mx-auto flex flex-wrap  mr-4">
          <div class="z-10 pt-8">
            <img class="aboulate float-right h-80 -mt-3 w-5/6 " src="https://template.hasthemes.com/urdan/urdan/assets/images/bg/bg-1.png"/>
          </div>
          <div  class="mt-5 absolute lg:w-30 w-5/6 bg-gray-100 h-80"></div>
          <div class="absolute ml-10 z-10 mt-10 pt-10 w-80 float-left ml-2">
            <h6 class="text-xl text-yellow-600 mb-3">Up To 30% Off</h6>
            <h1 class="text-4xl font-extrabold mb-3 text-black tracking-wider">New Furniture</h1>
            <p class="py-2">Lorem ipsum dolor sit amet consecte adipisicing elit sed do</p>
            <button class="btnclass pt-3">Shop now</button>
          </div>
       </div>
        <!-----End 1st part---->
        <!-----2nd part---->
          <div class=" lg:w-1/2 w-full ">
            <div class="relative h-75 col flex flex-col flex-grow"> 
              <div class="rounded-lg h-64 overflow-hidden z-10 pt-6 absoulate">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://template.hasthemes.com/urdan/urdan/assets/images/banner/banner-5.png">
              </div>
            <div  class="z-5 px-5 mt-5 absolute lg:w-30 w-full bg-gray-100 h-80"></div>    
          </div>
        </div>
        <!-----End 2nd part---->
      </div>
      <!--new part--->
      <div class="px-5 py-5 pt-10 grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Card 1 -->
        <div class="flex items-center p-4" v-for="(homeCategory, index) in homeCategories" :key="index">
          <div class="p-6 mr-4 bg-gray-200 text-gray-800 hover:bg-yellow-600 rounded-full">
            <img
              :src="'/placeholders/' +  homeCategory.image"
              :alt="homeCategory.image_alt"
            />
          </div>
          <div>
            <h1 class="home-h1">{{homeCategory.name}}</h1>
            <p class="text-sm font-normal text-gray-800">{{homeCategory.description}}</p>
          </div>
        </div>
      </div>
      <!---new part 2--->
        <div class="px-0 py-5">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img 
              src="https://template.hasthemes.com/urdan/urdan/assets/images/product/single-product.png"
              alt="homeCategory.image_alt"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded "
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-3xl title-font font-medium mb-1 text-yellow-700">Modern Chair</h1>
              <span class="span-title title-font">$58.00</span>
              <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore mt aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex">
                  <span class="mr-3">Color</span>
                  <button class="border-2 bg-pink-300 w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 ml-1 bg-yellow-700 w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-indigo-500 w-6 h-6 focus:outline-none"></button>
                </div>
              </div>
              <div class="flex justify-space-around">
                <div class="flex flex-row flex-nowrap justify-start border border-gray-200 mr-2">
                  <div  class="svg-class ">
                    <svg class="fill-current text-gray-600 h-3 w-3" viewBox="0 0 448 512">
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
                  </div>
                  <input class="mx-2 border text-center w-8" type="number" min="0">
                  <div class="svg-class ">
                    <svg class="fill-current text-gray-600 h-3 w-3" viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
                  </div>
                </div>
                <button class="btnclass">Shop now</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

 interface Cart {
    homeCategory_id: number | null,
    name: string | null,
    slug: string | null,
    description: string | null,
    image: string | null,
    img: string | null
    

  }

  interface homeCategory {
    additional_info: string,
    available_to_purchase: boolean,
    description: string,  
    discount_price: string,
    get_absolute_url: string,
    get_thumbnail: string,
    id: number,
    images: [],
    name: string,
    image: string,
    img: string,
    slug: string
  }

  @Component
  export default class homeCategories extends Vue{

    @Prop({ required: true }) readonly homeCategories!: homeCategory[]
    public localData: Cart = {
    homeCategory_id: null,
    name: null,
    description: null,
    image: null,
    img: null,
    slug: null,
  }

  }
</script>

<style>

</style>