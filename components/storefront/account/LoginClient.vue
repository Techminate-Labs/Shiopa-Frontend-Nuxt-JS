<template>
	<div class="flex min-h-screen bg-white flex-wrap">
		<img 
			class="hidden md:block w-full md:w-1/2 object-cover" 
			:src="'/shiopa-bag_1000px.png'"
			/>
		<div class="w-full md:w-1/2 flex flex-col">
			<h2 class="text-base font-thin text-gray-600 text-center mt-10">
				<nuxt-link to="/">
					<span class="px-2 hover:text-gray-900">Home</span>
				</nuxt-link>
				/
				<span class="px-2">Account</span>
			</h2>
			<p class="text-2xl font-bold text-gray-800 text-center mt-3">ACCOUNT</p>
			<div class="w-full px-8 flex flex-col justify-center">
				<div class="w-12 h-1 bg-black rounded mt-2 mb-4 self-center"></div>
				<p class="text-center text-3xl">Login</p>
				<form class="flex flex-col pt-2 md:pt-4" @submit.prevent>
					<div class="flex flex-col pt-2">
						<EmailField 
							@valueChange="(val) => email = val"
							title="Last name"
							name="last_name" 
							placeholder="email@example.com" 
							:isRequired="true" />
					</div>
					<div class="flex flex-col pt-4">
						<PasswordField 
							@valueChange="(val) => password = val"
							title="Password"
							name="password"
							placeholder="examplepassword" 
							:isRequired="true" />
					</div>
					<div class="flex justify-between"><label class="block text-gray-500 font-bold my-4"><input type="checkbox" class="leading-loose text-pink-600"> <span class="py-2 text-sm text-gray-600 leading-snug">Remember Me</span></label> <label class="block text-gray-500 font-bold my-4"><a href="#"
						class="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"><span>Forgot Password?</span></a></label>
					</div> 
					<input 
						type="submit" 
						value="Log In" 
						class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer">
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

@Component({
	components: {
		EmailField
	}
})
export default class Register extends Vue {

	public email: string = 'customer1@example.com'
    public password: string = '123456'

    public user: Object = {
        email: this.email,
        password: this.password,
    }

	public async login(): Promise<any> {
        const loginUser = await fetch('http://localhost:8000/api/loginCustomer', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.user) // body data type must match "Content-Type" header
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

}
</script>
