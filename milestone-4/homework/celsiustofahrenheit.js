'use strict';

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

let far = celsiusToFahrenheit(3);
console.log(`Fahrenheit is: ${far}`);
