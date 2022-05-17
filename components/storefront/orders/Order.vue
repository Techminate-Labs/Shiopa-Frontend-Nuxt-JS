<template>
	<div id="summary" class="w-full">
		<h1 class="font-thin text-4xl border-b pb-8 text-right">Your order</h1>
		<ul>
			<li class="flex border-b-2 border-gray-100 justify-between py-6" v-for="(item) in cart.items" :key="item.product_id">
				<div class="w-15">
					<img class="h-20" :src="item.image" :alt="item.description" />
				</div>
				<span class="font-semibold text-sm self-center">{{ item.name }}</span>
				<span class="font-semibold text-sm self-center">x {{ item.quantity }}</span>
				<span class="font-semibold text-sm self-center">${{ Number(item.price * item.quantity).toFixed(2) }}</span>
			</li>
		</ul>
		<div class="py-5">
			<SelectField
				@valueChange="(val) => $accessor.order.setShippingPrice(val)"
				name="Shipping"
				:list="shippingList"
				:value="$accessor.order.shippingPrice"
				:isRequired="true" />
		</div>
		<div class="py-5 flex">
			<TextField
				@valueChange="(val) => $accessor.order.setDiscountCode(val)"
				name="discount"
				title="discount"
				:value="$accessor.order.order.discountCode"
				placeholder="Enter a coupon code"
				:isRequired="false" />
			<!-- <button class="bg-black hover:bg-gray-800 px-5 py-2 h-10 mt-8 ml-3 text-sm text-white uppercase">Verify</button> -->
		</div> 
		<div class="border-t mt-8">
			<div class="flex font-semibold justify-between py-6 text-sm uppercase">
				<span>Total cost</span>
				<span>${{cartTotal}}</span>
			</div>
			<a v-if="isConnected" class="bg-black font-semibold hover:bg-gray-800 py-3 px-8 text-sm text-white uppercase w-full">
				Pay and complete the order
			</a>
			<button class="bg-black font-semibold hover:bg-gray-800 py-3 px-8 text-sm text-white uppercase w-full">
				{{ checkoutButton }}
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

// components
import SelectField from '@/components/storefront/fields/SelectField.vue'
import TextField from '@/components/storefront/fields/TextField.vue'

interface cartObject {
	items: CartItem[]
}

interface CartItem {
	product_id: Number | null,
	price: Number | null,
	name: String | null,
	img: String | null,
	quantity: Number | null
}

@Component({
	components: {
		SelectField,
		TextField
	}
})
export default class Order extends Vue {

	@Prop({ required: true }) readonly cart!: cartObject
	@Prop({ required: true }) readonly checkoutButton!: string

	public isConnected = false
	public discount = null

	public shippingList: Array<Object> = [
		{ key: 0, value: 'Free Shipping' },
	]

	get cartTotal(): Number {
		let total = 0
		for (let i = 0; i < this.cart.items.length as boolean; i++) {
			total += parseInt(this.cart.items[i].quantity as any) * parseInt(this.cart.items[i].price as any);
		}
		return Number(total.toFixed(2));
	}

}
</script>
