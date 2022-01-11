<template>
  <div class="flex flex-col">
    <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
    <select id="shipping" name="shipping" required>
      <option value="">--Please choose an option--</option>

    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ShippingSelect extends Vue {}
</script>