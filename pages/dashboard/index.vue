<template>
  <div class="text-gray-600 m-12">
    <div>
      <h1 class="text-4xl">Dashboard</h1>
      <p>Breadcrumb</p>
    </div>
    <div class="grid grid-cols-2 gap-7">
      <div class="my-8 grid grid-flow-col grid-cols-3 gap-6">
        <IconCard />
        <IconCard />
        <IconCard />
      </div>
      <div class="my-8 grid grid-flow-col grid-cols-3 gap-6">
        <GraphCard />
        <GraphCard />
        <GraphCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconCard from '@/components/administration/dashboard/cards/IconCard.vue'
import GraphCard from '@/components/administration/dashboard/cards/GraphCard.vue'

export default Vue.extend({
  components: {
    GraphCard,
    IconCard,
  },
  layout (context) {
    return 'dashboard'
  }

})
</script>

<style>

</style>