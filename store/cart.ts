import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Cart, CartItem } from '@/types/cart/Cart'

@Module
export default class CartModule extends VuexModule {
	cart: Cart = {
		items: [] as Array<CartItem>
	}
	
	get cartObject(){
		return this.cart
	}

	get cartTotalLength() {
		let totalLength = 0
		if (this.cart.items){
			for (let i = 0; i < this.cart.items.length as Boolean; i++) {
				totalLength += parseInt(this.cart.items[i].quantity as any)
			}
			return totalLength
		} else {
			return totalLength
		}
	}

	@Mutation
	addToCart(item: CartItem) {
		const exists = this.cart.items.filter((i: CartItem) => i.product_id === item.product_id)
		if (exists.length) {
			exists[0].quantity = Number(exists[0].quantity) + Number(item.quantity)
		} else {
			this.cart.items.push(item)
		}

		// localStorage.setItem('cart', JSON.stringify(this.state.cart))
	}
	
	@Mutation
	removeFromCart(item: CartItem) {
		const cart: Cart = this.cart
		cart.items = this.cart.items.filter((i: CartItem) => i.product_id !== item.product_id)
		// localStorage.setItem('cart', JSON.stringify(cart))
	}

	@Mutation
	incQTY(item: CartItem) {
		const cart: Cart = this.cart
		const product: any = cart.items.filter((i: CartItem) => i.product_id === item.product_id)
		product[0].quantity += 1
		// localStorage.setItem('cart', JSON.stringify(cart))
	}

	@Mutation
	decQTY(item: CartItem) {
		const cart: Cart = this.cart
		const product: any = cart.items.filter((i: CartItem) => i.product_id === item.product_id)
		if (product.length && product[0].quantity > 0) {
			product[0].quantity -= 1
		}
		// localStorage.setItem('cart', JSON.stringify(cart))
	}

}