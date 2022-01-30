'use strict';

function celsiusToFahrenheit(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

let cels = celsiusToFahrenheit(44);
console.log(`Celsius is: ${cels}`);
