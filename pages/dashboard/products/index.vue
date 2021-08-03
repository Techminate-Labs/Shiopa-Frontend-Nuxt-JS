<template>
  <div class="m-8">
      <h1 class="text-4xl mb-4">Products</h1>
      <Table />
  </div>
</template>

<script>
import Table from '@/components/administration/table/Table.vue'

export default {
  layout: 'dashboard',
  components: {
    Table
  }

}
</script>

<style>

</style>