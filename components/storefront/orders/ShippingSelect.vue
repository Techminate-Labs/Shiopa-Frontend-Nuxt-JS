<template>
  <div class="flex flex-col">
    <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
    <select id="shipping" name="shipping" required>
      <option value="">--Please choose an option--</option>
      <option value="0">Free Shipping</option>
      <option value="10">Standard Shipping - 10$</option>
      <option value="10">Premium Shipping - 20$</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ShippingSelect extends Vue {



}
</script>