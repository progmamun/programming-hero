'use strict';

const business = 560;
const minister = 500;
const army = 300;

let max = Math.max(business, minister, army);
// console.log('Largest is ', max);

function findLargest(first, second, third) {
  if (first > second) {
    return first;
  } else if (second > third) {
    return second;
  } else {
    return third;
  }
}
const largest = findLargest(250, 900, 560);
console.log(`Largest is ${largest}`);
