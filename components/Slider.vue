<template>
  <div class="h-96 md:h-screen w-screen flex relative pb-16">
    <div id="slider" class="absolute flex bg-gray-900 inset-0 w-auto h-auto transform translate-x-0 transition-all ease-in-out duration-1000">
      <img v-for="(slider, index) in sliders" :key="index" :src="'/placeholders/' + slider.image" class="object-cover w-screen md:h-full transition-all ease-in-out duration-1000 slide" />
    </div>
    <div @click="prevSlide()" class="cursor-pointer absolute bottom-0 left-0 bg-white w-16 h-16 md:mb-16 border-r border-gray-400 flex items-center justify-center text-black hover:bg-gray-100">&#x276E;</div>
    <div @click="nextSlide()" class="cursor-pointer absolute bottom-0 left-0 bg-white w-16 h-16 md:mb-16 ml-16 flex items-center justify-center text-black hover:bg-gray-100">&#x276F;</div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'Slider',
  data() {
    return {
      sliders: []
    }
  },
  async fetch() {
    this.sliders = await fetch(
      'http://localhost:8000/slider'
    ).then(res => res.json()).catch(err => console.log(err))
  },
  mounted: () => {
    const slider = document.querySelector('#slider')
    const firstSlide = slider.children[0]
    firstSlide.classList.add('active')
    firstSlide.nextSibling.classList.add('slide-next');
    slider.lastChild.classList.add('slide-prev');
  },
  methods: {
    nextSlide() {
      let slider = document.querySelector('#slider');
      let activeSlide = document.querySelector('.active')
      let nextSibling = activeSlide.nextSibling

      if (nextSibling !== null && nextSibling.nextSibling !== null){
        activeSlide.classList.add('slide-prev')
        activeSlide.classList.remove('active')

        nextSibling.classList.add('active')
        nextSibling.classList.remove('slide-next')

        nextSibling.nextSibling.classList.add('slide-next')
        nextSibling.nextSibling.classList.remove('slide-prev')
      } else if (nextSibling.nextSibling == null) {
        activeSlide.classList.add('slide-prev')
        activeSlide.classList.remove('active')

        nextSibling.classList.add('active')

        slider.firstChild.classList.add('slide-next')
      } else {
        activeSlide.classList.remove('active')
        slider.firstChild.classList.add('active')
      }

    },
    prevSlide() {
      let slider = document.querySelector('#slider');
      let activeSlide = document.querySelector('.active')
      let previousSibling = activeSlide.previousSibling

      if (previousSibling !== null){
        previousSibling.classList.add('active')
        activeSlide.classList.add('slide-prev')
        activeSlide.classList.remove('active')
      } else {
        slider.lastChild.classList.add('active');
        activeSlide.classList.remove('active')
      }

    }
  }
})
</script>

<style scoped>

.slide.active {
  transform: translateX(0%) scale(100%);
  opacity: 1;
  position: absolute;
  left: 0;
  height: 100%;
}

.slide.slide-prev {
  transform: translateX(-100%) scale(50%);
  opacity: 0;
}

.slide.slide-next {
  transform: translateX(100%) scale(0%);
  opacity: 0;
}

.slide {
  transform: translateX(-100%) scale(50%);
  opacity: 0;
}

</style>