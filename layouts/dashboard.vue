<template>
  <div class="bg-gray-100">
    <NavBar />
    <div class="flex flex-wrap">
      <SideNav />
      <Nuxt class="p-8 w-full md:w-5/6 lg:w-10/12 xl:w-11/12" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/administration/menus/top/NavBar.vue'
import SideNav from '@/components/administration/menus/sidebar/SideNav.vue'
export default {
  components: {
    NavBar,
    SideNav,
  },

}
</script>

<style>

</style>