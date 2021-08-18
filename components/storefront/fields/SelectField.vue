<template>
  <div>
    <label :for="name" class="capitalize block text-lg font-medium">{{name}}</label>
    <select
      :id="name" 
      :name="name"
      class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800"
      :required="!!isRequired">
      <option value="">--Please choose an option--</option>
      <option v-for="(option, index) in list" :key="index" :value="option">
        {{option}}
      </option>
      </select>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TextField extends Vue {

  @Prop({ required: true }) readonly name!: string
  @Prop({ required: true }) readonly list!: []
  @Prop({ required: true }) readonly isRequired!: boolean

}
</script>