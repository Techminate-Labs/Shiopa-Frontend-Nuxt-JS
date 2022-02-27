<template>
	<label :for="name" class="block text-lg font-medium">
		<span class="capitalize">{{name}}</span>
		<span v-show="isRequired" class="float-right text-red-400 text-xs">(required) *</span>
		<select
			class="p-2 text-sm w-full border border-gray-600"
			@change="$emit('valueChange', editValue)"
			:id="name" 
			:name="name"
			v-model="editValue"
			:required="!!isRequired">
			<option value="">--Please choose an option--</option>
			<option v-for="(option) in list" :key="option.key" :value="option.key">
			{{ option.value }}
			</option>
		</select>
	</label>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TextField extends Vue {

	@Prop({ required: true }) readonly name!: String
	@Prop({ required: true }) readonly list!: Array<any>
	@Prop({ required: true }) readonly isRequired!: Boolean
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