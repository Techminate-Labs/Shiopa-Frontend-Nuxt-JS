<template>
  <div class="flex flex-col py-4 px-10 text-center bg-white rounded shadow-md">
    <div class="flex flex-col">
      <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 self-center h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>
    <p>Published posts</p>
    <p class="text-4xl text-blue-600 font-light">18</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

@Component
export default class IconCard extends Vue {}
</script>