<template>
  <div class="text-gray-600 m-12">
    <div>
      <h1 class="text-4xl">Dashboard</h1>
      <p>Breadcrumb</p>
    </div>
    <div class="grid grid-cols-2 gap-7">
      <div class="my-8 grid grid-flow-col grid-cols-3 gap-6 content-start">
        <IconCard title="Published Posts" value="18" />
        <IconCard title="Published Products" value="10" />
        <IconCard title="Published Categories" value="4" />
      </div>
      <div class="my-8 grid grid-flow-col grid-cols-3 gap-6 content-start">
        <GraphCard title="Total Orders" :isCurrency="true" value="1250" day="Monday" />
        <GraphCard title="Total Order Number" :isCurrency="false" value="6" day="Monday" />
        <GraphCard title="Total Orders" :isCurrency="false" value="6" day="Monday" />
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