const numbers = [4, 6, 8, 10];
const output = [];

const doubleIt = number => number * 2;

for (const number of numbers) {
  // const result = number * 2;
  const result = doubleIt(number);
  output.push(result);
}
// console.log(output);

// const output = numbers.map(doubleIt);
const output = numbers.map(number => number * 2);
console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);

/////// MAP ?????///////
/*
1. loop through each element
2. for each element call the provided function
3. result for each element will be stored in an array

*/
