'use strict';

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log(`Is my Number Even: ${isMyNumberEven}`);

// is odd function
function isOdd(number) {
  if (number % 2 != 0) {
    return true;
  }
  return false;
}
const myNumber2 = 1445;
const isMyNumberOdd = isOdd(myNumber2);
console.log(`Is her Number Odd: ${isMyNumberOdd}`);
