<template>
	<label :for="name" class="block text-lg font-medium">
		<span class="capitalize">{{title}}</span>
		<span v-show="isRequired" class="float-right text-red-400 text-xs">(required) *</span>
		<input
		    class="p-2 text-sm w-full border border-gray-600"
			@input="$emit('valueChange', editValue)"
			type="text" 
			:id="name" 
			:name="name"
			:placeholder="placeholder"
			:required="!!isRequired"
			v-model="editValue"
		/>
	</label>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TextField extends Vue {

	@Prop({ required: true }) readonly name!: string
	@Prop({ required: true }) readonly title!: string
	@Prop({ required: true }) readonly placeholder!: string
	@Prop({ required: true }) readonly isRequired!: boolean
	@Prop() value!: any

	public fieldValue = this.value

	get editValue(): any {
		return this.fieldValue
	}

	set editValue(val) {
		this.fieldValue = val
	}


}
</script>