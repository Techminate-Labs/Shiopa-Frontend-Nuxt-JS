<template>
	<div class="flex min-h-screen bg-white flex-wrap">
		<img 
			class="hidden md:block w-full md:w-2/6 lg:w-1/2 object-cover" 
			:src="'/shiopa-bag_1000px.png'"
			/>
		<div class="w-full md:w-4/6 lg:w-1/2 absolute top-1/2 right-0 transform -translate-y-1/2">
		
			<p class="text-2xl font-bold text-gray-800 text-center mt-3">Forgot your password?</p>
			<div class="w-full px-8 flex flex-col justify-center">
				
				<form class="flex flex-col pt-2 md:pt-4" @submit.prevent="login">
					<div class="flex flex-col pt-2">
						<EmailField 
							@valueChange="(val) => email = val"
							title="Email"
							name="email" 
							placeholder="email@example.com" 
							:isRequired="true" />
					</div>
					<button
						class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer">
						Reset the password
					</button>
				</form>
				<div class="text-center pt-8 pb-12 flex flex-nowrap space-x-2">
					<p>Don't have an account?</p>
                    <nuxt-link :to="{name: 'register'}" class="underline font-semibold">Register</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

// components
import EmailField from '@/components/storefront/fields/EmailField.vue'
import PasswordField from '@/components/storefront/fields/PasswordField.vue'

@Component({
	components: {
		EmailField,
		PasswordField
	}
})
export default class Register extends Vue {

	public email: string = ''
    public password: string = ''

    get user(): Object {
        return {
            email: this.email,
            password: this.password
        }
    }

	public async login(): Promise<any> {

		const loginUser = await this.$axios.$post('/api/loginCustomer', this.user)

		this.$axios.setToken(loginUser.token, 'Bearer')
		this.$accessor.session.setUser(loginUser.user)

		this.$router.push('/')
	}

}
</script>
