<template>
	<div class="overflow-hidden sm:rounded-md">
		<label @click="createAccount = !createAccount" class="inline-flex items-center">
			<input type="checkbox" class="form-checkbox" :checked="!!createAccount">
			<span @click="createAccount = !createAccount" class="ml-2 cursor-pointer text-gray-900">Create an Account?</span>
		</label>
		<div v-if="createAccount" class="grid grid-cols-6 gap-6 mt-4">
			<div class="col-span-3">
			<PasswordField name="password" title="Password" placeholder="Choose a password" :isRequired="false"/>
			</div>
			<div class="col-span-3">
			<PasswordField name="password-repeat" title="Repeat Password" placeholder="Repeat the password" :isRequired="false"/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import PasswordField from '@/components/storefront/fields/PasswordField.vue'

@Component({
	components: {
		PasswordField,
	}
})
export default class CreateAccount extends Vue {

	public createAccount: boolean = true

}
</script>
