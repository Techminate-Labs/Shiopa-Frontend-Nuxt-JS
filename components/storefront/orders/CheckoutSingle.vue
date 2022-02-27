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
		<div class="grid grid-cols-12 my-0">
			<div class="col-span-12 md:col-span-6">
				<CheckoutFields />
				<CreateAccount />
			</div>
			<div class="col-span-12 md:col-start-8 lg:col-start-9 md:col-end-13">
				<Order :cart="cart" :checkoutButton="'Checkout'" @handleCheckout="completeOrder" />
			</div>
		</div>
		<!-- shipping address -->
		<div class="flex flex-col flex-nowrap md:grid grid-cols-12 my-0">
			<form action="#" method="POST" class="col-span-5">
				<div class="overflow-hidden sm:rounded-md">
					<h2 class="uppercase text-2xl my-2">Shipping address</h2>
					<label @click="isShippingDifferent = !isShippingDifferent" class="inline-flex items-center">
						<input type="checkbox" class="form-checkbox" :checked="!!isShippingDifferent">
						<span @click="isShippingDifferent = !isShippingDifferent" class="ml-2 cursor-pointer hover:text-gray-800">Ship to a different address?</span>
					</label>
					<div v-if="isShippingDifferent" class="w-3/5">
						<CheckoutFields />
					</div>
				</div>
			</form>
		</div>
		<!-- shipping address -->
		<!-- text area -->
		<label class="block py-2">
			<span class="text-black">Order notes (optional)</span>
			<textarea 
				class="form-textarea mt-2 block border-1 border border-gray-900 w-full" 
				rows="4" 
				placeholder="Notes about your order or special notes for delivery.">
			</textarea>
		</label>
		<!-- end text area -->
	</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'
import Order from '@/components/storefront/orders/Order.vue'
import CheckoutFields from '@/components/storefront/orders/CheckoutFields.vue'
import PasswordField from '@/components/storefront/fields/PasswordField.vue'
import CreateAccount from '~/components/storefront/account/CreateAccount.vue'

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

	public paymentType: string = 'c'
	public amount: number = 12
	public discount: number = 0
	public tax: number = 0
	public payment: number = 12
	public note: string = 'ok'
	public deliveryDate: number = 12
	// public orderItems: array = this.cart.items.map((item) => { 
	// 	return { item_id: item.product_id, qty: item.quantity }
	// })
	public orderItems: object = [{"item_id":1,"qty":1},{"item_id":2,"qty":1}]

	get cartTotal(): number {
		let total = 0
		for (let i = 0; i < this.cart.items.length as boolean; i++) {
			total += parseInt(this.cart.items[i].quantity as any) * parseInt(this.cart.items[i].price as any);
		}
		return total
	}

	public async completeOrder(): Promise<void> {

		// const fd = new FormData()
		// fd.append('payment_type', this.paymentType)
		// fd.append('amount', this.amount.toString())
		// fd.append('discount', this.discount.toString())
		// fd.append('tax', this.tax.toString())
		// fd.append('payment', this.payment.toString())
		// fd.append('note', this.note)
		// fd.append('delivery_date', this.deliveryDate.toString())
		// fd.append('order_items', this.orderItems as any)

		const data = {
			payment_type: this.paymentType,
			amount: this.amount,
			discount: this.discount,
			tax: this.tax,
			payment: this.payment,
			note: this.note,
			delivery_date: this.deliveryDate,
			order_items: JSON.stringify(this.orderItems)
		}

		console.log(data)

		await this.$axios.$post('/api/orderCreate', data)
			.then(res => console.log(res))
	}
}
</script>