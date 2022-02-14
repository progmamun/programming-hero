const numbers = [3, 6, 4, 8, 9, 19, 15, 55];
const numberSliced = numbers.slice(4, 8); // 4 to start but 7 porjonto jaba
// console.log(numberSliced);

// splice to remove an element from an array
const numberSliced = numbers.splice(4, 3);
console.log(numberSliced);

// remove and new value add "splice"
const numberSpliced2 = numbers.splice(4, 3, 99, 111, 888, 77);
// const numberSpliced2 = numbers.splice(4, 0, 77);
console.log(numberSpliced2);
console.log(numbers);
