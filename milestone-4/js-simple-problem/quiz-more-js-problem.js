'use strict';

// let sum = 0;
// for (let i = 0; i <= 3; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// function inchToFeet(inch) {
//   var feet = inch / 12;
//   return feet;
// }

function leapYear(year) {
  const reminder = year % 4;
  if (reminder == 0) {
    return true;
  } else {
    return false;
  }
}
