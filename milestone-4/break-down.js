const products = [
  { name: 'samsung s10 pro', price: 65000, camera: 20, storage: 64 },
  { name: 'Shoumi Mi10 pro', price: 55000, camera: 25, storage: 32 },
  { name: 'Iphone 13 pro', price: 125000, camera: 20, storage: 124 },
  { name: 'Nokia 1100', price: 3000, storage: 3 },
  { name: 'Walton s11 pro', price: 25000, camera: 20, storage: 64 },
];

for (const product of products) {
  if (product.price < 5000) {
    break;
  }
  console.log(product);
}

for (const product of products) {
  if (product.price < 10000) {
    continue;
  }
  console.log(product);
}
