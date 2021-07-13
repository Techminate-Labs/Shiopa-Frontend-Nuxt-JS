<template>
  <div class="flex">
    <div class="flex p-2" v-for="(item, index) in cart.items" :key="index">
      <div class="m-1">
        <img class="w-20" :src="item.img" />
      </div>
      <div class="flex flex-col justify-center m-1">
        <p>{{item.name}}</p>
        <div class="flex">
          <p class="mr-1">{{item.quantity}}</p>
          <span>x</span>
          <p class="ml-1">{{item.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

interface CartObject {
  items: CartItem[]
}

interface CartItem {
  product_id: number,
  quantity: number
}

@Component
export default class Cart extends Vue {

  public cart: CartObject = {
    items: []
  }

  @Emit('closeCart')
  closeCart(): void {
    console.log('closing cart')
  }

  mounted() {
    // this.$store.commit('initialiseStore')
    this.cart = this.$store.state.cart
    console.log(this.cart)
  }

}
</script>

<style scoped>

</style>