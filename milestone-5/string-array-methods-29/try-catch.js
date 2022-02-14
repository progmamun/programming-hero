let num = prompt('insert a number greater than 30 but less than 40');
try {
  if (isNaN(num)) throw 'Not a number (☉｡☉)!';
  else if (num > 40)
    throw 'Did you even read the instructions ಠ︵ಠ, less than 40';
  else if (num <= 30) throw 'Greater than 30 (ب_ب)';
} catch (e) {
  alert(e);
}

openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}
