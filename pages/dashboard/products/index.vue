<template>
  <div class="p-8 w-full md:w-5/6 lg:w-10/12 xl:w-11/12">
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