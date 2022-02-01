'use strict';

const numbers = [44, 23, 34, 32, 54, 5, 79];
let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   const element = number[i];
//   sum = sum + element;
// }
// console.log(sum);

function arrayTotal(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

const total = arrayTotal([23, 53, 56, 22]);
console.log(total);
