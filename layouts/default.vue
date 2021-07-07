<template>
  <div>
    <div>
      <transition name="left">
        <MobileMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" :categories="categories" />
      </transition>
      <transition name="opacity">
        <div v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" class="bg-gray-900 w-full h-screen opacity-90 fixed z-30"></div>
      </transition>
    </div>
    <NavBar
      @showMobileMenu="showMobileMenu = true"
      @showCart="showCart = !showCart"
    />
    <Cart v-show="showCart" />
    <Nuxt />
    <Footer :categories="categories" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import NavBar from '@/components/storefront/menu/NavBar.vue'
import MobileMenu from '@/components/storefront/menu/MobileMenu.vue'
import Cart from '@/components/storefront/cart/Cart.vue'
import Footer from '@/components/storefront/footer/Footer.vue'

export default Vue.extend({
  components: {
    NavBar,
    MobileMenu,
    Cart,
    Footer
  },
  data() {
    return {
      showMobileMenu: false,
      showCart: false,
      categories: [],
      cart: []
    }
  },
  async fetch() {
    this.categories = await fetch(
      'https://shopia-backend.herokuapp.com/api/v1/all-categories'
    ).then(res => res.json()).catch(err => console.log(err))
  }
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
.left-enter-active {
  transition: all .3s ease;
}
.left-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition-delay: .2s;
}
.left-enter, .left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
  z-index: 999;
}

.opacity-enter-active {
  transition: all .3s ease;
  transition-delay: .15s;
}
.opacity-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.opacity-enter, .opacity-leave-to {
  opacity: 0;
}
</style>
