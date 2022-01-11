export interface Cart {
	items: Array<CartItem>
}

export interface CartItem {
	product_id: Number | null,
	price: Number | null,
	name: String | null,
	image: String | null,
	quantity: Number | null
}