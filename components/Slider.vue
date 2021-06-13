<template>
  <div class="h-96 md:h-screen bg-gray-200 w-screen flex relative pb-16">
    <transition name="slide" mode="out-in">
      <div v-for="i in [currentIndex]" :key="i" id="slider" class="absolute flex flex-col md:flex-row inset-0 w-auto h-auto transform translate-x-0">
        <img :src="'/placeholders/' + currentImg.image" class="object-contain m-6 md:w-3/4 lg:w-1/2 h-3/4 md:h-auto" />
        <div class="ml-36 mb-2 md:mx-16 lg:mx-32 flex flex-col justify-center">
          <p class="font-bold text-2xl md:text-4xl">{{currentImg.name}}</p>
          <a class="text-xl md:text-2xl hover:underline" :href="'/categories/' + currentImg.category_id">{{currentImg.category_name}}</a>
        </div>
      </div>
    </transition>
    <ol class="z-20 absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <li class="inline-block mr-3" v-for="(slider, index) in sliders" :key="index">
        <label @click="handleSliderChange(index)" class="carousel-bullet cursor-pointer block text-4xl text-white checked:bg-blue-600 hover:text-blue-700">•</label>
      </li>
    </ol>
    <div @click="prevSlide()" class="slider-arrow border-r border-gray-400 flex items-center justify-center text-black hover:bg-gray-100">&#x276E;</div>
    <div @click="nextSlide()" class="slider-arrow ml-16 flex items-center justify-center text-black hover:bg-gray-100">&#x276F;</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Slider extends Vue{

  sliders: object[] = []
  timer: unknown = null
  currentIndex: number = 0
  currentImg: object = {
    id: 1,
    category_id: "3",
    category_name: "Furniture",
    product_id: "6",
    name: "Gray Classic Sofa",
    image: "sofa_1000w.png",
    alt: "Description of slider image"
  }

  async fetch(): Promise<any> {
    this.sliders = await fetch('http://localhost:8000/slider')
      .then(res => res.json())
      .catch(err => console.log(err))
  }

  mounted() {
    // this.startSlide();
  }

  startSlide(): void {
    this.timer = setInterval(this.nextSlide, 8000);
  }
  nextSlide(): void {
    this.currentIndex += 1;
    this.currentImg = this.sliders[Math.abs(this.currentIndex) % this.sliders.length];
  }
  prevSlide(): void {
    this.currentIndex -= 1;
    this.currentImg = this.sliders[Math.abs(this.currentIndex) % this.sliders.length];
  }
  handleSliderChange(index: number): void {
    this.currentIndex = index;
    this.currentImg = this.sliders[index];
  }
}
</script>

<style scoped>

@keyframes slide-enter {
  0% { opacity: 0; transform: scale(80%); }
  100% { opacity: 1; transform: scale(100%); }
}

@keyframes slide-leave {
  0% { opacity: 1; transform: scale(100%); }
  100% { opacity: 0; transform: scale(80%); }
}

.slide-enter-active {
  animation: slide-enter .4s;
}
.slide-leave-active {
  animation: slide-leave .4s;
}

</style>