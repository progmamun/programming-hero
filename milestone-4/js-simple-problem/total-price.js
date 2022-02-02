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
console.log(totalPrice);
