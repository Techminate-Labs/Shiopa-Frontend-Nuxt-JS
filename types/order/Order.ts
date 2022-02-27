export interface TOrder {
	paymentType: string,
	amount: number,
	discount: number | null,
	tax: number,
	payment: number,
	note: string,
	deliveryDate: number,
	orderItems: Array<OrderItems>
}

interface OrderItems {
	item_id: number,
	qty: number
}