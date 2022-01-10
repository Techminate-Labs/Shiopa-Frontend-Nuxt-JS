export interface ProductSeed {
	id: Number,
	category_id: Number,
	section: String,
	name: String,
	slug: String,
	image: String,
	price: Number,
	stock: Number,
	description: String,
	additional_info: String
}

export interface Product {
	id: Number,
	additional_info: String,
	available_to_purchase: Boolean,
	description: String,
	discount_price: String,
	get_absolute_url: String,
	get_thumbnail: String,
	images: Array<String>,
	main_image_url: String,
	name: String
	price: Number
	sku: String
	slug: String
}