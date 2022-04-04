<template>
	<div class="container mx-auto mt-5">
		<div class="w-full">
			<div class="text-xl font-thin italic text-gray-600 text-center mt-10">
				<NuxtLink to="/">
					<span class="px-2 hover:text-gray-900">Home</span>
				</NuxtLink>/<span class="px-2 text-gray-900">Checkout</span>
			</div>
			<h1 class="text-4xl font-semibold text-gray-900 text-center mt-5">CHECKOUT</h1>
			<div class="w-full md:w-2/2 flex flex-col items-center text-center justify-center">
				<div class="w-12 h-1 bg-black rounded mt-2 mb-4"></div>
			</div>
		</div>
		<div class="mb-2">
			<div class="relative flex shadow-sm z-10 bg-gray-200 hover:bg-gray-300 px-4 h-10 cursor-pointer" @click="showLoginForm = !showLoginForm">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 self-center mr-2" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
				</svg>
				<div class="self-center">
					<span>Returning customer?</span>
				</div>
			</div>
			<div v-if="showLoginForm" class="mx-auto p-4 bg-gray-100">
				<span class="text-gray-600">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing & Shipping section.</span>
				<div class="grid grid-cols-8 gap-6">
					<div class="col-span-4 sm:col-span-3">
						<label for="first-name" class="block text-lg font-medium text-gray-800">Users name or Email<span class="">*</span></label>
						<input type="text" name="first-name" id="first-name" placeholder="User name" autocomplete="given-name" class="p-2 text-sm w-full border border-gray-600">
					</div>
					<div class="col-span-4 sm:col-span-3">
						<label for="password" class="block text-lg font-medium text-gray-800">Password</label>
						<input type="text" name="password" id="password" autocomplete="password" placeholder="password" class="p-2 text-sm w-full border border-gray-600">
					</div>
				</div>
				<div class="mx-auto mt-4">
					<button class="bg-black hover:bg-gray-800 px-5 py-2 h-10 mt-8 ml-3 text-sm text-white uppercase">
						Log In
					</button>
					<label class="inline-flex items-center">
						<input type="checkbox" class="form-checkbox">
						<span class="ml-2">Remember me</span>
					</label>
				</div>
				<div class="mx-auto mt-5">
					<span class="py-10 ml-2"><nuxt-link to="/">Lost your Password?</nuxt-link></span>
				</div>
			</div>
		</div>
		<div class="mb-2">
			<div class="relative flex shadow-sm z-10 bg-gray-200 hover:bg-gray-300 px-4 h-10 cursor-pointer" @click="showCouponForm = !showCouponForm">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 self-center mr-2" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
				</svg>
				<div class="self-center">
					<span>Have a coupon?</span>
				</div>
			</div>
			<div v-if="showCouponForm" class="mx-auto p-4 bg-gray-100">
				<span class="mt-5 px-5 my-5 text-gray-600">If you have a coupon code, please apply it below.</span>
				<section class="text-gray-600 body-font">
					<div class="container px-0 py-5 mx-auto">
						<div class="grid grid-cols-8 gap-6 ml-5">
							<div class="col-span-4 sm:col-span-3">
								<input type="text" name="coupon code" id="coupon code" autocomplete="given-name" placeholder="Coupon code" class="p-2 text-sm w-full border border-gray-600">
							</div>
							<button class="bg-black hover:bg-gray-800 border border-gray-700 w-25 h-10 text-sm text-white hover:text-white  uppercase">Apply coupon</button>
						</div>
					</div>
				</section>
			</div>
		</div>
		<form class="grid grid-cols-12 my-0" @submit.prevent="submitForm">
			<div class="col-span-12 md:col-span-6">
				<h2>Billing information</h2>
				<CheckoutFields :fields="billingFields" />
				<CreateAccount v-show="!$accessor.session.getUser" />
			</div>
			<div class="col-span-12 md:col-start-8 lg:col-start-9 md:col-end-13">
				<Order :cart="cart" :checkoutButton="'Checkout'" />
			</div>
			<div class="col-span-12">
				<h2 class="uppercase text-2xl my-2">Shipping address</h2>
				<label @click="isShippingDifferent = !isShippingDifferent">
					<input type="checkbox" class="form-checkbox" :checked="!!isShippingDifferent">
					<span @click="isShippingDifferent = !isShippingDifferent" class="ml-2 cursor-pointer hover:text-gray-800">Ship to a different address?</span>
				</label>
				<div v-if="isShippingDifferent" class="w-3/5">
					<CheckoutFields :fields="shippingFields" />
				</div>
			</div>
		</form>
		<!-- shipping address -->
		<!-- shipping address -->
		<!-- text area -->
		<label class="block py-2">
			<span class="text-black">Order notes (optional)</span>
			<textarea 
				rows="4" 
				class="p-2 text-sm w-full border border-gray-600"
				placeholder="Notes about your order or special notes for delivery.">
			</textarea>
		</label>
		<!-- end text area -->
	</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

