const numbers = [5, 13, 7, 46, 87, 8, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 20);
// console.log(smallNumber);

const products = [
  { name: 'water bottle', price: 50, color: 'Yellow' },
  { name: 'mobile phone', price: 15000, color: 'black' },
  { name: 'smart watch', price: 1000, color: 'black' },
  { name: 'Apple phone', price: 105000, color: 'black' },
  { name: 'water glass', price: 10, color: 'white' },
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color === 'pink'); // filter return array | find just value return korba.
console.log(blacks);

const whiteItem = products.find(product => product.color == 'pink');
console.log(whiteItem);
