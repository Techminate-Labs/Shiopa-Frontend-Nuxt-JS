<template>
  <div class="h-screen w-1/12 bg-white z-20 overflow-hidden">
    <nav class="block container mx-auto justify-between" aria-label="Desktop navigation">
      <ul class="grid grid-cols-1 divide-y-2 divide-gray-200 text-center text-lg text-gray-500">
        <li class="py-8">
          <div class="flex flex-col" aria-label="home icon">
            <!-- template -->
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 self-center h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
            <h2>Dashboard</h2>
          </div>
        </li>
        <li class="py-8">
          <!-- cube -->
          <div class="flex flex-col" aria-label="products icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 self-center h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h2>Products</h2>
          </div>
        </li>
          <!-- view-grid -->
        <li class="py-8">
          <div class="flex flex-col" aria-label="categories icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 self-center h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <h2>Categories</h2>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

@Component
export default class SideNav extends Vue {}
</script>
