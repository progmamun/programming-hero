const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLengths = friends.map(friend => friend.length);

const products = [
  { name: 'water bottle', price: 50, color: 'Yellow' },
  { name: 'mobile phone', price: 15000, color: 'black' },
  { name: 'smart watch', price: 1000, color: 'black' },
  { name: 'Apple phone', price: 105000, color: 'black' },
  { name: 'water glass', price: 10, color: 'white' },
];
const productNames = products.map(product => product.name);
const productNames = products.map(product => product.price);
// const productNames = products.map(product => console.log(product)); // map new return kora
// products.forEach(product => console.log(product)); /// foreach return kora na
