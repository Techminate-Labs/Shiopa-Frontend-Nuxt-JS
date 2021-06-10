<template>
  <div class="h-96 md:h-screen bg-gray-900 w-screen flex relative pb-16">
    <transition name="slide" mode="out-in">
      <div v-for="i in [currentIndex]" :key="i" id="slider" class="absolute flex inset-0 w-auto h-auto transform translate-x-0">
        <img :src="'/placeholders/' + currentImg.image" class="object-cover w-screen md:h-full" />
      </div>
    </transition>
    <div @click="prevSlide()" class="cursor-pointer absolute bottom-0 left-0 bg-white w-16 h-16 md:mb-16 border-r border-gray-400 flex items-center justify-center text-black hover:bg-gray-100">&#x276E;</div>
    <div @click="nextSlide()" class="cursor-pointer absolute bottom-0 left-0 bg-white w-16 h-16 md:mb-16 ml-16 flex items-center justify-center text-black hover:bg-gray-100">&#x276F;</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Slider extends Vue{

  sliders: string[] = []
  timer: unknown = null
  currentIndex: number = 0

  async fetch(): Promise<any> {
    this.sliders = await fetch(
      'http://localhost:8000/slider'
    ).then(res => res.json()).catch(err => console.log(err))
  }

  mounted() {
    this.startSlide();
  }

  startSlide(): void {
    this.timer = setInterval(this.nextSlide, 8000);
  }
  nextSlide(): void {
    this.currentIndex += 1;
  }
  prevSlide(): void {
    this.currentIndex -= 1;
  }

  get currentImg(): any {
    return this.sliders[Math.abs(this.currentIndex) % this.sliders.length];
  }
}
</script>

<style scoped>

@keyframes slide-enter {
  0% { opacity: 0; transform: translateX(100%) scale(80%); }
  100% { opacity: 1; transform: translateX(0%) scale(100%); }
}

@keyframes slide-leave {
  0% { opacity: 1; transform: translateX(0%) scale(100%); }
  100% { opacity: 0; transform: translateX(-100%) scale(80%); }
}

.slide-enter-active {
  animation: slide-enter .4s;
}
.slide-leave-active {
  animation: slide-leave .4s;
}

</style>