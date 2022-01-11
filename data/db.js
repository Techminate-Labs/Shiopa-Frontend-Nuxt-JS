module.exports = function() {
	return Object.assign({},
		require('./seeds/products.json'),
		require('./seeds/sliders.json'),
		require('./seeds/categories.json'));
	};