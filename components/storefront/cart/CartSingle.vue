<template>
  <div class="container mx-auto my-10">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 md:col-span-6">
        <CartTable :cart="cart" :columns="columns" />
      </div>
      <div class="col-span-12 md:col-start-8 lg:col-start-9 md:col-end-13">
        <Order :cart="cart" :checkoutButton="'Go to checkout'" :url="'/checkout'"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'
import Order from '@/components/storefront/orders/Order.vue'
import CartTable from '@/components/storefront/cart/CartTable.vue'

interface cartObject {
  items: CartItem[]
}

interface CartItem {
  product_id: number | null,
  price: string | null,
  name: string | null,
  img: string | null,
  quantity: number | null
}

@Component({
  components: {
    Order,
    CartTable
  }
})
export default class CartSingle extends Vue {

  @Prop({ required: true }) readonly cart!: cartObject

  public columns: string[] = ['details', 'quantity', 'price', 'total']

  public localData = {}
  // get cartTotal(): number {
  //   let total = 0
  //   for (let i = 0; i < this.cart.items.length as boolean; i++) {
  //       total += parseInt(this.cart.items[i].quantity as any) * parseInt(this.cart.items[i].price as any);
  //   }
  //   return total
  // }

  // sort(s: string): void {
  //   //if s == current sort, reverse
  //   if(s === this.currentSort) {
  //     this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
  //   }
  //   this.currentSort = s;
  // }

  public deleteItem(item: CartItem): void {
    this.localData = {
      product_id: item.product_id,
      price: item.price,
      name: item.name,
      img: item.img,
      quantity: item.quantity
    }
    this.$store.dispatch('removeFromCart', this.localData)
  }

  public incQTY(item: CartItem): void {
    this.localData = {
      product_id: item.product_id,
      price: item.price,
      name: item.name,
      img: item.img,
      quantity: item.quantity
    }
    this.$store.dispatch('incQTY', this.localData)
  }

  public decQTY(item: CartItem): void {
    this.localData = {
      product_id: item.product_id,
      price: item.price,
      name: item.name,
      img: item.img,
      quantity: item.quantity
    }
    this.$store.dispatch('decQTY', this.localData)
  }

}
</script>

<style>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

@media (max-width: 640px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
    
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}

</style>