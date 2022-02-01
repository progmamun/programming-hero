'use strict';

const business = 560;
const minister = 500;
const army = 300;

let min = Math.min(business, minister, army);
// console.log('Smallest is ', min);

function findSmallest(first, second, third) {
  if (first < second) {
    return first;
  } else if (second < third) {
    return second;
  } else {
    return third;
  }
}
const smallest = findSmallest(250, 900, 560);
console.log(`Smallest is ${smallest}`);
