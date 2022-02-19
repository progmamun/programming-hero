const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
// console.log(sum);

const fiveTimes = num => num * 5; // one parameter don't use bracket
const value = fiveTimes(17);
// console.log(value);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 13, 4);
// console.log(result);

const getName = () => 'Brandon Sam';
const name = getName();
// console.log(name);

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  const output = result * 5;
  return output;
};

const total = doMath(12, 5);
console.log(total);
