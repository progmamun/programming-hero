function maxNumber(array = []) {
  const max = Math.max(...array);
  return max;
}
const biggest = maxNumber();
console.log(biggest);
