'use strict';

function getFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

let firstFactorial = getFactorial(9);
console.log(`Factorial of 9 is ${firstFactorial}`);

// for loop reverse
function getFactorial2(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

const myFactorial2 = getFactorial2(6);
console.log(myFactorial2);
