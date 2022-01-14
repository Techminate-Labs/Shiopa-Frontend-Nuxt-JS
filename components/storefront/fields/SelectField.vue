<template>
  <div>
    <label :for="name" class="capitalize block text-lg font-medium">{{name}}</label>
    <select
      :id="name" 
      :name="name"
      class="p-2 text-sm w-full border border-gray-600"
      :required="!!isRequired">
      <option value="">--Please choose an option--</option>
      <option v-for="(option) in list" :key="option.key" :value="option.key">
        {{ option.value }}
      </option>
      </select>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TextField extends Vue {

  @Prop({ required: true }) readonly name!: String
  @Prop({ required: true }) readonly list!: Array<any>
  @Prop({ required: true }) readonly isRequired!: Boolean

}
</script>