// components
import Order from '@/components/storefront/orders/Order.vue'
import CheckoutFields from '@/components/storefront/orders/CheckoutFields.vue'
import PasswordField from '@/components/storefront/fields/PasswordField.vue'
import CreateAccount from '@/components/storefront/account/CreateAccount.vue'

// types
import TCheckoutFields from '@/types/order/CheckoutFields'
import { TOrder } from '@/types/order/Order'

interface cartObject {
  items: CartItem[]
}

interface CartItem {
  product_id: number | null,
  price: string | null,
  name: string | null,
  img: string | null,
  quantity: number | null
}

@Component({
  components: {
    Order,
		CheckoutFields,
		PasswordField,
		CreateAccount
  }
})
export default class CheckoutSingle extends Vue {

	@Prop({ required: true }) readonly cart!: cartObject

	public showLoginForm: boolean = false
	public showCouponForm: boolean = false
	public isShippingDifferent: boolean = false

	public billingFields: TCheckoutFields = {
		firstName: 'John',
		lastName: 'Doe',
		companyName: 'ACME Inc.',
		streetAddress: '1001 Sunshine Street',
		optionalInfo: '',
		city: 'Los Angeles',
		state: 'CAL',
		country: 'US',
		zipCode: 451871,
		email: 'test@example.com',
		phone: '+33 6 77 02 66 69'
	}
	
	public shippingFields: TCheckoutFields = {
		firstName: 'John',
		lastName: 'Doe',
		companyName: 'ACME Inc.',
		streetAddress: '1001 Sunshine Street',
		optionalInfo: '',
		city: 'Los Angeles',
		state: 'CAL',
		country: 'US',
		zipCode: 451871,
		email: 'test@example.com',
		phone: '+33 6 77 02 66 69'
	}

	orderData: TOrder = {
		payment_type: 'cash',
		amount: 0,
		discount: 0,
		tax: 0,
		payment: 0,
		note: '',
		delivery_date: 0,
		order_items: []
	}
	// public orderItems: object = [{"item_id":1,"qty":1},{"item_id":2,"qty":1}]

	get cartTotal(): number {
		let total = 0
		for (let i = 0; i < this.cart.items.length as boolean; i++) {
			total += parseInt(this.cart.items[i].quantity as any) * parseInt(this.cart.items[i].price as any);
		}
		return total
	}

	public async submitForm(): Promise<void>{
	
		// non hardcoded
		let orderItems = this.$accessor.cart.cart.items.map((item: any) => { 
			return { item_id: item.product_id, qty: item.quantity }
		})

		// hardcoded
		// let orderItems = [{"item_id":1,"qty":1},{"item_id":2,"qty":1}]

		this.orderData = {
			payment_type: 'cash',
			amount: this.$accessor.cart.cartTotal,
			discount: 0,
			tax: 0,
			payment: this.$accessor.cart.cartTotal - 0 + 0,
			note: '',
			delivery_date: 12,
			order_items: JSON.stringify(orderItems) as any
		}

		await this.$axios.$post('/api/orderCreate', this.orderData)
			.then(res => console.log(res))
	}

}
</script>