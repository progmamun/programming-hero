'use strict';

// const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
// const min = Math.min(...arr);
// console.log(min);

let array = [2, 3, -1, -9, 8];
let minvalue = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] < minvalue) {
    minvalue = array[i];
  }
}
console.log(minvalue);
