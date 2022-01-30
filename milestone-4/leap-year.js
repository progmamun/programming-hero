'use strict';

// function leapYear(year) {
//   return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
// }

// program to check leap year
function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    // console.log(year + ' is a leap year');
    return true;
  } else {
    // console.log(year + ' is not a leap year');
    return false;
  }
}

// take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);
// const myYear = 2024;
const myYear = 2100;
const isMyYear = checkLeapYear(myYear);
console.log(`Is my Leap Year: ${isMyYear}`);
