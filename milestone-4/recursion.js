'use strict';

function consoleNumber(i) {
  if (i > 5) {
    return;
  }
  console.log(i);
  consoleNumber(i + 1);
}
consoleNumber(1);

// sum
function sum(i) {
  if (i == 1) {
    return 1;
  }
  return i + sum(--i);
}
console.log(sum(5));
