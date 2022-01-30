'use strict';
// mile to km
function mileToKilometer(miles) {
  let km = miles * 1.60934;
  return km;
}

let marathon = mileToKilometer(26.2);
console.log(`Marthon in km: ${marathon}`);
