<template>
  <div class="text-gray-600 m-12">
    <h1 class="text-4xl">Dashboard</h1>
    <p>Breadcrumb</p>
    <div class="my-8 grid grid-flow-col grid-cols-3 gap-6">
      <IconCard />
      <IconCard />
      <IconCard />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconCard from '@/components/administration/dashboard/cards/IconCard.vue'

export default Vue.extend({
  components: {
    IconCard,
  },
  layout (context) {
    return 'dashboard'
  }

})
</script>

<style>

</style>