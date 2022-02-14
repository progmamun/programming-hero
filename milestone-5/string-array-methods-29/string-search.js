const products = [
  'Dell hardcore i29 200GB laptop',
  'iphone 1TB camera flashlight phone',
  'yellow laptop with black camera',
  '1X59 lenovo commercial yoga laptop',
];

const searching = 'laptop';

// indexOf

const output = [];
for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    output.push(product);
  }
}
console.log(output);
