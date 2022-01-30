'use strict';

function farenheitToCelcius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

let cels = farenheitToCelcius(44);
console.log(`Celsius is: ${cels}`);
