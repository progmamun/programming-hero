'use strict';

// let a = 5;
// let b = 8;
// let c = 4;
// let d = 6;

// let highest = Math.max(a, b, c, d);

// var a = 2;
// var b = 3;

// if (a < b) {
//   console.log(`Hello`);
// }

// function add(a, b) {
//   return a + b;
// }

// let first = 'Rafsan';
// let second = 'Samira';

// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);
// let result = 100 + Math.random() * 100;

// const output = Math.random() * 100;
// const rounded = Math.floor(output);
// console.log(output);

// for (let i = 0; i <= 30; i++) {
//   const output = Math.random() * 20;
//   const rounded = Math.round(output);
//   console.log(rounded);
// }

let sentence = 'I am hardworking. I am determined. I will be a web developer.';
let count = 0;
for (let i = 0; i < sentence.length; i++) {
  let letter = sentence[i];
  if (letter == 'a') {
    count++;
  }
}
console.log(count);
