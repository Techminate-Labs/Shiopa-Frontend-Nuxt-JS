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
                <p class="text-center text-3xl">Register</p>
                <form class="flex flex-col pt-3 md:pt-4" @submit.prevent>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <TextField 
                                @valueChange="(val) => first_name = val"
                                title="First name"
                                name="first_name"
                                placeholder="John" 
                                :isRequired="true" />
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <TextField 
                                @valueChange="(val) => last_name = val"
                                title="Last name"
                                name="last_name"
                                placeholder="Doe" 
                                :isRequired="true" />
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <EmailField 
                                @valueChange="(val) => first_name = val"
                                title="Email"
                                name="email"
                                placeholder="email@example.com" 
                                :isRequired="true" />
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-12">
                           <PasswordField 
                                @valueChange="(val) => password = val"
                                title="Password"
                                name="password"
                                placeholder="examplepassword" 
                                :isRequired="true" />
                        </div>
                        <div class="w-full px-3 mb-12">
                            <PasswordField 
                                @valueChange="(val) => password_confirmation = val"
                                title="Repeat password"
                                name="password_confirmation"
                                placeholder="examplepassword" 
                                :isRequired="true" />
                        </div>
                    </div>
                    <input 
                        @click="register" 
                        type="submit"
                        value="Sign in" 
                        class="bg-black cursor-pointer text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
                </form>
                <div class="text-center pt-8 pb-12 flex flex-nowrap space-x-2">
                    <p>Do you already have an account?</p>
                    <nuxt-link :to="{name: 'login'}" class="underline font-semibold">Log in</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

// components
import TextField from '@/components/storefront/fields/TextField.vue'
import PasswordField from '@/components/storefront/fields/PasswordField.vue'
import EmailField from '@/components/storefront/fields/EmailField.vue'

@Component({
    components: {
        TextField,
        PasswordField,
        EmailField
    }
})
export default class RegisterClient extends Vue {

    public first_name: string = ''
    public last_name: string = ''
    public email: string = 'customer1@example.com'
    public password: string = '123456'
    public password_confirmation: string = '123456'

    public user: Object = {
        name: `${this.first_name} ${this.last_name}`,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
    }

    public test(value: any) {
        console.log(value)
    } 

    public async register(): Promise<any> {
        const registerUser = await fetch('http://localhost:8000/api/registerCustomer', {
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
