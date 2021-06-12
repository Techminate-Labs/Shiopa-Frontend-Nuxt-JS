<template>
  <div class="container md:mx-auto flex justify-center h-screen">
      {{category.name}}
      {{category.image}}
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SingleCategory extends Vue{

  category: string[] = []

  async fetch(): Promise<any> {
    this.category = await fetch(
      `http://localhost:8000/category/${this.$nuxt.context.params.id}`
    ).then(res => res.json()).catch(err => console.log(err))
  }

}
</script>
