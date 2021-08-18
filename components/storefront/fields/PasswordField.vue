<template>
  <div>
    <label :for="name" class="capitalize block text-lg font-medium">{{title}}</label>
    <input
      type="password" 
      :id="name" 
      :name="name"
      :placeholder="placeholder" 
      class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800"
      :required="!!isRequired"
    />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PasswordField extends Vue {

  @Prop({ required: true }) readonly name!: string
  @Prop({ required: true }) readonly title!: string
  @Prop({ required: true }) readonly placeholder!: string
  @Prop({ required: true }) readonly isRequired!: boolean

}
</script>