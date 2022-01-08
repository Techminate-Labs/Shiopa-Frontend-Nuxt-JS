<template>
   <div class="px-5 py-5 mr-4">
      <!-----1st part---->
       <div  class="relative h-full px-5 col flex flex-col flex-grow">
          <div class="z-10 pt-8">
            <img class="absolute float-right h-80 -mt-3 w-5/6 " src="https://template.hasthemes.com/urdan/urdan/assets/images/bg/bg-1.png"/>
          </div>
          <div  class="mt-5 absolute lg:w-30 w-full bg-gray-100 h-80"></div>
          <div class="absolute ml-10 z-10 mt-10 pt-10 w-80 float-left">
            <h1 class="text-4xl font-extrabold mb-3 text-black tracking-wider">New Dining Chair Set</h1>
            <h6 class="text-xl text-yellow-600 mb-3">Up To 30% Off</h6>
            <button class="btnclass">Shop now</button>
          </div>
       </div>
    </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

 interface Cart {
    diningCategory_id: number | null,
    name: string | null,
    slug: string | null,
    description: string | null,
    image: string | null,
    img: string | null
  }

  interface diningCategory {
    description: string,  
    get_thumbnail: string,
    id: number,
    images: [],
    name: string,
    image: string,
    img: string,
    slug: string
  }

  @Component
  export default class diningCategories extends Vue{

    @Prop({ required: true }) readonly homeCategories!: diningCategory[]
    public localData: Cart = {
    diningCategory_id: null,
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