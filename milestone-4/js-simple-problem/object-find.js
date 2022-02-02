'use strict';
const phones = [
  { name: 'samsung s10 pro', price: 65000, camera: 20, storage: 64 },
  { name: 'Shoumi Mi10 pro', price: 55000, camera: 25, storage: 32 },
  { name: 'Iphone 13 pro', price: 125000, camera: 20, storage: 124 },
  { name: 'Nokia 1100', price: 3000, storage: 3 },
  { name: 'Walton s11 pro', price: 25000, camera: 20, storage: 64 },
];

let cheapest = phones[0];
for (const phone of phones) {
  // compare price only
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
console.log(cheapest);
