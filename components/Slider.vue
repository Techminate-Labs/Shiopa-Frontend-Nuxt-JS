<template>
  <div class="h-96 md:h-96 w-screen flex overflow-hidden relative">
    <div v-for="(slider, index) in sliders" class="absolute inset-0 w-auto h-auto transition-all ease-in-out duration-1000 transform translate-x-0 slide" >
      <img :src="'/placeholders/' + slider.image" class="object-cover w-full h-1/2 md:h-full" />
    </div>
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
  computed: {}
})
</script>
