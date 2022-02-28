export interface TOrder {
	payment_type: string,
	amount: number,
	discount: number | null,
	tax: number,
	payment: number,
	note: string,
	delivery_date: number,
	order_items: Array<OrderItems>
}

interface OrderItems {
	item_id: number,
	qty: number
}