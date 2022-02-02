'use strict';

const products = [
  { name: 'laptop', price: 50000 },
  { name: 'Shirt', price: 500 },
  { name: 'Phone', price: 15000 },
  { name: 'Watch', price: 3000 },
];

let totalPrice = 0;
for (const product of products) {
  totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);

const carts = [
  { name: 'laptop', price: 50000, quantity: 1 },
  { name: 'Shirt', price: 500, quantity: 4 },
  { name: 'Phone', price: 15000, quantity: 1 },
  { name: 'Watch', price: 3000, quantity: 1 },
];
let cartTotal = 0;
for (const product of carts) {
  const productTotal = product.price * product.quantity;
  cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
