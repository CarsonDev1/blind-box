export const fakeProduct = {
	_id: '1',
	name: 'Awesome Smartwatch',
	media: {
		items: [
			{
				_id: 'img1',
				image: {
					url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/357/932/products/470211240-122196565034224229-1179697226649140363-n.jpg?v=1739167330567',
				},
			},
			{
				_id: 'img2',
				image: {
					url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/357/932/products/470242273-122196564818224229-5587093129055374712-n.jpg?v=1739167357847',
				},
			},
			{
				_id: 'img3',
				image: {
					url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/357/932/products/470224753-122196564854224229-7785731902764634689-n.jpg?v=1739167588913',
				},
			},
		],
	},
	price: {
		price: 199.99,
		discountedPrice: 149.99,
		currency: 'USD',
	},
	discount: {
		value: 25,
	},
	stock: {
		quantity: 15,
	},
	variants: [
		{ id: 'v1', name: 'Black', stock: 5 },
		{ id: 'v2', name: 'Silver', stock: 10 },
	],
	productOptions: [{ id: 'o1', name: 'Size', values: ['Small', 'Medium', 'Large'] }],
	additionalInfoSections: [
		{
			title: 'Warranty Conditions',
			description: '<p>1-year limited warranty included.</p>',
		},
		{
			title: 'Promotions',
			description: '<p>Free shipping on orders over $100.</p>',
		},
	],
};
