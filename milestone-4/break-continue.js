let numbers = [55, 25, 23, 97, 101, 54, 65];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number > 90) {
    continue;
  }
  console.log(number);
}
