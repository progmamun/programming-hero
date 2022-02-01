'use strict';

function largestElement(numbers) {
  let largest = [0];

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const ages = [12, 54, 3, 35, 79, 35, 12];
const oldest = largestElement(ages);
console.log('oldest', oldest);
