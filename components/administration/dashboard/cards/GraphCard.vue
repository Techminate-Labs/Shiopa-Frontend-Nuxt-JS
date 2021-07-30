<template>
  <div class="flex flex-col p-4 my-auto bg-white rounded-lg shadow-md">
    <p class="text-lg">{{title}}</p>
    <p v-if="isCurrency" class="text-2xl text-blue-900">${{value}}</p>
    <p v-else class="text-2xl text-blue-900">{{value}}</p>
    <p class="text-md uppercase text-gray-400">{{day}}</p>
    <div class="flex flex-col">
      <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-900 self-end h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
</svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class GraphCard extends Vue {

  @Prop({ required: true }) readonly title!: string
  @Prop({ required: true }) readonly value!: string
  @Prop({ required: true }) readonly day!: string
  @Prop({ required: true }) readonly isCurrency!: boolean

}
</script>