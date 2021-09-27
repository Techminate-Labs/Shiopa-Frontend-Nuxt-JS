<template>
  <div>
    <label :for="name" class="capitalize block text-lg font-medium">{{title}}</label>
    <input
      type="text" 
      :id="name" 
      :name="name"
      :placeholder="placeholder" 
      class="p-2 text-sm w-full border border-gray-600"
      :required="!!isRequired"
    />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TextField extends Vue {

  @Prop({ required: true }) readonly name!: string
  @Prop({ required: true }) readonly title!: string
  @Prop({ required: true }) readonly placeholder!: string
  @Prop({ required: true }) readonly isRequired!: boolean

}
</script>