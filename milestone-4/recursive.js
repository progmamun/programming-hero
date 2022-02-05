'use strict';

function consoleNumber(i) {
  if (i > 5) {
    return;
  }
  console.log(i);
  consoleNumber(i + 1);
}
consoleNumber(1);
