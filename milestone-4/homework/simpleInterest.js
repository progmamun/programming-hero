'use strict';

// p*n*r/100;
let calculateInterest = function (total, years, ratePercent, roundToPlaces) {
  let interestRate = ratePercent / 100 + 1;
  return (total * Math.pow(interestRate, years)).toFixed(roundToPlaces);
};

let answer = calculateInterest(915, 13, 2, 2);
console.log(answer);
