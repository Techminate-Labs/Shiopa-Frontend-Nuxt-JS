<template>
  <div>
    <transition
      enter-active-class="transition-opacity ease-linear duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-300"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <MobileMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
    </transition>
    <NavBar @showMobileMenu="showMobileMenu = true" v-show="!showMobileMenu" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import NavBar from '@/components/storefront/menu/NavBar.vue'
import MobileMenu from '@/components/storefront/menu/MobileMenu.vue'
import Footer from '@/components/storefront/footer/Footer.vue'

export default Vue.extend({
  components: {
    NavBar,
    MobileMenu,
    Footer
  },
  data() {
    return {
      showMobileMenu: false
    }
  },
})
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
