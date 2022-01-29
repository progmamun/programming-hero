function addTwoNumbers(number1, number2) {
  console.log(number1, number2);
  let total = number1 + number2;
  return total;
}

let firstNumber = 35;
let secondNumber = 47;
let result = addTwoNumbers(secondNumber, firstNumber);
console.log('result value: ', result);

function multiplyTwoNumbers(num1, num2) {
  let result = num1 * num2;
  return result;
}

let total = multiplyTwoNumbers(5, 100);
console.log('total after multiplication', total);

//task 1: biyog koro duita sonkha
function subtractionTwoNumbers(num1, num2) {
  let result = num1 - num2;
  return result;
}
let substraction = subtractionTwoNumbers(5, 100);
console.log('total after subtraction', substraction);

// task 2: vabfol ber koro
function divideTwoNumbers(num1, num2) {
  let result = num1 / num2;
  return result;
}
let divide = divideTwoNumbers(5, 100);
console.log('total after divide', divide);
