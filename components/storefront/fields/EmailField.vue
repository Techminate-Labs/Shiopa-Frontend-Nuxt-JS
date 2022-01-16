<template>
	<div>
		<label :for="name" class="capitalize block text-lg font-medium">{{title}}</label>
		<input
			@input="$emit('valueChange', value)"
			type="email" 
			:id="name" 
			:name="name"
			:placeholder="placeholder" 
			:required="!!isRequired"
			/>
	</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class EmailField extends Vue {

	@Prop({ required: true }) readonly name!: string
	@Prop({ required: true }) readonly title!: string
	@Prop({ required: true }) readonly placeholder!: string
	@Prop({ required: true }) readonly isRequired!: boolean

	public value: String = ''

}
</script>