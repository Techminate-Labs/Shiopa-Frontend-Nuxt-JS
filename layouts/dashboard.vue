<template>
  <div class="bg-gray-100">
    <NavBar />
    <SideNav />
    <h1>Footer</h1>
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