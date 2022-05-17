<template>
    <div class="flex min-h-screen bg-white flex-wrap">
        <img 
			class="hidden md:block w-full md:w-2/6 lg:w-1/2 object-cover" 
			:src="'/shiopa-bag_1000px.png'"
			/>
        <div class="w-full md:w-4/6 lg:w-1/2 flex flex-col">
            <h2 class="text-base font-thin text-gray-600 text-center mt-10">
                <nuxt-link to="/">
                    <span class="px-2 hover:text-gray-900">Home</span>
                </nuxt-link>
                /
                <span class="px-2">Account</span>
            </h2>
            <p class="text-2xl font-bold text-gray-800 text-center mt-3">ACCOUNT</p>
            <div class="w-full px-8 md:px-12 lg:px-16 flex flex-col justify-center">
                <div class="w-12 h-1 bg-black rounded mt-2 mb-4 self-center"></div>
                <p class="text-center text-3xl">Register</p>
                <form class="flex flex-col pt-3 md:pt-4" @submit.prevent="register">
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <TextField 
                                @valueChange="(val) => first_name = val"
                                title="First name"
                                name="first_name"
                                v-model="first_name"
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
                                @valueChange="(val) => email = val"
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
                                placeholder="" 
                                :isRequired="true" />
                        </div>
                        <div class="w-full px-3 mb-12">
                            <PasswordField 
                                @valueChange="(val) => password_confirmation = val"
                                title="Repeat password"
                                name="password_confirmation"
                                placeholder="" 
                                :isRequired="true" />
                        </div>
                    </div>
                    <button
						class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer">
						Register
                    </button>
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

// types
import { RegisteredUser } from '@/types/auth/Register'

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
    public email: string = ''
    public password: string = ''
    public password_confirmation: string = ''

    get user(): RegisteredUser {
        return {
            name: this.first_name + this.last_name,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
        }
    }

    public async register(): Promise<any> {
            await this.$axios.$post('/api/registerCustomer', this.user)
                .then( (res) => {
                    this.$axios.$post('/api/loginCustomer', { email: res.user.email, password: this.user.password })
                        .then( (res) => {
                            this.$axios.setToken(res.token, 'Bearer')
                            this.$accessor.session.setUser(res.user)
                
                            this.$router.push('/')
                        })
                        .catch(err => console.log(err))
        
                } )
                .catch(err => console.log(err))

    }
}
</script>
