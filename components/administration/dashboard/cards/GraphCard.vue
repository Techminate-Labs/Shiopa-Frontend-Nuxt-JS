<template>
  <div class="flex flex-col py-4 px-4 bg-white rounded shadow-md">
    <p class="text-lg">Total Orders</p>
    <p class="text-2xl text-blue-900">$1250</p>
    <p class="text-md uppercase text-gray-400">Monday</p>
    <div class="flex flex-col">
      <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-900 self-end h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
</svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

@Component
export default class GraphCard extends Vue {}
</script>