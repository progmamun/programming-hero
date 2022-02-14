function addNumbers(num1, num2) {
  let result = 0;
  for (const num of arguments) {
    result = result + num;
  }

  // const result = num1 + num2;
  return result;
}

const sum = addNumbers(32, 23, 50, 340);
// console.log(sum);

// string
function getFullName() {
  let fullName = '';
  for (const part of arguments) {
    fullName = fullName + part + ' ';
  }
  return fullName;
}
const name = getFullName('Omuk', 'Songket', 'bin', 'Hanif');
console.log(name);
