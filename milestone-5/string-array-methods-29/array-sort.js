const numbers = [6, 4, 5, 1, 3, 7, 99];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);
const friends = ['Lion', 'lion', 'tigers', 'bear', 'cat', 'dog'];
const sortedFriends = friends.sort();
console.log(sortedFriends);
const reversedFriends = friends.reverse();
console.log(reversedFriends);

const sortReverseFriends = friends.sort().reverse();
console.log(sortReverseFriends);

// number sorting fun
const bigNumbers = [66, 58, 81, 98, 9, 99, 999, 1, 3];
// const sortedBigNum = bigNumbers.sort().reverse();
// console.log(sortedBigNum);
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
  return a - b;
});
console.log(sortedBigNumbers);
