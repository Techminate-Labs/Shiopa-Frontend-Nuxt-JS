<template>
	<label :for="name" class="block text-lg font-medium">
		<span class="capitalize">{{title}}</span>
		<span v-show="isRequired" class="float-right text-red-400 text-xs">(required) *</span>
		<input
			@input="$emit('valueChange', value)"
			type="password" 
			:id="name" 
			:name="name"
			:placeholder="placeholder"
			:required="!!isRequired"
			v-model="value"
			/>
	</label>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PasswordField extends Vue {

	@Prop({ required: true }) readonly name!: string
	@Prop({ required: true }) readonly title!: string
	@Prop({ required: true }) readonly placeholder!: string
	@Prop({ required: true }) readonly isRequired!: boolean

	public value: String = ''

}
</script>