const products = [
  { name: 'laptop', price: 3500, brand: 'dell', color: 'silver' },
  { name: 'laptop', price: 4500, brand: 'asus', color: 'golden' },
  { name: 'phone', price: 7500, brand: 'hp', color: 'red' },
  { name: 'watch', price: 6500, brand: 'apple', color: 'black' },
  { name: 'tv', price: 3700, brand: 'walton', color: 'white' },
  { name: 'AC', price: 3900, brand: 'lenovo', color: 'green' },
];
// 1. Map
const brands = products.map(product => product.brand);

// 2. ForEach
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {});

// 3. Filter
const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);

// 4. find
const special = products.find(p => p.name.includes('n'));
console.log(special);
