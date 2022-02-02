'use strict';

const greetings = 'Hello, how are you?';

function reverseString(text) {
  let reverse = ''; // null string lowest value
  for (const letter of text) {
    // console.log(letter);
    reverse = letter + reverse;
  }
  return reverse;
}
const reversed = reverseString(greetings);
console.log(reversed);
