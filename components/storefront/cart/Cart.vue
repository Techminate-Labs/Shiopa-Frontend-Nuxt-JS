<template>
  <div>
    <p class="z-40 w-20 h-20">CART</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

@Component
export default class Cart extends Vue {

  @Emit('closeCart')
  closeCart(): void {
    console.log('closing cart')
  }

}
</script>

<style scoped>

</style>