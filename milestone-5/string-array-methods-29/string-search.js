const products = [
  'Dell hardcore i29 200GB laptop',
  'iphone 1TB camera flashlight phone',
  'yellow laptop with black camera',
  '1X59 lenovo commercial yoga laptop',
];

const searching = 'dell';

//========== indexOf ==========//

// const output = [];
for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    // output.push(product);
  }
}
// console.log(output);

//============ includes()==========//
// const output = [];
for (const product of products) {
  if (product.toLowerCase().includes(searching.toLowerCase())) {
    // output.push(product);
  }
}
// console.log(output);

//==========stars with()===========//
const output = [];
for (const product of products) {
  if (product.toLowerCase().startsWith(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
