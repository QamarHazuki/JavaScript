const bill = [
	{item: 'Laptop', quantity: 2, price: 800},
	{item: 'Monitor', quantity: 1, price: 150},
	{item: 'Mouse', quantity: 4, price: 25},
];
function calculateTotalSales(list) {
	let ans = 0;
	for (const object of list) {
		ans += object.price * object.quantity;
	}

	return ans;
}

console.log(calculateTotalSales(bill));

const orders = [
	{item: 'Espresso', quantity: 2, price: 3.5},
	{item: 'Latte', quantity: 3, price: 4},
	{item: 'Cappuccino', quantity: 1, price: 4.5},
];
function generateReceipt(order) {
	const grandTotal = calculateTotalSales(order);
	console.log('Receipt:');
	console.log('-------------------------');
	for (const element of order) {
		const itemTotal = element.quantity * element.price;
		console.log(`${element.item} - Quantity: ${element.quantity}, Price: $${element.price}, Total: $${itemTotal}`);
	}

	console.log('----------------------');
	console.log(`Grand Total: $${grandTotal}`);
}

generateReceipt(orders);

const passwords = ['Password123', 'short', 'ValidPass123', 'too_long_password_example', '12345'];

function validatePasswords(array) {
	const regex = /^[a-zA-Z\d]{8,20}$/;
	for (const element of array) {
		if (regex.test(element)) {
			console.log(`${element} is valid.`);
		} else {
			console.log(`${element} is invalid.`);
		}
	}
}

validatePasswords(passwords);

const products = [
	{product: 'Laptop', stock: 5},
	{product: 'Headphones', stock: 0},
	{product: 'Smartphone', stock: 3},
];
function checkStockLevels(array) {
	let ans = '';
	for (const element of array) {
		ans += `${element.product}`;
		ans += element.stock ? `(${element.stock}): In Stock.` : '(0): Out of Stock.';
		ans += '\n';
	}

	console.log(ans);
}

checkStockLevels(products);
